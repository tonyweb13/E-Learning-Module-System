<h5>Guides Information</h5>

<input type="hidden" name="id" class="form-control geo-border-primary" value="{{$data->id ?? ''}}">

<div class="row">

    <div class="col-md-12">

        <div class="row pl-3 pr-3">

            <div class="col-md-4 p-1">

                <label>Title</label>

                <input type="text" name="title" class="form-control geo-border-primary" required maxlength="100" placeholder="Workbook Title" value="{{$data->title ?? ''}}">

            </div>

            <div class="col-md-4 p-1">

                <label>Downloadable</label>

                <select name="downloadable" id="downloadable" class="form-control">

                  <option>Please select settings</option>

                  <option value="1">Yes</option>

                  <option value="0">No</option>

                </select>

            </div>

            <div class="col-md-4 p-1">

                <label>Subject file <span style="font-size: 12px;color:red; ">**upload zip file only</span></label>

                <input type="file" name="file" class="form-control geo-border-primary" required placeholder="Guide File">

            </div>

        </div>

        <div class="row pl-3 pr-3">

            <div class="col-md-4 p-1">

                <label>Subject Cover image </label>

                <!-- <img src="{{$data->image ?? '/images/no_image.png'}}" onerror="this.src='/images/no_image.png'" width="300px" height="300px;" class="geo-border-primary border mt-2" id="image"> -->

                <img src="/images/no_image.png" width="300px" height="300px;" class="geo-border-primary border mt-2" id="image">

                <button value="/images/no_image.png" class="btn geo-primary mt-1" id="select_img" type="button" style="width: 300px;">Upload image</button>

                <input type="file"hidden name="image" id="image_select">



            </div>

            <div class="col-md-6 p-1">

                <label>Description</label>

                <textarea name="description" id="description" placeholder="Description" rows="17" cols="50" class="form-control geo-border-primary">{{$data->description ?? ''}}</textarea>

            </div>

        </div>

    </div>

</div>

<br>

<div class="right">

    <button class="btn geo-primary" value="{{$employee->id ?? ''}}" id="eid"><i class="fa fa-save"></i>&nbsp;&nbsp;Save</button>

    <button class="btn btn-danger" type="button" id="reset_btn"><i class="fa fa-eraser"></i>&nbsp;&nbsp;Reset</button>

</div>

<br><br>

<input type="hidden" name="current_user" class="form-control geo-border-primary" required value="{{Auth::user()->id ?? ''}}">
