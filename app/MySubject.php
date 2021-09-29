<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class MySubject extends Model
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
        $today = date('Y-m-d');
        $count = self::whereDate('date_created',$today)->count() + 1;
        return "MS-".date('Ymdhis')."-$count";
    }


    //relationship
    public function createdSubject() {
        return $this->hasOne(CreatedSubject::class,'id','subject_id');
    }

    public function subject() {
        return $this->hasOne(CreatedSubject::class,'id','subject_id');
    }

    public static function getMySubject($user,$product_type){

      $now = Carbon::now();
      $results=self::with([
                                        'subject',
                                     ])
                              ->where('assignee',$user)
                              ->where('exparation_date', '>', $now)
                              ->whereHas('subject',function($q){
                                  $q->where('is_deleted', 0);
                               })
                              ->get();

      return $results;
    }

}
