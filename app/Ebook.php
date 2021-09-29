<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Auth;
use DB;

class Ebook extends Model
{
   
   	protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];

    protected $appends = [
        'file_name',
        'offline_file_name',
    ];


    //for init auto complte label data-> your data want to show
    public function getFileNameAttribute() {
        return basename($this->file);
    }

    public function getOfflineFileNameAttribute() {
        return basename($this->sample_file);
    }

    public function subject() {
      return $this->hasOne(Subject::class,'id','subject_id');
    }

    //get pebook for admin
    public static function paginatedSearch($keyword){
        
    
        $results = Ebook::with([
                                'subject'
                             ])
                      ->where(function($q) use($keyword) {
                            $q->where('ebook_title', 'LIKE', '%'.$keyword.'%')
                              ->orWhere('price','LIKE','%'.$keyword.'%');
                      })
                      ->where('is_deleted',0)
                      ->orderBy('ebook_title')
                      ->paginate(12);
        $results->appends([
            'keyword' => $keyword,
            'search_pagination' => 12
        ]);
        
        return $results;
    }

    //get my ebook
    public static function paginatedSearchMyEbook($keyword){

        $results = AsignedEbook::with([
                                    'ebook',
                                    'ebook.subject'
                                  ])
                            ->whereHas('ebook',function($q) use($keyword){
                                   $q->where('ebook_title', 'LIKE', '%'.$keyword.'%')
                                     ->orWhere('price','LIKE','%'.$keyword.'%')
                                     ->where('is_deleted',0);
                            })
                            ->where('user_id',Auth::user()->id)
                            ->where('is_deleted',0)
                            ->orderBy('ebook_title')
                            ->paginate(12);
        $results->appends([
            'keyword' => $keyword,
            'search_pagination' => 12,
        ]);
      
        return $results;
    }
    public function keys()
    {
        return $this->hasMany(Activation::class, 'book_id', 'id');
    }
        public function keys_claimed()
    {
        return $this->hasMany(Activation::class, 'book_id', 'id')->where('status',1);
    }
        public function myActivated()
    {
        return $this->hasOne(Activation::class, 'user_id', 'id');
    }
        public function scopeActivated($query)
    {
        return $query->whereHas('keys',function($q){
            return $q->where('user_id', \Auth::user()->id);
        })->get();
    }
}
