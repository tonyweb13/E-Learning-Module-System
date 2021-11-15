<h5>Class Information</h5>

<input type="hidden" name="id" class="form-control geo-border-primary" value="{{$data->id ?? ''}}">

<div class="row">

    <div class="col-md-12">

        <div class="row pl-3 pr-3">

            <div class="col-md-6 p-1">

                <label>Class / Section Name</label>

                <input type="text" name="name" id="name" class="form-control geo-border-primary" required  placeholder="Enter Name" value="{{$data->name ?? ''}}">

            </div>

            <div class="col-md-6 p-1">

                <label>Grade</label>

                <input type="text" name="grade" id="grade" class="form-control geo-border-primary" required value="{{$data->grade->name ?? ''}}" placeholder="Select Grade Level">

                <input type="hidden" name="grade_id" id="grade-id" class="form-control geo-border-primary" required value="{{$data->grade->id ?? ''}}">

            </div>

            <div class="col-md-6 p-1">

                <label>Start of School Year</label>

                <input type="date" name="start_date" class="form-control geo-border-primary" required value="{{$data->start_date ?? ''}}">

            </div>

            <div class="col-md-6 p-1">

                <label>End of School Year</label>

                <input type="date" name="end_date" class="form-control geo-border-primary" required  value="{{$data->end_date ?? ''}}">

            </div>

        </div>

        <br>

        <div class="row pl-3 pr-3">

            <div class="col-md-4 p-1">

                <label>Class Cover image </label><br>

                <img src="{{$data->image ?? '/images/no_image.png'}}" width="300px" height="300px;" class="geo-border-primary border mt-2" id="image">

                <button value="/images/no_image.png" class="btn geo-primary mt-1" id="select_img" type="button" style="width: 300px;">Upload image</button>

                <input type="file"hidden name="image" id="image_select">



            </div>

        </div>

    </div>

</div>

<br>

<div class="right">

    <button class="btn btn-success" value="{{$employee->id ?? ''}}" id="eid"><i class="fa fa-save"></i>&nbsp;&nbsp;Save</button>

    <button class="btn btn-danger" type="button" id="reset_btn"><i class="fa fa-eraser"></i>&nbsp;&nbsp;Reset</button>

</div>

<br><br>

<input type="hidden" name="current_user" class="form-control geo-border-primary" required value="{{Auth::user()->id ?? ''}}">
