<a href="/users/institute" class="right btn btn-info mb-1 text-light" data-toggle="tooltip" title="Browse">

  <i class="fa fa-list"></i>&nbsp;&nbsp;Browse

</a>

<h5>Add New Institutional Admin</h5>

<br>

<form class="border geo-border-primary rounded p-3" id="add-insti-user">

	@csrf

	<input type="hidden" name="id" class="form-control geo-border-primary" value="{{$data->id ?? ''}}">

	<div class="row">

		<div class="col-md-3">

			<img src="{{$user->image ?? '/images/default.png'}}" id="image">

		</div>

	    <div class="col-md-9">

	        @include('users.information')

	        <br>

	        @include('users.address')

	    </div>

	</div>

	<br>

	<div class="right">

	    <button class="btn geo-primary" value="{{$employee->id ?? ''}}" id="eid"><i class="fa fa-save"></i>&nbsp;&nbsp;Save</button>

	    <button class="btn btn-danger" type="button" id="reset_btn"><i class="fa fa-eraser"></i>&nbsp;&nbsp;Reset</button>

	</div>

	<br><br>

	<input type="hidden" name="current_user" class="form-control geo-border-primary" required value="{{Auth::user()->id ?? ''}}">

</form>
