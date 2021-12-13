   
$(document).ready(function() {

	//save button
	$("#add-guides").submit(function(e) {
    	e.preventDefault();
    	var data = $(this).serializeArray();
      	submitForm();
  });

	//reset button
	$('#reset_btn').click(function() {
		
    $('#image').attr('src', $(this).val());
		
    if ($('#add-guides').length > 0) {
			$('#add-guides')[0].reset();
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
  if(ext === 'zip'){

    showLoader('Saving','Please wait....')
    data = new FormData($('#add-guides')[0]);
    $.ajax({
      type:"post",
      url:"/guides",
      data: data,
      method:'POST',
      dataType:"json",
      contentType: false,
      cache: false,
      processData: false,
      success:function(data) {
        console.log(data);
          if (data["status"] == "saved") {
            showSuccessAlert('Success', 'Edge Guides successfully added');
            $('#add-guides')[0].reset();
          }else{
            showErrorAlert('Error', 'Edge Guides unsuccessfully added, please check your file format.');
          } 
      },
      error: function(error) {
          showHttpErrorAlert(error);
      }
    });

  }else{
    showErrorAlert('Error', 'Edge Guides unsuccessfully added, please check your file format.');
  }

}

function savingWithoutFile(){

  showLoader('Saving','Please wait....')
  data = new FormData($('#add-guides')[0]);
  $.ajax({
    type:"post",
    url:"/guides",
    data: data,
    method:'POST',
    dataType:"json",
    contentType: false,
    cache: false,
    processData: false,
    success:function(data) {
      console.log(data);
        if (data["status"] == "saved") {
          showSuccessAlert('Success', 'Edge Guides successfully added');
          $('#add-guides')[0].reset();
        }else{
          showErrorAlert('Error', 'Edge Guides unsuccessfully added, please check your file format.');
        } 
    },
    error: function(error) {
        showHttpErrorAlert(error);
    }
  });
  
} 