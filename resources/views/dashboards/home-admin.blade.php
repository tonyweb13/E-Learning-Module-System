<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    @endsection
    @include('layouts.head', ['title' => 'Home'])
<body class="body-bg">
    @section('content')
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-8">
                    <div class="border geo-border-primary rounded">
                        <div style="background-color: #3e4e76">
                            <p style="font-size: 15px; padding:5px;color: white;">HI Ma'am Agnes USER REGISTRATIONS</p>
                        </div>
                        <div id="register-user" style="max-width: 740px;height: 400px;margin: 0px auto"></div>
                    </div>
                </div>  
                <div class="col-md-4">
                    <div class="border geo-border-primary rounded">
                        <div style="background-color: #3e4e76">
                            <p style="font-size: 15px; padding:5px;color: white;">USERS</p>
                        </div>
                        <div class="col-md-12">
                            <div class="row border" style="margin-top: -15px; padding: 10px;background-color: #eeeeee">
                                <div class="col-md-8" style="font-weight: bold;">Administrators</div>
                                <div class="col-md-4 text-right">6</div>
                            </div>
                            <div class="row border" style="padding: 10px;">
                                <div class="col-md-8" style="font-weight: bold;">Institutional Administrators</div>
                                <div class="col-md-4 text-right">133</div>
                            </div>
                            <div class="row border" style="padding: 10px;background-color: #eeeeee;">
                                <div class="col-md-8" style="font-weight: bold;">Teachers</div>
                                <div class="col-md-4 text-right">199</div>
                            </div>
                            <div class="row border" style="padding: 10px;">
                                <div class="col-md-8" style="font-weight: bold;">Students</div>
                                <div class="col-md-4 text-right">356</div>
                            </div>
                            <div class="row border" style="padding: 10px;background-color: #eeeeee;">
                                <div class="col-md-8" style="font-weight: bold;">Parents</div>
                                <div class="col-md-4 text-right">285</div>
                            </div>
                            <div class="row border" style="padding: 10px;">
                                <div class="col-md-8" style="font-weight: bold;">QA</div>
                                <div class="col-md-4 text-right">21</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br><br>
            <div class="row">
                <div class="col-md-8">
                    <div class="border geo-border-primary rounded">
                        <div style="background-color: #3e4e76">
                            <p style="font-size: 15px; padding:5px;color: white;">SALES REPORT</p>
                        </div>
                        <br>
                        <div id="sales" style="max-width: 740px;height: 400px;margin: 0px auto"></div>
                        <br><br>
                    </div>  
                </div>
                <div class="col-md-4">
                    <div class="border geo-border-primary rounded">
                        <div style="background-color: #3e4e76">
                            <p style="font-size: 15px; padding:5px;color: white;">eLearning Resources</p>
                        </div>
                        <div class="col-md-12">
                            <div class="row border" style="margin-top: -15px; padding: 10px;background-color: #eeeeee">
                                <div class="col-md-8" style="font-weight: bold;">Total Edge Subjects</div>
                                <div class="col-md-4 text-right">576</div>
                            </div>
                            <div class="row border" style="padding: 10px;">
                                <div class="col-md-8" style="font-weight: bold;">Total Ebooks</div>
                                <div class="col-md-4 text-right">576</div>
                            </div>
                        </div>
                    </div>
                    <div class="border geo-border-primary rounded" style="margin-top: 10px;">
                        <div style="background-color: #3e4e76">
                            <p style="font-size: 15px; padding:5px;color: white;">EBOOK & EDGE SUBJECT READER</p>
                        </div>
                        <div id="reader" style="max-width: 740px;height: 330px;margin: 0px auto"></div>
                    </div>
                </div>
            </div>
        </div>
        <input type="hidden" id="usersta" value="{{Auth::user()->is_deleted}}">
        <br>
        <br>
    @endsection
    @include('layouts.navbar', ['title' => 'MYEDGE LEARNING'])
</body>
</html>
<script type="text/javascript" src="/js/dashboard/admin.js"></script>
<script type="text/javascript" src="/js/alert.js"></script>