function deleteSentMail(id){
    if (confirm("Are you sure you want to delete!")) {
  		//get canada province
  		$.ajax({
  		    type: "post",
  		    url: "/emails/sent/delete",
  		    data: {
  		    	id:id
  		    },
  		    dataType: 'JSON',
  		    success: function (res) {
  		        console.log(res);
  	            if (res["status"] == "saved") {
                showSuccessAlert('Success', 'Email successfully delete');
                location.reload();
        }
  		    },
  	    error: function(error) {
  	        showHttpErrorAlert(error);
  	    }
  		});
    } 
}