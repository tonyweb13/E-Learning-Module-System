

$(document).ready(function() {



  listView();

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

  		    url: "/ebooks/delete",

  		    data: {

  		    	id:id

  		    },

  		    dataType: 'JSON',

  		    success: function (res) {

  		        console.log(res);

  	            if (res["status"] == "saved") {

                showSuccessAlert('Success', 'Ebook successfully delete');

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



function openPdfEbook(tgid){



    $('#title-id').text('View Ebook');

    document.getElementById("tb-frame").src = tgid + "#toolbar=0";

    //var base_path = $('#appurl2').val();

    //tmp=`https://docs.google.com/viewerng/viewer?url=${base_path}${tgid}&embedded=true`;

    //console.log(tmp);

    //document.getElementById("tb-frame").src = tmp;

    $("#view-modal").modal("show");

    showLoader('LOading','sshsh');



}

$('#tb-frame').load(function () {



    Swal.close();



});
