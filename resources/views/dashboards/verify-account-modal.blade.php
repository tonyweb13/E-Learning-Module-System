<div id="verify-account-modal" class="modal fade" role="dialog">
  @csrf
    <div class="modal-dialog" style=" max-width: 65% !important;">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header" style="background-color: #142d57; color: white;height:150px !important;">
                <div style='text-align:center; width:400px; margin:0px auto;'>
                    <img src='/images/logo/myedgeLogo.png' style='width:250px'/>
                </div>
            </div>
            <form id="add-topic" class=" form-control"> 
              @csrf 
              <div class="modal-body form-control">
                <div class="col-md-12">
                    <h5 class="text-center" style="padding:20px;">
                        {{$result ?? 'sas'}}
                    </h5>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-info"  onclick="logoutUser();">
                      OKAY 
                </button>
              </div>
            </form>
        </div>
    </div>
</div>