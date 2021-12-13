
$(document).ready(function() {

	//save button
	$("#grade-submit-assessment").submit(function(e) {
    	e.preventDefault();
    	var data = $(this).serializeArray();
      	submitForm();
  });

	//reset button
	$('#reset_btn').click(function() {
		
    if ($('#grade-submit-assessment').length > 0) {
			$('#grade-submit-assessment')[0].reset();
		} 
  });
});

function submitForm(){

    showLoader('Saving','Please wait....');
    data = new FormData($('#grade-submit-assessment')[0]);
    $.ajax({
      type:"post",
      url:"/sections/subjects/assessment/grade",
      data: data,
      method:'POST',
      dataType:"json",
      contentType: false,
      cache: false,
      processData: false,
      success:function(data) {
        console.log(data);
          if (data["status"] == "saved") {
            showSuccessAlert('Success', 'The assessment score is now recorded.');
            $('#add-guides')[0].reset();
          }else{
            showErrorAlert('Error', 'The assessment score is unsuccessfully recorded,please check your file format.');
          } 
      },
      error: function(error) {
          showHttpErrorAlert(error);
      }
    });
    
}


$( ".apoint" ).change(function() {
    total=0;
    var values = $("input[name='apoint[]']").map(function(){
                   score=  $(this).val();
                   total = total + parseInt(score);
    }).get();
    $('#total-text').text(total);
});

function fileLinkShow(link){
  //  alert(1);
    filename = link.substring(link.lastIndexOf('/')+1);
    //document.getElementById("topic-frame").src = tmp;
    $('#document-preview-frame').attr('src', link);
    $('#preview-tag').val(filename);
    $("#file-preview-modal").modal("show");
}

