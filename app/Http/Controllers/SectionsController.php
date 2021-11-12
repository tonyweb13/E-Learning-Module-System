<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use DB;
use App\Section;
use App\AssignedProduct;
use App\SectionSubject;
use App\SectionSubjectScale;
use App\SectionStudent;
use App\SectionModularStudent;
use App\User;
use App\QuestionType;
use App\CreatedSubject;
use App\MySubject;
use App\Lesson;
use App\Topic;
use App\SubjectAssessment;
use App\Question;
use App\Answer;
use App\AssessmentQuestion;
use App\AssessmentStudent;
use App\AssessmentModularStudent;
use App\SubmittedAssessment;
use App\SectionTeacher;
use App\SectionAssessmentScale;
use Storage;
use App\SubmittedReportAssessment;
use App\Institute;
use App\AnswerDetail;
use App\GoogleDriveStorage;
use Excel;
use App\Exports\GradesExport;

class SectionsController extends Controller
{

    public function databaseEdit(){

        $datas=Institute::get();

        foreach($datas as $data){

            $val = strtolower(preg_replace('/\s+/', '', $data->name));
            Institute::where('id',$data->id)
                     ->update([
                                'wname'=> $val
                          ]);
        }

    }

    /*SECTION*/
    //display of classes/sections
    public function index(Request $request)
    {
        $keyword = $request->keyword;
        $currentuser=Auth::user();
        if($currentuser->userType->name == 'Student'){

            //student all uploaded/publish class that enroll by this student
            $results = Section::paginatedSearchStudent($keyword,$currentuser->id);

        }elseif(Auth::user()->userType->name == 'Teacher'){

            //teacher - those class that create by here self or shared by there co teacher
            $results = Section::paginatedSearch($keyword,$currentuser);

        }else if(Auth::user()->userType->name == 'Institute Admin'){

            //insti admin - those class that is uploded and create by the teacher of there institute
            $results = Section::paginatedSearchInstiAdmin($keyword,$currentuser);
        }

        //add parent

        //return $results;
        return view('sections.index', compact('results', 'keyword'));

    }

    //create new section
    public function create()
    {
        $data=null;
        return view('sections.create',compact('data'));
    }


    //store sections

    public function store(Request $request)
    {
        $has_exceptions = DB::transaction(function() use($request) {

            if(request('id')){//edit

                    //cover image
                    if (request('image') != null) {

                        $image = GoogleDriveStorage::storeDriveOne(Auth::user(),request('image'));

                        if($image == 'No Folder'){

                            $path = Storage::disk('public')->put('class/images', request('image'));
                            $image='/storage/'.$path;

                        }

                        Section::where('id',request('id'))
                             ->update([
                                          'image' => $image,
                                      ]);
                    }

                    Section::where('id',request('id'))
                         ->update([
                                    'name'=> request('name'),
                                    'start_date'=> request('start_date'),
                                    'grade_id'=> request('grade_id'),
                                    'end_date'=> request('end_date'),
                                    'updated_by'=>request('current_user'),
                                 ]);


            }else{//create

                $image=null;
                if (request('image') != null) {

                    $image = GoogleDriveStorage::storeDriveOne(Auth::user(),request('image'));

                    if($image == 'No Folder'){

                        $path = Storage::disk('public')->put('class/images', request('image'));
                        $image='/storage/'.$path;

                    }
                }

                Section::create([

                                'name'=> request('name'),
                                'start_date'=> request('start_date'),
                                'grade_id'=> request('grade_id'),
                                'end_date'=> request('end_date'),
                                'added_by'=>request('current_user'),
                                'image'  => $image,
                                'status'=>0,
                                'is_deleted'=>0
                            ]);
            }

        });

        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
    }

    //call external storage
    public function storeDrive1($user,$file){

        $dir = '/';
        $recursive = false; // Get subdirectories also?
        $folder = $user->name;

        //find the parent(user) folder or directory
        $contents = collect(Storage::disk('google')->listContents($dir, $recursive));

        $dir = $contents->where('type', '=', 'dir')
                        ->where('filename', '=', $folder)
                        ->first(); // There could be duplicate directory names!

        if ( ! $dir) {

            //Storage::disk('google')->makeDirectory($folder);

            $path3 = Storage::disk('public')->put($user->name, $file);
            $image='/storage/'.$path3;

            return $image;

        }else{

            $fileName = $file->getClientOriginalName();
            $destinationPath = $dir['path'].'/'.$fileName;

            Storage::disk('google')->put($destinationPath, file_get_contents($file->getRealPath()));

            $url = Storage::disk('google')->url($destinationPath);

            return $url;

        }

    }


    //Instruction of classes
    public function show($id)
    {
        $type='instruction';
        $section=Section::with('grade')->where('id',$id)->first();

        if(Auth::user()->userType->name == 'Teacher' || Auth::user()->userType->name == 'Institute Admin'){
            return view('sections.view',compact('section','type'));
        }else{
            return view('sections.view2',compact('section','type'));
        }

    }


    public function edit($id)
    {
        $data=Section::where('id',$id)->where('is_deleted',0)->first();
        return view('sections.create',compact('data'));
    }

    public function delete(Request $request){
        $has_exceptions = DB::transaction(function() use($request) {

            Section::where('id',request('id'))
                   ->update([
                              'is_deleted' => 1,
                            ]);

            SectionTeacher::where('section_id',request('id'))
                          ->update([
                                'is_deleted' => 1,
                            ]);

        });


        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
    }

    public function status(Request $request){
        $has_exceptions = DB::transaction(function() use($request) {

            Section::where('id',request('id'))
                   ->update([
                              'status' => request('status'),
                            ]);

            $section = Section::with([
                                        'user'
                                     ])
                              ->where('id',request('id'))
                              ->first();

            $instiA = User::where('is_deleted',0)
                              ->where('institute_id',$section->user->institute_id)
                              ->where('user_type_id',3)
                              ->get();

            if(request('status') == 1){//published

                for ($i=0; $i < count($instiA) ; $i++) {

                    $check = SectionTeacher::where('teacher_id',$instiA[$i]->id)
                                           ->where('section_id',$section->id)
                                           ->where('is_deleted',1)
                                           ->first();
                    if($check){

                        SectionTeacher::where('id',$check->id)
                                      ->update([
                                                    'is_deleted' => 0
                                               ]);

                    }else{

                        SectionTeacher::create([
                                                    'section_id'         =>$section->id,
                                                    'teacher_id'         =>$instiA[$i]->id,
                                                    'create_priv'        =>1,
                                                    'edit_priv'          =>1,
                                                    'delete_priv'        =>1,
                                                    'assign_prev'        =>1,
                                                    'added_by'           =>Auth::user()->id,
                                                    'is_deleted'         =>0,
                                                ]);
                    }

                }
            }else{
                for ($i=0; $i < count($instiA) ; $i++) {

                    SectionTeacher::where('teacher_id',$instiA[$i]->id)
                                  ->where('section_id',$section->id)
                                  ->where('is_deleted',0)
                                  ->update([
                                                'is_deleted' => 1
                                           ]);

                }
            }

        });


        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
    }

    public function shared(Request $request, $id){


        $keyword = $request->keyword;
        $results = SectionTeacher::whereHas('user',function($q) use($keyword){
                                        $q->where('name', 'LIKE', '%'.$keyword.'%')
                                          ->orWhere('email', 'LIKE', '%'.$keyword.'%');
                                     })
                                 ->where('section_id',$id)
                                 ->where('is_deleted',0)
                                 ->paginate(10);

        $results->appends([
            'keyword' => $keyword,
            'search_pagination' => 10
        ]);

        return view('sections.shared', compact('results', 'keyword','id'));

    }

    public function share(Request $request,$id){

        $keyword = $request->keyword;
        $currentuser=Auth::user();
        $section=Section::where('id',$id)->first();
        $shareusers=SectionTeacher::where('section_id',$id)->where('is_deleted',0)->get();
        $shareuserids=[];
        foreach($shareusers as $shareuser){
            $shareuserids[]=$shareuser->teacher_id;
        }
        $results=User::where(function($q) use($keyword) {
                            $q->where('name', 'LIKE', '%'.$keyword.'%')
                              ->orWhere('email', 'LIKE', '%'.$keyword.'%');
                        })
                     ->where('institute_id',$currentuser->institute_id)
                     ->whereHas('userType',function($q){
                           $q->whereIn('name',['Teacher','Institute Admin']);
                       })
                     ->whereNotIn('id',$shareuserids)
                     ->where('id','!=',$currentuser->id)
                     ->paginate(10);
        $results->appends([
            'keyword' => $keyword,
            'search_pagination' => 10
        ]);

        //return $results;
        return view('sections.share', compact('results', 'keyword','id','section'));
    }


