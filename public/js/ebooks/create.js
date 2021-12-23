

$(document).ready(function() {



	//save button

	$("#add-ebook").submit(function(e) {

    	e.preventDefault();

    	var data = $(this).serializeArray();

    	exist=$('#id').val();

    	if(exist){//edit ebook

    	    submitFormOld();

    	}else{//create ebook

    	    submitForm();

    	}

  });



	//reset button

	$('#reset_btn').click(function() {



    $('#image').attr('src', $(this).val());



    if ($('#add-ebook').length > 0) {

			$('#add-ebook')[0].reset();

		}



  });

});



function submitFormOld(){

    showLoader('Loading','Please wait....');
    fileName=$('#file').val();

    if(fileName){

        var ext = fileName.split('.').pop();

        if(ext === 'zip' || ext === 'epub' || ext === 'pdf'){

            showLoader('Saving','Please wait....')

            data = new FormData($('#add-ebook')[0]);

            $.ajax({

                type:"post",

                url:"/ebooks",

                data: data,

                method:'POST',

                dataType:"json",

                contentType: false,

                cache: false,

                processData: false,

                success:function(data) {

                  console.log(data);

                    if (data["status"] == "saved") {

                       showSuccessAlert('Success', 'Ebook successfully added');

                       $('#add-ebook')[0].reset();

                    }else{

                      showErrorAlert('Error', 'Ebook unsuccessfully added, please check your file format.');

                    }

                    Swal.close();
                },

                error: function(error) {

                    showHttpErrorAlert(error);

                }

            });

        }else{

            showHttpErrorAlert(error);

        }

    }else{

        showLoader('Saving','Please wait....')

        data = new FormData($('#add-ebook')[0]);

        $.ajax({

        type:"post",

        url:"/ebooks",

        data: data,

        method:'POST',

        dataType:"json",

        contentType: false,

        cache: false,

        processData: false,

        success:function(data) {

          console.log(data);

            if (data["status"] == "saved") {

               showSuccessAlert('Success', 'Ebook successfully added');

               $('#add-ebook')[0].reset();

            }else{

              showErrorAlert('Error', 'Ebook unsuccessfully added, please check your file format.');

            }

            Swal.close();
        },

        error: function(error) {

            showHttpErrorAlert(error);

        }

      });

    }

}



function submitForm()

{

  //check file extension

  fileName=$('#file').val();

  var ext = fileName.split('.').pop();



  if(ext === 'epub' || ext === 'zip' || ext === 'pdf'){

        showLoader('Saving','Please wait....')

        data = new FormData($('#add-ebook')[0]);

        $.ajax({

        type:"post",

        url:"/ebooks",

        data: data,

        method:'POST',

        dataType:"json",

        contentType: false,

        cache: false,

        processData: false,

        success:function(data) {

          console.log(data);

            if (data["status"] == "saved") {

               showSuccessAlert('Success', 'Ebook successfully added');

               $('#add-ebook')[0].reset();

            }else{

              showErrorAlert('Error', 'Ebook unsuccessfully added, please check your file format.');

            }

        },

        error: function(error) {

            showHttpErrorAlert(error);

        }

      });

  }else{

      showErrorAlert('Error', 'Ebook unsuccessfully added, please check your file format.');

  }

}
