<div id="lesson-modal" class="modal fade" role="dialog">
  @csrf
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header"  style="background-color: #142d57; color: white;">
                <h4><center>Create Lesson</center></h4>
                <button type="button" class="close" data-dismiss="modal">
                    &times;</button>
            </div>
            <form id="add-lesson" class=" form-control"> 
              @csrf 
              <div class="modal-body">
                <div class="col-md-12">
                  <label style="color: green;">Lesson Name</label><br>
                  <input class="form-control" type="text" value=""  id="lesson" name="lesson" autocomplete="off" required>
                </div>
              </div>
              <div class="modal-footer">

                <input type="hidden" name="current_user" id="current-user" class="form-control geo-border-primary" required value="{{Auth::user()->id ?? ''}}">

                <input type="hidden" name="subject_id" id="subject-id" class="form-control geo-border-primary" required value="{{$subject->mySubject->createdSubject->id}}">

                <input type="hidden" name="lesson_id" id="lesson-id" class="form-control geo-border-primary"  value="">
                
                <button type="button" class="btn btn-danger" data-dismiss="modal">
                      Close
                </button>
                 <button  class="btn btn-success">Save</button>
              </div>
            </form>
        </div>
    </div>
</div>