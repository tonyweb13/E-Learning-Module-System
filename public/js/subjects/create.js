   
$(document).ready(function() {

	//save button
	$("#add-subject").submit(function(e) {
    	e.preventDefault();
    	var data = $(this).serializeArray();
      	submitForm();
  });

	//reset button
	$('#reset_btn').click(function() {
		
    $('#image').attr('src', $(this).val());
		
    if ($('#add-subject').length > 0) {
			$('#add-subject')[0].reset();
		} 
	
  });
});

function submitForm()
{
    fileName=$('#file').val();
    if(fileName){
      checkFile(fileName);
    }else{//no file
      saveForm();
    }
}


function checkFile(fileName){
  var ext = fileName.split('.').pop();
  if(ext === 'zip'){
    saveForm();
  }else{
    showErrorAlert('Error', 'Subject unsuccessfully added, please check your file format.');
  }
}

function saveForm()
{
    showLoader('Saving','Please wait....')
    data = new FormData($('#add-subject')[0]);
    $.ajax({
    type:"post",
    url:"/subjects",
    data: data,
    method:'POST',
    dataType:"json",
    contentType: false,
    cache: false,
    processData: false,
    success:function(data) {
      console.log(data);
        if (data) {
          submitForm2(data); 
        }else{
          showErrorAlert('Error', 'Subject unsuccessfully added, please check your file format.');
        } 
    },
    error: function(error) {
        showHttpErrorAlert(error);
    }
  });
}

function submitForm2(id){

  description=$('#editor').html();
  $.ajax({
      type:"post",
      url:"/subjects/editor",
      data: {
          description: description, 
          id:id,
      },
      dataType:"json",
      success:function(res) {
          console.log(res);
           if (res["status"] == "saved") {
              showSuccessAlert('Success', 'Subject successfully added');
              $('#add-subject')[0].reset();
              $('#image').attr('src', $(this).val());

           }else{
             showErrorAlert('Error', 'Subject unsuccessfully added, please check your file format.');
           } 
      },
      error: function(error) {
        console.log(error);
          //showHttpErrorAlert(error);
      }
  });

}
