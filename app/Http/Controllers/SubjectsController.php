<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Config;
use DB;
use Storage;
use App\Subject;
use ZipArchive;
use App\MySubject;
use App\AssignScormSubject;
use App\User;

class SubjectsController extends Controller
{
    public function databaseEdit(){
            
        $datas=Subject::get();
        
        foreach($datas as $data){
            
            Subject::where('id',$data->id)
                   ->update([
                                'cover'   =>  str_replace("http://localhost:8000","",$data->cover),
                                'file'   =>  str_replace("http://localhost:8000","",$data->file),
                                'offline_file'   =>  str_replace("http://localhost:8000","",$data->offline_file),
                                'extract_file'   =>  str_replace("http://localhost:8000","",$data->extract_file),
                                'extract_offline_file'   =>  str_replace("http://localhost:8000","",$data->extract_offline_file),
                          ]);
        }
            
    }
    
    public function index(Request $request)
    {   
        $keyword = $request->keyword;
        $results = Subject::paginatedSearch($keyword);
        return view('subjects.index', compact('results', 'keyword'));
    }
    
    public function getMySubjects(Request $request){
        //edit get only user edge subject
        $keyword = $request->keyword;
        $results = Subject::paginatedSearch($keyword);
        return view('subjects.index', compact('results', 'keyword'));
    }

    
    public function create()
    {
        $data=null;
        return view('subjects.create',compact('data'));
    }

    public function store(Request $request)
    {
        if(request('id')){//edit

        }else{//create

            $today=date('Ymdhis');
            $file=request('file')->storeAs('subjects/'.request('title').'/'.$today,request('file')->getClientOriginalName(),'public');
            $path='/storage/'.$file;
            $zip = new ZipArchive;

            if ($zip->open(request('file')) === TRUE) {
                $zip->extractTo($_SERVER['DOCUMENT_ROOT'] . '/storage/subjects/'.request('title').'/'.$today.'/');
                $zip->close();
                $target='/storage/subjects/'.request('title').'/'.$today.'/index.html';

                //for image path
                if (request('image') != null) {
                    $path3 = Storage::disk('public')->put('subjects/subject_cover_photo', request('image'));
                    $image='/storage/'.$path3;
                }else{
                    $image=null;
                }

                $id=Subject::create([

                                'title'=> request('title'),
                                'grade_id'=> request('grade_id'),
                                'cover'=> $image,
                                'file' => $path,  
                                'extract_file'=>$target,
                                'edge_guide_id'=>request('guide_id'),
                                'price'=>request('price'),
                                'status'=>request('status'),
                                'added_by'=>request('current_user'),
                                'is_deleted'=>0  
                            ])->id;
                $response=$id;
            }
        }

        return response()->json($response);
    }

   
    public function editor(Request $request){

        $has_exceptions = DB::transaction(function() use($request) {

            $subject=Subject::where('id',request('id'))->where('is_deleted',0)->first();
            
            Subject::where('id',request('id'))
                   ->update([
                                'description'=>request('description'),
                            ]);

        });

        
        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
    }
    
    public function edit($id)
    {
        $data=Subject::where('id',$id)
                     ->where('is_deleted',0)
                     ->first();
                     
        //return $data;
        return view('subjects.create',compact('data'));
    }
    
    public function delete(Request $request){

        $has_exceptions = DB::transaction(function() use($request) {
            
            Subject::where('id',request('id'))
                   ->update([
                              'is_deleted' => 1,
                            ]);  

        });

        
        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
    }
    
    
    //assigned user
    public function assignedSubjectTeacher(Request $request,$id){
        
        $keyword = $request->keyword;
        $results=AssignScormSubject::whereHas('user',function($q) use ($keyword){
                                    $q->where('name', 'LIKE', '%'.$keyword.'%')
                                      ->orWhere('email','LIKE','%'.$keyword.'%')
                                      ->orWhereHas('userType',function($q) use($keyword){
                                            $q->where('name','LIKE','%'.$keyword.'%');
                                        })
                                      ->orWhereHas('institute',function($q) use($keyword){
                                            $q->where('name','LIKE','%'.$keyword.'%');
                                        });
                              })
                             ->where('subject_id',$id)
                             ->where('is_deleted',0)
                             ->paginate(10);
                             
        $results->appends([
            'keyword' => $keyword,
            'search_pagination' => 10
        ]);
        
        //return $results
        return view('subjects.assigns.teachers.index',compact('id','keyword','results'));
    }
    
    //assign user
    public function assignSubjectTeacher(Request $request,$id){
        //currently display all user of ebook no fiter nut user type but will revise this by teacher only
        $keyword = $request->keyword;
        $users=AssignScormSubject::where('subject_id',$id)->get();
        
        $userids=[];
        foreach($users as $user){
          $userids[]=$user->user_id;  
        }
        
        $results=User::where(function($q) use($keyword) {
                            $q->where('name', 'LIKE', '%'.$keyword.'%')
                              ->orWhere('email','LIKE','%'.$keyword.'%')
                              ->orWhereHas('userType',function($q) use($keyword){
                                    $q->where('name','LIKE','%'.$keyword.'%');
                                })
                              ->orWhereHas('institute',function($q) use($keyword){
                                    $q->where('name','LIKE','%'.$keyword.'%');
                                });
                        })
                        ->whereHas('userType',function($q){
                            $q->whereIn('name',['Teacher']);
                        })
                        ->whereNotIn('id',$userids)
                        ->where('is_deleted',0)
                        ->paginate(10);
                        
        $results->appends([
            'keyword' => $keyword,
            'search_pagination' => 10
        ]);
        
        return view('subjects.assigns.teachers.create',compact('id','keyword','results'));
    }
    
    public function assignSubject(Request $request){

        $has_exceptions = DB::transaction(function() use($request) {

            for ($i=0; $i < count(request('userid')) ; $i++) { 

                AssignScormSubject::create([
                                            'subject_id'      =>request('subject_id'),
                                            'user_id'         =>request('userid')[$i],
                                            'added_by'        =>request('current_user'),
                                            'privnum'         =>request('privilege') ?? 0,
                                            'is_deleted'      =>0,
                                        ]);   
            }
        });
        
        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
    }
    
    
    
   
    public function show($id)
    {
        //
    }

  

 
    public function update(Request $request, $id)
    {
        //
    }

   
    public function destroy($id)
    {
        //
    }

    public function getSubjects(){

        $results = Subject::where('is_deleted',0)->get();
        return response()->json($results);
    }

    public function getAssignedSubjects(Request $request){

        $response=MySubject::getMySubject(request('user'),request('type'));
        return response()->json(1);
    }
    
    public function scormPlayer()
    {
        return view('subjects.player');
    }
}
