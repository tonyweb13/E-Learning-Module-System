<div id="upload-modal" class="modal fade" role="dialog">
  @csrf
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header"  style="background-color: #142d57; color: white;">
                <h4><center>Upload Topic</center></h4>
                <button type="button" class="close" data-dismiss="modal">
                    &times;</button>
            </div>
            <form id="add-topic" class=" form-control"> 
              @csrf 
              <div class="modal-body form-control">
                <div class="col-md-12">
                  <label style="color: green;">Topic Name</label><br>
                  <input type="text"  id="name" name="name" autocomplete="off" required placeholder="Topic Name here">
                  <br><br>
                  <label style="color: green;">Topic File</label><br>
                  <input type="file"  id="topic" name="topic" autocomplete="off" required>
                  <p style="font-size: 10px;color: red;">You may upload images (jpg or png), videos (mp4 or mp3), PDF files, Word files, and PowerPoint presentations.</p>
                </div>
              </div>
              <div class="modal-footer">

                <input type="hidden" name="current_user" id="current-user" class="form-control geo-border-primary" required value="{{Auth::user()->id ?? ''}}">

                <input type="hidden" name="lesson_id" id="lesson-id" class="form-control geo-border-primary"  value="{{$lesson->id ?? ''}}">

                <input type="hidden" name="content_type" id="content-type" class="form-control geo-border-primary"  value="doc">
                
                <input type="hidden" name="topic_id" id="topic-id" class="form-control geo-border-primary"  value="">
                
                <button type="button" class="btn btn-danger" data-dismiss="modal">
                      Close
                </button>
                 <button  class="btn btn-success">Save</button>
              </div>
            </form>
        </div>
    </div>
</div>