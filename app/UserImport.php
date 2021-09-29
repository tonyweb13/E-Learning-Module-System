<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserImport extends Model
{
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];
    
    protected $fillable = [
        'first_name','last_name', 'email','institute_id','user_type','grade','create_num_teacher','create_num_student','create_num_parent','added_by','is_deleted'
    ];
}
