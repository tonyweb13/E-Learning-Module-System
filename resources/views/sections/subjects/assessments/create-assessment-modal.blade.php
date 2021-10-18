<div id="create-assessment-modal" class="modal fade" role="dialog">
  @csrf
    <div class="modal-dialog" style="max-width: 80% !important;">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header" style="background-color: #142d57; color: white;">
                <h4><center>Create Assessment</center></h4>
                <!--<button type="button" class="close" data-dismiss="modal">&times;</button>-->
                <button type="button" class="close"  onclick="createAssessmentModalDismiss();">&times;</button>
            </div>
            <form id="add-subject-assessment" class=" form-control"> 
              @csrf 
                <div class="modal-body form-control"> 
                    <input type="hidden" name="section_id" id="section-id" class="form-control geo-border-primary" value="{{$section->id ?? ''}}">
                    <input type="hidden" name="subject_id" id="subject-id" class="form-control geo-border-primary" value="{{$subject->id ?? ''}}">
                    <input type="hidden" name="id" id="id" class="form-control geo-border-primary" value="{{$data->id ?? ''}}">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row pl-3 pr-3">
                                <div class="col-md-3 p-1">
                                  <label>Title</label>
                                  <input type="text" name="title" id="title" class="form-control geo-border-primary" required  placeholder="Assessent Title" value="{{$data->name ?? ''}}">
                                </div>
                                <div class="col-md-3 p-1">
                                    <label>Topic</label>
                                    <input type="text" name="topic" id="topic" class="form-control geo-border-primary" required  placeholder="Assessent Topic" value="{{$data->topic ?? ''}}">
                                </div>
                                <div class="col-md-3 p-1">
                                    <label>Mode</label>
                                    <select class="form-control" id="mode" name="mode" required>
                                        <option>Select Assessment Mode</option>
                                        <option value="practice">Practice</option>
                                        <option value="graded">Graded</option>
                                    </select>
                                </div>
                                <div class="col-md-3 p-1">
                                    <label>Category</label>
                                    <select class="form-control" id="scale-id" name="scale_id">
                                        <option>Select Category</option>
                                    </select>
                                  
                                </div>
                            </div>
                            <br>
                            <div class="row pl-3 pr-3">
                                
        
                                <div class="col-md-3 p-1">
                                    <label>Start Date</label>
                                    <input type="date" name="start_date" id="start-date" class="form-control geo-border-primary" required  value="{{$data->name ?? ''}}">
                                </div>
                                
                                <div class="col-md-3 p-1">
                                    <label>Start Time</label>
                                    <input type="time" name="start_time" id="start-time" class="form-control geo-border-primary" required  value="{{$data->name ?? ''}}">
                                </div>
        
                                <div class="col-md-3 p-1">
                                    <label>End Date and Time</label>
                                    <input type="date" name="end_date" id="end-date" class="form-control geo-border-primary" required  value="{{$data->name ?? ''}}">
                                </div>
                                
                                <div class="col-md-3 p-1">
                                    <label>End Time</label>
                                    <input type="time" name="end_time" id="end-time" class="form-control geo-border-primary" required  value="{{$data->name ?? ''}}">
                                </div>
                            </div>
                            <br>
                            <div class="row pl-3 pr-3">
                                <div class="col-md-12 p-1">
                                    <h5>Grade Scale</h5>
                                    <table id="table-assessment-scale" class="table table-bordered" style="margin-top: 15px;">
                                        <tr>
                                            <th>Description</th>
                                            <th>From</th>
                                            <th>To</th>
                                            <th>Remarks</th>
                                        </tr>
                                        @foreach($subject->sectionAssessmentScale as $val)
                                            <tr>
                                                <td>{{$val->details ?? ''}}</td>
                                                <td>{{(int)$val->scale_from ?? ''}}%</td>
                                                <td>{{(int)$val->scale_to ?? ''}}%</td>
                                                <td>{{$val->remarks ?? ''}}</td>
                                            </tr>
                                        @endforeach
                                    </table>
                                </div>
                            </div>
                            <br>
                            <div class="row pl-3 pr-3">
                                <div class="col-md-12 p-1">
                                    <label>Instruction</label><br>
                                    <textarea class="form-control" id="instruction" name="instruction" rows="10"  placeholder="Place Instruction here..">
                                    </textarea>
                                    <input type="hidden" id="htmleditor-value" name="htmleditor_value">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <input type="hidden" name="current_user" id="current-user" class="form-control geo-border-primary" required value="{{Auth::user()->id ?? ''}}">
                    <div class="right">
                        <button class="btn geo-primary" value="{{$employee->id ?? ''}}" id="eid"><i class="fa fa-save"></i>&nbsp;&nbsp;Save</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>