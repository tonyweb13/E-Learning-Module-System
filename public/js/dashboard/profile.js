$(document).ready(function() {
    imageLoader();
	//save button
	$("#my-profile").submit(function(e) {
    	e.preventDefault();
    	var data = $(this).serializeArray();
      	submitForm();
    });
});


function imageLoader(){

	//image
	$('#select_img').click(function() {
		$('#image_select').click();
	})

	$('#image_select').change(function() {
		if (this.files && this.files[0]) {
			var reader = new FileReader();
			reader.onload = function(e) {
				$('#image').attr('src', e.target.result);
			}
			reader.readAsDataURL(this.files[0]);
		}
	});

}


function submitForm()
{
    showLoader('Saving','Please wait....');
    data = new FormData($('#my-profile')[0]);
    $.ajax({
        type:"post",
        url:"/profile/store",
        data: data,
        method:'POST',
        dataType:"json",
        contentType: false,
        cache: false,
        processData: false,
        success:function(data) {
            console.log(data);
            if (data["status"] == "saved") {
              showSuccessAlert('Success', 'Profile successfully added');
              $('#my-profile')[0].reset();
    
           }else{
             showErrorAlert('Error', 'Profile unsuccessfully added, please check your internet connection.');
           } 
        },
        error: function(error) {
            showHttpErrorAlert(error);
        }
    });
}

function PasswordModal(){
    $("#profile-password-modal").modal("show");
}

function showPass(){
    var x = document.getElementById("old-password");
    var y = document.getElementById("new-password");
    var z = document.getElementById("confirm-password");
    
    if (x.type === "password") {
        
        x.type = "text";
        y.type = "text";
        z.type = "text";
        
    } else {
        
        x.type = "password";
        y.type = "password";
        z.type = "password";
        
    }
}

function checkPassword(){
    p1=$('#new-password').val();
    p2=$('#confirm-password').val();

    if(p1 == p2){
        changePassword();
    }else{
        showErrorAlert('Error', 'Password not match');
    }
}

function changePassword(){
    
    p1=$('#old-password').val();
    p2=$('#new-password').val();
    p3=$('#confirm-password').val();
    
    showLoader('Sending Request','Please wait....');
    $.ajax({
        type: "post",
        url: "/profile/changepassword",
        data: {
            p1:p1,
            p2:p2,
            p3:p3
        },
        dataType: 'JSON',
        success: function (res) {
            console.log(res);
            if(res == 'success'){
                showSuccessAlert('Success', 'Your Password was successfully change, Thank you');
                
            }else if(res == 'invalid'){
                
                showErrorAlert('Error', 'Your Old Password was not match, please make sure you enter you correct password, Thank You!');
            }else{
                
                showErrorAlert('Error', 'Your Password was unsuccessfully send, please check your internet connection, Thank You!');
            }
            $("#profile-password-modal").modal("hide");
        },
        error: function(error) {
            showHttpErrorAlert(error);
        }
    });
}

