$(document).ready(function() {



   showInfoAlert('Welcome User','You are now here at my edge old server!!');



});



function likeComment(id){

    showLoader('Loading','Please wait....');

    user_id=$('#current-user').val();

    $.ajax({

  	    type: "post",

  	    url: "/forums/like",

  	    data: {

  	    	id:id,

  	    	user_id:user_id

  	    },

  	    dataType: 'JSON',

  	    success: function (res) {

  	        console.log(res);

            if (res == "success") {

                showSuccessAlert('Success', 'You successfully like the post!');

                location.reload();

            }

			Swal.close();
  	    },

        error: function(error) {

            showHttpErrorAlert(error);

        }

  	});

}



function unlikeComment(id){



    user_id=$('#current-user').val();

    $.ajax({

  	    type: "post",

  	    url: "/forums/unlike",

  	    data: {

  	    	id:id,

  	    	user_id:user_id

  	    },

  	    dataType: 'JSON',

  	    success: function (res) {

  	        console.log(res);

            if (res == "success") {

                showSuccessAlert('Success', 'You successfully unlike the post!');

                location.reload();

            }

  	    },

        error: function(error) {

            showHttpErrorAlert(error);

        }

  	});

}



function heartComment(id){



    user_id=$('#current-user').val();

    $.ajax({

  	    type: "post",

  	    url: "/forums/heart",

  	    data: {

  	    	id:id,

  	    	user_id:user_id

  	    },

  	    dataType: 'JSON',

  	    success: function (res) {

  	        console.log(res);

            if (res == "success") {

                showSuccessAlert('Success', 'You successfully heart the post!');

                location.reload();

            }

  	    },

        error: function(error) {

            showHttpErrorAlert(error);

        }

  	});

}



function unheartComment(id){



    user_id=$('#current-user').val();

    $.ajax({

  	    type: "post",

  	    url: "/forums/unheart",

  	    data: {

  	    	id:id,

  	    	user_id:user_id

  	    },

  	    dataType: 'JSON',

  	    success: function (res) {

  	        console.log(res);

            if (res == "success") {

                showSuccessAlert('Success', 'You successfully unheart the post!');

                location.reload();

            }

  	    },

        error: function(error) {

            showHttpErrorAlert(error);

        }

  	});

}



function postComment(key){



    comment=$(`#comment-${key}`).val();

    id=$(`#forum-id-${key}`).val();

    user_id=$('#current-user').val();



    if(comment){



        $.ajax({

  	    type: "post",

  	    url: "/forums/comment",

  	    data: {

  	    	comment:comment,

  	    	user_id:user_id,

  	    	id:id

  	    },

  	    dataType: 'JSON',

  	    success: function (res) {

  	        console.log(res);

            if (res == "success") {

                showSuccessAlert('Success', 'You successfully commented the post!');

                location.reload();

            }

  	    },

        error: function(error) {

            showHttpErrorAlert(error);

        }

  	});



    }else{

        alert('please insert comment');

    }



}



function comment(forum_id){



    $.ajax({

  	    type: "post",

  	    url: "/forums/get-comment",

  	    data: {

  	    	forum_id:forum_id

  	    },

  	    dataType: 'JSON',

  	    success: function (res) {

  	        console.log(res);

  	        $("#table-comment").empty();

  	        if(res.length == 0){

  	            let cells = generateTableRow('table-comment', 'worksheet_row', 1);

  	            cells[0].innerHTML  = `<h5>No Comment Available</h5>`;



  	        }else{

  	           res.forEach(appendComment);

  	        }



  	        $("#comment-modal").modal("show");

  	    },

        error: function(error) {

            showHttpErrorAlert(error);

        }

  	});

}



function appendComment(data){



    user_id=$('#current-user').val();

    let cells = generateTableRow('table-comment', 'worksheet_row', 1);

    if(data.user_id == user_id){

        cells[0].innerHTML  = `<div  class="col-md-6 rcorners2 right">${data.comment}<br><span class="right">${data.user.name}</span></div>`;



    }else{

        cells[0].innerHTML  = `<div  class="col-md-6 rcorners3">${data.comment}<br><span class="right">${data.user.name}</span><br></div>`;

    }





}





function deletePost(id){

    if (confirm("Are you sure you want to delete this post!")) {

  		//get canada province

  		$.ajax({

  		    type: "post",

  		    url: "/forums/delete",

  		    data: {

  		    	id:id

  		    },

  		    dataType: 'JSON',

  		    success: function (res) {

  		        if (res["status"] == "saved") {

                showSuccessAlert('Success', 'Forum and Announcement successfully delete');

                location.reload();

              }

  		    },

    	    error: function(error) {

    	        showHttpErrorAlert(error);

    	    }

  		});

    }

}
