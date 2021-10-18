<div id="user-modal" class="modal fade text-center" role="dialog" style=" width: 100% !important; top: 250px;">
    
    <input type="hidden" id="is-suspend" class="form-control geo-border-primary"  value="{{Auth::user()->is_suspend}}">
    <input type="hidden" id="usersta" value="{{Auth::user()->is_deleted}}">
    <input type="hidden" id="usersta2" value="{{Auth::user()->status}}">
    
    <div class="modal-dialog" style=" max-width: 50% !important;">
        <!-- Modal content-->
        <div class="modal-content" style=" width: 70% !important;">
            <div class="modal-body">
                <div class="col-md-12">
                    <h5 id="modal-message"></h5>
                </div>
            </div>
            <div class="modal-footer">
                 <button type="button"  class="btn" style="background-color: #9575cd; color: white;" onclick="logoutSuspendedUser();">OKAY</button>
              </div>
        </div>
    </div>
</div>