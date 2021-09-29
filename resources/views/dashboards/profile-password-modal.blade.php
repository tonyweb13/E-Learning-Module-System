<div id="profile-password-modal" class="modal" tabindex="-1" role="dialog" >
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header" style="background-color:#142d57;color: white;">
                <h5 class="modal-title" >Change Password</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <label>Old Password:</label>
                <input  type="password" name="old_password" id="old-password" class="form-control geo-border-primary" required >
                <br>
                <label>New Password:</label>
                <input  type="password" name="new_password" id="new-password" class="form-control geo-border-primary" required >
                <br>
                <label>Confirm Password:</label>
                <input  type="password" name="confirm_password" id="confirm-password" class="form-control geo-border-primary" required >
                <br>
                <input type="checkbox" onclick="showPass()">   Show Password
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-success" onclick="checkPassword();">Change</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>