    public function shareStore(Request $request){

        $has_exceptions = DB::transaction(function() use($request) {

            for ($i=0; $i < count(request('users')) ; $i++) {

                $check = SectionTeacher::where('teacher_id',request('users')[$i])
                                       ->where('section_id',request('section_id'))
                                       ->where('is_deleted',1)
                                       ->first();
                if($check){

                    SectionTeacher::where('id',$check->id)
                                      ->update([
                                                    'is_deleted' => 0
                                               ]);

                }else{

                    SectionTeacher::create([
                                            'section_id'         =>request('section_id'),
                                            'teacher_id'         =>request('users')[$i],
                                            'create_priv'        =>request('editpriv')[$i],
                                            'edit_priv'           =>request('editpriv')[$i],
                                            'delete_priv'         =>request('deletepriv')[$i],
                                            'assign_prev'         =>request('asignpriv')[$i],
                                            'added_by'           =>request('current_user'),
                                            'is_deleted'         =>0,
                                        ]);

                }
            }
        });

        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
    }

     public function shareRemove(Request $request){

        $has_exceptions = DB::transaction(function() use($request) {

            SectionTeacher::where('id',request('id'))
                          ->update([
                                  'is_deleted' => 1,
                                ]);

        });


        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
    }


    public function update(Request $request, $id)
    {
        //
    }


    public function destroy($id)
    {
        //
    }

    /*SUBJECTS*/

    public function subjectIndex(Request $request, $id){

        $type='subject';
        $keyword = $request->keyword;
        $currentuser=Auth::user();
        $section=Section::with([
                                    'grade',
                                    'sectionTeacher'=>function($q) use($currentuser){
                                        $q->where('teacher_id',$currentuser->id)
                                          ->where('is_deleted',0);
                                    }
                               ])
                        ->where('id',$id)
                        ->first();

        $results=SectionSubject::paginatedSearch($keyword,$id,$currentuser);

        // if($currentuser->userType->name == 'Student' || Auth::user()->userType->name == 'Institute Admin'){

        //     //display  all uploaded/publish subject that enroll by this student
        //     $targetStat=[1];

        // }elseif(Auth::user()->userType->name == 'Teacher'){

        //     //teacher - those subject that create by here self or shared by there co teacher
        //     $targetStat=[0,1];
        // }

        // $results=SectionSubject::paginatedSearch($keyword,$id,$targetStat);
        //add insti. admin
        //add parent

        return view('sections.subjects.index',compact('section','results','type','keyword'));
    }

    public function subjectCreate(Request $request, $id){

        $type='subject';
        $section=Section::with('grade')->where('id',$id)->first();
        $data=null;
        return view('sections.subjects.create',compact('section','type','data'));
    }

    public function subjectEdit($section_id,$id){

        $type='subject';
        $section=Section::with('grade')->where('id',$section_id)->first();
        $data=SectionSubject::where('id',$id)->where('is_deleted',0)->first();
        return view('sections.subjects.create',compact('section','type','data'));
    }

