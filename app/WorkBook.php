<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WorkBook extends Model
{
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];

    public static function paginatedSearch($keyword,$type){

      $results = self::where(function($q) use($keyword) {
                                  $q->where('title', 'LIKE', '%'.$keyword.'%');
                             })
                             ->where('type',$type)
                             ->where('is_deleted',0)
                             ->paginate(10);

      return $results;
    }
}
