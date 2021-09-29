<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ForumViewer extends Model
{
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];
    
    public function user() {
        return $this->hasOne(User::class,'id','user_id');
    }
    
    public function forum() {
        return $this->hasOne(Forum::class,'id','forum_id');
    }
}
