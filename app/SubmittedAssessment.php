<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubmittedAssessment extends Model
{
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];
    
    protected $appends = [
        'score',
    ];
    
    public function getScoreAttribute() {
        return $this->point * $this->is_correct;
    }
    
    public function question() {
        return $this->hasOne(Question::class,'id','question_id');
    }
    
    public function user() {
        return $this->hasOne(User::class,'id','added_by');
    }
}
