<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Activation extends Model
{
    //
    protected $table = 'activation_keys';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];


    public function teacher() {
        return $this->hasOne(User::class,'id','user_id');
    }
    public function ebook() {
        return $this->hasOne(Ebook::class,'id','book_id');
    }



}
