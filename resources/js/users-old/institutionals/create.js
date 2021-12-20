   
$(document).ready(function() {

	//save button
	$("#add-insti-user").submit(function(e) {
    	e.preventDefault();
    	var data = $(this).serializeArray();
      	checkPassword();
  });

	//reset button
	$('#reset_btn').click(function() {
    if ($('#add-insti-user').length > 0) {
			$('#add-insti-user')[0].reset();
		} 
  });
});


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
    url:"/users/institute",
    data: data,
    method:'POST',
    dataType:"json",
    contentType: false,
    cache: false,
    processData: false,
    success:function(data) {
      console.log(data);
        if (data["status"] == "saved") {
          showSuccessAlert('Success', 'New Institutional Admin successfully added');
          $('#add-user')[0].reset();
        }else{
          showErrorAlert('Error', 'New Institutional Admin unsuccessfully added, please check your internet.');
        } 
    },
    error: function(error) {
        showHttpErrorAlert(error);
    }
  });   
}