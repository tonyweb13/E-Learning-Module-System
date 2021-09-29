<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ConversationMember extends Model
{
    public $timestamps = false;

    public function userId() {
    	return $this->hasOne(User::class, 'id', 'user_id');
    }

}
