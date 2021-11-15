<h5>Guides Information</h5>

<input type="hidden" name="id" id="id" class="form-control geo-border-primary" value="{{$data->id ?? ''}}">

<div class="row">

    <div class="col-md-12">

        <div class="row pl-3 pr-3">

            <!-- <div class="col-md-4 p-1">

                <label>Subject</label>

                <input type="text" name="subject" id="subject" class="form-control geo-border-primary" required maxlength="100" placeholder="Select Subject" value="{{$data->subject->title ?? ''}}">

                <input type="hidden" name="subject_id" id="subject-id" class="form-control geo-border-primary" required value="{{$data->subject->id ?? ''}}">

            </div> -->

            <div class="col-md-5 p-1">

                <label>Ebook Title</label>

                <input type="text" name="title" class="form-control geo-border-primary" required maxlength="100" placeholder="Title" value="{{$data->ebook_title ?? ''}}">

            </div>

            <div class="col-md-5 p-1">

                <label>Price</label>

                <input type="text" name="price" class="form-control geo-border-primary" required maxlength="100" placeholder="Subject Price (Php)" value="{{$data->price ?? ''}}">

            </div>

        </div>

        <br>

        <div class="row pl-3 pr-3">

            <div class="col-md-5 p-1">

                <label>Teachers Guide</label>

                <select name="tg" class="form-control geo-border-primary">

                    <option value="0">Select TG</option>

                    @foreach($tgs as $tg)

                        @if($data)

                            @if($tg->id  == $data->tg_id ?? '')

                                <option selected value="{{$tg->id ?? ''}}">{{$tg->title ?? ''}}</option>

                            @else

                                <option value="{{$tg->id ?? ''}}">{{$tg->title ?? ''}}</option>

                            @endif

                        @else

                            <option value="{{$tg->id ?? ''}}">{{$tg->title ?? ''}}</option>

                        @endif

                    @endforeach

                </select>

            </div>

            <div class="col-md-5 p-1">

                <label>Curiculum Maps</label>

                <select name="cm" class="form-control geo-border-primary">

                    <option value="0">Select CM</option>

                    @foreach($cms as $cm)

                        @if($data)

                            @if($cm->id  == $data->cm_id ?? '')

                                <option selected value="{{$cm->id ?? ''}}">{{$cm->title ?? ''}}</option>

                            @else

                                <option value="{{$cm->id ?? ''}}">{{$cm->title ?? ''}}</option>

                            @endif

                        @else

                            <option value="{{$cm->id ?? ''}}">{{$cm->title ?? ''}}</option>

                        @endif

                    @endforeach

                </select>

            </div>

        </div>

        <br>

        @if($data)

        <!-- for development access super admin -->

            <div class="row pl-3 pr-3">

                 <div class="col-md-5 p-1">

                     <label>Ebook file <span style="font-size: 12px;color:red; ">**upload zip file only</span></label>

                     <input type="text" name="file_name" class="form-control geo-border-primary" value="Current File - {{$data->file_name ?? 'None'}}" placeholder="Current File">



                     <input type="file" name="file" id="file" class="form-control geo-border-primary"  placeholder="File">

                 </div>



                 <div class="col-md-5 p-1">

                     <label>Sample Ebook file <span style="font-size: 12px;color:red; ">**upload zip file only</span></label>

                     <input type="text" name="sample_file_name" class="form-control geo-border-primary" value="Current Offline File - {{$data->offline_file_name ?? 'None'}}" placeholder="Current Offline File">



                     <input type="file" name="sample_file" id="sample-file" class="form-control geo-border-primary"  placeholder="File" value="d">

                 </div>

             </div>

             <br>

        @else

            <div class="row pl-3 pr-3">

                <div class="col-md-5 p-1">

                    <label>Ebook file <span style="font-size: 12px;color:red; ">**upload zip or epub file only</span></label>

                    <input type="file" name="file" id="file" class="form-control geo-border-primary" required placeholder="File">

                </div>

                <div class="col-md-5 p-1">

                    <label>Sample Ebook file <span style="font-size: 12px;color:red; ">**upload zip or epub file only</span></label>

                    <input type="file" name="sample_file" id="sample-file" class="form-control geo-border-primary"  placeholder="File" value="d">

                </div>

            </div>

            <br>

        @endif

        <div class="row pl-3 pr-3">

            <div class="col-md-4 p-1">

                <label>Subject Cover image </label><br>

                <img src="{{$data->cover_image ?? '/images/no_image.png'}}" width="300px" height="300px;" class="geo-border-primary border mt-2" id="image">

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
