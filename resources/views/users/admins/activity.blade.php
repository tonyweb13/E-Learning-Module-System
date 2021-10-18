<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css"> 
    @endsection

    @include('layouts.head', ['title' => 'USERS '])
    <body class="body-bg">
        @section('content')
            <div class="review-consult">
                <div class="container-reviews">
                    @include('users.navbar')
                    <div class="tab-content" style="background-color: #f6f3ee !important; padding: 30px;">
                        <h5 class ="headline">User Activity Log</h5>
                        <div class="row space-title">
                            <div class="col-6">
                                <form class="input-group" action="/users/admins/activity/{{$id}}" autocomplete="off">
                                    <div class="input-group-prepend col-6">
                                        <button class="search-btn geo-primary" data-toggle="tooltip" title="Search">
                                            <i class="fa fa-search"></i>
                                        </button>
                                         <input type="text" class="form-control mr-2" name="keyword" placeholder="Search Activity,Type or Id" value="{{$keyword}}">
                                    </div>
                                </form>
                                <br><br>
                            </div>
                            <div class="col-6">

                                <a href="/users/admins" class="right btn btn-info mb-1 text-light" data-toggle="tooltip" title="Browse">
                                  <i class="fa fa-list"></i>&nbsp;&nbsp;Browse
                                </a>
                            </div>
                        </div>
                        <div style="overflow: auto;">
                            <table class="table border">
                                <tr class="geo-secondary">
                                    <th width="10%">S.No</th>
                                    <th>Module</th>
                                    <th>Activity</th>
                                    <th>Activity Id</th>
                                    <th>Activity Name</th>
                                    <th>User Ip</th>
                                    <th>Date Modified</th>
                                </tr>
                                @if(count($results) > 0)
                                    @foreach($results as $key=> $result)
                                        <tr>
                                            <td>{{$results->firstItem() + $key}}</td>
                                            <td>{{$result->module ?? 'MyEdge'}}</td>
                                            <td>{{$result->activity ?? ''}}</td>
                                            <td>{{$result->activity_id ?? ''}}</td>
                                            <td>{{$result->activity_name ?? ''}}</td>
                                            <td>{{$result->ip ?? ''}}</td>
                                            <td>{{date("F j, Y, g:i a", strtotime($result->date_created))}}</td>
                                        </tr>
                                    @endforeach
                                @else
                                    <tr>
                                        <td class="text-center" colspan="7">No Activity History Found</td>
                                    </tr>
                                @endif
                            </table>
                        </div>
                        {{$results->render()}}
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