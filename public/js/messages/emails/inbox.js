function deleteMail(id){

    if (confirm("Are you sure you want to delete!")) {

		showLoader('Loading','Please wait....');
  		//get canada province

  		$.ajax({

  		    type: "post",

  		    url: "/emails/inbox/delete",

  		    data: {

  		    	id:id

  		    },

  		    dataType: 'JSON',

  		    success: function (res) {

					console.log(res);

					if (res["status"] == "saved") {

					showSuccessAlert('Success', 'Email successfully delete');

					Swal.close();
					location.reload();

				}

  		    },

  	    error: function(error) {

  	        showHttpErrorAlert(error);

  	    }

  		});

    }

}
