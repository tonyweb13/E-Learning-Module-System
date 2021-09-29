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
                        <a href="/sections/subjects/assessments/{{$section->id}}/{{$subject->id}}/null" class="right btn btn-info mb-1 text-light" data-toggle="tooltip" title="Browse Assessment">
                            <i class="fa fa-list"></i>&nbsp;&nbsp;BACK
                        </a>
                        <h5>{{$assessment->name ?? ''}}</h5>
                        <br>
                        <div class="border geo-border-primary rounded p-3"> 
                            <br>
                            <h5 class ="headline">Browse Modular Student Assigned to this Assessment</h5>
                            <br>
                            <input type="hidden" name="assessment_id" id="assessment-id" class="form-control geo-border-primary" value="{{$assessmentid ?? ''}}">
                            <div class="row space-title">
                                <div class="col-9">
                                    <form class="input-group" action="/sections/subjects/assessment/assigned/assessement/modular/{{$section->id ?? ''}}/{{$subject->id  ?? ''}}/{{$assessmentid}}" autocomplete="off">
                                        <div class="input-group-prepend">
                                            <button class="search-btn geo-primary" data-toggle="tooltip" title="Search">
                                                <i class="fa fa-search"></i>
                                            </button>
                                             <input type="text" class="form-control mr-12" size="30" name="keyword" placeholder="Search Question Name/Email" value="{{$keyword}}">
                                        </div>
                                    </form>
                                </div>
                                <div class="col-3">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <button type="button" class="btn btn-outline-danger right" onclick="unassignAssessmentModularStudent();">Unassign Assessment</button>
                                        </div>
                                        <div class="col-md-6">
                                            <a href="/sections/subjects/assessment/assign/assessement/modular/{{$section->id ?? ''}}/{{$subject->id ?? ''}}/{{$assessmentid}}" class="right geo-primary mb-1 button-add" data-toggle="tooltip" title="Add Student">
                                               New<i class="fa fa-plus"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <div style="overflow: auto;" class="border">
                                <table class="table">
                                    <tr class="geo-secondary">
                                        <td width="5%"></td>
                                        <th>S No.</th>
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
                            <br>
                            <div id="page-nav">{{ $results->links() }}</div>
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