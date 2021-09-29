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
            <div class="col-md-6">
                <div class="row">
                    <div class="col-md-12" style="display: inline-flex;">
                        <div class="content col-md-6 dashboard-hover" id='classes_DB' onclick="location.href='/sections'" style="cursor:pointer">
                            <!--<button class="dashboard-hover"></button>-->
                        </div>
                        <!--<div class="col-md-6" style="background-color: #66cdaa; padding: 2px;height: 215px;">-->
                        <!--    <div class="col-md-12" style="display: inline-flex;">-->
                        <!--        <div class="col-md-4 sidenav-center">-->
                        <!--            <img src="/images/icon/512.png" width="130%;">-->
                        <!--        </div>-->
                        <!--        <div class="col-md-7" style="color: white;">-->
                        <!--            <h4 style="padding-top: 60px;">CLASSsssES</h4>-->
                        <!--            <p style="color: white;">View Classes you are teaching</p>-->
                        <!--        </div>-->
                        <!--    </div>-->
                        <!--</div>-->
                        &emsp;
                        <div class="content col-md-6 dashboard-hover" id='library_DB' onclick="location.href='/libraries'" style="cursor:pointer">
                            <!--<button class="dashboard-hover"></button>-->
                        </div>
                        <!--
                        <div class="col-md-6" style="background-color: #9575cd; padding: 2px;">
                            <div class="col-md-12" style="display: inline-flex;">
                                <div class="col-md-4 sidenav-center">
                                    <img src="/images/icon/text_A.png" width="130%;">
                                </div>
                                <div class="col-md-7" style="color: white;">
                                    <h4 style="padding-top: 60px;">LIBRARY</h4>
                                    <p style="color: white;">View teaching resources</p>
                                </div>
                            </div>
                        </div>
                        -->
                    </div>
                </div>
                &emsp;
                <div class="row">
                    <div class="col-md-12" style="display: inline-flex;">
                        <div class="content col-md-6 dashboard-hover" id='ebook_DB' onclick="location.href='/ebooks/get/myebooks'" style="cursor:pointer">
                            <!--<button class="dashboard-hover"></button>-->
                        </div>
                        <!--
                        <div class="col-md-6" style="background-color: #ff9955; padding: 2px;height: 240px;">
                            <div class="col-md-12" style="display: inline-flex;">
                                <div class="col-md-4 sidenav-center">
                                    <img src="/images/icon/file.png" width="130%;">
                                </div>
                                <div class="col-md-7" style="color: white;">
                                    <h4 style="padding-top: 60px;">EBOOK</h4>
                                    <p style="color: white;">Book you can read from anywhere</p>
                                </div>
                            </div>
                        </div>
                        -->
                        &emsp;
                        <div class="content col-md-6 dashboard-hover" id='products_DB' onclick="alert('Under Development');" style="cursor:pointer">
                            <!--<button class="dashboard-hover"></button>-->
                        </div>
                        <!-- <div class="content col-md-6 dashboard-hover" id='products_DB' onclick="location.href='/subjects/get/mysubjects'" style="cursor:pointer">-->
                            <!--<button class="dashboard-hover"></button>-->
                        <!--</div>-->
                        <!--
                        <div class="col-md-6" style="background-color: #71cff3; padding: 2px;">
                            <div class="col-md-12" style="display: inline-flex;">
                                <div class="col-md-4 sidenav-center">
                                    <img src="/images/icon/puzzle.png" width="130%;">
                                </div>
                                <div class="col-md-7" style="color: white;">
                                    <h4 style="padding-top: 60px;">PRODUCTS</h4>
                                    <p style="color: white;">Books you can buy</p>
                                </div>
                            </div>
                        </div>
                        -->
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <!--<div class="border geo-border-primary rounded" style="height: 100%">-->
                <div style="height: 220px; ">
                    <div>
                        <table class="table border rounded" style='border-radius: 20px 20px 0px 0px; '>
                        <tr style="background-color:#428bca;">
                            <td style="color:white;padding:15px !important;font-weight:bold;">
                                ANNOUNCEMENTS
                                <span class="right">
                                    <a href="/forums/create" data-toggle="tooltip" title="Add Announcement" class=" text-light">
                                        <i class="fas fa-plus-circle fa-lg"></i>
                                    </a>
                                </span>
                            </td>
                        </tr>
                        </table>
                    </div>
                    <div style='height: 70%; overflow-y:auto; margin-top:-20px; background-color:#e6e7e8;'>
                     
                        <table class="table border rounded" style='margin-bottom:0px !important;'>
                             @foreach($forums as $forum)
                            <tr>
                                <td>
                                   
                                    <a href="/forums/show/{{$forum->id ?? ''}}" data-toggle="tooltip" title="View Announcement" class=" text-light">
                                        @foreach($forum->forumViewer as $viewer)
                                            
                                            @if($viewer->user_id == $currentuser->id)
                                                @if($viewer->seen == 0)
                                                    <span style="color:black;font-weight:bold;">
                                                        {{$forum->user->name}} posted new announcement
                                                        <br>
                                                        {{date("D, d M Y", strtotime($forum->date_created))}}
                                                    </span>
                                                @else
                                                    <span style="color:black;">
                                                        {{$forum->user->name}} posted new announcement
                                                        <br>
                                                        {{date("D, d M Y", strtotime($forum->date_created))}}
                                                    </span>
                                                @endif
                                            @endif
                                        @endforeach
                                        
                                    </a>
                                   
                                </td>
                            </tr>
                        @endforeach

                        </table>
                        
                    </div>
                    <div style="background-color:#428bca; text-align:right; padding:5px 15px;">
                            <a href="/forums" data-toggle="tooltip" class="text-light" style="color:FFFFFF !important;">
                                    View All
                                </a>
                    </div>
                    
                </div>
                <br>
                <div  style="height: 50%;">
                    <div id="task_graph" style="width: 600px; height: 280px; margin: 0px auto"></div>
                </div>
            </div>
        </div>
    </div>
    <input type="hidden" id="usersta" value="{{Auth::user()->is_deleted}}">
    <input type="hidden" id="usersta2" value="{{Auth::user()->status}}">
    @endsection
    @include('layouts.navbar', ['title' => 'MYEDGE LEARNING'])
    @include('dashboards.spam-modal')
    <script type="text/javascript" src="/js/dashboard/teacher.js"></script>
    <script type="text/javascript" src="/js/alert.js"></script>
</body>
</html>