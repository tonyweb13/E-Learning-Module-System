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

    showLoader('Loading','Please wait....');

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

      Swal.close();

    },

    error: function(error) {

        showHttpErrorAlert(error);

    }

  });

}
