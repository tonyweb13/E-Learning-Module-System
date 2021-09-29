<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AnswerDetail extends Model
{
    protected $cast = ['id' => 'string'];
	protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];
}
