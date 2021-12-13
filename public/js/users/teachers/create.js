   $(document).ready(function() {
	//save button
	$("#add-teacher-user").submit(function(e) {
    	e.preventDefault();
    	var data = $(this).serializeArray();
      	checkPassword();
  });

	//reset button
	$('#reset_btn').click(function() {
    if ($('#add-teacher-user').length > 0) {
			$('#add-teacher-user')[0].reset();
		} 
  });
  //get institute
  getInstitute();
  getCreatedUser();
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
    $.ajax({
          type: "get",
          url: "/users/get-institute",
          data: null,
          dataType: 'JSON',
          success: function (res) {
              //auto complete
              autoComplete(res);
          },
          error: function(error) {
              showHttpErrorAlert(error);
          }
    });
}

function getCreatedUser(){
    $.ajax({
          type: "post",
          url: "/users/get/created/user",
          data: {
              utype:'teacher'
          },
          dataType: 'JSON',
          success: function (res) {
            console.log(res);
            if(res[2] == 'Institute Admin'){
                if(res[0] == res[1]){
                    showWarningAlert('Warning',`You have reached the maximum number of teacher accounts you can create. Please email us at myedge@edupowerpublishing.com or contact the SSC assigned to your area if you want to add more teacher accounts under your institution. `);
                    $('#saving-btn').hide();
                }      
            }
              
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
  data = new FormData($('#add-teacher-user')[0]);
  $.ajax({
    type:"post",
    url:"/users/teachers",
    data: data,
    method:'POST',
    dataType:"json",
    contentType: false,
    cache: false,
    processData: false,
    success:function(data) {
      console.log(data);
        if (data["status"] == "saved") {
          showSuccessAlert('Success', 'Teacher successfully added/updated');
          $('#add-teacher-user')[0].reset();
        }else{
          showErrorAlert('Error', 'Teacher unsuccessfully added/updated, please check your internet.');
        } 
    },
    error: function(error) {
        showHttpErrorAlert(error);
    }
  });   
}