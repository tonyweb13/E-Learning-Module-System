<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserType extends Model
{
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];


    // public function authorizedProvince() {
    //     return $this->hasMany(AuthorizedProvince::class,'user_id','id');
    // }

    
}
