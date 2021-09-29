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
                    <ul class="nav nav-pills" style="background-color: #142d57;">
                        <li id="admin-li">
                            <a data-toggle="pill" href="#admin-card" onclick='return check(1)' class="active">
                                Admin</a>
                        </li>      
                        <li id="institutional-li">
                            <a data-toggle="pill" href="#institutional-card" onclick='return check(2)'>
                                Institutional Admin
                            </a>
                        </li>
                        <li id="teacher-li">
                            <a data-toggle="pill" href="#teacher-card">Teacher</a>
                        </li>
                        <li id="student-li">
                            <a data-toggle="pill" href="#student-card">Student</a>
                        </li>
                        <li id="parent-li">
                            <a data-toggle="pill" href="#parent-card">Parent</a>
                        </li>
                    </ul>
                    <input type="hidden" name="user_type" id="user-type" value="{{$user_type}}">

                    <div class="tab-content" style="background-color: #f6f3ee !important; padding: 30px;">

                        <div id="admin-card" class="tab-pane fade ">
                            @include('users.admins.index')
                        </div>
                        <div id="institutional-card" class="tab-pane fade">
                            @include('users.institutionals.index')
                        </div>
                        <div id="student-card" class="tab-pane fade in">
                            @include('users.institutionals.index')
                        </div>
                        <div id="parent-card" class="tab-pane fade in">
                            @include('users.institutionals.index')
                        </div>
                        
                    </div>
                </div>
            </div>
        @endsection
    @include('layouts.navbar', ['title' => 'USERS'])
    @include('layouts.alert')
    <script type="text/javascript" src="/js/alert.js"></script>
    <script type="text/javascript" src="/js/users/index.js"></script>
    </body>
</html>