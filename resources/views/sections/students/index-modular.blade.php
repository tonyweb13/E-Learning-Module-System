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
                        <h5>Modular Students in the Class</h5>
                        <br>
                        <div class="row space-title">
                            <div class="col-6">
                                <form class="input-group" action="/sections/students/modular/{{$section->id}}" autocomplete="off">
                                    <div class="input-group-prepend">
                                        <button class="search-btn geo-primary" data-toggle="tooltip" title="Search">
                                            <i class="fa fa-search"></i>
                                        </button>
                                         <input type="text" class="form-control mr-12 " name="keyword" placeholder="Search Student Name, Email or Gender" value="{{$keyword}}" style="width: 300px;">
                                    </div>
                                </form>
                                <br><br>
                            </div>
                            <div class="col-6">
                                <a href="/sections/students/modular/create/{{$section->id}}" class="right geo-primary mb-1 button-add" data-toggle="tooltip" title="Add Students">
                                   Enroll<i class="fa fa-plus"></i>
                                </a>
                            </div>
                        </div>
                        <div style="overflow: auto;">
                            <table class="table border">
                                <tr style="background-color:#0074bc;color:white;">
                                    <td width="5%"></td>
                                    <th width="5%">S No.</th>
                                    <th width="30%">Student Name</th>
                                    <th width="30%">Email</th>
                                    <th width="15%">Grade</th>
                                    <th width="15%">Gender</th>
                                </tr>
                                @foreach($results as $key=> $result)
                                    <tr>
                                        <td>
                                            <input class="student-id" type="checkbox" id="student-id" name="student_id" value="{{$result->id}}">
                                        </td>
                                        <td>{{$results->firstItem() + $key}}</td>
                                        <td>{{$result->name ?? ''}}</td>
                                        <td>{{$result->email ?? ''}}</td>
                                        <td>{{$result->grade->name ?? ''}}</td>
                                        <td>{{$result->gender ?? ''}}</td>
                                    </tr>
                                @endforeach
                            </table>
                        </div>
                        <br>
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