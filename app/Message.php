<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $appends = [
    	'formatted_date'
    ];

    public function getFormattedDateAttribute() {
    	return date('M d, Y h:i A', strtotime($this->created_at));
    }

    public function conversationId() {
    	return $this->hasOne(Conversation::class, 'id', 'conversation_id');
    }

    public function createdBy() {
    	return $this->hasOne(User::class, 'id', 'created_by');
    }
}
