<!DOCTYPE html>

<html>

    @section('styles')

    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">

    <style>

        input[type='radio'] {

                -webkit-appearance: none;

                width: 20px;

                height: 20px;

                border-radius: 50%;

                outline: none;

                border: 3px solid #113478;

            }



            input[type='radio']:before {

                content: '';

                display: block;

                width: 60%;

                height: 60%;

                margin: 20% auto;

                border-radius: 50%;

            }



         input[type="radio"]:checked:before {

                background: green;



            }



            input[type="radio"]:checked {

              border-color:green;

            }



            .role {

                margin-right: 80px;

                margin-left: 20px;

                font-weight: normal;

            }



            .checkbox label {

                margin-bottom: 20px !important;

                margin-right: 20px !important;

            }



            .roles {

                margin-bottom: 40px;

            }

    </style>

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

                        <h5>Assessments on {{$subject->mySubject->createdSubject->name}}</h5>

                        <p>Note:This is the view of student except the correct answer.</p>

                        <br>

                        <div class="border geo-border-primary rounded p-3">

                            <input type="hidden" name="view_assessment_id" id="view-assessment-id" value="{{$result->id ?? ''}}">

                            <h2>{{$result->name ?? ''}}</h2>

                            <br>

                            <h4>

                                <?php

                                    echo $result->instruction ?? '';

                                ?>

                            </h4>

                            <br>

                            @foreach($result->assessmentQuestion as $key=> $data)

                                @if($data->question)

                                     <div class="col-md-12" style="background-color: white;">

                                         <span style="display: inline-flex;padding:20px;">{{$key + 1}}).&emsp;

                                            <div class="col-md-12">

                                                <?php

                                                    echo $data->question->question ?? '';

                                                ?>

                                            </div>

                                        </span>





                                        <br>

                                        @if($data->question->questionType->name == 'True or False')



                                            <div style="padding-left:70px;">

                                                <div class="roles">

                                                    @foreach($data->question->answer as $k=> $answer)

                                                        <input type="radio" name="answer[]" value="{{$answer->answer ?? ''}}" id="answer-{{$k}}">

                                                        <label class="role" >{{strtoupper($answer->answer)}}</label>

                                                    @endforeach

                                                </div>

                                            </div>

                                            @foreach($data->question->answer as $k=> $answer)



                                                @if($answer->is_correct == 1)

                                                    <p style="font-size: 20px;margin-top:-10px;">

                                                        <span style="font-weight: bold;">Correct Answer:</span>

                                                        {{strtoupper($answer->answer)}}

                                                    </p>

                                                @endif



                                            @endforeach



                                        @elseif($data->question->questionType->name == 'Multiple Choice')



                                            <div style="padding-left:70px;">

                                                <div class="roles">

                                                    @foreach($data->question->answer as $k=> $answer)



                                                        <input type="radio" name="answer[]" value="{{$answer->answer ?? ''}}" id="answer-{{$k}}">



                                                        @if($answer->answer)

                                                            @if (str_starts_with($answer->answer, 'https://') == true)

                                                                <label class="role" >

                                                                    <!-- <img id="preview-{{$key}}" src="{{$answer->answer ?? ''}}" onerror="this.src='/images/no_image.png'" alt="your image" width="200" height="200"/> -->

                                                                    <img id="preview-{{$key}}" src="/images/no_image.png" alt="your image" width="200" height="200"/>

                                                                </label>

                                                            @else

                                                                <label class="role" >{{$answer->answer}}</label>

                                                            @endif

                                                        @else

                                                            <label class="role" >{{$answer->answer}}</label>

                                                        @endif

                                                        <br>

                                                    @endforeach

                                                </div>

                                            </div>

                                            @foreach($data->question->answer as $k=> $answer)



                                                @if($answer->is_correct == 1)

                                                    <p style="font-size: 20px;margin-top:-10px;">

                                                        <span style="font-weight: bold;">Correct Answer:</span>

                                                        @if (str_starts_with($answer->answer, 'https://') == true)

                                                            <br>

                                                            <img id="preview-{{$key}}" src="{{$answer->answer ?? ''}}" onerror="this.src='/images/no_image.png'" alt="your image" width="200" height="200"/>

                                                        @else

                                                            {{$answer->answer}}

                                                        @endif

                                                    </p>

                                                @endif



                                            @endforeach



                                        @elseif($data->question->questionType->name == 'Identification')



                                            <input type="text" name="answer[]" class="form-control geo-border-primary" placeholder="Type your Answer here..." value="">

                                            <br><br>

                                            @foreach($data->question->answer as $k=> $answer)

                                                @if($answer->is_correct == 1)

                                                    <p style="font-size: 20px;margin-top:-10px;">

                                                        <span style="font-weight: bold;">Correct Answer:</span>

                                                        {{strtoupper($answer->answer)}}

                                                    </p>

                                                @endif

                                            @endforeach



                                        @elseif($data->question->questionType->name == 'Essay/ Free Form')



                                            <textarea  class="form-control geo-border-primary" name="answer[]" placeholder="Enter you answer here..." style="height: 150px;"></textarea>



                                        @elseif($data->question->questionType->name == 'Matching Type')



                                            <?php

                                                foreach($data->question->answer as $k=> $answer){



                                                    $colb[]=$answer->partner ?? '';

                                                }



                                                shuffle($colb);

                                            ?>

                                            <div class="col-md-12">

                                                <!--display data-->

                                                <table class="table  col-md-12">

                                                    <th>Answer</th>

                                                    <th>Column A</th>

                                                    <th>Column B</th>

                                                    @foreach($data->question->answer as $k=> $answer)

                                                        <tr>

                                                            <td>

                                                                <select name="answer[]" class="form-control geo-border-primary">

                                                                    <option>Select Answer</option>

                                                                    @foreach($colb as $pat)

                                                                        <option value="{{$pat ?? ''}}">{{$pat ?? ''}}</option>

                                                                    @endforeach

                                                                </select>

                                                            </td>

                                                            <td>

                                                                <input type="text" class="form-control geo-border-primary" readonly value="{{$answer->answer ?? ''}}">

                                                            </td>

                                                            <td>

                                                                <input type="text" class="form-control geo-border-primary" readonly value="{{$colb[$k] ?? ''}}">

                                                            </td>

                                                        </tr>

                                                    @endforeach

                                                </table>

                                                <br><br>

                                                <!--display correct answer-->

                                                <p style="font-size: 20px;margin-top:-10px;">

                                                    <span style="font-weight: bold;">Correct Answer:</span>

                                                </p>

                                                 <table class="table  col-md-12">

                                                    <th>Answer</th>

                                                    <th>Column A</th>

                                                    <th>Column B</th>

                                                    @foreach($data->question->answer as $k=> $answer)

                                                        <tr>

                                                            <td>

                                                                <input type="text" class="form-control geo-border-primary" readonly value="{{$answer->partner ?? ''}}">

                                                            </td>

                                                            <td>

                                                                <input type="text" class="form-control geo-border-primary" readonly value="{{$answer->answer ?? ''}}">

                                                            </td>

                                                            <td>

                                                                <input type="text" class="form-control geo-border-primary" readonly value="{{$colb[$k] ?? ''}}">

                                                            </td>

                                                        </tr>

                                                    @endforeach

                                                </table>

                                            </div>

                                        @endif

                                        <br>

                                        <p class="text-right">

                                            For {{$data->question->point ?? '0'}} point/s

                                        </p>

                                    </div>

                                    <br>

                                @endif

                            @endforeach

                        <br>

                        <!--<div class="right">-->

                        <!--    <button class="btn geo-primary" value="{{$employee->id ?? ''}}" id="eid"><i class="fa fa-save"></i>&nbsp;&nbsp;Save</button>-->

                        <!--    <button class="btn btn-danger" type="button" id="reset_btn"><i class="fa fa-eraser"></i>&nbsp;&nbsp;Reset</button>-->

                        <!--</div>-->

                        <br><br>

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

<script type="text/javascript" src="/js/sections/subjects/assessments/form.js"></script>

<script type="text/javascript" src="/js/sections/subjects/assessments/create.js"></script>

<script type="text/javascript" src="/js/alert.js"></script>

<script type="text/javascript" src="/js/authoring-tool.js"></script>

</html>
