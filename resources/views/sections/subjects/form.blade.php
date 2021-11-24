<h5>Subject Information</h5>

<input type="hidden" name="section_id" class="form-control geo-border-primary" value="{{$section->id ?? ''}}">

<input type="hidden" name="id" id="id" class="form-control geo-border-primary" value="{{$data->id ?? ''}}">

<div class="row">

    <div class="col-md-12">

        <div class="row pl-3 pr-3">

            <div class="col-md-4 p-1">

                <label>Class Cover image </label><br>

                <img src="{{$data->image ?? '/images/no_image.png'}}" width="300px" height="300px;" class="geo-border-primary border mt-2" id="image">

                <button value="/images/no_image.png" class="btn geo-primary mt-1" id="select_img" type="button" style="width: 300px;">Upload image</button>

                <input type="file"hidden name="image" id="image_select">



            </div>

            <div class="col-md-6 p-1">

                <label>Subject Name</label>

                <input type="text" name="subject_name" id="subject-name" class="form-control geo-border-primary" required  placeholder="Enter Name" value="{{$data->mySubject->createdSubject->name ?? ''}}">

                <input type="hidden" name="subject_id" id="subject-id" class="form-control geo-border-primary" value="{{$data->mySubject->createdSubject->id ?? ''}}">

            </div>

        </div>

        <br>

        <div class="row pl-3 pr-3">

            <div class="col-md-8 p-1">

                <h5>Grade Book</h5>

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

        <br>

        <div class="row pl-3 pr-3">

            <div class="col-md-12 p-1">

                <h5>Grade Scale</h5>

                <button type="button" class="btn btn-sm btn-success" onclick="addRowScale()"><span class="glyphicon glyphicon-plus-sign"></span> Add Row</button>&nbsp;

                <button type="button" class="btn btn-sm btn-danger" onclick="removeRowScale()"><span class="glyphicon glyphicon-remove-sign"></span> Del Row</button>&nbsp;

                <table id="table-assessment-scale" class="table table-bordered" style="margin-top: 15px;">

                    <tr>

                        <td width="5%"></td>

                        <th width="20%">Description</th>

                        <th width="10%">From</th>

                        <th width="10%">To</th>

                        <th width="20%">Remarks</th>

                        <th width="20%">Icon</th>

                        <th width="15%">Color</th>

                    </tr>

                    @if($data == null)

                        <tr>

                            <td>

                                <input type="checkbox" class="worksheet-row-index"/>

                            </td>

                            <td>

                                <input type="text" id="description" name="scale_description[]" class="form-control input-sm"  autocomplete="off" required value="Satisfactory"/>

                                <input type="hidden" id="assessment-scale-id" name="assessment_scale_id[]" class="form-control input-sm"  autocomplete="off" required />

                            </td>

                            <td>

                                <input type="number" id="scale-from-id" name="scale_from_id[]" class="form-control input-sm"  autocomplete="off" value="75"/>

                            </td>

                            <td>

                                <input type="number" id="scale-to-id" name="scale_to_id[]" class="form-control input-sm"  autocomplete="off" value="100"/>

                            </td>

                            <td>

                                <select class="form-control" id="remarks" name="remarks[]" required>

                                    <option value="Passed" selected>Passed</option>

                                    <option value="Failed">Failed</option>

                                </select>

                            </td>

                            <td>

                                <select class="form-control fa" id="icons" name="icons[]" required>

                                    <option value="far fa-grin-stars">&#xf587; Grin Star</option>

                                    <option value="far fa-grin-hearts">&#xf584; Grin Heart</option>

                                    <option value="far fa-laugh-beam">&#xf59a; Laugh Beam</option>

                                    <option value="far fa-surprise">&#xf5c2; Surprise</option>

                                    <option value="far fa-laugh">&#xf599; Laugh</option>

                                    <option value="far fa-frown">&#xf119; Frown</option>

                                    <option value="far fa-smile">&#xf118; Smile</option>

                                    <option value="far fa-sad-tear">&#xf5b4; Sad Tear</option>

                                    <option value="far fa-sad-cry">&#xf5b3; Sad Cry</option>

                                    <option value="far fa-dizzy">&#xf567; Dizzy</option>

                                    <option value="far fa-star">&#xf005; Star</option>

                                    <option value="fas fa-star-half-alt">&#xf089; Half Star</option>

                                    <option value="fas fa-star">&#xf005; Full Star</option>

                                </select>

                            </td>

                            <td>

                                <select class="form-control" id="colors" name="colors[]" required>

                                    <option style="color:#000000 !important;" value="#000000">Black</option>

                                    <option style="color:#FF0000 !important;" value="#FF0000">Red</option>

                                    <option style="color:#FFC0CB !important;" value="#FFC0CB">Pink</option>

                                    <option style="color:#FFA500 !important;" value="#FFA500">Orange</option>

                                    <option style="color:#0000FF !important;" value="#0000FF">Blue</option>

                                    <option style="color:#a7d3b7  !important;" value="#a7d3b7">Glenwood Green</option>

                                    <option style="color:#09f655 !important;" value="#09f655">Green</option>

                                    <option style="color:#d70141  !important;" value="#d70141 ">Joker Smile</option>

                                    <option style="color:#41729f !important;" value="#41729f">Naval</option>

                                    <option style="color:#75dbc1 !important;" value="#75dbc1">Star Grass</option>

                                    <option style="color:#bf3cff   !important;" value="#bf3cff">Magnetos </option>

                                </select>

                            </td>

                        </tr>

                        <tr>

                            <td>

                                <input type="checkbox" class="worksheet-row-index"/>

                            </td>

                            <td>

                                <input type="text" id="description" name="scale_description[]" class="form-control input-sm"  autocomplete="off" required value="Unsatisfactory"/>

                                <input type="hidden" id="assessment-scale-id" name="assessment_scale_id[]" class="form-control input-sm"  autocomplete="off" required />

                            </td>

                            <td>

                                <input type="number" id="scale-from-id" name="scale_from_id[]" class="form-control input-sm"  autocomplete="off" value="0"/>

                            </td>

                            <td>

                                <input type="number" id="scale-to-id" name="scale_to_id[]" class="form-control input-sm"  autocomplete="off" value="74"/>

                            </td>

                            <td>

                                <select class="form-control" id="remarks" name="remarks[]" required>

                                    <option value="Passed">Passed</option>

                                    <option value="Failed" selected>Failed</option>

                                </select>

                            </td>

                            <td>

                                <select class="form-control fa" id="icons" name="icons[]" required>

                                    <option value="far fa-grin-stars">&#xf587; Grin Star</option>

                                    <option value="far fa-grin-hearts">&#xf584; Grin Heart</option>

                                    <option value="far fa-laugh-beam">&#xf59a; Laugh Beam</option>

                                    <option value="far fa-surprise">&#xf5c2; Surprise</option>

                                    <option value="far fa-laugh">&#xf599; Laugh</option>

                                    <option value="far fa-frown">&#xf119; Frown</option>

                                    <option value="far fa-smile">&#xf118; Smile</option>

                                    <option value="far fa-sad-tear">&#xf5b4; Sad Tear</option>

                                    <option value="far fa-sad-cry">&#xf5b3; Sad Cry</option>

                                    <option value="far fa-dizzy">&#xf567; Dizzy</option>

                                    <option value="far fa-star">&#xf005; Star</option>

                                    <option value="fas fa-star-half-alt">&#xf089; Half Star</option>

                                    <option value="fas fa-star">&#xf005; Full Star</option>

                                </select>

                            </td>

                            <td>

                                <select class="form-control" id="colors" name="colors[]" required>

                                    <option style="color:#000000 !important;" value="#000000">Black</option>

                                    <option style="color:#FF0000 !important;" value="#FF0000">Red</option>

                                    <option style="color:#FFC0CB !important;" value="#FFC0CB">Pink</option>

                                    <option style="color:#FFA500 !important;" value="#FFA500">Orange</option>

                                    <option style="color:#0000FF !important;" value="#0000FF">Blue</option>

                                    <option style="color:#a7d3b7 !important;" value="#a7d3b7">Glenwood Green</option>

                                    <option style="color:#09f655 !important;" value="#09f655">Green</option>

                                    <option style="color:#d70141 !important;" value="#d70141 ">Joker Smile</option>

                                    <option style="color:#41729f !important;" value="#41729f">Naval</option>

                                    <option style="color:#75dbc1 !important;" value="#75dbc1">Star Grass</option>

                                    <option style="color:#bf3cff !important;" value="#bf3cff">Magnetos </option>

                                </select>

                            </td>

                        </tr>

                    @endif

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
