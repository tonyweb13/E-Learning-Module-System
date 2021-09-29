<div id="view2-modal" class="modal fade" role="dialog" style=" width: 100% !important;">
  @csrf
    <div class="modal-dialog" style=" max-width: 95% !important;">
        <!-- Modal content-->
        <div class="modal-content" style=" width: 100% !important;">
            <div class="modal-header"  style="background-color: #142d57; color: white;">
                <h4><center>{{$lesson->name ?? ''}} - <span id=span2></span></center></h4>
                <button type="button" class="close" data-dismiss="modal">
                    &times;</button>
            </div>
            <div class="modal-body">
              <div class="col-md-12">
                  <div id="container"></div>
              </div>
            </div>
        </div>
    </div>
</div>