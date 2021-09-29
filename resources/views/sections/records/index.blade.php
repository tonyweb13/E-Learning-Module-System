<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    @endsection
    @include('layouts.head', ['title' => 'CLASS'])
    <body class="body-bg">
        @section('content')
            <h5>CLASS- {{$section->grade->name}} {{$section->name}}</h5>
            <br>
            <div class="review-consult">
                <div class="container-reviews">
                    @include('sections.navbar')
                    <div class="tab-content" style="background-color: #f6f3ee !important; padding: 30px;">
                        <div id="admin-card" class="tab-pane fade show active">
                            <h5>Student Scores </h5>
                            <br>
                            <div class="row space-title">
                                <div class="col-6">
                                    <form class="input-group" action="/sections/records/{{$section->id}}" autocomplete="off">
                                        <div class="input-group-prepend">
                                            <button class="search-btn geo-primary" data-toggle="tooltip" title="Search">
                                                <i class="fa fa-search"></i>
                                            </button>
                                             <input type="text" class="form-control mr-12 " name="keyword" placeholder="Search student name/email" value="{{$keyword}}" style="width: 300px;">
                                        </div>
                                    </form>
                                    <br><br>
                                </div>
                            </div>
                            <div style="overflow: auto;">
                                <table class="table border">
                                    <tr style="background-color:#0074bc;color:white;">
                                        <td width="5%"></td>
                                        <th width="5%">S No.</th>
                                        <th width="30%">Student Name</th>
                                        <th width="30%">Email</th>
                                        <!--<th width="15%">GWA</th>-->
                                        <th width="15%">Action</th>
                                    </tr>
                                    @foreach($results as $key=> $result)
                                        <tr>
                                            <td>
                                                <input class="student-id" type="checkbox" id="student-id" name="student_id" value="{{$result->id}}">
                                            </td>
                                            <td>{{$key + 1}}</td>
                                            <td>{{$result->user->name ?? ''}}</td>
                                            <td>{{$result->user->email ?? ''}}</td>
                                            <!--<td></td>-->
                                            <td>
                                                <a href="/sections/records/student/view/{{$result->id}}" data-toggle="tooltip" title="View Student Grade" class="action-btn btn orange-pastel text-light mb-1">
                                                    <i class="fa fa-eye"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    @endforeach
                                </table>
                            </div>
                            <div id="page-nav">{{ $results->links() }}</div>
                        </div>
                    </div>
                </div>
            </div>
        @endsection
    
        @include('layouts.navbar', ['title' => 'CLASS- ' . $section->grade->name.' '. $section->name])
        @include('layouts.alert')
    </body>
    <script type="text/javascript" src="/js/sections/navbar.js"></script>
    <script type="text/javascript" src="/js/alert.js"></script>
    <script type="text/javascript" src="/js/zipcode.js"></script>

</html>