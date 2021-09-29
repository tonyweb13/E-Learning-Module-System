<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UsersController extends Controller
{
    public function index(Request $request)
    {
        $keyword   = $request->keyword;
        $user_type = $request->user_type ?? 'Admin';
        $results = User::paginatedSearch($keyword,$user_type);
        return view('users.index', compact('results', 'keyword','user_type'));
    }


    public function create()
    {
        $data=null;
        return view('users.create',compact('data'));
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
