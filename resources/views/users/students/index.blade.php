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
                        <h5 class ="headline">Browse</h5>
                        <div class="row space-title">
                            <div class="col-6">
                                <form class="input-group" action="/users/students" autocomplete="off">
                                    <div class="input-group-prepend col-6">
                                        <button class="search-btn geo-primary" data-toggle="tooltip" title="Search">
                                            <i class="fa fa-search"></i>
                                        </button>
                                         <input type="text" class="form-control mr-2" name="keyword" placeholder="Search Name, Email or Institute" value="{{$keyword}}">
                                    </div>
                                </form>
                                <br><br>
                            </div>
                            <div class="col-6">
                                
                                <a href="/users/students/create" class="right geo-primary mb-1 button-add" data-toggle="tooltip" title="Add Student">
                                   New<i class="fa fa-plus"></i>
                                </a>
                                
                            </div>
                        </div>
                        <div style="overflow: auto;">
                            <table class="table border">
                                <tr style="background-color:#0074bc;color:white;">
                                    <th width="10%">S.No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Institution</th>
                                    <th>Status</th>
                                    <th>Last Login</th>
                                    <th>Action</th>
                                    @foreach($results as $key=> $result)
                                        <tr>
                                            <td>{{$key + 1}}</td>
                                            <td>{{$result->name ?? ''}}</td>
                                            <td>{{$result->email ?? ''}}</td>
                                            <td>{{$result->institute->name ?? ''}}</td>
                                            <td>{{$result->is_active ?? 'Active'}}</td>
                                            <td>{{$result->last_login ?? ''}}</td>
                                            <td>
                                                <a href="/users/students/edit/{{$result->id}}" data-toggle="tooltip" title="Edit User" class="action-btn btn btn-primary text-light mb-1">
                                                    <i class="fa fa-edit"></i>
                                                </a>
                                                <a href="/users/students/activity/{{$result->id}}" data-toggle="tooltip" title="Activity Logs" class="action-btn btn green-pastel text-light mb-1">
                                                    <i class="fas fa-chalkboard-teacher"></i>
                                                </a>
                                                @if($result->is_suspend == 0)
                                                    <button type="button" value="{{$result->id}}" onclick="suspendData(this.value)" data-toggle="tooltip" title="Suspend User" class="action-btn btn btn-secondary text-light">
                                                        <i class="fas fa-minus-circle"></i>
                                                    </button>
                                                @else
                                                    <button type="button" value="{{$result->id}}" onclick="unSuspendData(this.value)" data-toggle="tooltip" title="Unsuspend User" class="action-btn btn btn-warning text-light">
                                                        <i class="fas fa-minus-circle"></i>
                                                    </button>
                                                @endif
                                                <button type="button" value="{{$result->id}}" onclick="deleteData(this.value)" data-toggle="tooltip" title="Delete User" class="action-btn btn btn-danger text-light delete-btn mb-1">
                                                    <i class="fa fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tr>
                            </table>
                        </div>
                        <div id="page-nav">{{ $results->links() }}</div>
                    </div>
                </div>
            </div>
        @endsection
    @include('layouts.navbar', ['title' => 'USERS'])
    @include('layouts.alert')
    <script type="text/javascript" src="/js/alert.js"></script>
    <script type="text/javascript" src="/js/users/navbar.js"></script>
    <script type="text/javascript" src="/js/users/admins/index.js"></script>
    </body>
</html>