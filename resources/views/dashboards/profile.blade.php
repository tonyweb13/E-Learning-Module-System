<!DOCTYPE html>

<html>

    @section('styles')

    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">

    @endsection

    @include('layouts.head', ['title' => 'My Profile'])

    <body class="body-bg">

        @section('content')

          <form class="border geo-border-primary rounded p-3" id="my-profile">

            <div class="col-md-12">

                <div class="row">

                    <div class="col-md-3">

                        <img src="{{$data->image ?? '/images/no_image.png'}}" width="80%;" style="border-radius: 50%;" class="geo-border-primary border mt-2" id="image">

                        <button value="/images/no_image.png" class="btn geo-primary mt-1" id="select_img" type="button" style="width: 80%;">Upload image</button>

                        <input type="file"hidden name="image" id="image_select">

                    </div>

                    <div class="col-md-9">

                        <h5>Personal Information</h5>

                        <div class="row">

                            <div class="col-md-12">

                                <div class="row pl-3 pr-3">

                                    <div class="col-md-4 p-1">

                                        <label>First Name</label>

                                        <input type="text" name="first_name" class="form-control geo-border-primary" required maxlength="100" placeholder="Insert Name" value="{{$data->first_name ?? ''}}">

                                    </div>

                                    <div class="col-md-4 p-1">

                                        <label>Last Name</label>

                                        <input type="text" name="last_name" class="form-control geo-border-primary" required maxlength="100" placeholder="Insert Name" value="{{$data->last_name ?? ''}}">

                                    </div>



                                    <div class="col-md-4 p-1">

                                        <label>Email</label>

                                        <input type="text" name="email" class="form-control geo-border-primary" readonly maxlength="100" placeholder="Insert Name" value="{{$data->email ?? ''}}">

                                    </div>

                                </div>

                                <div class="row pl-3 pr-3">

                                	<div class="col-md-4 p-1">

                                        <label>Gender</label>

                                        <select class="form-control geo-border-primary" name="gender" required>

                                            @if($data->gender == 'female')

                                                <option value="female" selected>Female</option>

                                                <option value="male">Male</option>

                                            @else

                                                <option value="female">Female</option>

                                                <option value="male" selected>Male</option>

                                            @endif

                                        </select>

                                    </div>

                                    <div class="col-md-4 p-1">

                                        <label>Birthday</label>

                                        <input type="date" name="birthday" class="form-control geo-border-primary" required maxlength="100" placeholder="Admin Password" value="{{$data->birthday ?? ''}}">

                                    </div>

                                    <div class="col-md-4 p-1">

                                        <label>Institution</label>

                                        <input type="text" name="institute" id="institute" class="form-control geo-border-primary" required maxlength="100" readonly placeholder="Insert Institute Name" value="{{$data->institute->name ?? ''}}">

                                        <input type="hidden" name="institute_id" id="institute-id" class="form-control geo-border-primary" value="{{$data->institute->id ?? ''}}">

                                    </div>

                                </div>

                                @if($data->userType->name == 'Student')

                                    <div class="row pl-3 pr-3">

                                        <div class="col-md-4 p-1">

                                            <label>Grade</label>

                                            <input type="text" name="grade" id="grade" class="form-control geo-border-primary" maxlength="100" placeholder="Select Grade" value="{{$data->grade->name ?? ''}}">

                                            <input type="text" name="grade_id" id="grade-id" class="form-control geo-border-primary" maxlength="100" value="{{$data->grade->id ?? ''}}">

                                        </div>

                                    </div>

                                @endif

                                @include('users.address')

                            </div>

                        </div>

                    </div>

                </div>

                <br>

                <div id="saving-btn" class="right">

                    <button class="btn btn-success" value="{{$employee->id ?? ''}}" id="eid"><i class="fa fa-save"></i>&nbsp;&nbsp;Save</button>

                    <button type="button" class="btn btn-dark text-light" onclick="PasswordModal();"><i class="fas fa-lock"></i>&nbsp;&nbsp;Change Password</button>

                </div>

                <br><br>

            </div>

          </form>

        @endsection

        @include('dashboards.profile-password-modal')

        @include('layouts.navbar', ['title' => 'MY PROFILE'])

        @include('layouts.alert')

    </body>

    <script type="text/javascript" src="/js/zipcode.js"></script>

    <script type="text/javascript" src="/js/alert.js"></script>

    <script type="text/javascript" src="/js/dashboard/profile.js"></script>

</html>
