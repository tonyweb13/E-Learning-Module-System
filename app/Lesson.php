<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];

    public $incrementing = false;
    
    protected $appends = [
      'is_appopen',
    ];
    
    //for init auto complte label data-> your data want to show
    public function getIsAppopenAttribute() {
      
      return 0;
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
        return "L-".date('Ymdhis')."-$count";
    }


    //relationship
    public function topic() {
        return $this->hasMany(Topic::class,'lesson_id','id');
    }
}
