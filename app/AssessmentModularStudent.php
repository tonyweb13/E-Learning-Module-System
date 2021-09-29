<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AssessmentModularStudent extends Model
{
    protected $cast = ['id' => 'string'];
	protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];
    
    public function user() {
        return $this->hasOne(User::class,'id','student_id');
    }
}
