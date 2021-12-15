$(document).ready(function() {



    getForum();

	//save button

	$("#add-forum").submit(function(e) {

    	e.preventDefault();

    	var data = $(this).serializeArray();

    	post=$('#editor').html();

    	$('#editor-input').val(post);

      	submitForm();

  });



	//reset button

	$('#reset_btn').click(function() {



    if ($('#add-forum').length > 0) {

			$('#add-forum')[0].reset();

			$('#editor').empty();

		}

  });

});



function getForum(){

  showLoader('Loading','Please wait....');

  id=$('#forum-id').val();

    $.ajax({

        type: "post",

        url: "/get-forum",

        data: {

            id:id

        },

        dataType: 'JSON',

        success: function (res) {

            console.log(res);

            $("#audience").val(res.audience);

            $("#comment").val(res.can_comment);

            $('#editor').html(res.post);

            Swal.close();

        },

        error: function(error) {

            showHttpErrorAlert(error);

        }

    });

}





function submitForm(){



    showLoader('Saving','Please wait....')

    data = new FormData($('#add-forum')[0]);

    $.ajax({

      type:"post",

      url:"/forums",

      data: data,

      method:'POST',

      dataType:"json",

      contentType: false,

      cache: false,

      processData: false,

      success:function(data) {

        console.log(data);

          if (data["status"] == "saved") {

            showSuccessAlert('Success', 'Announcement Posted successfully added');

            $('#add-forum')[0].reset();

            location.reload();

          }else{

            showErrorAlert('Error', 'Announcement Posted unsuccessfully added, please check your file format.');

          }

          Swal.close();
      },

      error: function(error) {

          showHttpErrorAlert(error);

      }

    });

}
