$(document).ready(function() {



  gridView();

});



function listView(){

  $('#list-view').show();

  $('#grid-view').hide();

}



function gridView(){

  $('#grid-view').show();

  $('#list-view').hide();

}



function deleteData(id){

    if (confirm("Are you sure you want to delete!")) {

		showLoader('Loading','Please wait....');

  		//get canada province

  		$.ajax({

  		    type: "post",

  		    url: "/sections/delete",

  		    data: {

  		    	id:id

  		    },

  		    dataType: 'JSON',

  		    success: function (res) {

  		        if (res["status"] == "saved") {

                showSuccessAlert('Success', 'Class successfully delete');

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



function uploadClass(id){

    	showLoader('Loading','Please wait....');

  		$.ajax({

  		    type: "post",

  		    url: "/sections/status",

  		    data: {

  		    	id:id,

  		    	status:1,

  		    },

  		    dataType: 'JSON',

  		    success: function (res) {

  		        if (res["status"] == "saved") {

                showSuccessAlert('Success', 'Class successfully uploaded, Enrolled Student and Institutional Admin can now see this class');

				Swal.close();
                location.reload();

              }

  		    },

    	    error: function(error) {

    	        showHttpErrorAlert(error);

    	    }

  		});

}



function hideClass(id){

    showLoader('Loading','Please wait....');

  		$.ajax({

  		    type: "post",

  		    url: "/sections/status",

  		    data: {

  		    	id:id,

  		    	status:0,

  		    },

  		    dataType: 'JSON',

  		    success: function (res) {

  		        if (res["status"] == "saved") {

                showSuccessAlert('Success', 'Class successfully unpublished, You and shared teacher can only see this class');

				Swal.close();
                location.reload();

              }

  		    },

    	    error: function(error) {

    	        showHttpErrorAlert(error);

    	    }

  		});

}
