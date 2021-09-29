<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AssignScormSubject extends Model
{
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];
    
    //relationship
    public function user() {
        return $this->hasOne(User::class,'id','user_id');
    }
    
    public function subject() {
        return $this->hasOne(Ebook::class,'id','subject_id');
    }
}
