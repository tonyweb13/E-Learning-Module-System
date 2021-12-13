$(document).ready(function() {
	if($('#zipcode-id').val()){	
		getAddress($('#zipcode-id').val());
	}

    user=$('#user-type').val();
    if(user == 'Admin'){

        $('#admin-li').addClass( "active" );
        $('#admin-card').addClass('active show');

    }else if(user == 'Institute Admin'){

        $('#institutional-li').addClass( "active" );
        $('#institutional-card').addClass('active show');

    }
    
	
});

function showPass(){

    a=$('#password').attr('type');

    if(a == 'password'){
      $($('#password')).attr('type', 'text'); 
      $($('#password2')).attr('type', 'text'); 
    }else{
      $($('#password')).attr('type', 'password'); 
      $($('#password2')).attr('type', 'text'); 
    }
}

function getAddress(id){
  alert(id);
	$.ajax({
        type: "post",
        url: "/get-address",
        data: {
        	id:id	
        },
        dataType: 'JSON',
        success: function (res) {
        	console.log(res);
        	if(res){
        		$('#city').val(1390);
        	}
            
        },
        error: function(error) {
            showHttpErrorAlert(error);
        }
    });
}

function check(data){
  removeClass();
  if(data == 1){
      location.replace('/users/admins');
  }else if(data == 2){
      location.replace('/users/institute');
  }

}

function removeClass(){

  $('#admin-li').removeClass('active');
  $('#institutional-li').removeClass('active');

}


