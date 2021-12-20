   
$(document).ready(function() {

	//save button
	$("#add-user").submit(function(e) {
    	e.preventDefault();
    	var data = $(this).serializeArray();
      	checkPassword();
  });

	//reset button
	$('#reset_btn').click(function() {
    if ($('#add-user').length > 0) {
			$('#add-user')[0].reset();
		} 
  });
});

// function showPass(){
//   var x = document.getElementById("password");
//   var y = document.getElementById("password2");
//     if (x.type === "password") {
//       x.type = "text";
//       y.type = "text";
//     } else {
//       x.type = "password";
//       y.type = "password";
//     }
// }

function checkPassword(){
  p1=$('#password').val();
  p2=$('#password2').val();

  if(p1 == p2){
    submitForm();
  }else{
    showErrorAlert('Error', 'Password not match');
  }
}

function submitForm()
{
  showLoader('Saving','Please wait....')
  data = new FormData($('#add-user')[0]);
  $.ajax({
    type:"post",
    url:"/users/admins",
    data: data,
    method:'POST',
    dataType:"json",
    contentType: false,
    cache: false,
    processData: false,
    success:function(data) {
      console.log(data);
        if (data["status"] == "saved") {
          showSuccessAlert('Success', 'New Admin successfully added');
          $('#add-user')[0].reset();
        }else{
          showErrorAlert('Error', 'New Admin unsuccessfully added, please check your internet.');
        } 
    },
    error: function(error) {
        showHttpErrorAlert(error);
    }
  });   
}