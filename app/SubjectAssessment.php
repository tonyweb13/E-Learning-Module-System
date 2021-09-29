<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubjectAssessment extends Model
{
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];
    public $incrementing = false;
    
     protected $appends = [
        'total',
        'over',
        'teststat',
        'total2',
        'over2',
       // 'mcode'
    ];
    
    public function getTotalAttribute() {
        return $this->submittedAssessment->sum('apoint');
    }
    
    public function getOverAttribute() {
        return $this->submittedAssessment->sum('point');
    }
    
    public function getTeststatAttribute() {
        return $this->assessmentStudent[0]->status ?? '';
    }
    
    public function getTotal2Attribute() {
        return $this->submittedReportAssessment->where('is_deleted',0)->sum('apoint');
    }
    
    public function getOver2Attribute() {
        return $this->submittedReportAssessment->where('is_deleted',0)->sum('point');
    }
    
    // public function getMcodeAttribute() {
        
    //     $total = $this->submittedReportAssessment->sum('apoint');
    //     $over = $this->submittedReportAssessment->sum('point');
    //     $sectionSubjectId = 
    //     $return=sectionAssessmentScale::where('scale_from','<=',$score->mastery_score2 ?? 0)
    //                                   ->where('scale_to','>=',$score->mastery_score2 ?? 0)
    //                                   ->first();
    //     return $return
    // }
    
    public function sectionAssessmentScale() {
        return $this->hasMany(SectionAssessmentScale::class,'section_assessment_id','id');
    }
    
    protected static function boot() {
        parent::boot();

        static::creating(function ($model) {
            $model->init();
        });
    }

    private function init() {
        $this->id = self::createID();
        $this->is_deleted = 0;
    }
    /* Static Methods */
    public static function createID() 
    {
        $today = date('Y-m-d');
        $count = self::whereDate('date_created',$today)->count() + 1;
        return "SA-".date('Ymdhis')."-$count";
    }

    //relationship
    public function sectionSubjectScale() {
        return $this->hasOne(SectionSubjectScale::class,'id','section_subject_scale_id');
    }

    public function sectionSubject() {
        return $this->hasOne(SectionSubject::class,'id','section_subject_id');
    }
    
    public function assessmentQuestion() {
        return $this->hasMany(AssessmentQuestion::class,'subject_assessment_id','id');
    }
    
    public function assessmentStudent() {
        return $this->hasMany(AssessmentStudent::class,'subject_assessment_id','id');
    }
    
    public function submittedAssessment() {
        return $this->hasMany(SubmittedAssessment::class,'subject_assessment_id','id');
    }
    
    public function submittedReportAssessment() {
        return $this->hasMany(SubmittedReportAssessment::class,'subject_assessment_id','id');
    }

    public static function paginatedSearch($keyword,$id){

        $results = self::with([
                                'sectionSubjectScale',
                                'sectionSubject',
                            ])
                        ->where('section_subject_id',$id)
                        ->where('is_deleted',0)
                        ->paginate(10);
        $results->appends([
            'keyword' => $keyword,
            'search_pagination' => 2
        ]);

        return $results;
    } 
}
