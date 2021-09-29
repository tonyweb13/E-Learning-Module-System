<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AssessmentQuestion extends Model
{
    protected $cast = ['id' => 'string'];
	protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];

    //relationship
    public function question() {
        return $this->hasOne(Question::class,'id','question_id');
    } 
}
