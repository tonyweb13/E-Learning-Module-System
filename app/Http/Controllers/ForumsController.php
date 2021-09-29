<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Section;
use DB;
use App\Forum;
use App\ForumViewer;
use App\User;
use App\ForumComment;

class ForumsController extends Controller
{
   
    public function index(Request $request)
    {   
        $type='forum';
        $keyword = $request->keyword;
        $currentuser=Auth::user();
        $results = Forum::paginatedSearch($keyword,$currentuser);
        //return $results;      
        return view('messages.forums.index',compact('currentuser','results','type','keyword'));
    }


    public function create()
    {
        $type='forum';
        $currentuser=Auth::user();
        if($currentuser->userType->name == 'Institute Admin'){ // get all class of the institute
            $sections=Section::where('status',1)
                             ->whereHas('user',function($q) use($currentuser){
                                   $q->where('institute_id',$currentuser->institute_id);
                             })
                             ->orWhere('added_by',$currentuser->id)
                             ->where('is_deleted',0)
                             ->get();
        }else if($currentuser->userType->name == 'Teacher'){
            $sections=Section::where('added_by',$currentuser->id)->where('is_deleted',0)->get();
        }
        $data=null;
        return view('messages.forums.create',compact('type','sections','currentuser','data'));
    }


    public function store(Request $request)
    {
        $has_exceptions = DB::transaction(function() use($request) {
            
            $currentuser=Auth::user();
            
            if(request('forum_id')){
                
                Forum::where('id',request('forum_id'))
                     ->update([
                            'post' => request('editor_input'),  
                            'audience'=>request('audience'),
                            'can_comment'=>request('comment'),
                        ]);
                        
                
                if(request('audience') == 'public'){//public
                    if($currentuser->userType->name == 'Admin'){//admin
                        
                        
                    }else{//insti admin
                        
                        $users=User::where('institute_id',$currentuser->institute_id)->get();
                        $viewers=$users;
                    }
                    
                }else{//by class
                    
                    $viewers=[];
                    //for section owner/student/teacher
                    $users= Section::with([
                                            'user',
                                            'sectionStudent',
                                            'sectionTeacher'
                                        ])
                                  ->where('id',request('audience'))
                                  ->where('is_deleted',0)
                                  ->first();
                                  
                    array_push($viewers,$users->user);
                    
                    foreach($users->sectionStudent as $user){
                        array_push($viewers,$user->user);
                    }
                    
                    foreach($users->sectionTeacher as $user){
                        array_push($viewers,$user->user);
                    }
                    
                    if($users->status == 1){//active
                        $insti=User::where('institute_id',$currentuser->institute_id)
                                   ->whereHas('userType',function($q){
                                           $q->where('name','Institute Admin');
                                     })
                                   ->get();
                        foreach($insti as $user){
                            array_push($viewers,$user);
                        }
                    }
                    
                    
                }
                
                ForumViewer::where('forum_id',request('forum_id'))
                           ->update([
                                        'is_deleted' => 1,
                                    ]);
                                    
                foreach($viewers as $viewer){
                    
                    //check if exist
                    $check = ForumViewer::where('forum_id',request('forum_id'))
                                        ->where('user_id',$viewer->id)
                                        ->first();
                                        
                    if($check){
                        ForumViewer::where('forum_id',request('forum_id'))
                                   ->where('user_id',$viewer->id)
                                   ->update([
                                        'is_deleted' => 0,
                                    ]);
                                        
                    }else{
                        
                        ForumViewer::create([
                                            'like'        => 0,  
                                            'heart'       => 0,    
                                            'user_id'     => $viewer->id ?? '',
                                            'forum_id'    => request('forum_id'),
                                            'is_deleted'  => 0,
                                        ]);
                                        
                    }
                }
                
            }else{//create forum
                
                $id = Forum::create([
                            'post' => request('editor_input'),  
                            'audience'=>request('audience'),
                            'can_comment'=>request('comment'),
                            'added_by'=> request('current_user'),
                            'is_deleted'=>0  
                        ])->id;  
                        
                //view
                if(request('audience') == 'public'){//public
                    if($currentuser->userType->name == 'Admin'){//admin
                        
                        
                    }else{//insti admin
                        
                        $users=User::where('institute_id',$currentuser->institute_id)->get();
                        $viewers=$users;
                    }
                    
                }else{//by class
                    
                    $viewers=[];
                    //for section owner/student/teacher
                    $users= Section::with([
                                            'user',
                                            'sectionStudent',
                                            'sectionTeacher'
                                        ])
                                  ->where('id',request('audience'))
                                  ->where('is_deleted',0)
                                  ->first();
                                  
                    array_push($viewers,$users->user);
                    
                    foreach($users->sectionStudent as $user){
                        array_push($viewers,$user->user);
                    }
                    
                    foreach($users->sectionTeacher as $user){
                        array_push($viewers,$user->user);
                    }
                    
                    if($users->status == 1){//active
                        $insti=User::where('institute_id',$currentuser->institute_id)
                                   ->whereHas('userType',function($q){
                                           $q->where('name','Institute Admin');
                                     })
                                   ->get();
                        foreach($insti as $user){
                            array_push($viewers,$user);
                        }
                    }
                    
                    
                }
                
                foreach($viewers as $viewer){
                    
                    ForumViewer::create([
                                            'like'        => 0,  
                                            'heart'       => 0,    
                                            'user_id'     => $viewer->id ?? '',
                                            'forum_id'    => $id,
                                            'is_deleted'  => 0,
                                        ]);
                }
            }

       });

       
       // Return the transaction response.
       $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
       return response()->json($response);
    }


