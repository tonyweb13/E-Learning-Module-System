<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];
    
     protected $appends = [
        'complete',
    ];

    //for init auto complte label data-> your data want to show
    public function getCompleteAttribute() {
         return ($this->house_no ?? '').' '.($this->street ?? '').' '.($this->barangay ?? '').' '.($this->zipcode->cityId->city ?? '').', '.($this->zipcode->cityId->provinceId->province ?? 'sds').' '.($this->zipcode->zip_code_number ?? '');
    }

    public function zipcode() {
        return $this->hasOne(Zipcode::class,'id','zipcode_id');
    }
}
