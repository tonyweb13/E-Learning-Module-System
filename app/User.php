<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Auth;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name','last_name','name', 'email', 
        'password','user_type_id','institute_id',
        'grade_id','is_accept_term','image','gender',
        'status','birthday','about_me','added_by',
        'updated_by','create_num_teacher','create_num_student',
        'create_num_parent','is_notify'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // conection
    public function userType() {
        return $this->hasOne(UserType::class,'id','user_type_id');
    }

    public function institute() {
        return $this->hasOne(Institute::class,'id','institute_id');
    }

    public function address() {
        return $this->hasOne(Address::class,'user_id','id');
    }

    public function grade() {
        return $this->hasOne(Grade::class,'id','grade_id');
    }
    
    
    public function submittedAssessment() {
        return $this->hasMany(SubmittedAssessment::class,'added_by','id');
    }
    
    public function activityLog() {
        return $this->hasMany(ActivityLog::class,'user_id','id');
    }
    
    public function section() {
        return $this->hasMany(Section::class,'added_by','id');
    }

    protected $appends = [
        'is_active',
        'last_login',
        'label',
        'value'
    ];

    //for init auto complte label data-> your data want to show
    public function getIsActiveAttribute() {
        if($this->status == 1){
            return 'Active';
        }else{
            return 'In Active';
        }
    }
    
    public function getLastLoginAttribute() {
        
        $data=$this->activityLog->where('activity','login')->sortByDesc('date_created')->first();
     
        if($data){
            
            return date("F j, Y, g:i a", strtotime($data->date_created));
            
        }else{
            return 'No login history';
        }  
    }
    
    public function getLabelAttribute() {
        return $this->name .'<'.$this->email.'>';
    }
    
    //for init auto complte label data-> your data want to show
    public function getValueAttribute() {
        return $this->id;
    }


    //users
    public static function paginatedSearch($keyword,$user_type){
        
        if(Auth::user()->userType->name == 'Institute Admin'){
            
            $results = User::with([
                                'userType',
                                'institute',
                                'grade'
                            ])
                      ->where(function($q) use($keyword) {
                            $q->where('name', 'LIKE', '%'.$keyword.'%')
                              ->orWhere('email', 'LIKE', '%'.$keyword.'%')
                              ->orwhereHas('institute',function($q) use($keyword){
                                    $q->where('name', 'LIKE', '%'.$keyword.'%');
                                });
                       })
                      ->whereHas('userType',function($q) use($user_type){
                            $q->where('name',$user_type);
                        })
                      ->where('institute_id',Auth::user()->institute_id ?? '')
                      ->where('is_deleted',0)
                      ->orderBy('name')
                      ->paginate(10); 
                      
        }else{
            
            $results = User::with([
                                'userType',
                                'institute',
                                'grade'
                            ])
                      ->where(function($q) use($keyword) {
                            $q->where('name', 'LIKE', '%'.$keyword.'%')
                              ->orWhere('email', 'LIKE', '%'.$keyword.'%')
                              ->orwhereHas('institute',function($q) use($keyword){
                                    $q->where('name', 'LIKE', '%'.$keyword.'%');
                                });
                       })
                      ->whereHas('userType',function($q) use($user_type){
                            $q->where('name',$user_type);
                        })
                      ->where('is_deleted',0)
                      ->orderBy('name')
                      ->paginate(10);   
        }
                      
        $results->appends([
            'keyword' => $keyword,
            'search_pagination' => 10
        ]);
        
        return $results;
    }

    // admin
    public static function paginatedSearchAdmin($keyword){

          $results = User::with([
                                    'userType',
                                    'institute'
                                ])
                         ->where(function($q) use($keyword) {
                                      $q->where('name', 'LIKE', '%'.$keyword.'%')
                                        ->where('email', 'LIKE', '%'.$keyword.'%');
                                 })
                         ->whereHas('userType',function($q){
                                $q->where('name','Admin');
                          })
                         ->whereHas('institute',function($q) use($keyword){
                                $q->where('name', 'LIKE', '%'.$keyword.'%');
                          })
                         ->where('is_deleted',0)
                         ->orderBy('name')
                         ->paginate(10);

          return $results;
    }

    //institute
    public static function paginatedSearchInstitute($keyword){

          $results = User::with([
                                    'userType',
                                    'institute'
                                ])
                         ->where(function($q) use($keyword) {
                                      $q->where('name', 'LIKE', '%'.$keyword.'%')
                                        ->where('email', 'LIKE', '%'.$keyword.'%');
                                 })
                         ->whereHas('userType',function($q){
                                $q->where('name','Institute Admin');
                          })
                         ->whereHas('institute',function($q) use($keyword){
                                $q->where('name', 'LIKE', '%'.$keyword.'%');
                          })
                         ->where('is_deleted',1)
                         ->orderBy('name')
                         ->paginate(10);

          return $results;
    }

    //get all user in institute
    public static function paginateSearchUserOfInstitute($keyword,$institute,$userType,$enrollStudents,$grade_id){

      if($userType == 'Student'){

        $results = User::with([
                                  'userType',
                                  'institute'
                              ])
                        ->where('institute_id',$institute)
                        ->where('is_deleted',0)
                        ->where('grade_id',$grade_id)
                        ->whereNotIn('id',$enrollStudents)
                        ->where(function($q) use($keyword) {
                                    $q->where('name', 'LIKE', '%'.$keyword.'%')
                                      ->orWhere('gender', 'LIKE', '%'.$keyword.'%')
                                      ->orWhere('email', 'LIKE', '%'.$keyword.'%');
                               })
                        ->whereHas('userType',function($q) use($userType){
                              $q->where('name',$userType);
                        })
                        ->orderBy('name')
                       ->paginate(10);

      }else{
        $results = User::with([
                                  'userType',
                                  'institute'
                              ])
                        ->where('institute_id',$institute)
                        ->whereNotIn('id',$enrollStudents)
                        ->where('is_deleted',0)
                        ->where(function($q) use($keyword) {
                                    $q->where('name', 'LIKE', '%'.$keyword.'%')
                                      ->orWhere('gender', 'LIKE', '%'.$keyword.'%')
                                      ->orWhere('email', 'LIKE', '%'.$keyword.'%');
                               })
                        ->whereHas('userType',function($q) use($userType){
                              $q->where('name',$userType);
                        })
                        ->orderBy('name')
                        ->paginate(10);
      }

      $results->appends([
          'keyword' => $keyword,
          'search_pagination' => 10
      ]);
      return $results;
    }

    //user enroll to the institute
    public static function paginateSearchUserOfInstituteEnroll($keyword,$institute,$userType,$enrollStudents){

        $results = User::with([
                                  'userType',
                                  'institute'
                              ])
                       ->where(function($q) use($keyword) {
                                    $q->where('name', 'LIKE', '%'.$keyword.'%')
                                      ->orWhere('gender', 'LIKE', '%'.$keyword.'%')
                                      ->orWhere('email', 'LIKE', '%'.$keyword.'%');
                               })
                       ->whereHas('userType',function($q) use($userType){
                              $q->where('name',$userType);
                        })
                       ->where('institute_id',$institute)
                       ->whereIn('id',$enrollStudents)
                       ->where('is_deleted',0)
                       ->orderBy('name')
                       ->paginate(10);

        $results->appends([
            'keyword' => $keyword,
            'search_pagination' => 2
        ]);
        return $results;
    }

}
