<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    <link rel="stylesheet" type="text/css" href="/css/font-awesome.min.css">
    @endsection

    @include('layouts.head', ['title' => 'SUBJECTS'])
    <body class="body-bg">
        @section('content')
        <h5 class ="headline">Subject Users</h5>
        <div class="row space-title">
            <div class="col-9">
                <form class="input-group" action="/subjects/assigned/teacher/{{$id}}" autocomplete="off">
                    <div class="input-group-prepend">
                        <button class="search-btn geo-primary" data-toggle="tooltip" title="Search">
                            <i class="fa fa-search"></i>
                        </button>
                         <input type="text" class="form-control mr-2" name="keyword" placeholder="Search Name/Email/Institute/User Type" value="{{$keyword}}" size="50">
                    </div>
                </form>
                <br><br>
            </div>
            <div class="col-2">
                <a href="/subjects/assign/teacher/{{$id ?? ''}}" class="right geo-primary mb-1 button-add" data-toggle="tooltip" title="Add User">
                   Enroll<i class="fa fa-plus"></i>
                </a>
            </div>
            <div class="col-md-1">
                <a href="/subjects" class="right btn btn-info mb-1 text-light" data-toggle="tooltip" title="Browse Subject">
                  <i class="fa fa-list"></i>&nbsp;&nbsp;Browse
                </a>
            </div>
        </div>
        <div style="overflow: auto;" class="border" id="list-view">
            <table class="table" style="text-align: center;">
                <tr class="geo-secondary">
                    <th width="10%">S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Institution</th>
                    <th>User Type</th>
                </tr>
                @foreach($results as $key=> $result)
                    <tr>
                        <td>{{ $results->firstItem() + $key }}</td>
                        <td>{{$result->user->name ?? ''}}</td>
                        <td>{{$result->user->email ?? ''}}</td>
                        <td>{{$result->user->institute->name ?? ''}}</td>
                        <td>{{$result->user->userType->name ?? ''}}</td>
                    </tr>
                @endforeach  
            </table>
        </div>
        <div id="page-nav">{{ $results->links() }}</div>
    @endsection
    
    @include('layouts.navbar', ['title' => 'SUBJECT USERS'])
    @include('layouts.alert')
    <script type="text/javascript" src="/js/alert.js"></script>
    </body>
</html>