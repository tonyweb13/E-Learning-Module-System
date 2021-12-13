   
$(document).ready(function() {

	//save button
	$("#add-tg").submit(function(e) {
    	e.preventDefault();
    	var data = $(this).serializeArray();
      	submitForm();
  });

	//reset button
	$('#reset_btn').click(function() {
		
    $('#image').attr('src', $(this).val());
		
    if ($('#add-tg').length > 0) {
			$('#add-tg')[0].reset();
		} 
	
  });
  

});

function submitForm()
{
    fileName=$('#file').val();
    if(fileName){
      savingFile(fileName);
    }else{//no file
      savingWithoutFile();
    }
}


function savingFile(fileName){

  var ext = fileName.split('.').pop();
  if(ext === 'pdf'){

    showLoader('Saving','Please wait....')
    data = new FormData($('#add-tg')[0]);
    $.ajax({
      type:"post",
      url:"/textbooks/teachersguides",
      data: data,
      method:'POST',
      dataType:"json",
      contentType: false,
      cache: false,
      processData: false,
      success:function(data) {
        console.log(data);
          if (data["status"] == "saved") {
            showSuccessAlert('Success', 'TG successfully added');
            $('#add-tg')[0].reset();
          }else{
            showErrorAlert('Error', 'TG unsuccessfully added, please check your file format.');
          } 
      },
      error: function(error) {
          showHttpErrorAlert(error);
      }
    });

  }else{
    showErrorAlert('Error', 'TG unsuccessfully added, please check your file format.');
  }

}

function savingWithoutFile(){

  showLoader('Saving','Please wait....')
  data = new FormData($('#add-tg')[0]);
  $.ajax({
    type:"post",
    url:"/textbooks/teachersguides",
    data: data,
    method:'POST',
    dataType:"json",
    contentType: false,
    cache: false,
    processData: false,
    success:function(data) {
      console.log(data);
        if (data["status"] == "saved") {
          showSuccessAlert('Success', 'TG successfully added');
          $('#add-tg')[0].reset();
        }else{
          showErrorAlert('Error', 'TG unsuccessfully added, please check your file format.');
        } 
    },
    error: function(error) {
        showHttpErrorAlert(error);
    }
  });
  
} 