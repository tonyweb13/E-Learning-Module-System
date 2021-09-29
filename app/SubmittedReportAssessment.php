<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubmittedReportAssessment extends Model
{
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];
    
    public function question() {
        return $this->hasOne(Question::class,'id','question_id');
    }
}
