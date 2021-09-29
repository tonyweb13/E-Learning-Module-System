<div id="question-modal" class="modal fade" role="dialog" style=" overflow-y:auto !important;">
  @csrf
    <div class="modal-dialog" style="max-width: 90% !important;">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header" style="background-color: #142d57; color: white;">
                <h4><center>Create Question</center></h4>
                <!--<button type="button" class="close" data-dismiss="modal">&times;</button>-->
                <button type="button" class="close"  onclick="createQuestionModalDismiss();">&times;</button>
            </div>

            <form id="add-assessment-question" class=" form-control"> 
                @csrf 
                <input type="hidden" name="assessment_id" id="assessment-id" class="form-control geo-border-primary" required value="{{$assessment->id ?? ''}}">
                <input type="hidden" name="question_id" id="question-id" class="form-control geo-border-primary"  value="{{$data->id ?? ''}}">

                <div class="modal-body form-control"> 
                <div class="row">
                  <div class="col-md-12">
                    <div class="row pl-3 pr-3">
                      	<div class="col-md-4 p-1">
                          	<label>Type</label>
                          	<select class="form-control" id="question-type-id" name="question_type_id" required>
                              	<option>Select Question Type</option>
                                @foreach($question_types as $question_type)
                                  <option value="{{$question_type->id ?? ''}}">{{$question_type->name ?? ''}}</option>
                                @endforeach
                          	</select>
                      	</div>
                      <div class="col-md-4 p-1">
                          <label>Tags</label>
                          <input type="text" name="tag" id="tag" class="form-control geo-border-primary" required  placeholder="Assessent Tags" value="{{$data->tag ?? ''}}">
                      </div>
                      <div class="col-md-4 p-1">
                          <label>Points</label>
                          <input type="number" name="point" id="point" class="form-control geo-border-primary" required  placeholder="Assessent Point" value="{{$data->point ?? ''}}">
                      </div>
                    </div>
                    <br>
                    <div class="row pl-3 pr-3">
                      <div class="col-md-12 p-1">
                          <label>Question/Instruction</label>
                          @include('authoring-tool')
                          <input type="hidden" name="question" id="question">
                      </div>
                    </div>
                    <br>
                    <div class="pl-3 pr-3" >
                        <label>Answer</label><br>
                        <span id="add-button">
                            <button type="button" class="btn btn-sm btn-success" onclick="addRow(null)"><span class="glyphicon glyphicon-plus-sign"></span> Add Row</button>&nbsp;
                            <button type="button" class="btn btn-sm btn-danger" onclick="removeRow()"><span class="glyphicon glyphicon-remove-sign"></span> Del Row</button>&nbsp;
                            <br>
                        </span>
                        
                        <span class="col-md-12 row" id="add-button2">
                            <button type="button" class="btn btn-sm btn-success" onclick="addRow2(null)"><span class="glyphicon glyphicon-plus-sign"></span> Add Row</button>&nbsp;
                            <button type="button" class="btn btn-sm btn-danger" onclick="removeRow2()"><span class="glyphicon glyphicon-remove-sign"></span> Del Row</button>&nbsp;
                            <label>Select Option Type:</label>
                            <select id="multi-option">
                                <option value="textoption">Text</option>
                                <option value="imageoption">Image</option>
                            </select>
                            <br>
                        </span>
                        <br>
                        <table id="answer-table" class="table col-md-6" >
                        </table>
                        
                    </div>
                    <br>
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