    public function subjectStore(Request $request){
        //for created subject only the scorm subject is d=for develop
        $has_exceptions = DB::transaction(function() use($request) {

            if(request('id')){//edit

                $subject=SectionSubject::where('id',request('id'))->first();

                if (request('image') != null) {

                    $image = GoogleDriveStorage::storeDriveOne(Auth::user(),request('image'));


                    if($image == 'No Folder'){

                        $path = Storage::disk('public')->put('subject/images', request('image'));
                        $image='/storage/'.$path;

                    }


                    SectionSubject::where('id',request('id'))
                                  ->update([
                                                'image'=>$image,
                                           ]);
                }

                SectionSubject::where('id',request('id'))
                              ->update([
                                            'updated_by'=>request('current_user'),
                                       ]);
                CreatedSubject::where('id',$subject->MySubject->subject_id)
                              ->update([
                                            'name'=>request('subject_name'),
                                            'updated_by'=>request('current_user'),
                                       ]);

                SectionSubjectScale::where('section_subject_id',request('id'))
                                   ->update([
                                                'is_deleted'=>1,
                                            ]);

                for ($i=0; $i < count(request('category')) ; $i++) {

                    if(request('scale_id')[$i]){
                        SectionSubjectScale::where('id',request('scale_id')[$i])
                                           ->update([
                                                        'name'=>request('category')[$i],
                                                        'weight'=>request('weight')[$i],
                                                        'is_deleted'=>0,
                                                    ]);
                    }else{
                        SectionSubjectScale::create([
                                                        'name'=>request('category')[$i],
                                                        'weight'=>request('weight')[$i],
                                                        'section_subject_id'=>request('id'),
                                                        'is_deleted'=>0,
                                                    ]);
                    }
                }

                //assessment scale
                for ($i=0; $i < count(request('scale_description')) ; $i++) {

                    if(request('assessment_scale_id')[$i]){

                        SectionAssessmentScale::where('id',request('assessment_scale_id')[$i])
                                              ->update([
                                                            'details'               => request('scale_description')[$i],
                                                            'scale_from'            => request('scale_from_id')[$i],
                                                            'scale_to'              => request('scale_to_id')[$i],
                                                            'remarks'               => request('remarks')[$i],
                                                            'icons'                 => request('icons')[$i],
                                                            'colors'                => request('colors')[$i],
                                                       ]);
                    }else{

                        SectionAssessmentScale::create([
                                                    'details'               => request('scale_description')[$i],
                                                    'scale_from'            => request('scale_from_id')[$i],
                                                    'scale_to'              => request('scale_to_id')[$i],
                                                    'remarks'               => request('remarks')[$i],
                                                    'icons'                 => request('icons')[$i],
                                                    'colors'                => request('colors')[$i],
                                                    'section_subject_id'    => request('id'),
                                                    'is_deleted'            => 0,
                                                ]);
                    }
                }



            }else{//create

                $image=null;
                if (request('image') != null) {

                    $image = GoogleDriveStorage::storeDriveOne(Auth::user(),request('image'));


                    if($image == 'No Folder'){

                        $path = Storage::disk('public')->put('class/images', request('image'));
                        $image='/storage/'.$path;

                    }
                }

                if(request('subject_id')){
                    $my_subject=request('subject_id');
                }else{

                    //create subject
                    $subject_id=CreatedSubject::create([
                                                                    'name' => request('subject_name'),
                                                                    'added_by'=> request('current_user'),
                                                                    'is_deleted'=>0,
                                                               ])->id;
                    //assign created subject
                    $my_subject=MySubject::create([
                                        'subject_id' => $subject_id,
                                        'assignee'=> request('current_user'),
                                        'assignor'=> request('current_user'),
                                        'is_deleted'=>0,
                                       ])->id;
                }

                $section_subject_id=SectionSubject::create([
                                                                'image'=>$image,
                                                                'section_id'=> request('section_id'),
                                                                'my_subject_id'=> $my_subject,
                                                                'added_by'=> request('current_user'),
                                                                'status'=>0,
                                                                'is_deleted'=>0,

                                                            ])->id;

                for ($i=0; $i < count(request('category')) ; $i++) {

                    SectionSubjectScale::create([
                                                    'name'=>request('category')[$i],
                                                    'weight'=>request('weight')[$i],
                                                    'section_subject_id'=>$section_subject_id,
                                                    'is_deleted'=>0,
                                                ]);
                }

                //assessment scale
                for ($i=0; $i < count(request('scale_description')) ; $i++) {

                    SectionAssessmentScale::create([
                                                    'details'               => request('scale_description')[$i],
                                                    'scale_from'            => request('scale_from_id')[$i],
                                                    'scale_to'              => request('scale_to_id')[$i],
                                                    'remarks'               => request('remarks')[$i],
                                                    'icons'                 => request('icons')[$i],
                                                    'colors'                => request('colors')[$i],
                                                    'section_subject_id'    => $section_subject_id,
                                                    'is_deleted'            => 0,
                                                ]);
                }
            }

        });

        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);

    }

    public function subjectDelete(Request $request){
        $has_exceptions = DB::transaction(function() use($request) {

            SectionSubject::where('id',request('id'))
                   ->update([
                              'is_deleted' => 1,
                            ]);

        });


        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
    }

    public function subjectStatus(Request $request){
        $has_exceptions = DB::transaction(function() use($request) {

            SectionSubject::where('id',request('id'))
                   ->update([
                              'status' => request('status'),
                            ]);

        });


        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
    }

    /*lessons "CREATE OWN SUBJECT AUTHORING TOOL"*/

    //lesson
    public function subjectLessons(Request $request, $id,$subject_id,$lesson_id){

        $type='subject';
        $keyword = $request->keyword;
        $currentuser=Auth::user();
        $section=Section::with([
                                    'grade',
                                    'sectionTeacher'=>function($q) use($currentuser){
                                                $q->where('teacher_id',$currentuser->id)
                                                  ->where('is_deleted',0);
                                            }
                                ])
                        ->where('id',$id)
                        ->first();
        $subject=SectionSubject::where('id',$subject_id)->where('is_deleted',0)->first();
        $created_subject=$subject->mySubject->createdSubject;
        $created_id = $created_subject->id;

        if($currentuser->userType->name == 'Student'){

            //display  all uploaded/publish lesson that enroll by this student
            $targetStat=[1];

        }
        // elseif(){

        //     //teacher - those lesson that created by here self (to add those class shared by other teacher/ inst admin )
        //   // $targetStat=[0,1];

        // }
        elseif(Auth::user()->userType->name == 'Institute Admin' || Auth::user()->userType->name == 'Teacher'){

            $targetStat=[0,1];

            // if(Auth::user()->id == $created_subject->added_by){//creat

            //     $targetStat=[0,1];

            // }else{
            //     $targetStat=[1];

            // }
        }


        $lessons=Lesson::with([
                                'topic'=>function($q) use($targetStat){
                                        $q->where('is_deleted',0)
                                          ->whereIn('status',$targetStat);
                                    }
                              ])
                       ->where('created_subject_id',$created_id)
                       ->whereIn('status',$targetStat)
                       ->where('is_deleted',0)
                       ->get();
        $lesson=null;
        $results=[];
        if(count($lessons) > 0){//with lessons
            if($lesson_id == 'null'){

                $lesson=Lesson::where('id',$lessons[0]->id)->first();

            }else{//lesson 1 default null lesson id
                $lesson=Lesson::where('id',$lesson_id)->first();
            }

            $results=Topic::where(function($q) use($keyword) {
                                    $q->where('name','LIKE', '%'.$keyword.'%');
                                })
                                ->where('is_deleted',0)
                                ->where('lesson_id',$lesson->id)
                                ->whereIn('status',$targetStat)
                                ->paginate(10);

            $results->appends([
                        'keyword' => $keyword,
                        'search_pagination' => 10
                    ]);
        }
        return view('sections.subjects.lessons.index',compact('section','subject','type','lessons','lesson','results','keyword'));
    }

    public function subjectLessonStore(Request $request){

        $has_exceptions = DB::transaction(function() use($request) {

            if(request('lesson_id')){//edit
                Lesson::where('id',request('lesson_id'))
                      ->update([
                                    'name'       => request('lesson'),
                                    'updated_by' => request('current_user'),
                               ]);

            }else{//create

                Lesson::create([
                                    'name'                  => request('lesson'),
                                    'created_subject_id'    =>request('subject_id'),
                                    'added_by'              => request('current_user'),
                                    'status'=>0,
                                    'is_deleted'            => 0,
                              ]);
            }

        });

        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);

    }

    public function getSubjectLesson(Request $request){
        $result=Lesson::where('id',request('lesson_id'))->first();
        return response()->json($result);
    }

    public function subjectLessonDelete(Request $request){
        $has_exceptions = DB::transaction(function() use($request) {

            Lesson::where('id',request('id'))
                   ->update([
                              'is_deleted' => 1,
                            ]);

        });


        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
    }

    public function subjectLessonStatus(Request $request){

        $has_exceptions = DB::transaction(function() use($request) {

            Lesson::where('id',request('id'))
                   ->update([
                              'status' => request('status'),
                            ]);

        });


        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
    }

    //topic
    public function lessonTopicStore(Request $request){

        $has_exceptions = DB::transaction(function() use($request) {

            if(request('topic_id')){//edit

                if(request('content_type') === 'doc'){//file

                    $path = GoogleDriveStorage::storeDriveOne(Auth::user(),request('topic'));

                    if($path == 'No Folder'){

                        $file=request('topic')->storeAs('topics',request('topic')->getClientOriginalName(),'public');
                        $path='/storage/'.$file;

                    }

                    $file_name = request('topic')->getClientOriginalName();
                    $extension = pathinfo($file_name, PATHINFO_EXTENSION);

                }else{

                    $path=request('topic');
                    $extension=null;
                }

                Topic::where('id',request('topic_id'))
                     ->update([
                                    'name'       => request('name'),
                                    'content'    => $path,
                                    'extension'  => $extension,
                                    'updated_by' => request('current_user'),
                              ]);
            }else{//create

                if(request('content_type') === 'doc'){//file

                    $path = GoogleDriveStorage::storeDriveOne(Auth::user(),request('topic'));

                    if($path == 'No Folder'){

                        $file=request('topic')->storeAs('topics',request('topic')->getClientOriginalName(),'public');
                        $path='/storage/'.$file;

                    }

                    $file_name = request('topic')->getClientOriginalName();
                    $extension = pathinfo($file_name, PATHINFO_EXTENSION);

                }else{

                    $path=request('topic');
                    $extension=null;

                }

                Topic::create([
                                    'name'                  => request('name'),
                                    'content_type'          => request('content_type'),
                                    'content'               => $path,
                                    'extension'             => $extension,
                                    'lesson_id'             => request('lesson_id'),
                                    'added_by'              => request('current_user'),
                                    'status'=>0,
                                    'is_deleted'            => 0,
                              ]);
            }

        });

        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);

    }

    public function lessonTopicView(Request $request){

        $results=Topic::where('id',request('topic_id'))->first();
        return response()->json($results);

    }

    public function lessonTopicDelete(Request $request){
        $has_exceptions = DB::transaction(function() use($request) {

            Topic::where('id',request('id'))
                   ->update([
                              'is_deleted' => 1,
                            ]);

        });


        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
    }

    public function lessonTopicStatus(Request $request){

        $has_exceptions = DB::transaction(function() use($request) {

            Topic::where('id',request('id'))
                   ->update([
                              'status' => request('status'),
                            ]);

        });


        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
    }

    public function getSubject(Request $request){

        $response=SectionSubject::where('section_id',request('id'))
                                ->where('created_by',request('user'))
                                ->get();

        return response()->json($response);
    }

    //Assessments

    public function subjectAssessmentIndex(Request $request, $section_id,$subject_id,$assessment_id){

        $type='subject';
        $keyword = $request->keyword;
        $currentuser=Auth::user();
        $question_types=QuestionType::where('is_deleted',0)->get();
        $section=Section::with([
                                    'grade',
                                    'sectionTeacher'=>function($q) use($currentuser){
                                                $q->where('teacher_id',$currentuser->id)
                                                  ->where('is_deleted',0);
                                            }
                                ])
                        ->where('id',$section_id)
                        ->first();

        $subject=SectionSubject::with(['sectionAssessmentScale'])->where('id',$subject_id)->first();
        $assessments=SubjectAssessment::where('section_subject_id',$subject_id)
                                          ->where('is_deleted',0)
                                          ->whereIn('status',[0,1])
                                          ->get();
        $assessment=null;
        $results=[];
        if(count($assessments) > 0){//with question
            if($assessment_id == 'null'){
                //add questions
                $assessment=SubjectAssessment::where('id',$assessments[0]->id)
                              ->first();

            }else{//question 1 default null question id
                $assessment=SubjectAssessment::where('id',$assessment_id)
                              ->first();
            }
            $results=AssessmentQuestion::whereHas('question',function($q) use($keyword){
                                            $q->where('tag','LIKE', '%'.$keyword.'%')
                                              ->orWhereHas('questionType',function($q) use($keyword){
                                                $q->where('name','LIKE', '%'.$keyword.'%');
                                              });
                                        })
                                ->where('is_deleted',0)
                                ->where('subject_assessment_id',$assessment->id)
                                ->paginate(10);

            $results->appends([
                        'keyword' => $keyword,
                        'search_pagination' => 10
                    ]);
        }
        return view('sections.subjects.assessments.index',compact('section','assessments','type','keyword','subject','assessment','question_types','results'));
    }

    public function subjectAssessmentIndexStudents(Request $request, $section_id,$subject_id,$assessment_id){

        $keyword = $request->keyword;
        $type='subject';
        $section=Section::with('grade')->where('id',$section_id)->first();
        $subject=SectionSubject::where('id',$subject_id)->first();
        $currentuser=Auth::user();
        $results=SubjectAssessment::with([
                                            'assessmentStudent'=>function($s) use($currentuser){
                                                $s->where('student_id',$currentuser->id)
                                                  ->where('is_deleted',0);
                                            }
                                         ])
                                    ->where('section_subject_id',$subject_id)
                                    ->where('is_deleted',0)
                                    ->where('status',1)
                                    ->whereHas('assessmentStudent',function($q) use($currentuser){
                                            $q->where('student_id',$currentuser->id)
                                              ->where('is_deleted',0);
                                    })
                                    ->where(function($q) use($keyword) {
                                        $q->where('name', 'LIKE', '%'.$keyword.'%')
                                          ->orWhere('topic', 'LIKE', '%'.$keyword.'%')
                                          ->orWhere('mode', 'LIKE', '%'.$keyword.'%')
                                          ->orWhereHas('sectionSubjectScale',function($q) use($keyword){
                                                $q->where('name','LIKE', '%'.$keyword.'%');
                                            });
                                    })
                                    ->paginate(10);

        $results->appends([
                        'keyword' => $keyword,
                        'search_pagination' => 10
                    ]);
       // return $results;
        return view('sections.subjects.assessments.index-student',compact('section','type','keyword','subject','results','assessment_id'));
    }

    public function subjectAssessmentCreate(Request $request, $section_id,$subject_id){

        $type='subject';
        $section=Section::with('grade')->where('id',$section_id)->first();
        $subject=SectionSubject::with([
                                        'mySubject',
                                      ])
                               ->where('id',$subject_id)
                               ->first();
        return view('sections.subjects.assessments.create',compact('section','type','data','subject'));
    }

    public function subjectAssessmentStore(Request $request){

        $has_exceptions = DB::transaction(function() use($request) {

            if(request('id')){//edit

                SubjectAssessment::where('id',request('id'))
                                 ->update([
                                                'name'                      => request('title'),
                                                'topic'                     =>request('topic'),
                                                'mode'                      =>request('mode'),
                                                'instruction'               =>request('htmleditor_value'),
                                                'section_subject_scale_id'  =>request('scale_id'),
                                                'start_date'                =>request('start_date'),
                                                'end_date'                  =>request('end_date'),
                                                'updated_by' => request('current_user'),
                                          ]);
            }else{//create

                $id=SubjectAssessment::create([
                                            'name'                      => request('title'),
                                            'topic'                     =>request('topic'),
                                            'mode'                      =>request('mode'),
                                            'instruction'               =>request('htmleditor_value'),
                                            'section_subject_id'        =>request('subject_id'),
                                            'section_subject_scale_id'  =>request('scale_id'),
                                            'start_date'                =>request('start_date'),
                                            'end_date'                  =>request('end_date'),
                                            'added_by'                  => request('current_user'),
                                            'status'                    => 0,
                                            'is_deleted'                => 0,
                                        ])->id;
            }

        });

        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);

    }

    public function getGradeScale(Request $request){

        $results=SectionSubjectScale::where('section_subject_id',request('subject_id'))
                                    ->where('is_deleted',0)
                                    ->get();

        return response()->json($results);
    }

    public function getAssessmentScale(Request $request){

        $results=SectionAssessmentScale::where('section_subject_id',request('subject_id'))
                                      ->where('is_deleted',0)
                                      ->orderBy('id')
                                      ->get();

        return response()->json($results);
    }

    public function subjectGetAssessment(Request $request){

        $results=SubjectAssessment::where('id',request('assessment_id'))
                                  ->where('is_deleted',0)
                                  ->first();

        return response()->json($results);
    }

    public function subjectGetAssessment2($section_id,$subject_id,$assessment_id){

        $type='subject';
        $section=Section::with('grade')->where('id',$section_id)->first();
        $subject=SectionSubject::where('id',$subject_id)->first();
        $result=SubjectAssessment::with([
                                            'assessmentQuestion'=>function($q){
                                                $q->where('is_deleted',0);
                                            },
                                            'assessmentQuestion.question'=>function($q){
                                                $q->where('is_deleted',0);
                                            },
                                            'assessmentQuestion.question.questionType',
                                            'assessmentQuestion.question.answer'
                                        ])
                                    ->whereHas('assessmentQuestion',function($q){
                                         $q->where('is_deleted',0)
                                           ->whereHas('question',function($q){
                                                 $q->where('is_deleted',0);
                                            });
                                    })
                                    // ->whereHas('assessmentQuestion.question',function($q){
                                    //      $q->where('is_deleted',0);
                                    // })
                                  ->where('id',$assessment_id)
                                  ->where('is_deleted',0)
                                  ->first();
      //  return $result;
        return view('sections.subjects.assessments.view-assessment',compact('section','subject','result','type'));
    }

    public function subjectAssessmentDelete(Request $request){

        $has_exceptions = DB::transaction(function() use($request) {

            SubjectAssessment::where('id',request('id'))
                             ->update([
                                'is_deleted' => 1,
                            ]);

        });


        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
    }

    public function subjectAssessmentStatus(Request $request){

        $has_exceptions = DB::transaction(function() use($request) {

            SubjectAssessment::where('id',request('id'))
                             ->update([
                                        'status' => request('status'),
                                     ]);

        });


        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
    }

    public function subjectAnswerAssessment($section_id,$subject_id,$assessment_id){

        $type='subject';
        $section=Section::with('grade')->where('id',$section_id)->first();
        $subject=SectionSubject::where('id',$subject_id)->first();
        $currentuser=Auth::user();
        $result=SubjectAssessment::with([
                                            'assessmentQuestion'=>function($q){
                                                $q->where('is_deleted',0);
                                            },
                                            'assessmentQuestion.question'=>function($q){
                                                $q->where('is_deleted',0);
                                            },
                                            'assessmentQuestion.question.questionType',
                                            'assessmentQuestion.question.answer',
                                            'assessmentStudent'=>function($s) use($currentuser){
                                                $s->where('student_id',$currentuser->id)
                                                  ->where('is_deleted',0);
                                            }
                                        ])
                                    ->whereHas('assessmentQuestion',function($q){
                                         $q->where('is_deleted',0)
                                           ->whereHas('question',function($q){
                                                 $q->where('is_deleted',0);
                                            });
                                    })
                                    // ->whereHas('assessmentQuestion.question',function($q){
                                    //      $q->where('is_deleted',0);
                                    // })
                                  ->where('id',$assessment_id)
                                  ->where('is_deleted',0)
                                  ->first();
      //  return $result;
        return view('sections.subjects.assessments.view-assessment-student',compact('section','subject','result','type'));
    }

    public function subjectAnswerAssessment2($section_id,$subject_id,$assessment_id){

        $type='subject';
        $section=Section::with('grade')->where('id',$section_id)->first();
        $subject=SectionSubject::where('id',$subject_id)->first();
        $currentuser=Auth::user();
        $result=SubjectAssessment::with([
                                            'assessmentQuestion'=>function($q){
                                                $q->where('is_deleted',0);
                                            },
                                            'assessmentQuestion.question'=>function($q){
                                                $q->where('is_deleted',0);
                                            },
                                            'assessmentQuestion.question.questionType',
                                            'assessmentQuestion.question.answer',
                                            'assessmentStudent'=>function($s) use($currentuser){
                                                $s->where('student_id',$currentuser->id)
                                                  ->where('is_deleted',0);
                                            }
                                        ])
                                    ->whereHas('assessmentQuestion',function($q){
                                         $q->where('is_deleted',0)
                                           ->whereHas('question',function($q){
                                                 $q->where('is_deleted',0);
                                            });
                                    })
                                    // ->whereHas('assessmentQuestion.question',function($q){
                                    //      $q->where('is_deleted',0);
                                    // })
                                  ->where('id',$assessment_id)
                                  ->where('is_deleted',0)
                                  ->first();
      //  return $result;
        return view('sections.subjects.assessments.view-assessment-student2',compact('section','subject','result','type'));
    }

    // QUESTIONS
    public function getQuestionType(){

        $results=QuestionType::where('is_deleted',0)->get();
        return response()->json($results);
    }

    public function assessmentQuestionStore(Request $request){
        $has_exceptions = DB::transaction(function() use($request) {

            if(request('question_id')){

                Question::where('id',request('question_id'))
                        ->update([
                                    'question_type_id'  => request('question_type_id'),
                                    'tag'               => request('tag'),
                                    'point'             => request('point'),
                                    'question'          => request('question'),
                                    'updated_by'        => request('current_user'),
                                 ]);
                if(request('answer')){

                    for ($i=0; $i < count(request('answer')) ; $i++) {

                        $ext = pathinfo(request('answer')[$i], PATHINFO_EXTENSION);
                        if($ext == 'png' || $ext == 'jpg' || $ext=='jpeg'){

                            $path1 = Storage::disk('public')->put('mutiplechoice', request('answer')[$i]);
                            $image1='/storage/'.$path1;

                            $ch = Answer::where('id',request('answer_id')[$i])->first();
                            if($ch){

                                Answer::where('id',request('answer_id')[$i])
                                      ->update([
                                                'answer'        =>$image1,
                                                'partner'       =>request('partner')[$i] ?? null,
                                                'is_correct'    =>request('is_correct')[$i] ?? 0,
                                                'is_deleted'    =>0,
                                            ]);

                            }else{

                                Answer::create([
                                                    'question_id'   =>request('question_id'),
                                                    'answer'        =>$image1,
                                                    'partner'       =>request('partner')[$i] ?? null,
                                                    'is_correct'    =>request('is_correct')[$i] ?? 0,
                                                    'is_deleted'    =>0,
                                                ]);
                            }
                        }else{
                            $ch = Answer::where('id',request('answer_id')[$i])->first();

                            if($ch){
                                Answer::where('id',request('answer_id')[$i])
                                      ->update([
                                                    'answer'        =>request('answer')[$i],
                                                    'partner'       =>request('partner')[$i] ?? null,
                                                    'is_correct'    =>request('is_correct')[$i] ?? 0,
                                                    'is_deleted'    =>0,
                                                ]);

                            }else{

                                Answer::create([
                                                    'question_id'   =>request('question_id'),
                                                    'answer'        =>request('answer')[$i],
                                                    'partner'       =>request('partner')[$i] ?? null,
                                                    'is_correct'    =>request('is_correct')[$i] ?? 0,
                                                    'is_deleted'    =>0,
                                                ]);
                            }
                        }
                    }
                }

            }else{//create

                $id=Question::create([
                                        'question_type_id'  => request('question_type_id'),
                                        'tag'               => request('tag'),
                                        'point'             => request('point'),
                                        'question'          => request('question'),
                                        'added_by'          => request('current_user'),
                                        'is_deleted'        => 0,
                                    ])->id;

                if(request('answer')){

                    for ($i=0; $i < count(request('answer')) ; $i++) {

                        $ext = pathinfo(request('answer')[$i], PATHINFO_EXTENSION);
                        if($ext == 'png' || $ext == 'jpg' || $ext=='jpeg'){

                            $path1 = Storage::disk('public')->put('mutiplechoice', request('answer')[$i]);
                            $image1='/storage/'.$path1;

                            Answer::create([
                                            'question_id'   =>$id,
                                            'answer'        =>$image1,
                                            'partner'       =>request('partner')[$i] ?? null,
                                            'is_correct'    =>request('is_correct')[$i] ?? 0,
                                            'is_deleted'    =>0,
                                        ]);
                        }else{

                            Answer::create([
                                            'question_id'   =>$id,
                                            'answer'        =>request('answer')[$i],
                                            'partner'       =>request('partner')[$i] ?? null,
                                            'is_correct'    =>request('is_correct')[$i] ?? 0,
                                            'is_deleted'    =>0,
                                        ]);
                        }


                    }
                }

                AssessmentQuestion::create([
                                            'subject_assessment_id'     =>request('assessment_id'),
                                            'question_id'               =>$id,
                                            'added_by'                  => request('current_user'),
                                            'is_deleted'                => 0,
                                       ]);
            }

        });

        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
    }

    //get question from question bank
    public function getQuestionBank(Request $request,$section_id,$subject_id,$assessmentid,$userid){

        $keyword = $request->keyword;
        $type='subject';
        $section=Section::with('grade')->where('id',$section_id)->first();
        $subject=SectionSubject::where('id',$subject_id)->first();
        $assessments=AssessmentQuestion::where('subject_assessment_id',$assessmentid)->get();
        $qids=[];

        foreach($assessments as $assessment){
            $qids[]=$assessment->question_id;
        }

        $results=Question::with([
                                    'questionType'
                                ])
                         ->where(function($q) use($keyword) {
                            $q->where('tag', 'LIKE', '%'.$keyword.'%')
                              ->orWhere('point','LIKE', '%'.$keyword.'%')
                              ->orWhereHas('questionType',function($q) use($keyword){
                                    $q->where('name','LIKE', '%'.$keyword.'%');
                                });
                          })
                         ->where('added_by',$userid)
                         ->whereNotIn('id',$qids)
                         ->paginate(10);

        $results->appends([
            'keyword' => $keyword,
            'search_pagination' => 2
        ]);

        return view('sections.subjects.assessments.question-bank',compact('keyword','section','subject','results','type','assessmentid'));
    }

    public function assessmentQuestionBankStore(Request $request){

        $has_exceptions = DB::transaction(function() use($request) {

            for ($i=0; $i < count(request('questions')) ; $i++) {

                AssessmentQuestion::create([
                                            'subject_assessment_id'     =>request('assessment_id'),
                                            'question_id'               =>request('questions')[$i],
                                            'added_by'                  =>request('current_user'),
                                            'is_deleted'                => 0,
                                       ]);
            }
        });

        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);

    }

    public function deleteQuestion(Request $request){

        $has_exceptions = DB::transaction(function() use($request) {

            AssessmentQuestion::where('id',request('id'))
                              ->update([
                                            'is_deleted' => 1,
                                        ]);

        });


        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
    }

    public function getQuestion(Request $request){

        $result=Question::with([
                                    'answer',
                                    'questionType'
                               ])
                        ->where('id',request('id'))
                        ->first();

        return response()->json($result);
    }

    public function studentAssessment(Request $request,$section_id,$subject_id,$assessmentid){

        $keyword = $request->keyword;
        $type='subject';
        $section=Section::with('grade')->where('id',$section_id)->first();
        $subject=SectionSubject::where('id',$subject_id)->first();
        $assessment=SubjectAssessment::where('id',$assessmentid)->first();

        $results=AssessmentStudent::where('subject_assessment_id',$assessmentid)
                                  ->whereHas('user',function($q) use($keyword){
                                      $q->where('name','LIKE', '%'.$keyword.'%')
                                        ->orWhere('email','LIKE', '%'.$keyword.'%');
                                   })
                                  ->where('is_deleted',0)
                                  ->paginate(10);

        $results->appends([
            'keyword' => $keyword,
            'search_pagination' => 2
        ]);

        return view('sections.subjects.assessments.user-assessment',compact('keyword','section','subject','results','type','assessmentid','assessment'));
    }

    public function studentModularAssessment(Request $request,$section_id,$subject_id,$assessmentid){

        $keyword = $request->keyword;
        $type='subject';
        $section=Section::with('grade')->where('id',$section_id)->first();
        $subject=SectionSubject::where('id',$subject_id)->first();
        $assessment=SubjectAssessment::where('id',$assessmentid)->first();

        $results=AssessmentModularStudent::where('subject_assessment_id',$assessmentid)
                                         ->where('is_deleted',0)
                                         ->whereHas('user',function($q) use($keyword){
                                            $q->where('name','LIKE', '%'.$keyword.'%')
                                            ->orWhere('email','LIKE', '%'.$keyword.'%');
                                         })
                                         ->paginate(10);

        $results->appends([
            'keyword' => $keyword,
            'search_pagination' => 2
        ]);

        return view('sections.subjects.assessments.user-modular-assessment',compact('keyword','section','subject','results','type','assessmentid','assessment'));
    }

    public function assignAssessment(Request $request,$section_id,$subject_id,$assessmentid){

        $keyword = $request->keyword;
        $type='subject';
        $section=Section::with('grade')->where('id',$section_id)->first();
        $subject=SectionSubject::where('id',$subject_id)->first();
        $assessment=SubjectAssessment::where('id',$assessmentid)->first();
        $assigns=AssessmentStudent::where('subject_assessment_id',$assessmentid)->where('is_deleted',0)->get();
        $assignid=[];
        foreach($assigns as $assign){
            $assignid[]=$assign->student_id;
        }
        // edit
        $results=SectionStudent::with([
                                        'user'
                                      ])
                               ->where('section_id',$section_id)
                               ->whereNotIn('student_id',$assignid)
                               ->whereHas('user',function($q) use($keyword){
                                  $q->where('name','LIKE', '%'.$keyword.'%')
                                    ->orWhere('email','LIKE', '%'.$keyword.'%');
                               })
                              ->paginate(10);
      //  return $results;
        $results->appends([
            'keyword' => $keyword,
            'search_pagination' => 2
        ]);

        return view('sections.subjects.assessments.assign-assessment',compact('keyword','section','subject','results','type','assessmentid','assessment'));
    }

    public function assignModularAssessment(Request $request,$section_id,$subject_id,$assessmentid){

        $keyword = $request->keyword;
        $type='subject';
        $section=Section::with('grade')->where('id',$section_id)->first();
        $subject=SectionSubject::where('id',$subject_id)->first();
        $assessment=SubjectAssessment::where('id',$assessmentid)->first();
        $assigns=AssessmentModularStudent::where('subject_assessment_id',$assessmentid)->where('is_deleted',0)->get();
        $assignid=[];
        foreach($assigns as $assign){
            $assignid[]=$assign->student_id;
        }
        // edit
        $results=SectionModularStudent::with([
                                        'user'
                                      ])
                               ->where('section_id',$section_id)
                               ->whereNotIn('student_id',$assignid)
                               ->whereHas('user',function($q) use($keyword){
                                  $q->where('name','LIKE', '%'.$keyword.'%')
                                    ->orWhere('email','LIKE', '%'.$keyword.'%');
                               })
                              ->paginate(10);
      //  return $results;
        $results->appends([
            'keyword' => $keyword,
            'search_pagination' => 2
        ]);

        return view('sections.subjects.assessments.assign-modular-assessment',compact('keyword','section','subject','results','type','assessmentid','assessment'));
    }

    public function assignAssessmentStore(Request $request){

        $has_exceptions = DB::transaction(function() use($request) {

            for ($i=0; $i < count(request('students')) ; $i++) {

                AssessmentStudent::create([
                                            'subject_assessment_id'     => request('assessment_id'),
                                            'student_id'                => request('students')[$i],
                                            'added_by'                  => request('current_user'),
                                            'status'                    => 'To be completed',
                                            'is_deleted'                => 0,
                                       ]);
            }
        });

        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);

    }

    public function assignAssessmentModularStore(Request $request){

        $has_exceptions = DB::transaction(function() use($request) {

            for ($i=0; $i < count(request('students')) ; $i++) {

                $check = AssessmentModularStudent::where('subject_assessment_id',request('assessment_id'))
                                                 ->where('student_id',request('students')[$i])
                                                 ->first();
                if($check){

                    AssessmentModularStudent::where('subject_assessment_id',request('assessment_id'))
                                            ->where('student_id',request('students')[$i])
                                            ->update([
                                                        'is_deleted' => 0,
                                                     ]);

                }else{//create

                    AssessmentModularStudent::create([
                                                        'subject_assessment_id'     => request('assessment_id'),
                                                        'student_id'                => request('students')[$i],
                                                        'added_by'                  => request('current_user'),
                                                        'status'                    => 'To be completed',
                                                        'is_deleted'                => 0,
                                                    ]);

                }
            }
        });

        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);

    }

    public function unassignAssessmentStore(Request $request){

        $has_exceptions = DB::transaction(function() use($request) {

            for ($i=0; $i < count(request('students')) ; $i++) {

                $sid=AssessmentStudent::where('subject_assessment_id',request('assessment_id'))
                                      ->where('student_id',request('students')[$i])
                                      ->where('is_deleted',0)
                                      ->first();

                AssessmentStudent::where('subject_assessment_id',request('assessment_id'))
                                 ->where('student_id',request('students')[$i])
                                 ->update([
                                             'is_deleted'  => 1
                                          ]);

                SubmittedAssessment::where('assessment_student_id',$sid->id)
                                   ->where('subject_assessment_id',request('assessment_id'))
                                   ->update([
                                                'is_deleted'  => 1
                                            ]);

                SubmittedReportAssessment::where('assessment_student_id',$sid->id)
                                        ->where('subject_assessment_id',request('assessment_id'))
                                        ->update([
                                                    'is_deleted'  => 1
                                                ]);
            }
        });

        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);

    }

    public function unassignAssessmentModularStore(Request $request){

        $has_exceptions = DB::transaction(function() use($request) {

            for ($i=0; $i < count(request('students')) ; $i++) {

                AssessmentModularStudent::where('subject_assessment_id',request('assessment_id'))
                                        ->where('student_id',request('students')[$i])
                                        ->update([
                                                    'is_deleted'  => 1
                                                ]);


            }
        });

        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);

    }

    //submit assessment by student
    public function subjectAssessmentSubmit(Request $request){

        $has_exceptions = DB::transaction(function() use($request) {


            $assessmentStudent=AssessmentStudent::where('student_id',request('current_user'))
                                                ->where('subject_assessment_id',request('view_assessment_id'))
                                                ->where('is_deleted',0)
                                                ->first();

            for ($i=0; $i < count(request('question_id')) ; $i++) {

                $correctbolen=0;
                $ans1=null;
                $ans2=null;
                $apoint=0;

                $ques = Question::where('id',request('question_id')[$i])->first();

                $correct=Answer::whereHas('question.questionType',function($q){
	                                  $q->where('name','!=','Essay')
	                                  // ->orWhere('name','!=','Matching Type');
	                                  ;
	                               })
                                ->where('question_id',request('question_id')[$i])
                                ->where('is_correct',1)
                                ->first();

                if($correct){
                    //strip the correct answer
                    $ans1 = preg_replace('/\s*/', '', $correct->answer);
                    $ans1 = strtolower($ans1);

                    //strip the stud answer
                    $ans2 = preg_replace('/\s*/', '', request('answer')[$i]);
                    $ans2 = strtolower($ans2);

                    if($ans1 == $ans2){
                        $correctbolen=1;
                        $apoint=request('qpoint')[$i];
                    }
                }
                if($ques->questionType->name == 'Matching Type'){

                    $sub1 = SubmittedAssessment::create([
                                                    'subject_assessment_id'     => request('view_assessment_id'),
                                                    'assessment_student_id'     => $assessmentStudent->id,
                                                    'question_id'               => request('question_id')[$i],
                                                    'answer'                    => 'is_enum',
                                                    'point'                     => request('qpoint')[$i],
                                                    'apoint'                    => 0,
                                                    'added_by'                  => request('current_user'),
                                                    'is_correct'                => 0,
                                                    'is_deleted'                => 0,
                                                ])->id;

                    $sub2 = SubmittedReportAssessment::create([
                                                        'subject_assessment_id'     => request('view_assessment_id'),
                                                        'assessment_student_id'     => $assessmentStudent->id,
                                                        'question_id'               => request('question_id')[$i],
                                                        'answer'                    => 'is_enum',
                                                        'point'                     => request('qpoint')[$i],
                                                        'apoint'                    => 0,
                                                        'added_by'                  => request('current_user'),
                                                        'is_correct'                => 0,
                                                        'is_deleted'                => 0,
                                                    ])->id;
                    $enumtotal = 0;
                    for ($d=0; $d < count(request('matchinganswerid')) ; $d++) {

                        $emumchecker = Answer::where('id',request('matchinganswerid')[$d])->first();

                        if($emumchecker->partner == request('matchinganswer')[$d]){
                            $ec = 1;
                            $enumtotal++;
                        }else{
                            $ec = 0;
                        }

                        AnswerDetail::create([
                                                    'answer'                            => request('matchinganswer')[$d],
                                                    'is_correct'                        => $ec,
                                                    'submitted_assessment_id'           => $sub1,
                                                    'submitted_report_assessment_id'    => $sub2,
                                                    'answer_id'                         => $emumchecker->id,
                                                    'is_deleted'                        => 0,
                                             ]);
                    }

                    SubmittedAssessment::where('id',$sub1)
                                       ->update([
                                                    'apoint' => $enumtotal
                                                ]);

                    SubmittedReportAssessment::where('id',$sub2)
                                       ->update([
                                                    'apoint' => $enumtotal
                                                ]);

                }else{
                    // add matching type

                    SubmittedAssessment::create([
                                                    'subject_assessment_id'     => request('view_assessment_id'),
                                                    'assessment_student_id'     => $assessmentStudent->id,
                                                    'question_id'               => request('question_id')[$i],
                                                    'answer'                    => request('answer')[$i],
                                                    'point'                     => request('qpoint')[$i],
                                                    'apoint'                    => $apoint,
                                                    'added_by'                  => request('current_user'),
                                                    'is_correct'                => $correctbolen,
                                                    'is_deleted'                => 0,
                                                    'ans1'                      => $ans1,
                                                    'ans2'                      => $ans2,
                                                ]);

                    //for reposrt
                    SubmittedReportAssessment::create([
                                                        'subject_assessment_id'     => request('view_assessment_id'),
                                                        'assessment_student_id'     => $assessmentStudent->id,
                                                        'question_id'               => request('question_id')[$i],
                                                        'answer'                    => request('answer')[$i],
                                                        'point'                     => request('qpoint')[$i],
                                                        'apoint'                    => $apoint,
                                                        'added_by'                  => request('current_user'),
                                                        'is_correct'                => $correctbolen,
                                                        'is_deleted'                => 0,
                                                        'ans1'                      => $ans1,
                                                        'ans2'                      => $ans2,
                                                    ]);
                }
            }

            AssessmentStudent::where('student_id',request('current_user'))
                             ->where('subject_assessment_id',request('view_assessment_id'))
                             ->update([
                                        'status' => 'Submitted',
                                      ]);
        });

       // Return the transaction response.
       $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
       return response()->json($response);
    }

    public function subjectGetSubmittedAssessment(Request $request,$section_id,$subject_id,$assessment_id){

        $keyword = $request->keyword;
        $type='subject';
        $section=Section::with('grade')->where('id',$section_id)->first();
        $subject=SectionSubject::where('id',$subject_id)->first();
        $assessment=SubjectAssessment::where('id',$assessment_id)->first();

        $results=AssessmentStudent::where('subject_assessment_id',$assessment_id)
                                  ->where('status','!=','To be completed')
                                  ->where(function($q) use($keyword) {
                                        $q->where('status', 'LIKE', '%'.$keyword.'%')
                                          ->orWhereHas('user',function($q) use($keyword){
                                               $q->where('name', 'LIKE', '%'.$keyword.'%')
                                                 ->orWhere('email', 'LIKE', '%'.$keyword.'%');
                                            });
                                    })
                                  ->where('is_deleted',0)
                                  ->paginate(10);
        //return $results;
        $results->appends([
                        'keyword' => $keyword,
                        'search_pagination' => 10
                    ]);

        return view('sections.subjects.assessments.submitted-assessment',compact('section','subject','assessment','results','type','keyword'));
    }

    public function subjectViewSubmittedAssessment(Request $request,$section_id,$subject_id,$user_id,$assessment_id){

        $keyword = $request->keyword;
        $type='subject';
        $section=Section::with('grade')->where('id',$section_id)->first();
        $subject=SectionSubject::where('id',$subject_id)->first();
        $assessment=SubjectAssessment::where('id',$assessment_id)->first();
        $assessment_student= AssessmentStudent::where('subject_assessment_id',$assessment_id)
                                             ->where('student_id',$user_id)
                                             ->first();
        $result=SubmittedAssessment::with([
                                            'question'
                                          ])
                                   ->where('subject_assessment_id',$assessment_id)
                                   ->where('added_by',$user_id)
                                   ->where('is_deleted',0)
                                   ->orderby('id')
                                   ->get();
        $total=0;
        $over=0;
        foreach($result as $d){
            $total=$total + $d->apoint;
            $over=$over + $d->point;
        }
        //return  $result;
        return view('sections.subjects.assessments.view-submitted-assessment',compact('section','subject','assessment','result','user_id','type','keyword','total','over','assessment_student'));
    }

    public function subjectViewSubmittedAssessment2(Request $request,$section_id,$subject_id,$user_id,$assessment_id){

        //$assessment_id = 34069;
        $keyword = $request->keyword;
        $type='subject';
        $section=Section::with('grade')->where('id',$section_id)->first();
        $subject=SectionSubject::where('id',$subject_id)->first();
        $assessment=SubjectAssessment::where('id',$assessment_id)->first();
        $assessment_student= AssessmentStudent::where('subject_assessment_id',$assessment_id)
                                             ->where('student_id',$user_id)
                                             ->first();
        $result=SubmittedAssessment::with([
                                            'question'
                                          ])
                                   ->where('subject_assessment_id',$assessment_id)
                                   ->where('added_by',$user_id)
                                   ->where('is_deleted',1)
                                   ->orderby('id')
                                   ->get();
        $total=0;
        $over=0;
        foreach($result as $d){
            $total=$total + $d->apoint;
            $over=$over + $d->point;
        }
        //return  $result;
        return view('sections.subjects.assessments.view-submitted-assessment',compact('section','subject','assessment','result','user_id','type','keyword','total','over','assessment_student'));
    }

    public function subjectAssessmentGrade(Request $request){

        $has_exceptions = DB::transaction(function() use($request) {

            $assessmentstudent = AssessmentStudent::where('student_id',request('student_id'))
                                                  ->where('subject_assessment_id',request('view_assessment_id'))
                                                  ->where('is_deleted',0)
                                                  ->first();

            for ($i=0; $i < count(request('apoint')) ; $i++) {

                SubmittedAssessment::where('id',request('submitted_id')[$i])
                                   ->update([
                                                'apoint' => request('apoint')[$i],
                                            ]);

                SubmittedReportAssessment::where('subject_assessment_id',request('view_assessment_id'))
                                          ->where('assessment_student_id',$assessmentstudent->id)
                                          ->where('question_id',request('question_id')[$i])
                                          ->where('is_deleted',0)
                                          ->update([
                                                    'apoint' => request('apoint')[$i],
                                                ]);

            }

            AssessmentStudent::where('student_id',request('student_id'))
                             ->where('subject_assessment_id',request('view_assessment_id'))
                             ->update([
                                        'status' => 'Graded',
                                      ]);
        });

       // Return the transaction response.
       $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
       return response()->json($response);
    }

    /*STUDENTS*/

    public function studentIndex(Request $request,$id){

        $type='student';
        $section=Section::with('grade')->where('id',$id)->first();
        $added_by=User::where('id',$section->added_by)->first();
        $institute_id=$added_by->institute_id;
        $keyword = $request->keyword;
        $user_type='Student';
        $enrollStudents=[];

        $students=SectionStudent::where('section_id',$section->id)
                                ->where('is_deleted',0)
                                ->get();
        foreach ($students as $key => $student) {
            $enrollStudents[]=$student->student_id;
        }
        //get all enroll student in the class or section
        $results=User::paginateSearchUserOfInstituteEnroll($keyword,$institute_id,$user_type,$enrollStudents);
        return view('sections.students.index',compact('section','results','type','keyword'));
    }

    public function studentModularIndex(Request $request,$id){

        $type='student2';
        $section=Section::with('grade')->where('id',$id)->first();
        $added_by=User::where('id',$section->added_by)->first();
        $institute_id=$added_by->institute_id;
        $keyword = $request->keyword;
        $user_type='Student';
        $enrollStudents=[];

        $students=SectionModularStudent::where('section_id',$section->id)
                                       ->where('is_deleted',0)
                                       ->get();
        foreach ($students as $key => $student) {
            $enrollStudents[]=$student->student_id;
        }
        //get all enroll student in the class or section
        $results=User::paginateSearchUserOfInstituteEnroll($keyword,$institute_id,$user_type,$enrollStudents);
        return view('sections.students.index-modular',compact('section','results','type','keyword'));
    }

    public function studentCreate(Request $request, $id){

        $type='student';
        $section=Section::with('grade')->where('id',$id)->first();
        $added_by=User::where('id',$section->added_by)->first();
        $institute_id=$added_by->institute_id;
        $user_type='Student';
        $keyword = $request->keyword;
        $enrollStudents=[];
        $students=SectionStudent::where('section_id',$section->id)
                                ->where('is_deleted',0)
                                ->get();
        foreach ($students as $key => $student) {
            $enrollStudents[]=$student->student_id;
        }

        //get all stident of the institute
        $results=User::paginateSearchUserOfInstitute($keyword,$institute_id,$user_type,$enrollStudents,$section->grade_id);
        return view('sections.students.create',compact('section','type','results','keyword'));
    }

    public function studentModularCreate(Request $request, $id){

        $type='student2';
        $section=Section::with('grade')->where('id',$id)->first();
        $added_by=User::where('id',$section->added_by)->first();
        $institute_id=$added_by->institute_id;
        $user_type='Student';
        $keyword = $request->keyword;
        $enrollStudents=[];
        $students=SectionModularStudent::where('section_id',$section->id)
                                       ->where('is_deleted',0)
                                       ->get();
        foreach ($students as $key => $student) {
            $enrollStudents[]=$student->student_id;
        }

        //get all stident of the institute
        $results=User::paginateSearchUserOfInstitute($keyword,$institute_id,$user_type,$enrollStudents,$section->grade_id);
        return view('sections.students.create-modular',compact('section','type','results','keyword'));
    }

    public function studentsStore(Request $request){

        $has_exceptions = DB::transaction(function() use($request) {

            for ($i=0; $i < count(request('students')) ; $i++) {

                $check = SectionStudent::where('section_id',request('section_id'))
                                       ->where('student_id',request('students')[$i])
                                       ->first();

                if($check){

                    SectionStudent::where('section_id',request('section_id'))
                                  ->where('student_id',request('students')[$i])
                                  ->update([
                                                'is_deleted' => 0
                                           ]);

                }else{

                    SectionStudent::create([
                                            'section_id'         =>request('section_id'),
                                            'student_id'         =>request('students')[$i],
                                            'created_by'         =>request('current_user'),
                                            'is_deleted'         =>0,
                                        ]);
                }
            }
        });

        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
    }

    public function unenrollstudentsStore(Request $request){

        $has_exceptions = DB::transaction(function() use($request) {

            for ($i=0; $i < count(request('students')) ; $i++) {

                SectionStudent::where('section_id',request('section_id'))
                                  ->where('student_id',request('students')[$i])
                                  ->update([
                                                'is_deleted' => 1
                                           ]);
            }
        });

        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
    }

    public function studentsModularStore(Request $request){

        $has_exceptions = DB::transaction(function() use($request) {

            for ($i=0; $i < count(request('students')) ; $i++) {

                SectionModularStudent::create([
                                            'section_id'         =>request('section_id'),
                                            'student_id'         =>request('students')[$i],
                                            'created_by'         =>request('current_user'),
                                            'is_deleted'         =>0,
                                        ]);
            }
        });

        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
    }

    /*RECORDS*/


    public function recordIndex(Request $request,$section_id){

        $type='record';
        $keyword = $request->keyword;
        $section=Section::where('id',$section_id)->first();
        $results=SectionStudent::whereHas('user',function($q) use($keyword){
                                       $q->where('name','LIKE', '%'.$keyword.'%')
                                         ->orWhere('email','LIKE', '%'.$keyword.'%');
                                })
                               ->where('section_id',$section_id)
                               ->where('is_deleted',0)
                               ->paginate(10);

        $results->appends([
          'keyword' => $keyword,
          'search_pagination' => 10,
       ]);

       return view('sections.records.index',compact('results','type','keyword','section'));

    }

    //record of every subject
    public function recordSubject($section_id,$id){

        Set_time_limit(0);
        $section=Section::where('id',$section_id)->first();
        $subject=SectionSubject::with([
                                            'sectionAssessmentScale'
                                        ])
                                        ->where('id',$id)
                                        ->first();
        //get subject scale
        $scales=SectionSubjectScale::with([     'subjectAssessment'=>function($q){
                                                    $q->where('mode', 'graded');
                                                },
                                                'subjectAssessment.assessmentStudent.submittedAssessment'=>function($q){
                                                    $q->where('is_deleted',0);
                                                },
                                                'subjectAssessment.assessmentStudent.submittedReportAssessment'=>function($q){
                                                    $q->where('is_deleted',0);
                                                }
                                          ])
                                    ->where('section_subject_id',$id)
                                    ->where('is_deleted',0)
                                    ->orderBy('id')
                                    ->get();

        $students=SectionStudent::where('section_id',$section_id)->paginate(10);

        $students->appends([
            'search_pagination' => 10
        ]);

        $results=[];
        $studresult=[];
        $assessmentresult=[];
        $stotal=0;
        $ototal =0;

        $gtotal=0;
        $average=0;

        foreach($students as $student){
            foreach($scales as $scale){
                foreach($scale->subjectAssessment as $assessment){

                /* Get Duplicates question id */
                $submittedReportAssessments = SubmittedReportAssessment::where('subject_assessment_id', $assessment->id)
                ->where('added_by', $student->student_id)
                ->groupBy('question_id')
                ->havingRaw('COUNT(question_id) > 1')
                ->get();

                /* Remove duplicates */
                echo count($submittedReportAssessments);
                foreach($submittedReportAssessments as $submittedReportAssess) {
                   SubmittedReportAssessment::where('subject_assessment_id', $submittedReportAssess->subject_assessment_id)
                    ->where('added_by', $submittedReportAssess->added_by)
                    ->where('question_id', $submittedReportAssess->question_id)
                    ->where('id', $submittedReportAssess->id)
                    ->update(['is_deleted'  => 1]);
                }

                    //get all submitted assessment
                    $score=AssessmentStudent::with([
                                                        'submittedAssessment'=>function($q){
                                                            $q->where('is_deleted',0);
                                                        },
                                                        'submittedReportAssessment'=>function($q){
                                                            $q->where('is_deleted',0);
                                                            // $q->distinct('question_id');
                                                        },
                                                        'subjectAssessment'
                                                   ])
                                            ->where('subject_assessment_id',$assessment->id)
                                            ->where('student_id',$student->student_id)
                                            ->where('status','Graded')
                                            ->whereHas('submittedReportAssessment',function($q){
                                                $q->where('is_deleted', 0);
                                            })
                                            ->whereHas('submittedAssessment',function($q){
                                                $q->where('is_deleted', 0);
                                            })
                                            ->first();

                    //check mastery
                    $mastery=sectionAssessmentScale::where('section_subject_id',$id)
                                                  ->where('scale_from','<=',$score->mastery_score2 ?? 0)
                                                  ->where('scale_to','>=',$score->mastery_score2 ?? 0)
                                                  ->first();
                    //return $mastery;
                    $assessmentresult[]=array($score,$mastery);
                    if($score){
                        if($score->over_score2 > 0){
                            $stotal= $stotal + $score->total_score2;
                            $ototal= $ototal +$score->over_score2;
                        }
                    }
                }

                $studresult[]=$assessmentresult;
                $assessmentresult=[];
                if($ototal == 0){
                    $gtotal=($stotal/1) * $scale->weight;
                }else{
                    $gtotal=($stotal/$ototal) * $scale->weight;
                }
                $average = $average + $gtotal;
                $gtotal=0;
                $stotal=0;
                $ototal=0;
            }

            $finalmastery=sectionAssessmentScale::where('section_subject_id',$id)
                                                  ->where('scale_from','<=',$average ?? 0)
                                                  ->where('scale_to','>=',$average ?? 0)
                                                  ->first();
            $results[]=array($student,$studresult,round($average,2),$finalmastery);
            $studresult=[];
            $average=0;
        }

        return view('sections.records.subject-report',compact('scales','section','results','subject','students'));
    }

    public function assessmentRecord(){

        $as = AssessmentStudent::where('subject_assessment_id',request('id'))->where('student_id',request('uid'))->where('is_deleted',0)->first();
        $results=SubmittedReportAssessment::with([
                                                    'question'
                                                 ])
                                          ->where('assessment_student_id',$as->id)
                                          ->where('subject_assessment_id',request('id'))
                                          ->get();
        return response()->json($results);

    }

    public function editGradeStore(Request $request){

        $has_exceptions = DB::transaction(function() use($request) {

            for ($i=0; $i < count(request('ar_id')) ; $i++) {

                SubmittedReportAssessment::where('id',request('ar_id')[$i])
                                         ->update([
                                                      'apoint' => request('apoints')[$i],
                                                ]);
            }

       });


       // Return the transaction response.
       $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
       return response()->json($response);
    }

    public function recorsdSubject($section_id,$id){

        $section=Section::where('id',$section_id)->first();
        //get subject scale
        $scales=SectionSubjectScale::with([     'subjectAssessment.assessmentStudent'=>function($q) use($section_id){
                                                    $q->whereIn('student_id',[DB::raw('(select student_id from section_students where section_id = "'.$section_id.'")')]);
                                                },
                                                // 'subjectAssessment.assessmentStudent.submittedAssessment'
                                                'subjectAssessment.assessmentStudent.user'

                                          ])
                                   ->where('section_subject_id',$id)
                                   //insert mode of assessments
                                   ->where('is_deleted',0)
                                   ->orderBy('id')
                                   ->get();
        return $scales;
        //get all student of subject in class
        $students=SectionStudent::where('section_id',$section_id)->get();
        //assessment of


        return view('sections.records.subject-report',compact('scales','section'));
    }

    //for admin, inti admin and teacher
    public function recordStudentView($id){

        $type='record';
        $result=SectionStudent::where('id',$id)
                              ->first();

        $section=Section::where('id',$result->section_id)->first();

        $subjects=SectionSubject::with([    'sectionSubjectScale'=>function($q){
                                                $q->where('is_deleted',0);
                                            },
                                            'sectionSubjectScale.subjectAssessment.assessmentStudent'=>function($q) use($result){
                                                $q->where('status','Graded')
                                                  ->where('student_id',$result->student_id)
                                                  ->where('is_deleted',0);
                                            },
                                            'sectionSubjectScale.subjectAssessment.submittedAssessment'=>function($q) use($result){
                                                $q->where('added_by',$result->student_id)
                                                  ->where('is_deleted',0);
                                            },
                                            'sectionSubjectScale.subjectAssessment.submittedReportAssessment'=>function($q) use($result){
                                                $q->where('added_by',$result->student_id)
                                                  ->where('is_deleted',0);
                                            },
                                        ])
                                ->where('section_id',$result->section_id)
                                ->where('is_deleted',0)
                                ->get();



        //return $subjects;
        return view('sections.records.view',compact('result','type','subjects','section'));


    }

    // for student or my records
    public function recordStudentView2($section_id){

        $type='record';
        $section=Section::where('id',$section_id)->first();
        $result=SectionStudent::where('student_id',Auth::user()->id)
                              ->first();

        $subjects=SectionSubject::with([
                                            'sectionSubjectScale'=>function($q){
                                                $q->where('is_deleted',0);
                                            },
                                            'sectionSubjectScale.subjectAssessment.assessmentStudent'=>function($q){
                                                $q->where('status','Graded')
                                                  ->where('student_id',Auth::user()->id)
                                                  ->where('is_deleted',0);
                                            },
                                            'sectionSubjectScale.subjectAssessment.submittedAssessment'=>function($q) use($result){
                                                $q->where('added_by',Auth::user()->id)
                                                  ->where('is_deleted',0);
                                            },
                                            'sectionSubjectScale.subjectAssessment.submittedReportAssessment'=>function($q) use($result){
                                                $q->where('added_by',Auth::user()->id)
                                                  ->where('is_deleted',0);
                                            },
                                        ])
                                ->where('section_id',$section_id)
                                ->where('is_deleted',0)
                                ->where('status',1)
                                ->get();



        //return $subjects;

        return view('sections.records.view',compact('result','type','subjects','section'));


    }

    public function updateDatabase(){

        $submitteds=SubmittedAssessment::get();
        return $submitteds;
        foreach($submitteds as $submitted){

            $assessmentStudent=AssessmentStudent::where('student_id',$submitted->added_by)
                                                ->where('subject_assessment_id',$submitted->subject_assessment_id)
                                                ->first();
            //return $assessmentStudent;
            SubmittedAssessment::where('id',$submitted->id)
                               ->update([
                                            'assessment_student_id'=>$assessmentStudent->id ?? '0'
                                        ]);


        }
    }

    public function reportExport($section_id,$id){

        return Excel::download(new GradesExport($section_id,$id), 'Export Grade ' . $section_id . ' ' . $id . '.xlsx');
    }
}
