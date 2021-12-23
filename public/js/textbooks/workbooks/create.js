   
$(document).ready(function() {

	//save button
	$("#add-workbook").submit(function(e) {
    	e.preventDefault();
    	var data = $(this).serializeArray();
      	submitForm();
  });

	//reset button
	$('#reset_btn').click(function() {
		
    $('#image').attr('src', $(this).val());
		
    if ($('#add-workbook').length > 0) {
			$('#add-workbook')[0].reset();
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
    data = new FormData($('#add-workbook')[0]);
    $.ajax({
      type:"post",
      url:"/textbooks/workbooks",
      data: data,
      method:'POST',
      dataType:"json",
      contentType: false,
      cache: false,
      processData: false,
      success:function(data) {
        console.log(data);
          if (data["status"] == "saved") {
            showSuccessAlert('Success', 'Workbook successfully added');
            $('#add-workbook')[0].reset();
          }else{
            showErrorAlert('Error', 'Workbook unsuccessfully added, please check your file format.');
          } 
      },
      error: function(error) {
          showHttpErrorAlert(error);
      }
    });

  }else{
    showErrorAlert('Error', 'Workbook unsuccessfully added, please check your file format.');
  }

}

function savingWithoutFile(){

  showLoader('Saving','Please wait....')
  data = new FormData($('#add-workbook')[0]);
  $.ajax({
    type:"post",
    url:"/textbooks/workbooks",
    data: data,
    method:'POST',
    dataType:"json",
    contentType: false,
    cache: false,
    processData: false,
    success:function(data) {
      console.log(data);
        if (data["status"] == "saved") {
          showSuccessAlert('Success', 'Workbook successfully added');
          $('#add-workbook')[0].reset();
        }else{
          showErrorAlert('Error', 'Workbook unsuccessfully added, please check your file format.');
        } 
    },
    error: function(error) {
        showHttpErrorAlert(error);
    }
  });
  
} 