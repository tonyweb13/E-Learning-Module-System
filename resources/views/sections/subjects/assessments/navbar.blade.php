<div class="dashboard-button">
    <div class="header">
        <h2>
            ASSESSMENTS
            @if(Auth::user()->userType->name == 'Teacher')
                @if(count($section->sectionTeacher) > 0)
                    @if($section->sectionTeacher[0]->create_priv == 1)
                        <span class="right">
                            <a href="#" onclick='addAssessment(null);' data-toggle="tooltip" title="ADD ASSESSMENTSS">
                                <i class="fa fa-plus-circle" style="color: white;"></i>
                            </a>
                        </span>
                    @endif
                @else
                    <span class="right">
                        <a href="#" onclick='addAssessment(null);' data-toggle="tooltip" title="ADD ASSESSMENTSS">
                            <i class="fa fa-plus-circle" style="color: white;"></i>
                        </a>
                    </span>
                @endif
            @elseif(Auth::user()->userType->name == 'Institute Admin')
                <span class="right">
                    <a href="#" onclick='addAssessment(null);' data-toggle="tooltip" title="ADD ASSESSMENTSS">
                        <i class="fa fa-plus-circle" style="color: white;"></i>
                    </a>
                </span>
            @endif
        </h2>
    </div>
    <ul>
        @foreach($assessments as $key=> $assessment)
            @if($key == 0)
                <li class="assessment-li" id="assessment-li-{{$assessment->id}}">
                    <a href="/sections/subjects/assessments/{{$section->id ?? ''}}/{{$subject->id ?? ''}}/{{$assessment->id ?? ''}}">
                        {{$assessment->name ?? ''}}
                    </a>
                </li>
            @else
                <li class="assessment-li" id="assessment-li-{{$assessment->id}}">
                    <a href="/sections/subjects/assessments/{{$section->id ?? ''}}/{{$subject->id ?? ''}}/{{$assessment->id ?? ''}}">
                        {{$assessment->name ?? ''}}
                    </a>
                
                </li>
            @endif
            
        @endforeach
    </ul>
</div>