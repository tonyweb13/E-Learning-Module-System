<!DOCTYPE html>

<html>

    @section('styles')

    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">

    <link rel="stylesheet" type="text/css" href="/css/chat.css">

    <link rel="stylesheet" type="text/css" href="/css/font-awesome.min.css">

    <style>

        .rcorners3 {

            border-radius: 15px 50px;

            background: #b0e4f9;

            padding: 20px;

        }

        .rcorners2 {

            border-radius: 10px 20px 10px;

            background: #66cdaa;

            padding: 20px;

        }

        table, th, td {

          background-color:white;

          padding: 20px;

        }



    </style>

    @endsection



    @include('layouts.head', ['title' => 'ANNOUNCEMENT'])

    <body class="body-bg">

        @section('content')

            <div class="review-consult">

                <div class="container-reviews">

                    @include('messages.navbar')

                    <div class="tab-content" style="background-color: #FFFFFF !important; padding: 30px 0px; border-top:1px #CCCCCC solid;">

                        <h4>Announcements</h4>

                        <div class="row space-title">

                            <div class="col-6">



                            </div>

                            <div class="col-6">

                                @if($currentuser->userType->name == 'Admin' || $currentuser->userType->name == 'Institute Admin' || $currentuser->userType->name == 'Teacher')

                                    <a href="/forums" class="righ mb-1 button-add orange-pastel" data-toggle="tooltip" title="View All Post" style='color:#FFFFFF !important;'>

                                       View All<i class="fa fa-eye"></i>

                                    </a>

                                    <a href="/forums/create" class="righ mb-1 button-add" data-toggle="tooltip" title="Add Post" style='background-color:#28A745; color:#FFFFFF !important;'>

                                       New<i class="fa fa-plus"></i>

                                    </a>

                                @endif



                            </div>

                        </div>

                        <div style="overflow: auto;" class="border">

                            @foreach($results as $key=> $result)

                                <div style="background-color:white;padding:20px;">

                                    <div class="row">

                                        <div class="col-xx-1" width="50%">

                                            <img src="{{$result->user->image ?? '/images/default.png'}}" class="profile-img-forum">

                                        </div>

                                        <div class="col-md-11">

                                                <div class="col-md-12 row">

                                                    <h5 style="margin-top:10px;">{{$result->user->name ?? ''}}</h5>

                                                    @if($result->added_by == $currentuser->id)

                                                        <a href="/forums/edit/{{$result->id ?? ''}}" style="margin-top:5px;" class="right btn " data-toggle="tooltip" title="Edit Post">

                                                            <i class="fas fa-edit"></i>

                                                        </a>

                                                    @endif

                                                </div>

                                                <div class="row" style="margin-left:3px;margin-top:-10px;">

                                                    <i style="margin-top:5px;" class="fas fa-users"></i>&nbsp;&nbsp;

                                                    <p>{{$result->section->grade->name ?? ''}} {{$result->section->name ?? 'public'}}</p>

                                                </div>

                                                <p style="margin-top:-15px;">

                                                    {{date("D, d M Y", strtotime($result->date_created))}}

                                                </p>

                                        </div>

                                    </div>



                                    <hr>

                                    <div>

                                            <?php

                                                echo $result->post ?? '';

                                            ?>

                                    </div>

                                    <hr>

                                    <div class="col-md-12">

                                        <div class="row">

                                            <div class="col-md-4">

                                                @if(count($result->is_like) == 0)

                                                    <button type="button" value="{{$result->id ?? ''}}" class="btn" style="background-color:white;" data-toggle="tooltip" data-html="true" title="@if(count($result->liker) == 0) Be the first Like this post @else @foreach($result->liker as $liker) {{$liker->user->name ?? 'dd'}} <br>@endforeach @endif" onclick="likeComment(this.value);">

                                                        <i class="far fa-thumbs-up"></i>

                                                        {{$result->total_likes ?? '0'}} LIKE

                                                    </button>

                                                @else

                                                    <button type="button" value="{{$result->id ?? ''}}" class="btn" style="background-color:white;" data-toggle="tooltip" data-html="true" title="@if(count($result->liker) == 0) Be the first Like this post @else @foreach($result->liker as $liker) {{$liker->user->name ?? 'dd'}} <br>@endforeach @endif" onclick="unlikeComment(this.value);">

                                                        <i class="fas fa-thumbs-up"></i>

                                                        {{$result->total_likes ?? '0'}} LIKE

                                                    </button>

                                                @endif

                                            </div>

                                            <div class="col-md-4">

                                                @if(count($result->is_heart) == 0)

                                                    <button type="button" value="{{$result->id ?? ''}}" class="btn" style="background-color:white;" data-toggle="tooltip" data-html="true" title="@if(count($result->hearter) == 0) Be the first Love this post @else @foreach($result->hearter as $hearter) {{$hearter->user->name ?? 'dd'}} <br>@endforeach @endif"  onclick="heartComment(this.value);">

                                                        <i class="far fa-heart"></i>

                                                        {{$result->total_hearts ?? '0'}} HEART

                                                    </button>

                                                @else

                                                    <button type="button" value="{{$result->id ?? ''}}" class="btn" style="background-color:white;" data-toggle="tooltip" data-html="true" title="@if(count($result->hearter) == 0) Be the first Love this post @else @foreach($result->hearter as $hearter) {{$hearter->user->name ?? 'dd'}} <br>@endforeach @endif" onclick="unheartComment(this.value);">

                                                        <i class="fas fa-heart"></i>

                                                        {{$result->total_hearts ?? '0'}} HEART

                                                    </button>

                                                @endif

                                            </div>

                                            <div class="col-md-4">

                                                <button type="button" value="{{$result->id ?? ''}}" class="btn" style="background-color:white;" onclick="comment(this.value);">

                                                    <i class="far fa-comment-alt"></i>

                                                    {{$result->total_comments ?? '0'}} COMMENT

                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                    <hr>

                                    <div class="row">

                                        <div class="col-md-11">

                                            @if($result->can_comment == 1)

                                                <input type="text" id="comment-{{$key}}" class="form-control geo-border-primary" placeholder="ADD YOUR COMMENTS HERE">

                                            @else

                                                <input type="text" id="comment-{{$key}}" class="form-control geo-border-primary" placeholder="ADD YOUR COMMENTS HERE" readonly>

                                            @endif

                                                <input type="hidden" id="forum-id-{{$key}}" value="{{$result->id ?? ''}}">

                                        </div>

                                        <div class="col-md-1 center">

                                            @if($result->can_comment == 1)

                                                <button type="button" class="btn btn-dark" value="{{$key}}" onclick="postComment(this.value)" style='background-color:#28A745;'>POST</button>

                                            @else

                                                <button type="button" class="btn btn-dark" value="{{$key}}" disabled >POST</button>

                                            @endif

                                        </div>

                                    </div>

                                </div>

                                <input type="hidden" id="current-user" class="form-control geo-border-primary" value="{{$currentuser->id ?? ''}}">

                                <br>

                            @endforeach

                        </div>

                    </div>

                </div>

            </div>

        @endsection

        @include('messages.forums.comment-modal')

        @include('layouts.navbar', ['title' => 'MESSAGE'])

        @include('layouts.alert')

        <script type="text/javascript" src="/js/alert.js"></script>

        <script type="text/javascript" src="/js/messages/forums/index.js"></script>

        <script type="text/javascript" src="/js/messages/navbar.js"></script>

    </body>

</html>
