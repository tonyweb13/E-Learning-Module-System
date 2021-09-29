<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    protected $cast = ['id' => 'string'];
	protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];
    
    protected $appends = [
      'upper_answer',
    ];
    
    //for init auto complte label data-> your data want to show
    public function getUpperAnswerAttribute() {
    return strtoupper($this->answer);
    }
    
    public function question() {
        return $this->hasMany(Question::class,'id','question_id');
    }
}
