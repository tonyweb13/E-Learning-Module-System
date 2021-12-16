   
$(document).ready(function() {

	//save button
	$("#add-subject-assessment").submit(function(e) {
    	e.preventDefault();
    	var data = $(this).serializeArray();
      submitLessonForm();
  });
});


function submitLessonForm()
{
    showLoader('Saving','Please wait....')
    data = new FormData($('#add-subject-assessment')[0]);
    $.ajax({
      type:"post",
      url:"/sections/subjects/assessment/store",
      data: data,
      method:'POST',
      dataType:"json",
      contentType: false,
      cache: false,
      processData: false,
      success:function(data) {
        if (data["status"] == "saved") {
           showSuccessAlert('Success', 'Assessment was successfully added');
           $('#add-subject-assessment')[0].reset();
        }else{
          showErrorAlert('Error', 'Assessment was unsuccessfully added, please check your file format.');
        } 
      },
      error: function(error) {
          showHttpErrorAlert(error);
      }
    });
}



