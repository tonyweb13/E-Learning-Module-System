<ul class="nav nav-pills">
    @if(Auth::user()->userType->name != 'Institute Admin')
        <li id="admin-li">
            <a class="nav-class" href="/users/admins">Admin</a>
        </li>
        <li id="insi-li">
        	<a class="nav-class" href="/users/institutes">Institutional Admin</a>
        </li>
    @endif
    <li id="teacher-li">
    	<a class="nav-class" href="/users/teachers">Teacher</a>
    </li>
    <li id="student-li">
        <a class="nav-class" href="/users/students">Student</a>
    </li>
    <li id="parent-li">
        <a class="nav-class" href="#">Parent</a>
    </li>
    <li id="import-user-li">
        <a class="nav-class" href="/users/import">Import User</a>
    </li>
</ul>
<input type="hidden" name="user_type" id="user-type" value="{{$user_type ?? 'Admin'}}">