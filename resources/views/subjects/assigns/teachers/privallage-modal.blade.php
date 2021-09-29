<div id="privallage-modal" class="modal fade" role="dialog" style=" width: 100% !important; top: 250px;margin-left: 30px;">

    <div class="modal-dialog" style=" max-width: 50% !important;">
        <!-- Modal content-->
        <div class="modal-content" style=" width: 70% !important;">
            <div class="modal-header" style="background-color: #428bca; color: white;">
                <h4><center>Teacher Privilege</center></h4>
                <button type="button" class="close"  onclick="dismissPrivModal();">&times;</button>
            </div>
            <div class="modal-body">
                <div class="col-md-12">
                    <label>Insert Number of Student Teacher can enroll in this Scorm Subject</label>
                    <input type="text" id="priv-num" class="form-control geo-border-primary" >
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn" style="background-color: #ff9955;color: white;" onclick="dismissPrivModal();">
                      Close
                </button>
                 <button type="button"  class="btn" style="background-color: #9575cd; color: white;" onclick="addStudNum();">Save</button>
              </div>
        </div>
    </div>
</div>