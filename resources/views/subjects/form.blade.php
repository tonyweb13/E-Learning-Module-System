<h5>Guides Information</h5>
<input type="hidden" name="id" class="form-control geo-border-primary" value="{{$data->id ?? ''}}">
<div class="row">
    <div class="col-md-12">
        <div class="row pl-3 pr-3">
            <div class="col-md-3 p-1">
                <label>Title</label>
                <input type="text" name="title" class="form-control geo-border-primary" required maxlength="100" placeholder="Subject Title" value="{{$data->title ?? ''}}">
            </div>
            <div class="col-md-3 p-1">
                <label>Grade</label>
                <input type="text" name="grade" id="grade" class="form-control geo-border-primary" required maxlength="100" placeholder="Grade" value="{{$data->grade->name ?? ''}}">
                <input type="hidden" name="grade_id" id="grade-id" class="form-control geo-border-primary" value="{{$data->grade->id ?? ''}}" required>
            </div>
            <div class="col-md-3 p-1">
                <label>Status</label>
                <select class="form-control geo-border-primary" name="status" id="status" required>
                    @if($data)
                        @if($data->status == 1)
                            <option selected value="1">Active</option>
                            <option value="0">Inactive</option>
                        @else
                            <option  value="1">Active</option>
                            <option selected value="0">Inactive</option>
                        @endif
                    @else
                        <option selected value="1">Active</option>
                        <option value="0">Inactive</option>
                    @endif
                    
                </select>
            </div>
            <div class="col-md-3 p-1">
                <label>Price</label>
                <input type="text" name="price" class="form-control geo-border-primary" required maxlength="100" placeholder="Subject Price (Php)" value="{{$data->price ?? ''}}">
            </div>
        </div>
        <br>
<!--         <div class="row pl-3 pr-3">
            <div class="col-md-4 p-1">
                <label>Guide</label>
                <input type="text" name="guide" id="guide" class="form-control geo-border-primary" required maxlength="100" placeholder="Guide Title" value="{{$data->title ?? ''}}">
                <input type="hidden" name="guide_id" id="guide-id" class="form-control geo-border-primary" required>
            </div>
            <div class="col-md-6 p-1">
                <label>Price</label>
                <input type="text" name="price" class="form-control geo-border-primary" required maxlength="100" placeholder="Subject Price (Php)" value="{{$data->title ?? ''}}">
            </div>
        </div>
        <br> -->
        <div class="row pl-3 pr-3">
            <div class="col-md-6 p-1">
                <label>Subject file <span style="font-size: 12px;color:red; ">**upload zip file only</span></label>
                <input type="file" name="file" class="form-control geo-border-primary" required placeholder="Guide File">
            </div>
            <!-- <div class="col-md-6 p-1">
                <label>Upload Offline Version <span style="font-size: 12px;color:red; ">**upload zip file only</span></label>
                <input type="file" name="file_offline" class="form-control geo-border-primary"  placeholder="Guide File">
            </div> -->
        </div>
        <br>
        <div class="row pl-3 pr-3">
            <div class="col-md-4 p-1">
                <label>Subject Cover image </label><br>
                <img src="{{$data->image ?? '/images/no_image.png'}}" onerror="this.src='/images/no_image.png'" width="300px" height="300px;" class="geo-border-primary border mt-2" id="image">
                <button value="/images/no_image.png" class="btn geo-primary mt-1" id="select_img" type="button" style="width: 300px;">Upload image</button>
                <input type="file"hidden name="image" id="image_select">

            </div>
            <div class="col-md-6 p-1">
                <label>Description</label>
                @include('subjects.editor')
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

    