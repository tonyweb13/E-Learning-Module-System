<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\CreatedSubject;
use App\CreatedSubjectScale;
use DB;
use Config;
use Storage;
use Auth;

class CreatedSubjectsController extends Controller
{
  
    public function index(Request $request)
    {
        $keyword = $request->keyword;
        $results = CreatedSubject::paginatedSearch($keyword);
        //return $results;
        return view('createdsubjects.index',compact('keyword','results'));
    }

  
    public function create()
    {
        $data=null;
        return view('createdsubjects.create',compact('data'));
        
    }

  
    public function store(Request $request)
    {
        //for created subject only the scorm subject is d=for develop
        $has_exceptions = DB::transaction(function() use($request) {

            if(request('id')){//edit 
                
                if (request('image') != null) {
                    $path = Storage::disk('public')->put('createdsubject.images', request('image'));
                    $image='/storage/'.$path;
                    
                    CreatedSubject::where('id',request('id'))
                                  ->update([
                                                'image'=>$image,
                                           ]);
                }
                
                CreatedSubject::where('id',request('id'))
                              ->update([
                                            'name' => request('subject_name'),
                                            'updated_by'=> request('current_user'),
                                       ]);
                                       
                CreatedSubjectScale::where('created_subject_id',request('id'))
                                   ->update([
                                                'is_deleted'=>1,
                                            ]);
                for ($i=0; $i < count(request('category')) ; $i++) { 

                    if(request('scale_id')[$i]){
                        CreatedSubjectScale::where('id',request('scale_id')[$i])
                                           ->update([
                                                        'name'=>request('category')[$i],
                                                        'weight'=>request('weight')[$i],
                                                        'is_deleted'=>0,
                                                    ]);
                    }else{
                        CreatedSubjectScale::create([
                                                        'name'=>request('category')[$i],
                                                        'weight'=>request('weight')[$i],
                                                        'created_subject_id'=>request('id'),
                                                        'is_deleted'=>0,
                                                    ]); 
                    }  
                }

                  
            }else{//create
                
                $image=null;
                if (request('image') != null) {
                    $path = Storage::disk('public')->put('createdsubject.images', request('image'));
                    $image='/storage/'.$path;
                }
                
                $subject_id=CreatedSubject::create([
                                                            'name' => request('subject_name'),
                                                            'image' => $image,
                                                            'added_by'=> request('current_user'),
                                                            'is_deleted'=>0,
                                                            'is_admin'=>1,
                                                       ])->id;

                for ($i=0; $i < count(request('category')) ; $i++) { 

                    CreatedSubjectScale::create([
                                                    'name'=>request('category')[$i],
                                                    'weight'=>request('weight')[$i],
                                                    'created_subject_id'=>$subject_id,
                                                    'is_deleted'=>0,
                                                ]);   
                }
            }
        });
        
        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
    }

    public function show(Request $request,$id)
    {
        //show lesson
        $keyword = $request->keyword;
        $lessons=Lesson::with([
                                'topic'=>function($q){
                                        $q->where('is_deleted',0);
                                    }
                              ])
                       ->where('created_subject_id',$id)
                       ->where('is_deleted',0)
                       ->get();
        $lesson=null;
        
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
                                ->paginate(10);

            $results->appends([
                        'keyword' => $keyword,
                        'search_pagination' => 10
                    ]);
        }
                       
        return view('createdsubjects.lessons',compact('lessons','lesson','results','keyword'));
    }


    public function edit($id)
    {
        $data=CreatedSubject::where('id',$id)->first();
        return view('createdsubjects.create',compact('data'));
    }
    
    public function gradescale(Request $request){

        $results=CreatedSubjectScale::where('created_subject_id',request('subject_id'))
                                    ->where('is_deleted',0)
                                    ->get();

        return response()->json($results);
    }

 
    public function update(Request $request, $id)
    {
        //
    }


    public function destroy($id)
    {
        //
    }
}
