<div class="row">
    <div class="col-md-12">
        <div class="row pl-3 pr-3">
            <div class="col-md-2 p-1">
                @include('sections.subjects.assessments.navbar')
            </div>
            @if(count($assessments) == 0)
                <div class="col-md-10">
                    <p style="padding: 20px;">No Assessment Available, To add video click the plus button at the left</p>
                </div>
            @else
                <div class="col-md-10 border geo-border-primary rounded p-3"; style="background-color: white;">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row pl-3 pr-3">
                                <div class="col-md-2 p-1">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row col-md-12">
                        <input type="hidden" id="section" value="{{$section->id}}">
                        <input type="hidden" id="subject" value="{{$subject->id}}">
                        <input type="hidden" id="assessment" value="{{$assessment->id}}">
                        
                        <h5>{{$assessment->name ?? ''}}</h5>
                        
                        @if(Auth::user()->userType->name == 'Teacher')
                            
                            @if(count($section->sectionTeacher) > 0)
                            
                                @if($section->sectionTeacher[0]->edit_priv == 1)
                                    <button type="button" value="{{$assessment->id ?? ''}}" onclick="addAssessment(this.value)" data-toggle="tooltip" title="Edit Assessment" class="action-btn btn" style="background-color: white; margin-top: -4px;">
                                        <i class="fas fa-pen"></i>
                                    </button>
                                @endif
                                
                                @if($section->sectionTeacher[0]->assign_prev == 1)
                                    <!--online-->
                                    <a href="/sections/subjects/assessment/assigned/assessement/{{$section->id}}/{{$subject->id}}/{{$assessment->id ?? ''}}" data-toggle="tooltip" title="Assign Assessment To Online Learners" class="action-btn btn  text-light mb-1" style="background-color: white;color: black !important; margin-top: -4px;margin-left: -10px;">
                                        <!--<i class="fa fa-users"></i>-->
                                        <i class="fas fa-chalkboard-teacher"></i>
                                    </a>
                                    <!--modular-->
                                    <a href="/sections/subjects/assessment/assigned/assessement/modular/{{$section->id}}/{{$subject->id}}/{{$assessment->id ?? ''}}" data-toggle="tooltip" title="Assign Assessment To Modular Learners" class="action-btn btn  text-light mb-1" style="background-color: white;color: black !important; margin-top: -4px;margin-left: -10px;">
                                        <!--<i class="fa fa-users"></i>-->
                                        <i class="fas fa-user-edit"></i>
                                    </a>
                                @endif
                                
                                <!--delete-->
                                @if($section->sectionTeacher[0]->delete_priv == 1)
                                    <button type="button" value="{{$assessment->id ?? ''}}" onclick="deleteAssessment(this.value)" data-toggle="tooltip" title="Delete Assessment" class="action-btn btn" style="background-color: white; margin-top: -6px; margin-left: -10px;">    
                                        <i class="fa fa-trash"></i>
                                    </button>
                                @endif
                                
                            @else
                            
                                <button type="button" value="{{$assessment->id ?? ''}}" onclick="addAssessment(this.value)" data-toggle="tooltip" title="Edit Assessment" class="action-btn btn" style="background-color: white; margin-top: -4px;">
                                    <i class="fas fa-pen"></i>
                                </button>
                                
                                <!--assign online-->
                                <a href="/sections/subjects/assessment/assigned/assessement/{{$section->id}}/{{$subject->id}}/{{$assessment->id ?? ''}}" data-toggle="tooltip" title="Assign Assessment To Online Learners" class="action-btn btn  text-light mb-1" style="background-color: white;color: black !important; margin-top: -4px;margin-left: -10px;">
                                    <!--<i class="fa fa-users"></i>-->
                                    <i class="fas fa-chalkboard-teacher"></i>
                                </a>
                                <!--assign modular-->
                                <a href="/sections/subjects/assessment/assigned/assessement/modular/{{$section->id}}/{{$subject->id}}/{{$assessment->id ?? ''}}" data-toggle="tooltip" title="Assign Assessment To Modular Learners" class="action-btn btn  text-light mb-1" style="background-color: white;color: black !important; margin-top: -4px;margin-left: -10px;">
                                    <!--<i class="fa fa-users"></i>-->
                                    <i class="fas fa-user-edit"></i>
                                </a>
                                <!--check-->
                                <a href="/sections/subjects/assessment/get/submitted/assessement/{{$section->id}}/{{$subject->id}}/{{$assessment->id ?? ''}}" data-toggle="tooltip" title="View Submitted Assessment" class="action-btn btn  text-light mb-1" style="background-color: white;color: black !important; margin-top: -4px;margin-left: -10px;">
                                    <i class="fas fa-user-check"></i>
                                </a>
                                
                                <!--upload-->
                                @if(count($results) == 0)
                                    
                                    <button type="button" value="{{$assessment->id}}" onclick="alert('Assessment has no question, Please add or upload content')" data-toggle="tooltip" title="Publish the assessment" class="action-btn btn" style="background-color: white;color: black !important; margin-top: -4px;margin-left: -10px;" >
                                        <i class="far fa-check-circle"></i>
                                    </button>
                                @else
                                    @if($assessment->status == 0)
                                        
                                        <button type="button" value="{{$assessment->id}}" onclick="uploadAssessmentStatus(this.value)" data-toggle="tooltip" title="Publish the assessment" class="action-btn btn" style="background-color: white;color: black !important; margin-top: -4px;margin-left: -10px;">
                                            <i class="far fa-check-circle"></i>
                                        </button>
                                        
                                    @else
                                    
                                        <button type="button" value="{{$assessment->id}}" onclick="hideAssessment(this.value)" data-toggle="tooltip" title="Unpublished this Assessment" class="action-btn btn" style="background-color: white;color: black !important; margin-top: -4px;margin-left: -10px;">
                                            <i class="fas fa-check-circle"></i>
                                        </button>
                                        
                                    @endif
                                @endif
                                
                                <!--delete-->
                                <button type="button" value="{{$assessment->id ?? ''}}" onclick="deleteAssessment(this.value)" data-toggle="tooltip" title="Delete Assessment" class="action-btn btn" style="background-color: white; margin-top: -6px; margin-left: -10px;">    
                                    <i class="fa fa-trash"></i>
                                </button>
                            @endif
                            
                        @elseif(Auth::user()->userType->name == 'Institute Admin')
                        
                            <button type="button" value="{{$assessment->id ?? ''}}" onclick="addAssessment(this.value)" data-toggle="tooltip" title="Edit Assessment" class="action-btn btn" style="background-color: white; margin-top: -4px;">
                                <i class="fas fa-pen"></i>
                            </button>
                            
                            <!--assign online-->
                            <a href="/sections/subjects/assessment/assigned/assessement/{{$section->id}}/{{$subject->id}}/{{$assessment->id ?? ''}}" data-toggle="tooltip" title="Assign Assessment To Online Learners" class="action-btn btn  text-light mb-1" style="background-color: white;color: black !important; margin-top: -4px;margin-left: -10px;">
                                <!--<i class="fa fa-users"></i>-->
                                <i class="fas fa-chalkboard-teacher"></i>
                            </a>
                            <!--assign modular-->
                            <a href="/sections/subjects/assessment/assigned/assessement/modular/{{$section->id}}/{{$subject->id}}/{{$assessment->id ?? ''}}" data-toggle="tooltip" title="Assign Assessment To Modular Learners" class="action-btn btn  text-light mb-1" style="background-color: white;color: black !important; margin-top: -4px;margin-left: -10px;">
                                <!--<i class="fa fa-users"></i>-->
                                <i class="fas fa-user-edit"></i>
                            </a>
                            <!--check-->
                            <a href="/sections/subjects/assessment/get/submitted/assessement/{{$section->id}}/{{$subject->id}}/{{$assessment->id ?? ''}}" data-toggle="tooltip" title="View Submitted Assessment" class="action-btn btn  text-light mb-1" style="background-color: white;color: black !important; margin-top: -4px;margin-left: -10px;">
                                <i class="fas fa-user-check"></i>
                            </a>
                            
                            <!--upload-->
                            @if(count($results) == 0)
                                
                                <button type="button" value="{{$assessment->id}}" onclick="alert('Assessment has no question, Please add or upload content')" data-toggle="tooltip" title="Publish the assessment" class="action-btn btn" style="background-color: white;color: black !important; margin-top: -4px;margin-left: -10px;" >
                                    <i class="far fa-check-circle"></i>
                                </button>
                            @else
                                @if($assessment->status == 0)
                                    
                                    <button type="button" value="{{$assessment->id}}" onclick="uploadAssessmentStatus(this.value)" data-toggle="tooltip" title="Publish the assessment" class="action-btn btn" style="background-color: white;color: black !important; margin-top: -4px;margin-left: -10px;">
                                        <i class="far fa-check-circle"></i>
                                    </button>
                                    
                                @else
                                
                                    <button type="button" value="{{$assessment->id}}" onclick="hideAssessment(this.value)" data-toggle="tooltip" title="Unpublished this Assessment" class="action-btn btn" style="background-color: white;color: black !important; margin-top: -4px;margin-left: -10px;">
                                        <i class="fas fa-check-circle"></i>
                                    </button>
                                    
                                @endif
                            @endif
                            
                            <!--delete-->
                            <button type="button" value="{{$assessment->id ?? ''}}" onclick="deleteAssessment(this.value)" data-toggle="tooltip" title="Delete Assessment" class="action-btn btn" style="background-color: white; margin-top: -6px; margin-left: -10px;">    
                                <i class="fa fa-trash"></i>
                            </button>
                            
                        @endif
                        
                        @if(count($results) == 0)
                            <a href="#" data-toggle="tooltip" title="View Assessment" onclick="alert('Assessment has no question, Please add or upload content')" class="action-btn btn  text-light mb-1" style="background-color: white;color: black !important; margin-top: -4px;">
                                <i class="fa fa-eye"></i>
                            </a>
                        @else
                            <a href="/sections/subjects/assessment/get-assessement/{{$section->id}}/{{$subject->id}}/{{$assessment->id ?? ''}}" data-toggle="tooltip" title="View Assessment" class="action-btn btn  text-light mb-1" style="background-color: white;color: black !important; margin-top: -4px;">
                                <i class="fa fa-eye"></i>
                            </a>
                        @endif
                        
                    </div>
                    <br>
                    <div class="row space-title">
                        <div class="col-6">
                            <form class="input-group" action="/sections" autocomplete="off">
                                <div class="input-group-prepend">
                                    <button class="search-btn geo-primary" data-toggle="tooltip" title="Search">
                                        <i class="fa fa-search"></i>
                                    </button>
                                     <input type="text" class="form-control geo-border-primary"  size="30" name="keyword" placeholder="Search Question tags or type" value="{{$keyword}}">
                                </div>
                            </form>
                        </div>
                        <div class="col-6">
                            @if(Auth::user()->userType->name == 'Teacher')
                                @if(count($section->sectionTeacher) > 0)
                                    @if($section->sectionTeacher[0]->create_priv == 1)
                                        <a href="/sections/subjects/assessments/question-bank/{{$section->id ?? ''}}/{{$subject->id  ?? ''}}/{{$assessment->id ?? ''}}/{{Auth::user()->id ?? ''}}" class="right geo-primary mb-1 button-add" data-toggle="tooltip" title="Upload Question from Question Bank">
                                           Upload<i class="fas fa-file-upload"></i>
                                        </a>
                                        <a href="#" onclick="addQuestion();" class="right geo-primary mb-1 button-add" data-toggle="tooltip" title="Create Question">
                                           Create<i class="fas fa-plus-square"></i>
                                        </a>
                                    @endif
                                @else
                                    <a href="/sections/subjects/assessments/question-bank/{{$section->id ?? ''}}/{{$subject->id  ?? ''}}/{{$assessment->id ?? ''}}/{{Auth::user()->id ?? ''}}" class="right geo-primary mb-1 button-add" data-toggle="tooltip" title="Upload Question from Question Bank">
                                       Upload<i class="fas fa-file-upload"></i>
                                    </a>
                                    <a href="#" onclick="addQuestion();" class="right geo-primary mb-1 button-add" data-toggle="tooltip" title="Create Question">
                                       Create<i class="fas fa-plus-square"></i>
                                    </a>
                                @endif
                            @elseif(Auth::user()->userType->name == 'Institute Admin')
                                <a href="/sections/subjects/assessments/question-bank/{{$section->id ?? ''}}/{{$subject->id  ?? ''}}/{{$assessment->id ?? ''}}/{{Auth::user()->id ?? ''}}" class="right geo-primary mb-1 button-add" data-toggle="tooltip" title="Upload Question from Question Bank">
                                   Upload<i class="fas fa-file-upload"></i>
                                </a>
                                <a href="#" onclick="addQuestion();" class="right geo-primary mb-1 button-add" data-toggle="tooltip" title="Create Question">
                                   Create<i class="fas fa-plus-square"></i>
                                </a>
                            @endif
                        </div>
                    </div>
                    <br>
                    <table class="table">
                            <tr class="geo-secondary">
                                <th width="10%">Question No.</th>
                                <th width="30%">Tags</th>
                                <th width="30%">Question Type</th>
                                <th width="15%">Action</th>
                            </tr>
                        @if($assessment)
                            @if(count($results) == 0)
                                <tr>
                                    <td class="text-center" colspan="13">
                                        Assessment has no question, Please add or upload content
                                    </td>
                                </tr>
                            @else
                                @foreach($results as $key=> $result)
                                    <tr>
                                        <td>{{$results->firstItem() + $key}}</td>
                                        <td>{{$result->question->tag ?? ''}}</td>
                                        <td>{{$result->question->questionType->name ?? ''}}</td>
                                        <td>
                                            @if(Auth::user()->userType->name == 'Teacher')
                                                @if(count($section->sectionTeacher) > 0)
                                                    @if($section->sectionTeacher[0]->edit_priv == 1)
                                                        <button type="button" value="{{$result->question->id ?? ''}}" onclick="editQuestion(this.value)" data-toggle="tooltip" title="Edit Topic" class="action-btn btn btn-primary text-light mb-1">
                                                            <i class="fa fa-edit"></i>
                                                        </button>
                                                    @endif
                                                    
                                                    @if($section->sectionTeacher[0]->delete_priv == 1)
                                                        <button type="button" value="{{$result->id ?? ''}}" onclick="deleteQuestion(this.value)" data-toggle="tooltip" title="Remove Question" class="action-btn btn btn-danger text-light delete-btn mb-1">
                                                            <i class="fa fa-trash"></i>
                                                        </button>
                                                    @endif
                                                @else
                                                    <button type="button" value="{{$result->question->id ?? ''}}" onclick="editQuestion(this.value)" data-toggle="tooltip" title="Edit Topic" class="action-btn btn btn-primary text-light mb-1">
                                                        <i class="fa fa-edit"></i>
                                                    </button>
                                                    <button type="button" value="{{$result->id ?? ''}}" onclick="deleteQuestion(this.value)" data-toggle="tooltip" title="Remove Question" class="action-btn btn btn-danger text-light delete-btn mb-1">
                                                        <i class="fa fa-trash"></i>
                                                    </button>
                                                @endif
                                            @elseif(Auth::user()->userType->name == 'Institute Admin')
                                                <button type="button" value="{{$result->question->id ?? ''}}" onclick="editQuestion(this.value)" data-toggle="tooltip" title="Edit Topic" class="action-btn btn btn-primary text-light mb-1">
                                                    <i class="fa fa-edit"></i>
                                                </button>
                                                <button type="button" value="{{$result->id ?? ''}}" onclick="deleteQuestion(this.value)" data-toggle="tooltip" title="Remove Question" class="action-btn btn btn-danger text-light delete-btn mb-1">
                                                    <i class="fa fa-trash"></i>
                                                </button>
                                            @endif
                                        </td>
                                    </tr>
                                @endforeach
                                 
                            @endif
                        @endif
                    </table>
                    <div id="page-nav text-center">{{ $results->links() }}</div>
                </div>
            @endif
        </div>
    </div> 
</div>
<!-- modak here -->
@include('sections.subjects.assessments.question-modal')
@include('sections.subjects.assessments.create-assessment-modal')
@include('sections.subjects.assessments.question-bank-modal')