<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RegisterToken extends Model
{
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];
}
