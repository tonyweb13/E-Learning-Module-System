<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];

    public function provinceId() {
        return $this->hasOne('App\Province', 'id', 'province_id');
    }

}
