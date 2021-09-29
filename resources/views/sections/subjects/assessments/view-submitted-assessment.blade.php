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
                    <form id="grade-submit-assessment"> 
                        @csrf
                        <div id="admin-card" class="tab-pane fade show active">
                            @if(Auth::user()->userType->name == 'Teacher')
                                <a href="/sections/subjects/assessment/get/submitted/assessement/{{$section->id ?? '' }}/{{$subject->id ?? ''}}/{{$assessment->id ?? ''}}" class="right btn btn-info mb-1 text-light" data-toggle="tooltip" title="Browse Submitted Assessment">
                                    <i class="fa fa-list"></i>&nbsp;&nbsp;BACK
                                </a>
                            @else
                                <a href="/sections/subjects/assessments/students/{{$section->id ?? '' }}/{{$subject->id ?? ''}}/{{$assessment->id ?? ''}}" class="right btn btn-info mb-1 text-light" data-toggle="tooltip" title="Browse Submitted Assessment">
                                    <i class="fa fa-list"></i>&nbsp;&nbsp;BACK
                                </a>
                            @endif
                            <h5>Assessment on {{$subject->mySubject->createdSubject->name ?? ''}}</h5>
                            <br>
                            <div class="border geo-border-primary rounded p-3"> 
                                <input type="hidden" name="view_assessment_id" id="view-assessment-id" value="{{$assessment->id ?? ''}}">
                                <h3>{{$assessment->name ?? ''}}</h3>
                                <h4>
                                    <?php   
                                        echo $assessment->instruction ?? ''; 
                                    ?>
                                </h4>
                                <br>
                                <?php $aessay= 0 ?>
                                @foreach($result as $key=> $data)
                                    @if($data->question->question)
                                         <div class="col-md-12" style="background-color: white;">
                                            @if($data->question->questionType->name == 'True or False' || $data->question->questionType->name == 'Multiple Choice' || $data->question->questionType->name == 'Identification')
                                                <div class="right border-style:" style="padding:20px;">
                                                    @if($data->is_correct == 1)
                                                        <h4 style="border: 5px solid green; padding:5px;">
                                                            CORRECT
                                                        </h4>
                                                    @else
                                                        <h4 style="border: 5px solid red; padding:5px;">
                                                            INCORRECT
                                                        </h4>
                                                        
                                                    @endif
                                                </div>
                                            @endif
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
                                                        
                                                            @if(strtolower(preg_replace('/\s*/', '', $answer->answer)) == strtolower(preg_replace('/\s*/', '', $data->answer)))
                                                                <input class="radiotf" type="checkbox" name="answer[]" value="{{$answer->answer ?? ''}}" id="answer-{{$key}}" readonly checked>
                                                                <label class="role" >{{strtoupper($answer->answer)}}</label>
                                                            @else
                                                                <input class="radiotf" type="checkbox" name="answer[]" value="{{$answer->answer ?? ''}}" id="answer-{{$key}}" readonly>
                                                                <label class="role" >{{strtoupper($answer->answer ?? '')}}</label>
                                                            @endif
                                                            
                                                        @endforeach
                                                    </div>
                                                </div>
                                                <input type="hidden" name="apoint[]" class="apoint form-control geo-border-primary" required value="{{$data->apoint ?? 0}}">
                                            @elseif($data->question->questionType->name == 'Multiple Choice')
                                            
                                                <div style="padding-left:70px;">
                                                    <div class="roles">
                                                        @foreach($data->question->answer as $k=> $answer)
                                                            @if(strtolower(preg_replace('/\s*/', '', $answer->answer)) == strtolower(preg_replace('/\s*/', '', $data->answer)))
                                                                <input class="radiomc"  type="checkbox" name="answer[]" value="{{$answer->answer ?? ''}}" id="answer-{{$key}}" readonly checked>
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
                                                            @else
                                                                <input class="radiomc"  type="checkbox" name="answer[]" value="{{$answer->answer ?? ''}}" id="answer-{{$key}}" readonly>
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
                                                            @endif
                                                            <br>
                                                        @endforeach
                                                    </div>
                                                </div>
                                                <input type="hidden" name="apoint[]" class="apoint form-control geo-border-primary" required value="{{$data->apoint ?? 0}}">
                                            @elseif($data->question->questionType->name == 'Identification')
                                              
                                                <input type="text" name="answer[]" class="form-control geo-border-primary" placeholder="Type your Answer here..." readonly value="{{$data->answer ?? ''}}">
                                                <input type="hidden" name="apoint[]" class="apoint form-control geo-border-primary" required value="{{$data->apoint ?? 0}}">   
                                            
                                            @elseif($data->question->questionType->name == 'Essay/ Free Form')
                                            
                                                <!--<textarea  class="form-control geo-border-primary" name="answer[]" placeholder="Enter you answer here..." style="height: 150px;" readonly>{{$data->answer ?? ''}}</textarea>-->
                                                @if(Auth::user()->userType->name == 'Teacher' || Auth::user()->userType->name == 'Institute Admin')
                                                    <div class="col-md-12 border rounded" style="padding-left:70px;">
                                                        <?php   
                                                            echo $data->answer ?? ''; 
                                                        ?>
                                                    </div>
                                                    <br>
                                                    <span style="font-weight: bold;">Student’s Score:</span>
                                                    <input type="number" id="a-point" name="apoint[]" class="apoint form-control geo-border-primary" required placeholder="Enter score." value="{{$data->apoint ?? 0}}" style="width:10%; height:50px;">
                                                @else
                                                    @include('sections.subjects.assessments.essay-authoring-tool')
                                                    <?php $aessay= $aessay + 1 ?>
                                                    <br>
                                                    <input type="text" class="apoint form-control geo-border-primary tex-center" readonly value="{{$data->apoint ?? 'Score is not yet availble- 0'}} point/s" style="width:20%; height:50px;" placeholder="">
                                                @endif
                                                <br>
                                            @elseif($data->question->questionType->name == 'Matching Type')
                                                <input type="hidden" name="apoint[]" class="apoint form-control geo-border-primary" required value="{{$data->apoint ?? 0}}">   
                                            
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
                                                        @foreach($data->question->answer as $k=> $answer)
                                                            <tr>
                                                                <td>
                                                                    <input type="text" class="form-control geo-border-primary" readonly value="{{$answer->answer ?? ''}}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control geo-border-primary" readonly value="{{$colb[$k] ?? ''}}">
                                                                </td>
                                                                <?php   
                                                                    $stud_answers = App\AnswerDetail:: where('submitted_assessment_id',$data->id)
                                                                                                       ->where('answer_id',$answer->id)
                                                                                                       ->where('is_deleted',0)
                                                                                                       ->first(); ; 
                                                                ?>
                                                                <td>
                                                                    <input type="text" class="form-control geo-border-primary" readonly value="{{$stud_answers->answer ?? ''}}">
                                                                </td>
                                                                <!--<td>-->
                                                                <!--    <select name="answer[]" class="form-control geo-border-primary" required>-->
                                                                <!--        <option>Select Answer</option>-->
                                                                <!--        @foreach($colb as $pat)-->
                                                                <!--            <option value="{{$pat ?? ''}}">{{$pat ?? ''}}</option>-->
                                                                <!--        @endforeach-->
                                                                <!--    </select>-->
                                                                <!--</td>-->
                                                            </tr>
                                                        @endforeach
                                                    </table>
                                                    <input type="text" class="apoint form-control geo-border-primary tex-center" readonly value="{{$data->apoint ?? 'Score is not yet availble- 0'}} point/s" style="width:20%; height:50px;" placeholder="">
                                                </div>
                                            @endif
                                            <br><br>
                                            @foreach($data->question->answer as $k=> $answer)
                                                @if($answer->is_correct == 1)
                                                    <br><br>
                                                    <p style="font-size: 20px;margin-top:-10px;">
                                                        <span style="font-weight: bold;">Correct Answer:</span>
                                                        @if (str_starts_with($answer->answer, 'https://') == true)
                                                                    <label class="role" >
                                                                        <img id="preview-{{$key}}" src="{{$answer->answer ?? ''}}" onerror="this.src='/images/no_image.png'" alt="your image" width="200" height="200"/>
                                                                    </label>
                                                        @else
                                                            {{$answer->answer ?? ''}}
                                                        @endif
                                                    </p>
                                                @endif
                                            @endforeach
                                            <p class="text-right">
                                                For {{$data->question->point ?? '0'}} point/s
                                            </p>
                                        </div>
                                        <br>
                                    @endif
                                    <input type="hidden" name="submitted_id[]" class="form-control geo-border-primary" required value="{{$data->id ?? ''}}">
                                @endforeach
                                <br><br>
                                <input type="hidden" name="student_id" class="form-control geo-border-primary" required value="{{$user_id ?? ''}}">
                                <input type="hidden" name="current_user" class="form-control geo-border-primary" required value="{{Auth::user()->id ?? ''}}">
                                <div class="text-right">
                                    <h3>TOTAL: <span style="font-weight:bold;"><span id="total-text">{{$total ?? 0}}</span> / {{$over ?? 0}}</span></h3>
                                </div>
                                <br>
                               
                                @if(Auth::user()->userType->name == 'Teacher' && $assessment->mode == 'graded' && $assessment_student->status == 'Submitted')
                                    <div class="right">
                                        <button class="btn geo-primary" value="{{$employee->id ?? ''}}" id="eid"><i class="fa fa-save"></i>&nbsp;&nbsp;Submit</button>
                                        <button class="btn btn-danger" type="button" id="reset_btn"><i class="fa fa-eraser"></i>&nbsp;&nbsp;Reset</button>
                                    </div>
                                @endif
                                <br><br>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    @endsection
    @include('file-preview-modal')
    @include('layouts.navbar', ['title' => 'CLASS- ' . $section->grade->name.' '. $section->name])
    @include('layouts.alert')
</body>
<script type="text/javascript" src="/js/sections/navbar.js"></script>
<script type="text/javascript" src="/js/sections/subjects/assessments/submit-grade.js"></script>
<script type="text/javascript" src="/js/alert.js"></script>
</html>