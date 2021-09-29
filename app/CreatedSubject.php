<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CreatedSubject extends Model
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
        return "CS-".date('Ymdhis')."-$count";
    }
    
    public static function paginatedSearch($keyword){

        $results = self::where(function($q) use($keyword) {
                                    $q->where('name', 'LIKE', '%'.$keyword.'%');
                               })
                               ->where('is_deleted',0)
                               ->where('is_admin',1)
                               ->paginate(10);

        $results->appends([
            'keyword' => $keyword,
            'search_pagination' => 10
        ]);

        return $results;
    }
    
    public function user() {
        return $this->hasOne(User::class,'id','added_by');
    }
}
