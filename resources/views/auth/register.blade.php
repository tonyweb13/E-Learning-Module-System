@extends('auth.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-7" style="margin-top: 20px;">
            <!-- <h1 class="center" style="color: #dd5a43;">MyEDGE Learning</h1> -->
            <div style='text-align:center; width:400px; margin:0px auto;'>
                <img src='/images/logo/myedgeLogo.png' style='width:250px'/>
            </div>
            <div class="card col-md-8 content-center" style="margin-top: 15px; background-color:#214A8C; padding:20px 0px 0px 0px; border-radius:15px 15px 0px 0px;">
                <div class="card-body"  style='background-color:#FFFFFF; border:2px #214A8C solid;'>
                    <form method="POST" action="{{ route('register') }}">
                        @csrf
                        <br>
                        <p style="font-size: 22px;color: #478fca;">New Registration</p>
                        <hr>
                        <div class="form-group row">
                            <div class="col-md-12">
                                <input id="first-name" type="text" class="form-control @error('first_name') is-invalid @enderror" name="first_name" value="{{ old('first_name') }}" required autocomplete="first_name" autofocus placeholder="First Name">

                                @error('first_name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-12">
                                <input id="last-name" type="text" class="form-control @error('last_name') is-invalid @enderror" name="last_name" value="{{ old('last_name') }}" required autocomplete="last_name" autofocus placeholder="Last Name">

                                @error('last_name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-12">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" placeholder="Email">

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-12">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" placeholder="Password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-12">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password" placeholder="Confirm Password">
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-12">
                                <select class="form-control city" name="user_type_id" id="user-type-id" required>
                                    <option value="0">Sign up as</option>
                                    <option value="4">Teacher</option>
                                    <option value="5">Student</option>
                                    <option value="6">Parent</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group row" id="institute-div">
                            <div class="col-md-12">
                                <input type="text" id="institute-name" name="institute_name" class="form-control institute" placeholder="Institute Name">
                                <input type="hidden" id="institute-id" name="institute_id" class="form-control institute" value="0">
                            </div>
                        </div>

                        <div class="form-group row" id="grade-div">
                            <div class="col-md-12">
                                <select class="form-control city" name="grade_id" id="grade-id">
                                    <option value="0">Select Grade</option>
                                    @foreach($grades as $grade)
                                        <option value="{{$grade->id ?? ''}}">{{$grade->name ?? ''}}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-12">
                                <input class="form-check-input remember" type="checkbox" name="is_accept_term" id="is-accept-term" value="0">
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <label class="form-check-label" for="remember">
                                    I accept the <a href="#" onclick="openterm()" style="color: #337ab7">Terms & Condition</a>
                                </label>
                            </div>
                        </div>
                        <br><br>

                        <div class="form-group row mb-0">
                            <div class="col-md-12 ">
                                <button type="button" class="btn btn-outline-secondary btn-lg" style="width: 30%;">Reset</button>
                                <button type="submit" id="submit-bnt" class="btn btn-outline-success btn-lg" style="width: 68%;">Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="card-header content-center col-md-8" style="background-color:#214A8C; margin-bottom:50px; border-radius: 0px 0px 25px 25px;">
                @if (Route::has('register'))
                    <a class="btn btn-link" href="{{ route('login') }}" style="color: #ffee99 !important; width:100%; font-size: 16px !important">Back to Login</a>
                @endif
            </div>
        </div>
    </div>
</div>
@include('auth.terms-modal')
<script type="text/javascript" src="/js/auth/register.js"></script>
<script type="text/javascript" src="/js/alert.js"></script>
@endsection

