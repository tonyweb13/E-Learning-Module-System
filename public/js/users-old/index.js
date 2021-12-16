$(document).ready(function(){
  
  user=$('#user-type').val();
  if(user == 'Admin'){

      $('#admin-li').addClass( "active" );
      $('#admin-card').addClass('active show');

  }else if(user == 'Institute Admin'){

      $('#institutional-li').addClass( "active" );
      $('#institutional-card').addClass('active show');

  }
  
});

function deleteData(id){
    if (confirm("Are you sure you want to delete!")) {
  		//get canada province
  		$.ajax({
  		    type: "post",
  		    url: "/users/admins/delete",
  		    data: {
  		    	id:id
  		    },
  		    dataType: 'JSON',
  		    success: function (res) {
  		        console.log(res);
  	            if (res["status"] == "saved") {
                showSuccessAlert('Success', 'User successfully delete');
                location.reload();
        }
  		    },
  	    error: function(error) {
  	        showHttpErrorAlert(error);
  	    }
  		});
    } 
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