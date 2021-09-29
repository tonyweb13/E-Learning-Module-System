<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Question;
use Auth;

class LibrariesController extends Controller
{   
    
    //quesstion bank
    public function index(Request $request)
    {
        $type='myebook';
        $keyword = $request->keyword;
        $results=Question::with([
                                    'questionType'
                                ])
                         ->where(function($q) use($keyword) {
                            $q->where('tag', 'LIKE', '%'.$keyword.'%')
                              ->orWhere('point','LIKE', '%'.$keyword.'%')
                              ->orWhereHas('questionType',function($q) use($keyword){
                                    $q->where('name','LIKE', '%'.$keyword.'%');
                                });
                          })
                         ->where('added_by',Auth::user()->id)
                         ->paginate(10);
        return view('libraries.index',compact('type','keyword','results'));
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
}
