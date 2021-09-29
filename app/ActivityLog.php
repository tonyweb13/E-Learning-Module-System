<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ActivityLog extends Model
{
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];
}
