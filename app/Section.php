<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Auth;

class Section extends Model
{
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];
    public $incrementing = false;
    
    protected $appends = [
      'insti_sec',
      'start',
      'end',
      'serimg'
    ];
    
    //for init auto complte label data-> your data want to show
    public function getInstiSecAttribute() {
      
      return $this->user->institute_id ?? '';
    }
    
    public function getStartAttribute() {
      
      return date("M j, Y", strtotime($this->start_date));
    }
    
    public function getEndAttribute() {
      
      return date("M j, Y", strtotime($this->end_date));
    }
    
    public function getSerimgAttribute() {
      
      $serverurl=env('APP_URL');
      
      return $serverurl . $this->image;
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
        $today = date('Ymdhis');
        $count = self::whereDate('date_created',$today)->count() + 1;
        return "Section-".date('Ymdhis')."-$count";
    } 

    //relationship
    public function grade() {
        return $this->hasOne(Grade::class,'id','grade_id');
    }
    
    public function sectionStudent() {
        return $this->hasMany(SectionStudent::class,'section_id','id');
    }
    
    public function sectionTeacher() {
        return $this->hasMany(SectionTeacher::class,'section_id','id');
    }
    
    public function user() {
        return $this->hasOne(User::class,'id','added_by');
    }
    
    //for student
    public static function paginatedSearchStudent($keyword,$currentuser){
        
        
        $results = self::with([
                                  'grade',
                                  'sectionStudent'
                               ])
                        ->where('status',1)
                        ->where('is_deleted',0)
                        ->whereHas('sectionStudent',function($q) use($currentuser){
                                $q->where('student_id',$currentuser);
                        })
                        ->where(function($q) use($keyword) {
                                  $q->where('name', 'LIKE', '%'.$keyword.'%')
                                    ->orWhereHas('grade',function($q) use($keyword){
                                        $q->where('name','LIKE', '%'.$keyword.'%');
                                    });
                        }) 
                        ->paginate(12);
        
        $results->appends([
            'keyword' => $keyword,
            'search_pagination' => 12
        ]);
      
      return $results;
    }
    
    //for teacher
    public static function paginatedSearch($keyword,$currentuser){

        $results = self::with([
                                   'grade',
                                   'sectionTeacher'=>function($q) use($currentuser){
                                        $q->where('teacher_id',$currentuser->id)
                                          ->where('is_deleted',0);   
                                    }
                               ])
                        ->where('is_deleted',0) 
                        ->where('added_by',$currentuser->id)
                        ->where(function($q) use($keyword) {
                                  $q->where('name', 'LIKE', '%'.$keyword.'%')
                                    ->orWhereHas('grade',function($q) use($keyword){
                                        $q->where('name','LIKE', '%'.$keyword.'%');
                                    });
                        })
                        ->orWhereHas('sectionTeacher',function($q) use($currentuser){
                                $q->where('teacher_id',$currentuser->id)
                                  ->where('is_deleted',0);
                        })
                        ->paginate(12);
        
        $results->appends([
            'keyword' => $keyword,
            'search_pagination' => 12
        ]);
      
        return $results;
    }
    
    //institutional admin
    public static function paginatedSearchInstiAdmin($keyword,$currentuser){
        
        
        $results = self::with([
                               'grade',
                              ])
                        ->where('is_deleted',0) 
                        ->whereHas('user',function($q) use($currentuser){
                                $q->where('institute_id',$currentuser->institute_id);
                        })
                        ->where(function($q) use($keyword) {
                                  $q->where('name', 'LIKE', '%'.$keyword.'%')
                                    ->orWhereHas('grade',function($q) use($keyword){
                                        $q->where('name','LIKE', '%'.$keyword.'%');
                                    });
                        })
                        ->paginate(12);
                        
        
        // $results = self::with([
        //                           'grade',
        //                           'sectionTeacher'=>function($q) use($currentuser){
        //                                 $q->where('teacher_id',$currentuser->id)
        //                                   ->where('is_deleted',0);   
        //                             }
        //                       ])
        //                 ->where('is_deleted',0) 
        //                 ->where(function($q) use($keyword) {
        //                           $q->where('name', 'LIKE', '%'.$keyword.'%')
        //                             ->orWhereHas('grade',function($q) use($keyword){
        //                                 $q->where('name','LIKE', '%'.$keyword.'%');
        //                             });
        //                 })
        //                 ->where('added_by',$currentuser->id) //add those class that was assign to you by your 
        //                 ->orWhereHas('sectionTeacher',function($q) use($currentuser){
        //                         $q->where('teacher_id',$currentuser->id)
        //                           ->where('is_deleted',0);
        //                 })
        //                 ->paginate(12);
        
        
        $results->appends([
            'keyword' => $keyword,
            'search_pagination' => 12
        ]);
      
        return $results;
    }
    
    // public static function paginatedSearchInstiAdmin($keyword,$currentuser){
        
    //     $results = self::with([
    //                               'grade',
    //                               'user',
    //                               'sectionTeacher'
    //                           ])
    //                     ->where(function($q) use($keyword) {
    //                         $q->where('name', 'LIKE', '%'.$keyword.'%')
    //                           ->orWhereHas('grade',function($q) use($keyword){
    //                                 $q->where('name','LIKE', '%'.$keyword.'%');
    //                             });
    //                         })
    //                     ->where('is_deleted',0) 
    //                     ->where('added_by',$currentuser->id)
    //                     ->orWhereHas('user',function($q) use($currentuser,$keyword){
    //                           $q->where('institute_id',$currentuser->institute_id)
    //                             ->whereHas('section',function($q) use($currentuser,$keyword){
    //                                 $q->where('is_deleted',0)
    //                                   ->where('status',1)
    //                                   ->where(function($q) use($keyword) {
    //                                         $q->where('name', 'LIKE', '%'.$keyword.'%')
    //                                         ->orWhereHas('grade',function($q) use($keyword){
    //                                                 $q->where('name','LIKE', '%'.$keyword.'%');
    //                                         });
    //                                     });
    //                             });
    //                     })
    //                     ->paginate(12);
        
    //     // $results = self::with([
    //     //                           'grade',
    //     //                           'user',
    //     //                           'sectionTeacher'
    //     //                       ])
    //     //                 ->where(function($q) use($keyword) {
    //     //                           $q->where('name', 'LIKE', '%'.$keyword.'%')
    //     //                             ->orWhereHas('grade',function($q) use($keyword){
    //     //                                 $q->where('name','LIKE', '%'.$keyword.'%');
    //     //                             });
    //     //                 })
    //     //                 ->where('status',1) //uploaded class
    //     //                 ->whereHas('user',function($q) use($keyword){
    //     //                     $q->where('name','LIKE', '%'.$keyword.'%');
    //     //                  })
    //     //                 ->where('is_deleted',0) 
    //     //                 ->whereHas('user',function($q) use($currentuser){
    //     //                       $q->where('institute_id',$currentuser->institute_id);
    //     //                  })
    //     //                 ->orWhere('added_by',$currentuser->id)
    //     //                 ->paginate(12);
        
    //     $results->appends([
    //         'keyword' => $keyword,
    //         'search_pagination' => 12
    //     ]);
      
    //   return $results;
    // }
    
}
