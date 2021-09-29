<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    <link rel="stylesheet" type="text/css" href="/css/font-awesome.min.css">
    @endsection

    @include('layouts.head', ['title' => 'EBOOKS'])
    <body class="body-bg">
        @section('content')
        <h5 class ="headline">Assign Ebook to User</h5>
        <div class="row space-title">
            <div class="col-10">
                <form class="input-group" action="/ebooks/assign/teacher/{{$id}}" autocomplete="off">
                    <div class="input-group-prepend">
                        <button class="search-btn geo-primary" data-toggle="tooltip" title="Search">
                            <i class="fa fa-search"></i>
                        </button>
                         <input type="text" class="form-control mr-2" name="keyword" placeholder="Search Name/Email/Institute/User Type" value="{{$keyword}}"  size="50">
                    </div>
                </form>
                <br><br>
            </div>
            <div class="col-md-1">
                <button type="button" class="btn btn-outline-success right" onclick="enrollUser();">Assign To User</button>
            </div>
            <div class="col-md-1">
                <a href="/ebooks/assigned/teacher/{{$id}}" class="right btn btn-info mb-1 text-light" data-toggle="tooltip" title="Browse">
                  <i class="fa fa-list"></i>&nbsp;&nbsp;Browse
               </a>
            </div>
        </div>
        <input type="hidden" class="form-control mr-2" name="ebook_id" id="ebook-id" value="{{$id}}">
        <input type="hidden" name="current_user" id="current-user" class="form-control geo-border-primary" required value="{{Auth::user()->id ?? ''}}">
        <div style="overflow: auto;" class="border" id="list-view">
            <table class="table" style="text-align: center;">
                <tr class="geo-secondary">
                    <td width="5%"></td>
                    <th width="10%">S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Institution</th>
                    <th>User Type</th>
                </tr>
                @foreach($results as $key=> $result)
                    <tr>
                        <td>
                            <input class="user-id" type="checkbox" id="user-id" name="user_id" value="{{$result->id}}">
                        </td>
                        <td>{{ $results->firstItem() + $key }}</td>
                        <td>{{$result->name ?? ''}}</td>
                        <td>{{$result->email ?? ''}}</td>
                        <td>{{$result->institute->name ?? ''}}</td>
                        <td>{{$result->userType->name ?? ''}}</td>
                    </tr>
                @endforeach  
            </table>
        </div>
        <br>
        <div id="page-nav">{{ $results->links() }}</div>
        <br><br>
    @endsection
    
    @include('layouts.navbar', ['title' => 'EBOOK USER'])
    @include('layouts.alert')
    <script type="text/javascript" src="/js/alert.js"></script>
    <script type="text/javascript" src="/js/ebooks/assigns/create.js"></script>
    </body>
</html>