<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    
    @endsection
    @include('layouts.head', ['title' => 'CLASS'])
<body class="body-bg">
    @section('content')
        <div class="review-consult">
            <div class="container-reviews">
                @include('sections.navbar')
                <div class="tab-content" style="background-color: #f6f3ee !important; padding: 30px;">
                    <div id="admin-card" class="tab-pane fade show active">
                        <a href="/sections/subjects/assessment/assigned/assessement/modular/{{$section->id}}/{{$subject->id}}/{{$assessmentid ?? ''}}" class="right btn btn-info mb-1 text-light" data-toggle="tooltip" title="Browse Modular Student Assessment">
                            <i class="fa fa-list"></i>&nbsp;&nbsp;BACK
                        </a>
                        <h5>{{$assessment->name ?? ''}}</h5>
                        <br>
                        <div class="border geo-border-primary rounded p-3">
                            <br> 
                            <h5 class ="headline">Browse Class Modular Student</h5>
                            <br>
                            <input type="hidden" name="assessment_id" id="assessment-id" class="form-control geo-border-primary" value="{{$assessmentid ?? ''}}">
                            <input type="hidden" name="current_user" id="current-user" class="form-control geo-border-primary" value="{{Auth::user()->id ?? ''}}">
                            <div class="row space-title">
                                <div class="col-9">
                                    <form class="input-group" action="/sections/subjects/assessment/assign/assessement/modular/{{$section->id ?? ''}}/{{$subject->id  ?? ''}}/{{$assessmentid}}" autocomplete="off">
                                        <div class="input-group-prepend">
                                            <button class="search-btn geo-primary" data-toggle="tooltip" title="Search">
                                                <i class="fa fa-search"></i>
                                            </button>
                                             <input type="text" class="form-control mr-12" size="30" name="keyword" placeholder="Search Name/Email" value="{{$keyword}}">
                                        </div>
                                    </form>
                                </div>
                                <div class="col-3">
                                    <button type="button" class="btn btn-outline-success right" onclick="assignAssessmentModularStudent();">Assign Assessment</button>
                                </div>
                            </div>
                            <br>
                            <div style="overflow: auto;" class="border">
                                <table class="table">
                                    <tr class="geo-secondary">
                                        <td width="5%"></td>
                                        <th with="10%">S No.</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Grade</th>
                                        <th>Gender</th>
                                    </tr>
                                    @foreach($results as $key=> $result)
                                        <tr>
                                            <td>
                                                <input class="student-id" type="checkbox" id="student-id" name="student_id" value="{{$result->user->id}}">
                                            </td>
                                            <td>{{$key + 1}}</td>
                                            <td>{{$result->user->name ?? ''}}</td>
                                            <td>{{$result->user->email ?? ''}}</td>
                                            <td>{{$result->user->grade->name ?? ''}}</td>
                                            <td>{{$result->user->gender ?? ''}}</td>
                                        </tr>
                                    @endforeach 
                                </table>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endsection
    
    @include('layouts.navbar', ['title' => 'CLASS- ' . $section->grade->name.' '. $section->name])
    @include('layouts.alert')
</body>
<script type="text/javascript" src="/js/sections/navbar.js"></script>
<script type="text/javascript" src="/js/sections/subjects/assessments/create.js"></script>
<script type="text/javascript" src="/js/alert.js"></script>
</html>