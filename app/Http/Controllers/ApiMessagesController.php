<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ConversationMember;
use App\ForumViewer;
use App\EmailReceiver;
use Auth;

class ApiMessagesController extends Controller
{
    public function getNotifForum(){
        
        $data= ForumViewer::with([
                                    'forum'
                                 ])
                          ->whereHas('forum',function($q){
                              $q->where('added_by','!=', Auth::user()->id);
                           })
                          ->where('user_id',Auth::user()->id)
                          ->where('seen',0)
                          ->get();
        return count($data);
    }
    
    public function getNotifEmail(){
        
        $data= EmailReceiver::where('user_id',Auth::user()->id)
                            ->where('seen',0)
                            ->where('is_deleted',0)
                            ->get();
        return count($data);
    }
    
    public function getNotifChat(){
        
        $data= ConversationMember::where('user_id',Auth::user()->id)
                                 ->where('seen',0)
                                 ->get();
        return count($data);
    }
    
    public function getNotifEmailChat(){
        
        $email= EmailReceiver::where('user_id',Auth::user()->id)
                            ->where('seen',0)
                            ->where('is_deleted',0)
                            ->get();
                            
        $chat = ConversationMember::where('user_id',Auth::user()->id)
                                  ->where('seen',0)
                                  ->get();
        
        $total = count($email) + count($chat);
        return $total;
    }
}
