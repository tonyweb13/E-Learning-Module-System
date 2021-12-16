   
$(document).ready(function() {

	//save button
	$("#add-class").submit(function(e) {
    	e.preventDefault();
    	var data = $(this).serializeArray();
      submitForm();
  });

	//reset button
	$('#reset_btn').click(function() {

    if ($('#add-class').length > 0) {
			$('#add-class')[0].reset();
		} 
	
  });
  

});

function submitForm()
{
    showLoader('Saving','Please wait....')
    data = new FormData($('#add-class')[0]);
    $.ajax({
      type:"post",
      url:"/sections",
      data: data,
      method:'POST',
      dataType:"json",
      contentType: false,
      cache: false,
      processData: false,
      success:function(data) {
        if (data["status"] == "saved") {
           showSuccessAlert('Success', 'Your Class was successfully added');
           $('#add-class')[0].reset();
        }else{
          showErrorAlert('Error', 'Your Class was unsuccessfully added, please check your file format.');
        } 
      },
      error: function(error) {
          showHttpErrorAlert(error);
      }
    });
}
