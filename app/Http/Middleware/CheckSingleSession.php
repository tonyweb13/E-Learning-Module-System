<?php

namespace App\Http\Middleware;

use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Auth;
use Closure;

class CheckSingleSession
{
    public function handle($request, Closure $next)
    {
        $previous_session = Auth::User()->session_id;
        if ($previous_session !== Session::getId()) {

            Session::getHandler()->destroy($previous_session);

            $request->session()->regenerate();
            Auth::user()->session_id = Session::getId();

            Auth::user()->save();
        }
        return $next($request);
    }
}
