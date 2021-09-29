<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\City;
use App\Zipcode;

class ApiZipcodesController extends Controller
{
    public function selectCityWhereProvince(Request $request) {
        $cities = City::where('province_id', request('id'))->get();
        return response()->json($cities);
    }

    public function selectZipcodeWhereCity(Request $request) {
        $zipcodes = Zipcode::where('city_id', request('id'))->get();
        return response()->json($zipcodes);
    }
}