    public function show($id)
    {
        $type='forum';
        $currentuser=Auth::user();
        ForumViewer::where('forum_id',$id)
                   ->where('user_id',$currentuser->id)
                   ->update([
                                'seen'=>1,
                            ]);
        $results = Forum::whereHas('forumViewer',function($q) use($currentuser){
                           $q->where('user_id',$currentuser->id);
                        })
                        ->where('is_deleted',0)
                        ->where('id',$id)
                        ->get();
        return view('messages.forums.show',compact('currentuser','results','type'));
    }

 
    public function edit($id)
    {
        $type='forum';
        $currentuser=Auth::user();
        if($currentuser->userType->name == 'Institute Admin'){ // get all class of the institute
            $sections=Section::where('status',1)
                             ->whereHas('user',function($q) use($currentuser){
                                   $q->where('institute_id',$currentuser->institute_id);
                             })
                             ->orWhere('added_by',$currentuser->id)
                             ->get();
        }else if($currentuser->userType->name == 'Teacher'){
            $sections=Section::where('added_by',$currentuser->id)->get();
        }
        $data=Forum::where('id',$id)->where('is_deleted',0)->first();
        
        return view('messages.forums.create',compact('type','sections','currentuser','data'));
    }
    
    public function delete(Request $request){

        $has_exceptions = DB::transaction(function() use($request) {
            
            Forum::where('id',request('id'))
                 ->update([
                                'is_deleted' => 1,
                          ]);  

        });

        
        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
    }
    
    public function getForum(Request $request){
    
        $response=Forum::where('id',request('id'))->where('is_deleted',0)->first();
        return response()->json($response);
    }
    
    public function likes(Request $equest){
        
        ForumViewer::where('forum_id',request('id'))
                   ->where('user_id',request('user_id'))
                   ->update([
                                'like' =>1,
                            ]);
                            
        
        return response()->json('success');           
    }
    
    public function unlikes(Request $equest){
        
        ForumViewer::where('forum_id',request('id'))
                   ->where('user_id',request('user_id'))
                   ->update([
                                'like' =>0,
                            ]);
                            
        
        return response()->json('success');           
    }
    
    public function hearts(Request $equest){
        
        ForumViewer::where('forum_id',request('id'))
                   ->where('user_id',request('user_id'))
                   ->update([
                                'heart' =>1,
                            ]);
                            
        
        return response()->json('success');           
    }
    
    public function unhearts(Request $equest){
        
        ForumViewer::where('forum_id',request('id'))
                   ->where('user_id',request('user_id'))
                   ->update([
                                'heart' =>0,
                            ]);
                            
        
        return response()->json('success');           
    }
    
    public function comments(Request $equest){
        
        $viewer=ForumViewer::where('forum_id',request('id'))
                           ->where('user_id',request('user_id'))
                           ->first();
        if($viewer){
            
            ForumComment::create([
                                        'comment'           => request('comment'),
                                        'user_id'           => request('user_id'),
                                        'forum_id'          => request('id'),
                                        'forum_viewer_id'   => $viewer->id,        
                                        'is_deleted'        => 0, 
                                 ]);
        }                   
        
        return response()->json('success');           
    }
    
    public function getForumComment(Request $equest){
        
        $comments = ForumComment::with([
                                            'user'
                                      ])
                                ->where('forum_id',request('forum_id'))    
                                ->where('is_deleted',0)
                                ->get();
        
        return response()->json($comments);           
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
