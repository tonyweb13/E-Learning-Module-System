<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AssessmentStudent extends Model
{
    protected $cast = ['id' => 'string'];
	protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];
    
    protected $appends = [
        'total_score',
        'over_score',
        'mastery_score',
        'total_score2',
        'over_score2',
        'mastery_score2',
    ];
    
    public function getTotalScoreAttribute() {
         return $this->submittedAssessment->where('is_deleted',0)->sum('apoint');
    }
    
    public function getOverScoreAttribute() {
         return $this->submittedAssessment->where('is_deleted',0)->sum('point');
    }
    
    public function getMasteryScoreAttribute() {
        
        $score=$this->submittedAssessment->where('is_deleted',0)->sum('apoint');
        $over = $this->submittedAssessment->where('is_deleted',0)->sum('point');
        
        if($over == 0){
            $mastery = 0 * 100; 
        }else{
            $mastery = ($score / $over) * 100;   
        }
        
        
        return $mastery;
    }
    
    public function getTotalScore2Attribute() {
         return $this->submittedReportAssessment->where('is_deleted',0)->sum('apoint');
    }
    
    public function getOverScore2Attribute() {
         return $this->submittedReportAssessment->where('is_deleted',0)->sum('point');
    }
    
    public function getMasteryScore2Attribute() {
        
        $score=$this->submittedReportAssessment->where('is_deleted',0)->sum('apoint');
        $over = $this->submittedReportAssessment->where('is_deleted',0)->sum('point');
        
        if($over == 0){
            $mastery = 0 * 100; 
        }else{
            $mastery = ($score / $over) * 100;   
        }
        
        
        return $mastery;
    }
    
    public function user() {
        return $this->hasOne(User::class,'id','student_id');
    }
    
    public function submittedAssessment() {
        return $this->hasMany(SubmittedAssessment::class,'assessment_student_id','id');
    }
    
    public function submittedReportAssessment() {
        return $this->hasMany(SubmittedReportAssessment::class,'assessment_student_id','id');
    }
    
    public function subjectAssessment() {
        
      return $this->hasOne(SubjectAssessment::class,'id','subject_assessment_id');
    }
}
