<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Grade extends Model
{
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $guarded = [];

    protected $appends = [
        'label',
        'value'
    ];


    //for init auto complte label data-> your data want to show
    public function getLabelAttribute() {
        return $this->name;
    }
    
    //for init auto complte label data-> your data want to show
    public function getValueAttribute() {
        return $this->id;
    }
}
