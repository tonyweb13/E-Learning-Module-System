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

                        <h5>Browse My Assessments</h5>

                        <br>

                        <div class="row space-title">

                            <div class="col-6">

                                <form class="input-group" action="/sections/subjects/assessments/students/{{$section->id}}/{{$subject->id}}/{{$assessment_id}}" autocomplete="off">

                                    <div class="input-group-prepend">

                                        <button class="search-btn geo-primary" data-toggle="tooltip" title="Search">

                                            <i class="fa fa-search"></i>

                                        </button>

                                         <input type="text" size="30" class="form-control mr-12"  name="keyword" placeholder="Search Name/Topic/Mode/Type" value="{{$keyword}}">

                                    </div>

                                </form>

                                <br><br>

                            </div>

                        </div>

                        <div style="overflow: auto;" class="border">

                            <table class="table text-center">

                                <tr class="geo-secondary">

                                    <th width="5%">S No.</th>

                                    <th>Assessment Type</th>

                                    <th>Assessment Title</th>

                                    <th>Assessment Topic</th>

                                    <th>Assessment Mode</th>

                                    <th>Start</th>

                                    <th>Due</th>

                                    <th>Status</th>

                                    <th>Score</th>

                                    <th width="20%">Actions</th>

                                </tr>

                                @foreach($results as $key=> $result)

                                    <tr>

                                        <td>{{$key + 1}}</td>

                                        <td>{{$result->sectionSubjectScale->name ?? ''}}</td>

                                        <td>{{$result->name ?? ''}}</td>

                                        <td>{{$result->topic ?? ''}}</td>

                                        <td>{{$result->mode ?? ''}}</td>

                                        <td>

                                            {{date("F j,Y", strtotime($result->start_date))}}

                                        </td>

                                        <td>{{date("F j,Y", strtotime($result->end_date))}}</td>

                                        <td>{{$result->assessmentStudent[0]->status ?? ''}}</td>



                                        @if($result->assessmentStudent[0]->over_score > 0)



                                            <td>{{$result->assessmentStudent[0]->total_score ?? '0'}}/{{$result->assessmentStudent[0]->over_score ?? '0'}}</td>

                                        @else

                                            <td></td>

                                        @endif

                                        <td>

                                            @if($result->mode == 'graded')

                                                @if($result->assessmentStudent[0]->status == 'To be completed')

                                                    <a href="/sections/subjects/assessment/answer/{{$section->id}}/{{$subject->id}}/{{$result->id}}" data-toggle="tooltip" title="Answer Assessment" class="action-btn btn btn-primary text-light mb-1">

                                                        <i class="fa fa-edit"></i>

                                                    </a>

                                                    <!-- 10/13/2021 edited request by mam agnes not to display to student-->
                                                    <a href="/sections/subjects/assessment/answer2/{{$section->id}}/{{$subject->id}}/{{$result->id}}" data-toggle="tooltip" title="Under Development" class="action-btn btn btn-primary text-light mb-1" style="background-color:#ccff77 !important; display:none;">

                                                        <i class="fa fa-edit"></i>

                                                    </a>

                                                @else

                                                    <a href="/sections/subjects/assessment/view/submitted/assessement/{{$section->id}}/{{$subject->id}}/{{Auth::user()->id}}/{{$result->id}}" data-toggle="tooltip" title="Review Answers" class="action-btn btn orange-pastel text-light mb-1">

                                                        <i class="fa fa-eye"></i>

                                                    </a>

                                                @endif

                                            @else

                                                <a href="/sections/subjects/assessment/answer/{{$section->id}}/{{$subject->id}}/{{$result->id}}" data-toggle="tooltip" title="Answer Assessment" class="action-btn btn btn-primary text-light mb-1">

                                                    <i class="fa fa-edit"></i>

                                                </a>

                                            @endif

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



    @include('layouts.navbar', ['title' => 'CLASS - ' . $section->grade->name.' '. $section->name])

    @include('layouts.alert')

</body>

    <script type="text/javascript" src="/js/sections/navbar.js"></script>

    <script type="text/javascript" src="/js/alert.js"></script>

    <script type="text/javascript" src="/js/zipcode.js"></script>

</html>
