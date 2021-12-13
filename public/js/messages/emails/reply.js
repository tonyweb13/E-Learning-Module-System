$(document).ready(function() {
    $("#add-email-reply").submit(function(e) {
    	e.preventDefault();
    	var data = $(this).serializeArray();
    	post=$('#editor').html();
    	console.log(post);
    	$('#rep-message').val(post);
      	submitForm();
    });

});


function submitForm()
{
    showLoader('Saving','Please wait....');
    data = new FormData($('#add-email-reply')[0]);
    $.ajax({
    type:"post",
    url:"/emails/reply/store",
    data: data,
    method:'POST',
    dataType:"json",
    contentType: false,
    cache: false,
    processData: false,
    success:function(res) {
      console.log(data);
        if (res["status"] == "saved") {
          showSuccessAlert('Success', 'Email successfully send');
          $('#add-email-reply')[0].reset();
          location.reload();

       }else{
         showErrorAlert('Error', 'Subject unsuccessfully added, please check your file format.');
       }  
    },
    error: function(error) {
        showHttpErrorAlert(error);
    }
  });
}