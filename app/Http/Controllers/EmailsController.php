<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use DB;
use App\User;
use App\Email;
use App\EmailReceiver;
use App\EmailReply;

class EmailsController extends Controller
{
    
    public function index()
    {   
        $type='email';
        $currentuser=Auth::user();
        $keyword = request('keyword');
        $results = EmailReceiver::paginatedSearch($keyword,$currentuser);
        //return $results;
        return view('messages.emails.inbox',compact('results','keyword','type'));
    }
    
    public function create()
    {
        $type='email';
        return view('messages.emails.create',compact('type'));
    }
    
    public function getUsers(){
        
        $currentuser=Auth::user();
        $results = User::where('institute_id',$currentuser->institute_id)
                       ->where('status',1)
                       ->get();
                       
        return response()->json($results);
    }


    public function store(Request $request)
    {
        $has_exceptions = DB::transaction(function() use($request) {

            $id=Email::create([ 
                                'subject'    => request('subject'),
                                'message'    => request('message'),
                                'added_by'   => request('current_user'),
                                'is_deleted' => 0,
                          ])->id;
            
            for ($i=0; $i < count(request('user_ids')) ; $i++) { 

                EmailReceiver::create([
                                        'user_id'        => request('user_ids')[$i],  
                                        'email_id'       => $id,
                                        'is_deleted'     => 0,  
                                    ]);
            }

       });

       
       // Return the transaction response.
       $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
       return response()->json($response);
    }
    
    public function inboxDelete(Request $request){
        
        $has_exceptions = DB::transaction(function() use($request) {
            
            EmailReceiver::where('id',request('id'))
                   ->update([
                              'is_deleted' => 1,
                            ]);  

        });

        
        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
    }
    
    public function sentEmail(Request $request){
        
        $type='email';
        $currentuser=Auth::user();
        $keyword = request('keyword');
        $results = Email::paginatedSearch($keyword,$currentuser);
        //return $results;
        return view('messages.emails.sent',compact('results','keyword','type'));
    }

    public function show($id)
    {
        $type='email';
        
        EmailReceiver::where('email_id',$id)
                     ->where('user_id',Auth::user()->id)
                     ->update([
                                'seen' => 1
                              ]);
        
        $data=Email::with([
                            'emailReceiver',
                            'emailReply'=>function($q){
                                $q->orderBy('date_created','asc');
                            }
                          ])
                    ->where('id',$id)
                    ->first();
        //return $data;
        return view('messages.emails.show',compact('data','type'));
    }
    
    public function replyStore(Request $request){
        
        $has_exceptions = DB::transaction(function() use($request) {
            
            $email = Email::where('id',request('id'))->first();
            
            //sender is also a receiver na
            $receivermail = EmailReceiver::where('email_id',request('id'))->where('user_id',$email->added_by)->first();
            
            if($receivermail == null){//add to receiver
                EmailReceiver::create([
                    
                                                'user_id'        => $email->added_by,  
                                                'email_id'       => request('id'),
                                                'is_deleted'     => 0,
                                            ]);
            }
            
            //receiver id
            $rid=  EmailReceiver::where('email_id',request('id'))->where('user_id',request('current_user'))->first();
            
            EmailReply::create([
                                    'message'               => request('rep_message'),
                                    'email_receiver_id'     => $rid->id,        
                                    'email_id'              => request('id'),
                                    'added_by'              => request('current_user'),
                                    'is_deleted'            => 0,  
                               ]);
            
            //notify
            EmailReceiver::where('email_id',request('id'))
                         ->where('user_id','!=',request('current_user'))
                         ->update([
                                        'seen' =>0
                                  ]);
        });

        
        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
        
    }
    
    

    public function edit($id)
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
}
