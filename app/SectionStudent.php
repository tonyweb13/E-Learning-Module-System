<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SectionStudent extends Model
{
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];
    public $incrementing = false;

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
        // $today = date('Y-m-d');
        // $count = self::whereDate('date_created',$today)->count() + 1;
        // return "SStudent-".date('Ymdhis')."-$count";
        
        $today = date('Y-m-d');
        $count = self::count() + 1;
        return "SStudent-".date('Ymdhis')."-$count";
    } 
    
    public function user() {
        return $this->hasOne(User::class,'id','student_id');
    }
    
    public function assessmentStudent () {
        return $this->hasOne(AssessmentStudent ::class,'id','student_id');
    }
}
