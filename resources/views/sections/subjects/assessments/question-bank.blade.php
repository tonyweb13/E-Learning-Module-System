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
                        <h5>Upload Question</h5>
                        <br>
                        <div class="border geo-border-primary rounded p-3"> 
                            <h5 class ="headline">Browse My Question</h5>
                            <input type="hidden" name="assessment_id" id="assessment-id" class="form-control geo-border-primary" value="{{$assessmentid ?? ''}}">
                            <div class="row space-title">
                                <div class="col-6">
                                    <form class="input-group" action="/sections/subjects/assessments/question-bank/{{$section->id ?? ''}}/{{$subject->id  ?? ''}}/{{$assessmentid}}/{{Auth::user()->id ?? ''}}" autocomplete="off">
                                        <div class="input-group-prepend">
                                            <button class="search-btn geo-primary" data-toggle="tooltip" title="Search">
                                                <i class="fa fa-search"></i>
                                            </button>
                                             <input type="text" class="form-control mr-12" size="30" name="keyword" placeholder="Search Question Type or Tag" value="{{$keyword}}">
                                        </div>
                                    </form>
                                </div>
                                <div class="col-6">
                                    <button type="button" class="btn btn-outline-success right" onclick="addQBQuestion();">Add Question</button>
                                </div>
                            </div>
                            <br>
                            <div style="overflow: auto;" class="border">
                                <table class="table">
                                    <tr class="geo-secondary">
                                        <td width="5%"></td>
                                        <th width="5%">S No.</th>
                                        <th width="20%">Question Tag</th>
                                        <th width="20%">Question Type</th>
                                        <th width="35%">Question</th>
                                        <th width="5%">Point</th>
                                    </tr>
                                    @foreach($results as $key=> $result)
                                        <tr>
                                            <td>
                                                <input class="question-id" type="checkbox" id="student-id" name="student_id" value="{{$result->id}}">
                                            </td>
                                            <td>{{$key + 1}}</td>
                                            <td>{{$result->tag ?? ''}}</td>
                                            <td>{{$result->questionType->name ?? ''}}</td>
                                            <td>
                                                <?php   
                                                    echo $result->question ?? ''; 
                                                ?>
                                            </td>
                                            <td>{{$result->point ?? ''}}</td>
                                        </tr>
                                    @endforeach
                                </table>
                            </div>
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