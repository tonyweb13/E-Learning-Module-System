$(document).ready(function() {

	//save button
	$("#add-test").submit(function(e) {
    	e.preventDefault();
    	var data = $(this).serializeArray();
      	submitForm();
  });
});

function submitForm()
{
    data = new FormData($('#add-test')[0]);
    $.ajax({
    type:"post",
    url:"/test/save",
    data: data,
    method:'POST',
    dataType:"json",
    contentType: false,
    cache: false,
    processData: false,
    success:function(data) {
      console.log(data);
       
    },
    error: function(error) {
        showHttpErrorAlert(error);
    }
  });
}