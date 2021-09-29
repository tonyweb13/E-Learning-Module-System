<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];

    public $incrementing = false;
    
    protected $appends = [
      'servlink',
    ];
    
    //for init auto complte label data-> your data want to show
    public function getServlinkAttribute() {
      
        if($this->content_type == 'doc'){
            
            $serverurl=env('APP_URL');
            $data=$serverurl.$this->content;
        }else{
            $data=null;
        }
      return $data;
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
        return "T-".date('Ymdhis')."-$count";
    }
}
