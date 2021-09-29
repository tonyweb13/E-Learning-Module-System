<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    @endsection
    @include('layouts.head', ['title' => 'USERS'])
<body class="body-bg">
    @section('content')
        <div class="review-consult">
            <div class="container-reviews">
                @include('users.navbar')
                <div class="tab-content" style="background-color: #f6f3ee !important; padding: 30px;">
                    <div id="admin-card" class="tab-pane fade show active">
                        <a href="/users/students" class="right btn btn-info mb-1 text-light" data-toggle="tooltip" title="Browse">
                          <i class="fa fa-list"></i>&nbsp;&nbsp;Browse
                        </a>
                        <h5>Add New Student</h5>
                        <br>
                        <form class="border geo-border-primary rounded p-3" id="add-student-user"> 
                            @csrf
                            <input type="hidden" name="id" class="form-control geo-border-primary" value="{{$data->id ?? ''}}">
                            <div class="row">
                                <div class="col-md-3">
                                    <img src="{{$user->image ?? '/images/default.png'}}" onerror="this.src='/images/default.png'" id="image">
                                </div>
                                <div class="col-md-9">
                                    @include('users.information')
                                    <br>
                                    @include('users.address')
                                </div>
                            </div>
                            <br>
                            <div id="saving-btn" class="right">
                                <button class="btn geo-primary" value="{{$employee->id ?? ''}}" id="eid"><i class="fa fa-save"></i>&nbsp;&nbsp;Save</button>
                                <button class="btn btn-danger" type="button" id="reset_btn"><i class="fa fa-eraser"></i>&nbsp;&nbsp;Reset</button>
                            </div>
                            <br><br>
                            <input type="hidden" name="current_user" class="form-control geo-border-primary" required value="{{Auth::user()->id ?? ''}}">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    @endsection
    
    @include('layouts.navbar', ['title' => 'USERS'])
    @include('layouts.alert')
</body>
    <script type="text/javascript" src="/js/users/navbar.js"></script>
    <script type="text/javascript" src="/js/users/students/create.js"></script>
    <script type="text/javascript" src="/js/alert.js"></script>
    <script type="text/javascript" src="/js/zipcode.js"></script>

</html>