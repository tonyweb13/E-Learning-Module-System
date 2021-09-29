<div id="authoring-tool-music-modal" class="modal fade" role="dialog" style=" width: 100% !important; top: 250px;margin-left: 30px;">

    <div class="modal-dialog" style=" max-width: 50% !important;">
        <!-- Modal content-->
        <div class="modal-content" style=" width: 70% !important;">
            <div class="modal-header" style="background-color: #428bca; color: white;">
                <h4><center>Insert Music Frame Size</center></h4>
                <button type="button" class="close"  onclick="dismissMusicModal();">&times;</button>
            </div>
            <div class="modal-body">
                <div class="col-md-12">
                    <label>Width</label>
                    <input type="number" id="width2-url" class="form-control geo-border-primary" placeholder="Use pixel as ratio" >
                </div>
                <div class="col-md-12">
                    <label>Height</label>
                    <input type="number" id="height2-url" class="form-control geo-border-primary" placeholder="Use pixel as ratio" >
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn" style="background-color: #ff9955;color: white;" onclick="dismissMusicModal();">
                      Close
                </button>
                 <button type="button"  class="btn" style="background-color: #9575cd; color: white;" onclick="getImageSize();" >Save</button>
              </div>
        </div>
    </div>
</div>