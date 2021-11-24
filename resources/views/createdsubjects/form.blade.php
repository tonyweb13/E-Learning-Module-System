<h5>Subject Information</h5>

<input type="hidden" name="id" id="id" class="form-control geo-border-primary" value="{{$data->id ?? ''}}">

<div class="row">

    <div class="col-md-12">

        <div class="row pl-3 pr-3">

            <div class="col-md-4 p-1">

                <label>Subject Cover image </label><br>

                <img src="{{$data->image ?? '/images/no_image.png'}}" width="300px" height="300px;" class="geo-border-primary border mt-2" id="image">

                <button value="/images/no_image.png" class="btn geo-primary mt-1" id="select_img" type="button" style="width: 300px;">Upload image</button>

                <input type="file"hidden name="image" id="image_select">



            </div>

            <div class="col-md-6 p-1">

                <label>Subject Name</label>

                <input type="text" name="subject_name" id="subject-name" class="form-control geo-border-primary" required  placeholder="Enter Name" value="{{$data->name ?? ''}}">

            </div>

        </div>

        <br>

        <div class="row pl-3 pr-3">

            <div class="col-md-6 p-1">

                <h5>Gradebook</h5>

                <button type="button" class="btn btn-sm btn-success" onclick="addRow()"><span class="glyphicon glyphicon-plus-sign"></span> Add Row</button>&nbsp;

                <button type="button" class="btn btn-sm btn-danger" onclick="removeRow()"><span class="glyphicon glyphicon-remove-sign"></span> Del Row</button>&nbsp;

                <p>Please make sure that the weights add to 100%. </p>

                <table id="table-grade-scale" class="table table-bordered" style="margin-top: 15px;">

                    <tr>

                        <td width="5%"></td>

                        <th>Categories</th>

                        <th>Weight (%)</th>

                    </tr>

                </table>

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

<input type="hidden" name="current_user" id="current-user" class="form-control geo-border-primary" required value="{{Auth::user()->id ?? ''}}">
