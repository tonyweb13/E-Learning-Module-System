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
            <div class="col-6">
                <form class="input-group" action="/sections/shared/{{$id ?? ''}}" autocomplete="off">
                    <div class="input-group-prepend">
                        <button class="search-btn geo-primary" data-toggle="tooltip" title="Search">
                            <i class="fa fa-search"></i>
                        </button>
                         <input type="text" class="form-control mr-12" size="30" name="keyword" placeholder="Search Class Name or Grade" value="{{$keyword}}">
                    </div>
                </form>
                <br><br>
            </div>
            <div class="col-6">
                <a href="/sections/share/{{$id ?? ''}}" class="right geo-primary mb-1 button-add" data-toggle="tooltip" title="Add Teachers/Admins">
                   New<i class="fa fa-plus"></i>
                </a>
            </div>
        </div>
        <div style="overflow: auto;" class="border">
            <table class="table text-center">
                <tr class="geo-secondary">
                    <td width="5%"></td>
                    <th width="5%">S No.</th>
                    <th width="25%">Name</th>
                    <th width="25%">User Type</th>
                    <th width="20%">Email</th>
                    <th width="20%" class="text-center">Actions</th>
                </tr>
                @foreach($results as $key=> $result)
                    <tr>
                        <td>
                            <input class="student-id" type="checkbox" id="user-id" name="user_id" value="{{$result->id}}">
                        </td>
                        <td>{{$results->firstItem() + $key}}</td>
                        <td>{{$result->user->name ?? ''}}</td>
                        <td>{{$result->user->userType->name ?? ''}}</td>
                        <td>{{$result->user->email ?? ''}}</td>
                        <td>
                            @if($result->user->userType->name == 'Institute Admin')
                                No Action Allowed
                            @else
                                <button type="button" value="{{$result->id}}" onclick="removeUser(this.value)" data-toggle="tooltip" title="Unshare Class" class="action-btn btn btn-danger text-light delete-btn mb-1">
                                    <i class="fa fa-trash"></i>
                                </button>
                            @endif
                        </td>
                    </tr>
                @endforeach
            </table>
        </div>
        <div id="page-nav">{{ $results->links() }}</div>
    @endsection
    
    @include('layouts.navbar', ['title' => 'TEACHER/ADMIN SHARED MY CLASS'])
    @include('layouts.alert')
    <script type="text/javascript" src="/js/alert.js"></script>
    <script type="text/javascript" src="/js/sections/share.js"></script>
    </body>
</html>