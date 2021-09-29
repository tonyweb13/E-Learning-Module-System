<ul class="nav nav-pills">
    @if(Auth::user()->userType->name == 'Teacher' ||Auth::user()->userType->name == 'Institute Admin')
        <li id="instruction-li">
            <a class="nav-class" href="/sections/view/{{$section->id}}">Instructions</a>
        </li>
    @endif
    
    <li id="subject-li">
        <a class="nav-class" href="/sections/subjects/{{$section->id}}">Subjects</a>
    </li>
    @if(Auth::user()->userType->name == 'Teacher' ||Auth::user()->userType->name == 'Institute Admin')
        <li id="student-li">
            <a class="nav-class" id="student-a" href="/sections/students/{{$section->id}}">Online Learners</a>
        </li>
        <li id="record-li">
            <a class="nav-class" href="/sections/records/{{$section->id}}">Online Learners Records</a>
        </li>
        <li id="student-modular-li">
            <a class="nav-class" id="student-a2" href="/sections/students/modular/{{$section->id}}">Modular Learners</a>
        </li>
    @else
        <li id="record-li">
            <a class="nav-class" href="/sections/records/student/view2/{{$section->id}}">Records</a>
        </li>
    @endif
    
    
</ul>
<input type="hidden" name="type" id="type" value="{{$type ?? ''}}">
