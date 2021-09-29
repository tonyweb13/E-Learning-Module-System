@extends('auth.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-7" style="margin-top: 20px;">
            <div style='text-align:center; width:400px; margin:0px auto;'>
                <img src='/images/logo/myedgeLogo.png' style='width:250px'/>
            </div>
            <!--<h1 class="center" style="color: #dd5a43;">MyEDGE Learning</h1>-->
            <div class="card col-md-8 content-center" style="margin-top: 15px; background-color:#214A8C; padding:20px 0px 0px 0px; border-radius:15px 15px 0px 0px;">
                <div class="card-body" style='background-color:#FFFFFF; border:2px #214A8C solid;'>
                    <form method="POST" action="{{ route('login') }}">
                        @csrf
                        <br>
                        <p style="font-size: 22px;color: #478fca;">Please Enter Your Information</p>
                        <hr>
                        <div class="form-group row">
                            <div class="col-md-12">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus placeholder="Email address">

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                        <br>
                        <div class="form-group row">
                            <div class="col-md-12">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password" placeholder="Password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                        <br>
                        <div class="form-group row">
                            <div  style='width:93%; margin:0px auto;'><!-- class="col-md-6 offset-md-2" -->
                                <div class="form-check row">
                                    <div>
                                        <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <label class="form-check-label" for="remember">
                                            {{ __('Remember Me') }}
                                        </label>
                                    </div>
                                    <div style='margin-top:20px; width:100%; text-align:center;'>
                                        <button type="submit" class="btn btn-outline-primary btn-lg" style="width: 50%; background-color:#0074BC; color:#FFFFFF;">{{ __('Login') }}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="card-header content-center col-md-8" style="background-color: #214A8C; border-radius:0px 0px 15px 15px; ">
                <div class="row">
                    <div class="col-s-2" style='width:50%;'>
                        @if (Route::has('password.request'))
                            <a class="btn btn-link" style="color: #f0d954 !important; font-size: 15px !important;" href="{{ route('password.request') }}">
                                {{ __('Forgot Your Password?') }}
                            </a>
                        @endif
                    </div>
                    <div class="col-s-2" style='text-align:right !important;'>
                        @if (Route::has('register'))
                            <a class="btn btn-link" href="{{ route('register') }}" style="color: #ccff77 !important; margin-left: 105px; text-align:right; font-size: 16px !important;">Sign Up</a>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
