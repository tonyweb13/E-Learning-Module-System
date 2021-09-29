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
                            <h5 class ="headline">Browse Student Submitted this Assessment</h5>
                            <br>
                            <input type="hidden" name="assessment_id" id="assessment-id" class="form-control geo-border-primary" value="{{$assessment->id ?? ''}}">
                            <div class="row space-title">
                                <div class="col-6">
                                    <form class="input-group" action="/sections/subjects/assessment/get/submitted/assessement/{{$section->id ?? '' }}/{{$subject->id ?? ''}}/{{$assessment->id ?? ''}}" autocomplete="off">
                                        <div class="input-group-prepend">
                                            <button class="search-btn geo-primary" data-toggle="tooltip" title="Search">
                                                <i class="fa fa-search"></i>
                                            </button>
                                             <input type="text" class="form-control mr-12" size="50" name="keyword" placeholder="Search Question Name/Email/Status" value="{{$keyword}}">
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <br>
                            <div style="overflow: auto;" class="border">
                                <table class="table">
                                    <tr class="geo-secondary">
                                        <th>S No.</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                    @foreach($results as $key=> $result)
                                        <tr>
                                            <td>{{$key + 1}}</td>
                                            <td>{{$result->user->name ?? ''}}</td>
                                            <td>{{$result->user->email ?? ''}}</td>
                                            <td>{{$result->status ?? ''}}</td>
                                            <td>
                                                <a href="/sections/subjects/assessment/view/submitted/assessement/{{$section->id}}/{{$subject->id}}/{{$result->student_id ?? ''}}/{{$assessment->id ?? ''}}" data-toggle="tooltip" title="View Assessment"  class="action-btn btn  text-light mb-1 orange-pastel">
                                                    <i class="fa fa-eye"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    @endforeach 
                                </table>
                            </div>
                            <br>
                            <!--<div id="page-nav">{{ $results->links() }}</div>-->
                        </div>
                        <br>
                        <div style="margin-left:50%;margin-right:50%" id="page-nav">{{ $results->links() }}</div>
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