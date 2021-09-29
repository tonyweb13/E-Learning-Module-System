<div id="create-modal" class="modal fade" role="dialog" style=" overflow-y:auto !important;">
  @csrf
    <div class="modal-dialog" style="max-width: 90% !important;">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header" style="background-color: #142d57; color: white;">
                <h4><center>Create Topic</center></h4>
                <button type="button" class="close"  onclick="createModalDismiss();">&times;</button>
                <!--<button type="button" class="close" data-dismiss="modal">&times;</button>-->
            </div>
            <form id="add-created-topic" class=" form-control"> 
              @csrf 
              <div class="modal-body form-control">
                <div class="col-md-12">
                    <div class="row">
                        <label style="color: green;">Topic Name</label><br>
                        <input class="form-control" type="text"  id="name2" name="name" autocomplete="off" required placeholder="Topic Name here">
                    </div>
                    <div>
                        <label style="color: green;">Topic Content</label><br>
                        @include('authoring-tool')
                    </div>
                </div>
              </div>
              <div class="modal-footer">

                <input type="hidden" name="current_user" id="current-user2" class="form-control geo-border-primary" required value="{{Auth::user()->id ?? ''}}">

                <input type="hidden" name="lesson_id" id="lesson-id2" class="form-control geo-border-primary"  value="{{$lesson->id ?? ''}}">

                <input type="hidden" name="content_type" id="content-type2" class="form-control geo-border-primary"  value="html">
                
                <input type="hidden" name="topic_id" id="topic-id2" class="form-control geo-border-primary"  value="">
                
                <!--<button type="button" class="btn btn-danger" data-dismiss="modal">-->
                <!--      Close-->
                <!--</button>-->
                <!-- <button  class="btn btn-success">Save</button>-->
                 
                 <div class="right">
                    <button class="btn geo-primary" value="{{$employee->id ?? ''}}" id="eid"><i class="fa fa-save"></i>&nbsp;&nbsp;Save</button>
                </div>
              </div>
            </form>
        </div>
    </div>
</div>