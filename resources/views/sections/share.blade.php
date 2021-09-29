<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    <link rel="stylesheet" type="text/css" href="/css/font-awesome.min.css">
    @endsection
    @include('layouts.head', ['title' => 'CLASSES'])
    <body class="body-bg">
        @section('content')
        <h5 class ="headline">Browse</h5>
        <div class="row space-title">
            <div class="col-10">
                <form class="input-group" action="/sections/share/{{$section->id ?? ''}}" autocomplete="off">
                    <div class="input-group-prepend">
                        <button class="search-btn geo-primary" data-toggle="tooltip" title="Search">
                            <i class="fa fa-search"></i>
                        </button>
                         <input type="text" class="form-control mr-12" size="30" name="keyword" placeholder="Search Class Name or Grade" value="{{$keyword}}">
                    </div>
                </form>
                <br><br>
            </div>
            <div class="col-1">
                <button type="button" class="btn btn-outline-success right" onclick="share();">Share My Class</button>
            </div>
            <div class="col-md-1">
                <a href="/sections/shared/{{$section->id}}" class="right btn btn-info mb-1 text-light" data-toggle="tooltip" title="Browse Share User">
                    <i class="fa fa-list"></i>&nbsp;&nbsp;BACK
                </a>
            </div>
        </div>
        <input type="hidden" name="section_id" id="section-id" class="form-control geo-border-primary" value="{{$section->id ?? ''}}">
        <input type="hidden" name="current_user" id="current-user" class="form-control geo-border-primary" required value="{{Auth::user()->id ?? ''}}">
        <div style="overflow: auto;" class="border">
            <table class="table text-center">
                <tr class="geo-secondary">
                    
                    <td width="5%"></td>
                    <th width="5%">S No.</th>
                    <th width="30%">Teacher Name</th>
                    <th width="30%">Email</th>
                    <th width="30%">Privilege</th>
                </tr>
                @foreach($results as $key=> $result)
                    <tr>
                        <td>
                            <input class="student-id" type="checkbox" id="user-id-{{$key}}" name="user_id" index={{$key}} value="{{$result->id}}">
                        </td>
                        <td>{{$results->firstItem() + $key}}</td>
                        <td>{{$result->name ?? ''}}</td>
                        <td>{{$result->email ?? ''}}</td>
                        <td>
                            <div style="display: inline-flex;">
                                <label>Can create content</label>&emsp;&emsp;
                                <input class="radio-c" type="checkbox" id="create-priv-y-{{$key}}" index={{$key}} name="create_priv" value="1">&nbsp;YES&emsp;
                                <input class="radio-c" type="checkbox" id="create-priv-n-{{$key}}" index={{$key}} name="create_priv" value="0">&nbsp;NO&emsp;
                            </div>
                            <div style="display: inline-flex;">
                                <label>Can delete content</label>&emsp;&emsp;
                                <input class="radio-d" type="checkbox" id="delete-priv-y-{{$key}}" index={{$key}} name="delete_priv" value="1">&nbsp;YES&emsp;
                                <input class="radio-d" type="checkbox" id="delete-priv-n-{{$key}}" index={{$key}} name="delete_priv" value="0">&nbsp;NO&emsp;
                            </div>
                            <div style="display: inline-flex;">
                                <label>Can edit content&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>&emsp;&emsp;
                                <input class="radio-e" type="checkbox" id="edit-priv-y-{{$key}}" index={{$key}} name="edit_priv" value="1">&nbsp;YES&emsp;
                                <input class="radio-e" type="checkbox" id="edit-priv-n-{{$key}}" index={{$key}} name="edit_priv" value="0">&nbsp;NO&emsp;
                            </div>
                            <div style="display: inline-flex;">
                                <label>Can assign content</label>&emsp;&emsp;
                                <input class="radio-a" type="checkbox" id="asign-priv-y-{{$key}}" index={{$key}} name="asign_priv" value="1">&nbsp;YES&emsp;
                                <input class="radio-a" type="checkbox" id="asign-priv-n-{{$key}}" index={{$key}} name="asign_priv" value="0">&nbsp;NO&emsp;
                            </div>
                        </td>
                    </tr>
                @endforeach
            </table>
        </div>
        <div id="page-nav">{{ $results->links() }}</div>
    @endsection
    
    @include('layouts.navbar', ['title' => 'SHARE MY CLASS'])
    @include('layouts.alert')
    <script type="text/javascript" src="/js/alert.js"></script>
    <script type="text/javascript" src="/js/sections/share.js"></script>
    </body>
</html>