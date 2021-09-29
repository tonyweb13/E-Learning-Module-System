<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Subject extends Model
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
        return $this->title;
    }
    
    //for init auto complte label data-> your data want to show
    public function getValueAttribute() {
        return $this->id;
    }

    //relationship
    public function grade() {
        return $this->hasOne(Grade::class,'id','grade_id');
    }

    public function guide() {
        return $this->hasOne(Guide::class,'id','edge_guide_id');
    }

    public static function paginatedSearch($keyword){

        $results = Subject::with([
                                  'grade',
                                  'guide'
                               ])
                        ->where(function($q) use($keyword) {
                                  $q->where('title','LIKE', '%'.$keyword.'%')
                                    ->orWhere('price','LIKE', '%'.$keyword.'%')
                                    ->orWhereHas('grade',function($q) use($keyword){
                                            $q->where('name','LIKE', '%'.$keyword.'%');
                                      });
                        })
                        ->where('is_deleted',0)
                        ->paginate(10);
        $results->appends([
            'keyword' => $keyword,
            'search_pagination' => 2
        ]);
        
      return $results;
    }
    
}
