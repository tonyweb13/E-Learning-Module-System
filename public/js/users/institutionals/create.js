   $(document).ready(function() {

	//save button

	$("#add-insti-user").submit(function(e) {

    	e.preventDefault();

    	var data = $(this).serializeArray();

      	checkPassword();

  });



	//reset button

	$('#reset_btn').click(function() {

    if ($('#add-insti-user').length > 0) {

			$('#add-insti-user')[0].reset();

		}

  });

  //get institute

  getInstitute();

});



function showPass(){

  var x = document.getElementById("password");

  var y = document.getElementById("password2");

    if (x.type === "password") {

      x.type = "text";

      y.type = "text";

    } else {

      x.type = "password";

      y.type = "password";

    }

}



function getInstitute(){

  showLoader('Loading','Please wait....');

    $.ajax({

          type: "get",

          url: "/users/get-institute",

          data: null,

          dataType: 'JSON',

          success: function (res) {

              console.log(res);

              //auto complete grades

              autoComplete(res);

              Swal.close();

          },

          error: function(error) {

              showHttpErrorAlert(error);

          }

    });

}



function autoComplete(data){



  let institutes = jQuery.grep(data, function(element, i) {

              return element.id;

  });



    if (institutes != null) {

        //for country langugae

            initUnrestrictedAutocomplete('#institute', '#institute-id', institutes, 0,function(selection, isValid){

        });

    }

}



function checkPassword(){

  p1=$('#password').val();

  p2=$('#password2').val();



  if(p1 == p2){

    submitForm();

  }else{

    showErrorAlert('Error', 'Password not match');

  }

}



function submitForm()

{

  showLoader('Saving','Please wait....')

  data = new FormData($('#add-insti-user')[0]);

  $.ajax({

    type:"post",

    url:"/users/institutes",

    data: data,

    method:'POST',

    dataType:"json",

    contentType: false,

    cache: false,

    processData: false,

    success:function(data) {

      console.log(data);

        if (data["status"] == "saved") {

          showSuccessAlert('Success', 'New Institute Admin successfully added/updated');

          $('#add-insti-user')[0].reset();

        }else{

          showErrorAlert('Error', 'New Institute Admin unsuccessfully added/updated, please check your internet.');

        }

    },

    error: function(error) {

        showHttpErrorAlert(error);

    }

  });

}
