<div class="dashboard-button">
    <div class="header">
        <h2>
            LESSONS
            @if(Auth::user()->userType->name == 'Teacher')
                @if(count($section->sectionTeacher) > 0)
                    @if($section->sectionTeacher[0]->create_priv == 1)
                        <span class="right">
                            <a href="#" onclick='addLesson(null);' data-toggle="tooltip" title="ADD LESSON">
                                <i class="fa fa-plus-circle" style="color: white;"></i>
                            </a>
                        </span>
                    @endif
                @else
                    <span class="right">
                        <a href="#" onclick='addLesson(null);' data-toggle="tooltip" title="ADD LESSON">
                            <i class="fa fa-plus-circle" style="color: white;"></i>
                        </a>
                    </span>
                @endif
            @elseif(Auth::user()->userType->name == 'Institute Admin')
                <span class="right">
                    <a href="#" onclick='addLesson(null);' data-toggle="tooltip" title="ADD LESSON">
                        <i class="fa fa-plus-circle" style="color: white;"></i>
                    </a>
                </span>
            @endif
        </h2>
    </div>
    <ul>
        @foreach($lessons as $key=> $lesson)
            @if($key == 0)
                <li class="subject-li" id="subject-li-{{$lesson->id}}">
                    
                    <a href="/sections/subjects/lessons/view/{{$section->id ?? ''}}/{{$subject->id ?? ''}}/{{$lesson->id ?? ''}}">
                        {{$lesson->name ?? ''}}
                    </a>
                    <ul>
                        @foreach($lesson->topic as $topic)
                            <li>
                                <a href="#">
                                    {{$topic->name ?? ''}}
                                </a>
                            </li>
                        @endforeach
                    </ul>
                </li>
            @else
                <li class="subject-li" id="subject-li-{{$lesson->id}}">
                   
                    <a href="/sections/subjects/lessons/view/{{$section->id ?? ''}}/{{$subject->id ?? ''}}/{{$lesson->id ?? ''}}">
                        {{$lesson->name ?? ''}}
                    </a>
                    <ul>
                        @foreach($lesson->topic as $topic)
                            <li>
                                <a href="#">
                                    {{$topic->name ?? ''}}
                                </a>
                            </li>
                        @endforeach
                    </ul>
                </li>
            @endif
            
        @endforeach
    </ul>
</div>