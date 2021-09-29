<div class="row">
    <div class="col-md-12">
        <div class="row pl-3 pr-3">
            <div class="col-md-2 p-1">
                @include('sections.subjects.lessons.navbar')
            </div>
            @if(count($lessons) == 0)
                <div class="col-md-10">
                    @if(Auth::user()->userType->name == 'Teacher' ||Auth::user()->userType->name == 'Institute Admin')
                        <p style="padding: 20px;">You don’t have any lessons. To add a lesson, click the Plus icon on the left.</p>
                    @else
                        <p style="padding: 20px;">You don’t have any lessons.</p>
                    @endif
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
                        <h5>{{$lesson->name ?? ''}}</h5>
                        @if(Auth::user()->userType->name == 'Teacher')
                            @if(count($section->sectionTeacher) > 0)
                                @if($section->sectionTeacher[0]->edit_priv == 1)
                                    <button type="button" value="{{$lesson->id ?? ''}}" onclick="addLesson(this.value)" data-toggle="tooltip" title="Edit Lesson" class="action-btn btn" style="background-color: white; margin-top: -6px;">
                                        <i class="fas fa-pen"></i>
                                    </button>
                                @endif
                                
                                @if($section->sectionTeacher[0]->delete_priv == 1)
                                    <button type="button" value="{{$lesson->id ?? ''}}" onclick="deleteLesson(this.value)" data-toggle="tooltip" title="Delete Lesson" class="action-btn btn" style="background-color: white; margin-top: -6px; margin-left: -10px;">    
                                        <i class="fa fa-trash"></i>
                                    </button>
                                @endif
                            @else
                                <button type="button" value="{{$lesson->id ?? ''}}" onclick="addLesson(this.value)" data-toggle="tooltip" title="Edit Lesson" class="action-btn btn" style="background-color: white; margin-top: -6px;">
                                    <i class="fas fa-pen"></i>
                                </button>
                                <button type="button" value="{{$lesson->id ?? ''}}" onclick="deleteLesson(this.value)" data-toggle="tooltip" title="Delete Lesson" class="action-btn btn" style="background-color: white; margin-top: -6px; margin-left: -10px;">    
                                    <i class="fa fa-trash"></i>
                                </button>
                                @if($lesson->status == 0)
                                    
                                    <button type="button" value="{{$lesson->id}}" onclick="uploadLesson(this.value)" data-toggle="tooltip" title="Publish/Unpublish Lesson" class="action-btn btn" style="background-color: white; margin-top: -6px; margin-left: -10px;">
                                        <i class="far fa-check-circle"></i>
                                    </button>
                                    
                                @else
                                
                                    <button type="button" value="{{$lesson->id}}" onclick="hideLesson(this.value)" data-toggle="tooltip" title="Publish/Unpublish Lesson" class="action-btn btn" style="background-color: white; margin-top: -6px; margin-left: -10px;">
                                        <i class="fas fa-check-circle"></i>
                                    </button>
                                    
                                @endif
                            @endif
                        @elseif(Auth::user()->userType->name == 'Institute Admin')
                        
                            <button type="button" value="{{$lesson->id ?? ''}}" onclick="addLesson(this.value)" data-toggle="tooltip" title="Edit Lesson" class="action-btn btn" style="background-color: white; margin-top: -6px;">
                                <i class="fas fa-pen"></i>
                            </button>
                            <button type="button" value="{{$lesson->id ?? ''}}" onclick="deleteLesson(this.value)" data-toggle="tooltip" title="Delete Lesson" class="action-btn btn" style="background-color: white; margin-top: -6px; margin-left: -10px;">    
                                <i class="fa fa-trash"></i>
                            </button>
                            @if($lesson->status == 0)
                                
                                <button type="button" value="{{$lesson->id}}" onclick="uploadLesson(this.value)" data-toggle="tooltip" title="Publish/Unpublish Lesson" class="action-btn btn" style="background-color: white; margin-top: -6px; margin-left: -10px;">
                                    <i class="far fa-check-circle"></i>
                                </button>
                                
                            @else
                            
                                <button type="button" value="{{$lesson->id}}" onclick="hideLesson(this.value)" data-toggle="tooltip" title="Publish/Unpublish Lesson" class="action-btn btn" style="background-color: white; margin-top: -6px; margin-left: -10px;">
                                    <i class="fas fa-check-circle"></i>
                                </button>
                                
                            @endif
                        @endif
                        <input type="hidden" id="section" value="{{$section->id}}">
                        <input type="hidden" id="subject" value="{{$subject->id}}">
                        <input type="hidden" id="lesson" value="{{$lesson->id}}">
                    </div>
                    <br>
                    <div class="row space-title">
                        <div class="col-6">
                            <form class="input-group" action="/sections/subjects/lessons/view/{{$section->id ?? ''}}/{{$subject->id ?? ''}}/{{$lesson->id ?? 'null'}}" autocomplete="off">
                                <div class="input-group-prepend">
                                    <button class="search-btn geo-primary" data-toggle="tooltip" title="Search">
                                        <i class="fa fa-search"></i>
                                    </button>
                                    <input type="text" class="form-control mr-12" name="keyword" placeholder="Search Topic Name" value="{{$keyword}}">
                                </div>
                            </form>
                        </div>
                        <div class="col-6">
                            @if(Auth::user()->userType->name == 'Teacher')
                                @if(count($section->sectionTeacher) > 0)
                                    @if($section->sectionTeacher[0]->create_priv == 1)
                                        <a href="#" onclick="uploadTopic(null);" class="right geo-primary mb-1 button-add" data-toggle="tooltip" title="Upload topic">
                                           Upload<i class="fas fa-file-upload"></i>
                                        </a>
                                        <a href="#" onclick="createTopic(null);" class="right geo-primary mb-1 button-add" data-toggle="tooltip" title="Create Topic">
                                           Create<i class="fas fa-plus-square"></i>
                                        </a>
                                    @endif
                                @else
                                    <a href="#" onclick="uploadTopic(null);" class="right geo-primary mb-1 button-add" data-toggle="tooltip" title="Upload topic">
                                       Upload<i class="fas fa-file-upload"></i>
                                    </a>
                                    <a href="#" onclick="createTopic(null);" class="right geo-primary mb-1 button-add" data-toggle="tooltip" title="Create Topic">
                                       Create<i class="fas fa-plus-square"></i>
                                    </a>
                                @endif
                            @elseif(Auth::user()->userType->name == 'Institute Admin')
                                <a href="#" onclick="uploadTopic(null);" class="right geo-primary mb-1 button-add" data-toggle="tooltip" title="Upload topic">
                                   Upload<i class="fas fa-file-upload"></i>
                                </a>
                                <a href="#" onclick="createTopic(null);" class="right geo-primary mb-1 button-add" data-toggle="tooltip" title="Create Topic">
                                   Create<i class="fas fa-plus-square"></i>
                                </a>
                            @endif
                        </div>
                    </div>
                    <br>
                    <table class="table border">
                        <tr style="background-color:#0074bc;color:white;">
                            <th width="10%" class="text-center">S No.</th>
                            <th width="55%">Topic</th>
                            <th width="20%" class="text-center">Actions</th>
                        </tr>
                        @if($lesson)
                            @if(count($results) == 0)
                                <tr>
                                    <td class="text-center" colspan="13">
                                        @if(Auth::user()->userType->name == 'Teacher' ||Auth::user()->userType->name == 'Institute Admin')
                                            Your lesson has no content. Please add or upload content by clicking the Create or Upload button. 
                                        @else
                                            Lesson has no content.
                                        @endif
                                    </td>
                                </tr>
                            @else
                                @for($i=0; $i < count($results); $i++)
                                    <tr>
                                        <td class="text-center">
                                            {{$i + 1}}
                                        </td>
                                        <td>{{$results[$i]->name ?? ''}}</td>
                                        <td class="text-center">
                                            <!--for all view-->
                                            <button type="button" value="{{$results[$i]->id ?? ''}}" onclick="viewTopic(this.value)" data-toggle="tooltip" title="View Topic" class="action-btn btn orange-pastel text-light delete-btn mb-1">
                                                 <i class="fa fa-eye"></i>
                                            </button>
                                            
                                            @if(Auth::user()->userType->name == 'Teacher')
                                                @if(count($section->sectionTeacher) > 0)
                                                    @if($results[$i]->content_type == 'html') 

                                                        <button type="button" value="{{$results[$i]->id ?? ''}}" onclick="createTopic(this.value)" data-toggle="tooltip" title="Edit Topic" class="action-btn btn btn-primary text-light mb-1">
                                                            <i class="fa fa-edit"></i>
                                                        </button>
        
                                                    @else
                                                        <button type="button" value="{{$results[$i]->id ?? ''}}" onclick="uploadTopic(this.value)" data-toggle="tooltip" title="Edit Topic" class="action-btn btn btn-primary text-light mb-1">
                                                            <i class="fa fa-edit"></i>
                                                        </button>
                                                    @endif
                                                    @if($section->sectionTeacher[0]->delete_priv == 1)
                                                        <button type="button" value="{{$results[$i]->id}}" onclick="deleteData(this.value)" data-toggle="tooltip" title="Delete Topic" class="action-btn btn btn-danger text-light delete-btn mb-1">
                                                            <i class="fa fa-trash"></i>
                                                        </button>
                                                    @endif
                                                @else
                                                
                                                    @if($results[$i]->content_type == 'html') 

                                                        <button type="button" value="{{$results[$i]->id ?? ''}}" onclick="createTopic(this.value)" data-toggle="tooltip" title="Edit Topic" class="action-btn btn btn-primary text-light mb-1">
                                                            <i class="fa fa-edit"></i>
                                                        </button>
        
                                                    @else
                                                        <button type="button" value="{{$results[$i]->id ?? ''}}" onclick="uploadTopic(this.value)" data-toggle="tooltip" title="Edit Topic" class="action-btn btn btn-primary text-light mb-1">
                                                            <i class="fa fa-edit"></i>
                                                        </button>
                                                    @endif
                                                    <button type="button" value="{{$results[$i]->id}}" onclick="deleteData(this.value)" data-toggle="tooltip" title="Delete Topic" class="action-btn btn btn-danger text-light delete-btn mb-1">
                                                        <i class="fa fa-trash"></i>
                                                    </button>
                                                    @if($results[$i]->status == 0)
                                        
                                                        <button type="button" value="{{$results[$i]->id}}" onclick="uploadTopicStatus(this.value)" data-toggle="tooltip" title="Publish/Unpublish Topic" class="action-btn btn purple-pastel text-light delete-btn mb-1">
                                                            <i class="far fa-check-circle"></i>
                                                        </button>
                                                        
                                                    @else
                                                    
                                                        <button type="button" value="{{$results[$i]->id}}" onclick="hideTopic(this.value)" data-toggle="tooltip" title="Publish/Unpublish Topic" class="action-btn btn green-pastel text-light delete-btn mb-1">
                                                            <i class="fas fa-check-circle"></i>
                                                        </button>
                                                        
                                                    @endif
                                                    
                                                @endif
                                            @elseif(Auth::user()->userType->name == 'Institute Admin')
                                                @if($results[$i]->content_type == 'html') 

                                                    <button type="button" value="{{$results[$i]->id ?? ''}}" onclick="createTopic(this.value)" data-toggle="tooltip" title="Edit Topic" class="action-btn btn btn-primary text-light mb-1">
                                                        <i class="fa fa-edit"></i>
                                                    </button>
    
                                                @else
                                                    <button type="button" value="{{$results[$i]->id ?? ''}}" onclick="uploadTopic(this.value)" data-toggle="tooltip" title="Edit Topic" class="action-btn btn btn-primary text-light mb-1">
                                                        <i class="fa fa-edit"></i>
                                                    </button>
                                                @endif
                                                <button type="button" value="{{$results[$i]->id}}" onclick="deleteData(this.value)" data-toggle="tooltip" title="Delete Topic" class="action-btn btn btn-danger text-light delete-btn mb-1">
                                                        <i class="fa fa-trash"></i>
                                                    </button>
                                                @if($results[$i]->status == 0)
                                        
                                                    <button type="button" value="{{$results[$i]->id}}" onclick="uploadTopicStatus(this.value)" data-toggle="tooltip" title="Publish/Unpublish Topic" class="action-btn btn purple-pastel text-light delete-btn mb-1">
                                                        <i class="far fa-check-circle"></i>
                                                    </button>
                                                    
                                                @else
                                                
                                                    <button type="button" value="{{$results[$i]->id}}" onclick="hideTopic(this.value)" data-toggle="tooltip" title="Publish/Unpublish Topic" class="action-btn btn green-pastel text-light delete-btn mb-1">
                                                        <i class="fas fa-check-circle"></i>
                                                    </button>
                                                    
                                                @endif
                                            @endif
                                        </td>
                                    </tr>
                                @endfor
                            @endif
                        @endif
                    </table>
                    <div id="page-nav text-center">{{ $results->links() }}</div>
                </div>
            @endif
            
        </div>
    </div> 
</div>
