<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    <style>
        input[type='checkbox'] {
                -webkit-appearance: none;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                outline: none;
                border: 3px solid #113478;
            }

            input[type='checkbox']:before {
                content: '';
                display: block;
                width: 60%;
                height: 60%;
                margin: 20% auto;
                border-radius: 50%;
            }

         input[type="checkbox"]:checked:before {
                background: green;
                
            }
            
            input[type="checkbox"]:checked {
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
                    <form id="submit-assessment"> 
                        @csrf
                        <div id="admin-card" class="tab-pane fade show active">
                            <a href="/sections/subjects/assessments/students/{{$section->id}}/{{$subject->id}}/{{$result->id}}" class="right btn btn-info mb-1 text-light" data-toggle="tooltip" title="Browse Assessment">
                                <i class="fa fa-list"></i>&nbsp;&nbsp;BACK
                            </a>
                            <h5>Assessmsents on {{$subject->mySubject->createdSubject->name}}</h5>
                            <br>
                            <div class="border geo-border-primary rounded p-3"> 
                                <input type="hidden" name="view_assessment_id" id="view-assessment-id" value="{{$result->id ?? ''}}">
                                <h3>{{$result->name ?? ''}}</h3>
                                <h4>
                                    <?php   
                                        echo $result->instruction ?? ''; 
                                    ?>
                                </h4>
                                <br>
                                <?php $aessay= 0 ?>
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
                                            <input type="hidden" name="question_id[]" value="{{$data->question->id ?? ''}}">
                                            @if($data->question->questionType->name == 'True or False')
                                                
                                                <div style="padding-left:70px;">
                                                    <div class="roles">
                                                        @foreach($data->question->answer as $k=> $answer)
                                                            <input class="radiotf" type="checkbox" name="answer[]" value="{{$answer->answer ?? ''}}" id="answer-{{$key}}" required="required">
                                                            <label class="role" >{{strtoupper($answer->answer)}}</label>
                                                        @endforeach
                                                    </div>
                                                </div>
                                            @elseif($data->question->questionType->name == 'Multiple Choice')
                                            
                                                <div style="padding-left:70px;">
                                                    <div class="roles">
                                                        @foreach($data->question->answer as $k=> $answer)
                                                            <input class="radiomc"  type="checkbox" name="answer[]" value="{{$answer->answer ?? ''}}" id="answer-{{$key}}" required="required">
                                                            @if($answer->answer)
                                                                @if (str_starts_with($answer->answer, 'https://') == true)
                                                                    <label class="role" >
                                                                        <img id="preview-{{$key}}" src="{{$answer->answer ?? ''}}" onerror="this.src='/images/no_image.png'" alt="your image" width="200" height="200"/>
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
                                            
                                            @elseif($data->question->questionType->name == 'Identification')
                                              
                                                <input type="text" name="answer[]" class="form-control geo-border-primary" placeholder="Type your Answer here..." required>
                                                
                                            
                                            @elseif($data->question->questionType->name == 'Essay/ Free Form')
                                                
                                                <input type="hidden" name="answer[]" id="essay-{{$aessay}}" class="form-control geo-border-primary" >
                                                @include('sections.subjects.assessments.essay-authoring-tool')
                                                <?php $aessay= $aessay + 1 ?>
                                                <!--<textarea  class="form-control geo-border-primary" name="answer[]" placeholder="Enter you answer here..." style="height: 150px;" required></textarea>-->
                                                
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
                                                        <th>Column A</th>
                                                        <th>Column B</th>
                                                        <th>Answer</th>
                                                        <input type="hidden" name="answer[]" class="form-control geo-border-primary" placeholder="Type your Answer here..." >
                                                        
                                                        @foreach($data->question->answer as $k=> $answer)
                                                            <tr>
                                                                <td>
                                                                    <input type="text" class="form-control geo-border-primary" readonly value="{{$answer->answer ?? ''}}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control geo-border-primary" readonly value="{{$colb[$k] ?? ''}}">
                                                                </td>
                                                                <input type="hidden" name="matchinganswerid[]" class="form-control geo-border-primary" readonly value="{{$answer->id ?? ''}}">
                                                                <td>
                                                                    <select name="matchinganswer[]" class="form-control geo-border-primary" required>
                                                                        <option>Select Answer From Coloum B</option>
                                                                        @foreach($colb as $pat)
                                                                            <option value="{{$pat ?? ''}}">{{$pat ?? ''}}</option>
                                                                        @endforeach
                                                                    </select>
                                                                </td>
                                                            </tr>
                                                        @endforeach
                                                    </table>
                                                </div>
                                            @endif
                                            <br>
                                            <p class="text-right">
                                                For {{$data->question->point ?? '0'}} point/s
                                                <input type="hidden" name="qpoint[]" class="form-control geo-border-primary" readonly value="{{$data->question->point ?? 0}}">
                                            </p>
                                        </div>
                                        <br>
                                    @endif
                                @endforeach
                                <br>
                                UNDER DEVELOPMENT USE OTHER BUTTON TO ANSWER ASSESSMENT
                                <!--@if($result->mode == 'graded')-->
                                <!--    @if($result->assessmentStudent[0]->status == 'To be completed')-->
                                <!--        <div class="right" id="graded-btn">-->
                                <!--            <button class="btn geo-primary" value="{{$employee->id ?? ''}}" id="eid"><i class="fa fa-save"></i>&nbsp;&nbsp;Submit</button>-->
                                <!--            <button class="btn btn-danger" type="button" id="reset_btn"><i class="fa fa-eraser"></i>&nbsp;&nbsp;Reset</button>-->
                                <!--        </div>-->
                                <!--    @endif-->
                                <!--@else-->
                                <!--    <div class="right">-->
                                <!--        <button class="btn geo-primary" value="{{$employee->id ?? ''}}" id="eid"><i class="fa fa-save"></i>&nbsp;&nbsp;Submit</button>-->
                                <!--        <button class="btn btn-danger" type="button" id="reset_btn"><i class="fa fa-eraser"></i>&nbsp;&nbsp;Reset</button>-->
                                <!--    </div>-->
                                <!--@endif-->
                                <br><br>
                                <input type="hidden" name="essay_total" id="essay-total" value="{{$aessay}}">
                                <input type="hidden" name="current_user" class="form-control geo-border-primary" required value="{{Auth::user()->id ?? ''}}">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    @endsection
    
    @include('layouts.navbar', ['title' => 'CLASS- ' . $section->grade->name.' '. $section->name])
    @include('layouts.alert')
</body>
    <script type="text/javascript" src="/js/sections/navbar.js"></script>
    <script type="text/javascript" src="/js/sections/subjects/assessments/essay-authoring.js"></script>
    <script type="text/javascript" src="/js/sections/subjects/assessments/submit.js"></script>
    <script type="text/javascript" src="/js/alert.js"></script>
</html>