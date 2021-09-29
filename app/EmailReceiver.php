<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EmailReceiver extends Model
{
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];
    
    public function user() {
        return $this->hasOne(User::class,'id','user_id');
    }
    
    public function email() {
        return $this->hasOne(Email::class,'id','email_id');
    }
    
    //inbox
    public static function paginatedSearch($keyword,$currentuser){

        $results = self::with([
                                    'email'=>function($a){
                                        $a->where('is_deleted',0)
                                          ->orderBy('date_created');
                                    }
                              ])
                        ->whereHas('email',function($q) use($keyword){
                              $q->where('subject', 'LIKE', '%'.$keyword.'%')
                                ->where('is_deleted',0)
                                ->orderBy('date_created');
                         })
                        ->where('user_id',$currentuser->id)
                        ->where('is_deleted',0)
                        ->orderBy('email_id','desc')
                        ->paginate(10);

        $results->appends([
            'keyword' => $keyword,
            'search_pagination' => 10
        ]);

        return $results;
    }
}
