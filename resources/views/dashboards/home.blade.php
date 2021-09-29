<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    @endsection
    @include('layouts.head', ['title' => 'Home'])
<body class="body-bg">
    @section('content')
        <div class="col-md-12" style="background-color: #eeeeee; margin-top: -28px;">
            <div  style="padding: 10px; display: inline-flex; color: #218B82;">
                <span class="fa fa-users fa-3x"></span>
                <p style="font-size: 30px;"> 15</p>
                <p style="font-size: 30px;"> Classes</p>
            </div>
            <div  style="padding: 10px; display: inline-flex; color: #218B82;">
                <span class="fa fa-users fa-3x"></span>
                <p style="font-size: 30px;"> 20</p>
                <p style="font-size: 30px;"> Ebooks</p>
            </div>
        </div>
        <br>
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-6">
                    <div class="col-md-6">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6" style="background-color: #66cdaa; padding: 50px;">
                                    <img src="/images/logo/myEDGELogo.png" style="width: 50px;">
                                </div>
                                <div class="col-md-6" style="background-color: #9575cd;">
                                    LIBRARY
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="border geo-border-primary rounded">
                        <div style="background-color: #3e4e76">
                            <p style="font-size: 15px; padding:5px;color: white;">TODO TASK</p>
                        </div>
                        <div>
                            <p class="text-center">No Task Listed</p>
                        </div>
                    </div>
                    <br>
                    <div class="border geo-border-primary rounded">
                        <div style="background-color: #3e4e76">
                            <p style="font-size: 15px; padding:5px;color: white;">COMPLTED TASK</p>
                        </div>
                        <div>
                            <p class="text-center">No Task Listed</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="border geo-border-primary rounded">
                        <div style="background-color: #3e4e76">
                            <p style="font-size: 15px; padding:5px;color: white;">ANNOUNCEMENTS</p>
                        </div>
                        <div>
                            <p class="text-center">No announcement</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <input type="hidden" id="usersta" value="{{Auth::user()->is_deleted}}">
    @endsection
    
    @include('layouts.navbar', ['title' => 'Home'])
    <script type="text/javascript" src="/js/dashboard/home.js"></script>
    <script type="text/javascript" src="/js/alert.js"></script>
 
</body>
</html>