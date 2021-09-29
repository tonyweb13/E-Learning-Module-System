<div id="ebook-reader-modal" class="modal fade" role="dialog">
  @csrf
    <div class="modal-dialog" style="max-width: 80% !important;">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <h4 id="title-id"><center></center></h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <form id="add-subject-assessment" class=" form-control"> 
              @csrf 
              <div class="modal-body form-control"> 
                <div class="row">
                  <div class="col-md-12">
                    <div class="row pl-3 pr-3">
                       <iframe id="ebook-reader-iframe" src="#" width="100%" height="800" align="center"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </form>
        </div>
    </div>
</div>
