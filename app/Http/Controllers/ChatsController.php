<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Conversation;
use App\ConversationMember;
use App\Message;

class ChatsController extends Controller
{
    
    public function index()
    {
        // current user
        $user = request()->user();
        $conversations = Conversation::whereHas('members', function($q) use($user) {
                            $q->where('user_id', $user->id);
                        })
                        ->orderBy('updated_at', 'DESC')
                        ->get();
        $type='chat';
        return view('messages.chats.index', compact('conversations','type'));
       
    }
    
    public function searchUser(Request $request) {
        $user = $request->user();
        $keyword = $request->keyword ?? '';
        
        if($user->userType->name == 'Admin'){//admin
        
            $users = User::where('name', 'LIKE', '%'.$keyword.'%')
                         ->where('id', '<>', $user->id)
                         ->get(); 
        }else{
            $users = User::where('name', 'LIKE', '%'.$keyword.'%')
                         ->where('id', '<>', $user->id)
                         ->where('institute_id', $user->institute_id)
                         ->get(); 
        }
        return response()->json($users);

    }
    
    public function sendMessage(Request $request) {
        $user = $request->user();
        $cid = $request->cid;
        $message = $request->message ?? '';
        $id = Message::insertGetId([
                'conversation_id' => $cid,
                'message' => $message,
                'created_by' => $user->id,
               // 'is_deleted' => 0
            ]);
        $message = Message::with('createdBy:id,name')->find($id);
        Conversation::where('id', $cid)->update(['updated_at' => now()]);
        ConversationMember::where('conversation_id', $cid)->where('user_id', '<>', $user->id)->update(['seen' => 0]);

        return response()->json($message);
    }

    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        $user = $request->user();
        $message = $request->message;
        $send_to = $request->send_to;

        $id = Conversation::insertGetId([
                'created_by' => $user->id,
               // 'is_deleted' => 0
            ]);

        ConversationMember::insert([
            'conversation_id' => $id,
            'user_id' => $user->id,
            'seen' => 1,
           // 'is_deleted' => 0
        ]);

        ConversationMember::insert([
            'conversation_id' => $id,
            'user_id' => $send_to,
            'seen' => 0,
           // 'is_deleted' => 0
        ]);

        Message::insert([
            'conversation_id' => $id,
            'message' => $message,
            'created_by' => $user->id,
            //'is_deleted' => 0
        ]);

        $conversation = Conversation::find($id);
        foreach ($conversation->members as $key => $value) {
            $receivers[] = $value->user_id;
        }

        $receiver = User::find($send_to);

        return response()->json([
            'id' => $conversation->id,
            'title' => $conversation->title,
            'last_message' => $conversation->last_message,
            'receivers' => $receivers ?? [],
            'date' => date('M d, Y h:i A', strtotime($conversation->updated_at)),
            'receiver' => $receiver,
            'sender' => $user
        ]);
    }


    public function show($id)
    {
        $user = request()->user();
        $conversation = Conversation::where('id', $id)
                        ->with([
                            'members.userId:id,name',
                            'messages.createdBy:id,name',
                            'createdBy:id,name'
                        ])
                        ->first();
        ConversationMember::where('conversation_id', $id)->where('user_id', $user->id)->update(['seen' => 1]);
        return response()->json($conversation);
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
