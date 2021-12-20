   
$(document).ready(function() {

	//save button
	$("#add-subject").submit(function(e) {
    	e.preventDefault();
    	var data = $(this).serializeArray();
      checkWeight();
  });

	//reset button
	$('#reset_btn').click(function() {

    if ($('#add-subject').length > 0) {
			$('#add-subject')[0].reset();
		} 
	
  });
});

function checkWeight(){
  var values = $("input[name='weight[]']").map(function(){return $(this).val();}).get();
  var weight=0;
  console.log(values);
  for (var i = 0; i < values.length; i++) {
    weight=weight+parseFloat(values[i]);
  }
  console.log(weight);
  if(weight == 100){
    submitForm();
  }else{
    showErrorAlert('Error', 'Your total weight is not 100, please make sure that the grade scale weight is 100');
  }
}

function submitForm()
{
    showLoader('Saving','Please wait....')
    data = new FormData($('#add-subject')[0]);
    $.ajax({
      type:"post",
      url:"/sections/subjects/store",
      data: data,
      method:'POST',
      dataType:"json",
      contentType: false,
      cache: false,
      processData: false,
      success:function(data) {
        console.log(data);
        if (data["status"] == "saved") {
           showSuccessAlert('Success', 'Your Subject was successfully added');
           $('#add-subject')[0].reset();
        }else{
          showErrorAlert('Error', 'Your Subject was unsuccessfully added, please check your file format.');
        } 
      },
      error: function(error) {
          showHttpErrorAlert(error);
      }
    });
}
