   
$(document).ready(function() {

	//save button
	$("#add-lesson").submit(function(e) {
    	e.preventDefault();
    	var data = $(this).serializeArray();
      submitLessonForm();
  });

  $("#add-topic").submit(function(e) {
      e.preventDefault();
      var data = $(this).serializeArray();
      submitTopicForm();
      //check extension
    //   fileName=$('#topic').val();
    //   ext = fileName.split('.').pop();
    //   submitTopicForm();
    //   if(ext === 'pdf' || ext === 'doc' || ext === 'docx' || ext === 'jpg' || ext === 'png'  || ext === 'mp3' || ext === 'mp4' ){
        
    //   }else{
    //     showErrorAlert('Error', 'Topic unsuccessfully added, please check your file format.');
    //   }   
  });

});


function submitLessonForm()
{
    showLoader('Saving','Please wait....')
    data = new FormData($('#add-lesson')[0]);
    $.ajax({
      type:"post",
      url:"/sections/subjects/lessons/store",
      data: data,
      method:'POST',
      dataType:"json",
      contentType: false,
      cache: false,
      processData: false,
      success:function(data) {
        if (data["status"] == "saved") {
           showSuccessAlert('Success', 'Lesson was successfully added');
           $('#add-lesson')[0].reset();
           location.reload();
        }else{
          showErrorAlert('Error', 'Lesson was unsuccessfully added, please check your file format.');
        } 
      },
      error: function(error) {
          showHttpErrorAlert(error);
      }
    });
}

function submitTopicForm(){

  showLoader('Saving','Please wait....')
  data = new FormData($('#add-topic')[0]);
  $.ajax({
    type:"post",
    url:"/sections/subjects/topic/store",
    data: data,
    method:'POST',
    dataType:"json",
    contentType: false,
    cache: false,
    processData: false,
    success:function(data) {
      if (data["status"] == "saved") {
         showSuccessAlert('Success', 'Topic was successfully added');
         $('#add-topic')[0].reset();
         location.reload();
      }else{
        showErrorAlert('Error', 'Topic was unsuccessfully added, please check your file format.');
      } 
    },
    error: function(error) {
        showHttpErrorAlert(error);
    }
  });

}


