<div id="spam-modal" class="modal fade" role="dialog">
  @csrf
    <div class="modal-dialog" style=" max-width: 65% !important;">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header"  style="background-color: #142d57; color: white;height:50px !important;">
                <h5><center>MyEDGE Learning</center></h5>
            </div>
            <form id="add-topic" class=" form-control"> 
              @csrf 
              <div class="modal-body form-control">
                <div class="col-md-12">
                    <p class="text-center">
                        Hi your account is unverified, Please check your inbox. We have sent you a confirmation link.<br>
                        If you do not receive our verification email, please check your spam folder.
                    </p>
                    <img src="/images/bg/spam.png"  width="100%" height="450">
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-info"  onclick="logoutUser();">
                      OKAY
                </button>
                <button type="button" class="btn btn-dark"  onclick="resend();">
                      Re-Send
                </button>
              </div>
            </form>
        </div>
    </div>
</div>