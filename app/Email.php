<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Email extends Model
{
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];
    
    protected $appends = [
        'thread',
    ];
    
    public function getThreadAttribute() {
        return count($this->emailReply) + 1;
    }
    
    public function emailReceiver() {
        return $this->hasMany(EmailReceiver::class,'email_id','id');
    }
    
    public function emailReply() {
        return $this->hasMany(EmailReply::class,'email_id','id');
    }
    
    public function user() {
        return $this->hasOne(User::class,'id','added_by');
    }
    
    //sent
    public static function paginatedSearch($keyword,$currentuser){

        $results = self::with([
                                    'emailReceiver'
                              ])
                        ->where(function($q) use($keyword) {
                               $q->where('subject', 'LIKE', '%'.$keyword.'%');
                        })
                        ->where('added_by',$currentuser->id)
                        ->where('is_deleted',0)
                        ->paginate(10);

        $results->appends([
            'keyword' => $keyword,
            'search_pagination' => 10
        ]);

        return $results;
    }
    
}
