<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Conversation extends Model
{

    protected $appends = [
    	'last_message',
    	'title',
        'seen'
    ];

    public function getLastMessageAttribute() {
    	$message = Message::where('conversation_id', $this->id)->orderBy('created_at', 'DESC')->first();
    	return $message->message;
    }

    public function getTitleAttribute() {
    	$member = ConversationMember::where('conversation_id', $this->id)->where('user_id', '<>', request()->user()->id)->first();
    	return $member->userId->name;
    }

    public function getSeenAttribute() {
        $member = ConversationMember::where('conversation_id', $this->id)->where('user_id', request()->user()->id)->first();
        return $member->seen;
    }

    public function createdBy() {
    	return $this->hasOne(User::class, 'id', 'created_by');
    }

    public function members() {
    	return $this->hasMany(ConversationMember::class, 'conversation_id', 'id');
    }

    public function messages() {
    	return $this->hasMany(Message::class, 'conversation_id', 'id');
    }
}
