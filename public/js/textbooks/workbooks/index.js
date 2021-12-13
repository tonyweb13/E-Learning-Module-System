function deleteData(id){
    if (confirm("Are you sure you want to delete!")) {
  		//get canada province
  		$.ajax({
  		    type: "post",
  		    url: "/textbooks/workbooks/delete",
  		    data: {
  		    	id:id
  		    },
  		    dataType: 'JSON',
  		    success: function (res) {
  		        if (res["status"] == "saved") {
                showSuccessAlert('Success', 'CM successfully delete');
                location.reload();
              }
  		    },
    	    error: function(error) {
    	        showHttpErrorAlert(error);
    	    } 
  		});
    } 
}