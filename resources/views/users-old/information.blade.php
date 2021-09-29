<h5>User Information</h5>
<div class="row pl-3 pr-3">
    <div class="col-md-4 p-1">
        <label>First Name</label>
        <input type="text" name="first_name" class="form-control geo-border-primary" required maxlength="100" placeholder="Admin First Name" value="{{$data->first_name ?? ''}}">
    </div>
  	<div class="col-md-4 p-1">
      	<label>Last Name</label>
      	<input type="text" name="last_name" class="form-control geo-border-primary" required maxlength="100" placeholder="Admin Last Name" value="{{$data->last_name ?? ''}}">
  	</div>
  	<div class="col-md-4 p-1">
      	<label>Email</label>
      	<input type="email" name="email" class="form-control geo-border-primary" required maxlength="100" placeholder="Admin Email" value="{{$data->email ?? ''}}">
  	</div>
</div>
<br>
<div class="row pl-3 pr-3">
	<div class="col-md-4 p-1">
        <label>Gender</label>
        <select class="form-control geo-border-primary" name="gender" required>
            <option value="female">Female</option>
            <option value="male">Male</option>
        </select>
    </div>
    <div class="col-md-4 p-1">
        <label>Status</label>
        <select class="form-control geo-border-primary" name="status" required>
            <option value="1">Active</option>
            <option value="0">In Active</option>
        </select>
    </div>
    <div class="col-md-4 p-1">
        <label>Birthday</label>
        <input type="date" name="birthday" class="form-control geo-border-primary" required maxlength="100" placeholder="Admin Password" value="{{$data->birthday ?? ''}}">
    </div>
</div>
<br>
@if($data == null)
    <div class="row pl-3 pr-3">
        @if($user_type == 'Admin')
        <div class="col-md-4 p-1">
            <label>Password</label>
            <input type="password" name="password" id="password" class="form-control geo-border-primary" required maxlength="100" placeholder="Admin Password">
        </div>
        <div class="col-md-4 p-1">
            <label>Confirm Pasword</label>
            <input type="password" name="password2" id="password2" class="form-control geo-border-primary" required maxlength="100" placeholder="Re-enter Password">
        </div>
        @endif
        @if($user_type == 'Institute Admin')
            <div class="col-md-4 p-1">
                <label>Number of Create User</label>
                <input type="text" name="assign_num" id="assign-num" class="form-control geo-border-primary" required maxlength="100" placeholder="Insert no. user can create by this admin">
            </div>
        @endif
    </div>
    @if($user_type == 'Admin')
    <div class="row pl-3 pr-3">
        <div class="col-md-4 p-1">
            <input type="checkbox" onclick="showPass()">   Show Password
        </div>
    </div>
    @endif
    <br>
@endif
<div class="row pl-3 pr-3">
    <div class="col-md-12 p-1">
        <label>About Me</label>
        <input type="text" name="about_me" class="form-control geo-border-primary" placeholder="Tell something about your self...." value="{{$data->about_me ?? ''}}">
    </div>
</div>