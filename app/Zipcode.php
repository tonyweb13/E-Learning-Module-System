<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Zipcode extends Model
{
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];

    public function cityId() {
        return $this->hasOne('App\City', 'id', 'city_id');
    }

}
