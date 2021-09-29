<div id="view-modal" class="modal fade" role="dialog" style=" width: 100% !important;">
  @csrf
    <div class="modal-dialog" style=" max-width: 95% !important;">
        <!-- Modal content-->
        <div class="modal-content" style=" width: 100% !important;">
            <div class="modal-header"  style="background-color: #142d57; color: white;">
                <h4><center>{{$lesson->name ?? ''}} - <span id=span1></span></center></h4>
                <button type="button" class="close" data-dismiss="modal">
                    &times;</button>
            </div>
            <div class="modal-body">
              <div class="col-md-12">
                  <input type="hidden" id="appurl"   value="{{env('APP_URL')}}">
                  <iframe src="https://www.w3schools.com" id="topic-frame" style="width: 100%; height: 650px;" controlsList="nodownload"></iframe>
                   <img src="" onerror="this.src='/images/no_image.png'" width="100%" height="650px;" class="geo-border-primary border mt-2" id="topic-image">
                 
              </div>
            </div>
        </div>
    </div>
</div>