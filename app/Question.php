<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
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
        return "Q-".date('Ymdhis')."-$count";
    }

    //relationship
    public function questionType() {
        return $this->hasOne(QuestionType::class,'id','question_type_id');
    } 
    
    public function answer() {
        return $this->hasMany(Answer::class,'question_id','id');
    }
}
