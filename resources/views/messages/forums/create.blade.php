<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    @endsection
    @include('layouts.head', ['title' => 'ANNOUNCEMENT'])
<body class="body-bg">
    @section('content')
        <div class="review-consult">
            <div class="container-reviews">
                @include('messages.navbar')
                <div class="tab-content" style="background-color: #FFFFFF !important; padding: 30px 0px; border-top:1px #CCCCCC solid;">
                    <a href="/forums" class="right btn btn-info mb-1 text-light" data-toggle="tooltip" title="Browse">
                      <i class="fa fa-list"></i>&nbsp;&nbsp;Browse
                    </a>
                    <h5>Post New Announcement</h5>
                    <br>
                    <form class="border geo-border-primary rounded p-3" id="add-forum"> 
                        @csrf
                        <h5>Announcement Information</h5>
                        <input type="hidden" name="forum_id" id="forum-id" class="form-control geo-border-primary" value="{{$data->id ?? ''}}">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row pl-3 pr-3">
                                    <div class="col-md-6 p-1">
                                        <label>Who can see your post?</label>
                                        <select class="form-control" id="audience" name="audience">
                                                <option>Select Audince</option>
                                                @if($currentuser->userType->name == 'Institute Admin' || $currentuser->userType->name == 'Admin')
                                                    <option value="public">Public</option>
                                                @endif
                                                @foreach($sections as $section)
                                                    <option value="{{$section->id ?? ''}}">{{$section->grade->name ?? ''}} {{$section->name ?? ''}}</option>
                                                @endforeach
                                        </select>
                                    </div>
                                    <div class="col-md-6 p-1">
                                        <label>Can Comment to you post?</label>
                                        <select name="comment" id="comment" class="form-control">
                                          <option value="0">No</option>
                                          <option value="1">Yes</option>
                                        </select>
                                    </div>
                                </div>
                                <br><br>
                                <div class="row pl-3 pr-3" style='padding:0px !important;'>
                                    @include('authoring-tool')
                                </div>
                                <input type="hidden" name="editor_input" id="editor-input" class="form-control geo-border-primary" >
                            </div>
                        </div>
                        <br><br>
                        <div class="right">
                            <button class="btn geo-primary" value="{{$employee->id ?? ''}}" id="eid"><i class="fa fa-save"></i>&nbsp;&nbsp;Save</button>
                            <button class="btn btn-danger" type="button" id="reset_btn"><i class="fa fa-eraser"></i>&nbsp;&nbsp;Reset</button>
                        </div>
                        <br><br>
                        <input type="hidden" name="current_user" class="form-control geo-border-primary" required value="{{Auth::user()->id ?? ''}}">
                    </form>
                </div>
            </div>
        </div>
    @endsection
    
    @include('layouts.navbar', ['title' => 'WORKBOOK'])
    @include('layouts.alert')
 
</body>

  <script type="text/javascript" src="/js/alert.js"></script>
  <script type="text/javascript" src="/js/messages/navbar.js"></script>
  <script type="text/javascript" src="/js/authoring-tool.js"></script>
  <script type="text/javascript" src="/js/messages/forums/create.js"></script>
</html>