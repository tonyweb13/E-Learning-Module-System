<h5>Guides Information</h5>
<input type="hidden" name="id" class="form-control geo-border-primary" value="{{$data->id ?? ''}}">
<div class="row">
    <div class="col-md-12">
        <div class="row pl-3 pr-3">
            <div class="col-md-4 p-1">
                <label>Title</label>
                <input type="text" name="title" class="form-control geo-border-primary" required maxlength="100" placeholder="Guide Title" value="{{$data->title ?? ''}}">
            </div>
        </div>
        <br>
        @if($data)
            <div class="row pl-3 pr-3">
                <div class="col-md-4 p-1">
                    <label>Subject Guide file <span style="font-size: 12px;color:red; ">**upload zip file only</span></label>
                    <input type="text" class="form-control geo-border-primary"  placeholder="Current file - " value="Current file - {{$data->file_name ?? 'None'}}">

                    <input type="file" name="file" id="file" class="form-control geo-border-primary"  placeholder="Guide File">
                </div>
            </div>
        @else
            <div class="row pl-3 pr-3">
                <div class="col-md-4 p-1">
                    <label>Subject Guide file <span style="font-size: 12px;color:red; ">**upload zip file only</span></label>
                    <input type="file" name="file" id="file" class="form-control geo-border-primary" required placeholder="Guide File">
                </div>
            </div>
        @endif
        <br>
    </div>
</div>
<br>
<div class="right">
    <button class="btn geo-primary" value="{{$employee->id ?? ''}}" id="eid"><i class="fa fa-save"></i>&nbsp;&nbsp;Save</button>
    <button class="btn btn-danger" type="button" id="reset_btn"><i class="fa fa-eraser"></i>&nbsp;&nbsp;Reset</button>
</div>
<br><br>
<input type="hidden" name="current_user" class="form-control geo-border-primary" required value="{{Auth::user()->id ?? ''}}">

    