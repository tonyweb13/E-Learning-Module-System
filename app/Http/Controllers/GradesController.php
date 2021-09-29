<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Grade;

class GradesController extends Controller
{
    
    public function index()
    {
        //
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }

    public function getGrades(){

        $results = Grade::where('is_deleted',0)->get();
        return response()->json($results);
    }
}
