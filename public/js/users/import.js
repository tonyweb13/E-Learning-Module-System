

$(document).ready(function() {



	//save button

    $("#add-import-user").submit(function(e) {

        	e.preventDefault();

        	var data = $(this).serializeArray();

            submitForm(data);

      });



	//reset button

	$('#reset_btn').click(function() {

		if ($('#add-import-user').length > 0) {

			$('#add-import-user')[0].reset();

		}

	});

});



function submitForm(data)

{

    fileName=$('#file').val();

    var ext = fileName.split('.').pop();



    if(ext === 'xlsx'){

        showLoader('Uploading','Please wait Uploading your file, Thank you!');

        data = new FormData($('#add-import-user')[0]);

        console.log(data);

        $.ajax({

            type:"post",

            url:"/users/import/store",

            data:data,

            method:'POST',

            dataType:"json",

            contentType: false,

            cache: false,

            processData: false,

            success:function(res) {

               console.log(res);

                if (res["status"] == "saved") {

                    showSuccessAlert('Success', 'User upload successfully');

                    $('#add-import-user')[0].reset();

                }else{

                  showErrorAlert('Error', 'User unsuccessfully upload, please check your file format.');

                }

            },

            error: function(error) {

                showHttpErrorAlert(error);

            }

        });

    }else{

        showErrorAlert('Error', 'User unsuccessfully upload, please check your file format.');

    }

}
