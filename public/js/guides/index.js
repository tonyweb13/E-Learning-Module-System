function deleteData(id){
    if (confirm("Are you sure you want to delete!")) {
  		//get canada province
  		$.ajax({
  		    type: "post",
  		    url: "/guides/delete",
  		    data: {
  		    	id:id
  		    },
  		    dataType: 'JSON',
  		    success: function (res) {
  		        console.log(res);
  	            if (res["status"] == "saved") {
                showSuccessAlert('Success', 'Edge Guide successfully delete');
                location.reload();
        }
  		    },
  	    error: function(error) {
  	        showHttpErrorAlert(error);
  	    }
  		});
    } 
}