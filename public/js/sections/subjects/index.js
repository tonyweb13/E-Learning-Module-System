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
  		//get canada province
  		$.ajax({
  		    type: "post",
  		    url: "/sections/subjects/delete",
  		    data: {
  		    	id:id
  		    },
  		    dataType: 'JSON',
  		    success: function (res) {
  		        if (res["status"] == "saved") {
                showSuccessAlert('Success', 'Class successfully delete');
                location.reload();
              }
  		    },
    	    error: function(error) {
    	        showHttpErrorAlert(error);
    	    } 
  		});
    } 
}


function uploadSubject(id){
    
  		$.ajax({
  		    type: "post",
  		    url: "/sections/subjects/status",
  		    data: {
  		    	id:id,
  		    	status:1,
  		    },
  		    dataType: 'JSON',
  		    success: function (res) {
  		        if (res["status"] == "saved") {
                showSuccessAlert('Success', 'Subject successfully uploaded, Enrolled Student and Institutional Admin can now see this class');
                location.reload();
              }
  		    },
    	    error: function(error) {
    	        showHttpErrorAlert(error);
    	    } 
  		});
}

function hideSubject(id){
    
  		$.ajax({
  		    type: "post",
  		    url: "/sections/subjects/status",
  		    data: {
  		    	id:id,
  		    	status:0,
  		    },
  		    dataType: 'JSON',
  		    success: function (res) {
  		        if (res["status"] == "saved") {
                showSuccessAlert('Success', 'Subject successfully unpublished, You and shared teacher can only see this class');
                location.reload();
              }
  		    },
    	    error: function(error) {
    	        showHttpErrorAlert(error);
    	    } 
  		});
}