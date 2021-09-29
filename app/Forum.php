<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Auth;

class Forum extends Model
{
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];
    
    protected $appends = [
      'total_likes',
      'is_like',
      'total_hearts',
      'is_heart',
      'total_comments',
      'liker',
      'hearter'
    ];

    //for init auto complte label data-> your data want to show
    public function getTotalLikesAttribute() {
        return count($this->forumViewer->where('like',1));
    }
    
    public function getIsLikeAttribute() {
        return $this->forumViewer->where('like',1)->where('user_id',Auth::user()->id);
    }
    
    public function getTotalHeartsAttribute() {
        return count($this->forumViewer->where('heart',1));
    }
    
    public function getIsHeartAttribute() {
        return $this->forumViewer->where('heart',1)->where('user_id',Auth::user()->id);
    }
    
    public function getTotalCommentsAttribute() {
        return count($this->forumComment);
    }
    
    public function getLikerAttribute() {
        return $this->forumViewer->where('like',1);
    }
    
    public function getHearterAttribute() {
        return $this->forumViewer->where('heart',1);
    }
    
    public function user() {
        return $this->hasOne(User::class,'id','added_by');
    }
    
    public function section() {
        return $this->hasOne(Section::class,'id','audience');
    }
    
    public function forumViewer() {
        return $this->hasMany(ForumViewer::class,'forum_id','id');
    }
    
    public function forumComment() {
        return $this->hasMany(ForumComment::class,'forum_id','id');
    }
    
    public static function paginatedSearch($keyword,$currentuser){
        
        $results = Forum::whereHas('forumViewer',function($q) use($currentuser){
                               $q->where('user_id',$currentuser->id);
                         })
                        ->orderBy('date_created','desc')
                        ->where('is_deleted',0)
                        ->get();
        
        return $results;
    }
}
