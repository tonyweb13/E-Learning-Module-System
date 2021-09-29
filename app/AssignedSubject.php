<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AssignedSubject extends Model
{
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];

    protected $appends = [
        'label',
        'value'
    ];


    //for init auto complte label data-> your data want to show
    public function getLabelAttribute() {
        return $this->subject->title;
    }
    
    //for init auto complte label data-> your data want to show
    public function getValueAttribute() {
        return $this->id;
    }

    //relationship
    public function subject() {
        return $this->hasOne(Subject::class,'id','subject_id');
    }
}
