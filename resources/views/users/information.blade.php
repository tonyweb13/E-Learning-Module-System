<h5>User Information</h5>
<div class="row pl-3 pr-3">
    <div class="col-md-4 p-1">
        <label>First Name</label>
        <input type="text" name="first_name" class="form-control geo-border-primary" required maxlength="100" placeholder="First Name" value="{{$data->first_name ?? ''}}">
    </div>
  	<div class="col-md-4 p-1">
      	<label>Last Name</label>
      	<input type="text" name="last_name" class="form-control geo-border-primary" required maxlength="100" placeholder="Last Name" value="{{$data->last_name ?? ''}}">
  	</div>
  	<div class="col-md-4 p-1">
      	<label>Email</label>
      	<input type="email" name="email" class="form-control geo-border-primary" required maxlength="100" placeholder="Email" value="{{$data->email ?? ''}}">
  	</div>
</div>
<br>
<div class="row pl-3 pr-3">
	<div class="col-md-4 p-1">
        <label>Gender</label>
        <select class="form-control geo-border-primary" name="gender">
            @if($data)
                @if($data->gender == 'female') 
                    <option value="female" selected>Female</option>
                    <option value="male">Male</option>
                @else
                    <option value="female">Female</option>
                    <option value="male" selected>Male</option>
                @endif
            @else
                <option value="female">Female</option>
                <option value="male">Male</option>
            @endif
        </select>
    </div>
    <div class="col-md-4 p-1">
        <label>Status</label>
        <select class="form-control geo-border-primary" name="status">
            @if($data)
                @if($data->status == 1)
                    <option value="1" selected>Active</option>
                    <option value="0">In Active</option>
                @elseif($data->status == 0)
                    <option value="1">Active</option>
                    <option value="0" selected>In Active</option>
                @else
                    <option value="0">In Active</option>
                    <option value="1">Active</option>
                @endif
            @else
                <option value="1">Active</option>
                <option value="0">In Active</option>
            @endif
        </select>
    </div>
    <div class="col-md-4 p-1">
        <label>Birthday</label>
        <input type="date" name="birthday" class="form-control geo-border-primary"  maxlength="100" placeholder="Admin Password" value="{{$data->birthday ?? ''}}">
    </div>
</div>
<br>
@if($user_type == 'Institute Admin')
    <div class="row pl-3 pr-3">
        <div class="col-md-4 p-1">
            <label>Number of teachers to create</label>
            <input type="text" name="assign_num1" id="assign-num1" class="form-control geo-border-primary" maxlength="100" placeholder="Insert no. user can create by this admin" value="{{$data->create_num_teacher ?? 0}}">
        </div>
        <div class="col-md-4 p-1">
            <label>Number of students to create</label>
            <input type="text" name="assign_num2" id="assign-num2" class="form-control geo-border-primary" maxlength="100" placeholder="Insert no. user can create by this admin" value="{{$data->create_num_student ?? 0}}">
        </div>
        <div class="col-md-4 p-1">
            <label>Number of parents to create</label>
            <input type="text" name="assign_num3" id="assign-num3" class="form-control geo-border-primary" maxlength="100" placeholder="Insert no. user can create by this admin" value="{{$data->create_num_parent ?? 0}}">
        </div>
    </div><br>
@endif
<div class="row pl-3 pr-3">
    @if($data)
        <div class="col-md-4 p-1">
            <label>Password</label>
            <input type="password" name="password" id="password" class="form-control geo-border-primary" maxlength="100" placeholder="Your Password is encrypted">
        </div>
        <div class="col-md-4 p-1">
            <label>Confirm Pasword</label>
            <input type="password" name="password2" id="password2" class="form-control geo-border-primary" maxlength="100" placeholder="Your Password is encrypted">
        </div>
        <div class="col-md-4 p-1">
            <label>Institution</label>
            <input type="text" name="institute" id="institute" class="form-control geo-border-primary" required maxlength="100" placeholder="Insert Institute Name" value="{{$data->institute->name ?? ''}}">
            <input type="hidden" name="institute_id" id="institute-id" class="form-control geo-border-primary" value="{{$data->institute->id ?? ''}}">
        </div>
    @else
        <div class="col-md-4 p-1">
            <label>Password</label>
            <input type="password" name="password" id="password" class="form-control geo-border-primary" required maxlength="100" placeholder=" Password">
        </div>
        <div class="col-md-4 p-1">
            <label>Confirm Pasword</label>
            <input type="password" name="password2" id="password2" class="form-control geo-border-primary" required maxlength="100" placeholder="Re-enter Password">
        </div>
        <div class="col-md-4 p-1">
            <label>Institution</label>
            <input type="text" name="institute" id="institute" class="form-control geo-border-primary" required maxlength="100" placeholder=" Select or type name of institution ">
            <input type="hidden" name="institute_id" id="institute-id" class="form-control geo-border-primary">
        </div>
    @endif
</div>
<div class="row pl-3 pr-3">
    <div class="col-md-4 p-1">
        <input type="checkbox" onclick="showPass()">   Show Password
    </div>
</div>
<br>
@if($user_type == 'Student')
    <div class="row pl-3 pr-3">
        <div class="col-md-4 p-1">
            <label>Grade</label>
            <input type="text" name="grade" id="grade" class="form-control geo-border-primary" maxlength="100" placeholder="Select Grade" value="{{$data->grade->name ?? ''}}" required>
            <input type="hidden" name="grade_id" id="grade-id" class="form-control geo-border-primary" maxlength="100" value="{{$data->grade->id ?? ''}}" required>
        </div>
    </div><br>
@endif
<div class="row pl-3 pr-3">
    <div class="col-md-12 p-1">
        <label>About Me</label>
        <input type="text" name="about_me" class="form-control geo-border-primary" placeholder="Tell something about your self...." value="{{$data->about_me ?? ''}}">
    </div>
</div>