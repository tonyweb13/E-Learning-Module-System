<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SectionSubjectScale extends Model
{
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];

    protected $appends = [
        'label',
        'value',
    ];


    //for init auto complte label data-> your data want to show
    public function getLabelAttribute() {
        return $this->name;
    }
    
    
    //for init auto complte label data-> your data want to show
    public function getValueAttribute() {
        return $this->id;
    }
    
    //relationship
    public function sectionSubject() {
        return $this->hasOne(SectionSubject::class,'id','section_subject_id');
    }
    
    public function subjectAssessment() {
        return $this->hasMany(SubjectAssessment::class,'section_subject_scale_id','id');
    }
}
