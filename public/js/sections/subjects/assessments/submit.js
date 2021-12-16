$(document).ready(function() {



    var requiredCheckboxes = $(':checkbox[required]');

    requiredCheckboxes.on('change', function(e) {

    var checkboxGroup = requiredCheckboxes.filter('[id="' + $(this).attr('id') + '"]');

    var isChecked = checkboxGroup.is(':checked');

        checkboxGroup.prop('required', !isChecked);

    });

    requiredCheckboxes.trigger('change');



	//save button

	$("#submit-assessment").submit(function(e) {

    	e.preventDefault();

    	var data = $(this).serializeArray();



    	//if essay content

    	var l = $('#essay-total').val();

    	for(i=0 ; i < l; i++){

    	    tempa=$(`#essayeditor-${i}`).html();

    	    console.log(tempa);

    	    $(`#essay-${i}`).val(tempa);

    	}



    	submitForm();

    });

	//reset button

	$('#reset_btn').click(function(e) {


        e.preventDefault();
        if ($('#submit-assessment').length > 0) {



			$('#submit-assessment')[0].reset();

		}

    });



});



$(".radiotf,.radiomc").click(function() {

    checkid=this.id;

    $(':checkbox[id="'  + checkid + '"]').not(this).prop('checked',false);



});



function submitForm()
{

    showLoader('Submitting','Please wait....');

    data = new FormData($('#submit-assessment')[0]);

    $.ajax({

      type:"post",

      url:"/sections/subjects/assessment/submit",

      data: data,

      method:'POST',

      dataType:"json",

      contentType: false,

      cache: false,

      processData: false,

      success:function(data) {



          if (data["status"] == "saved") {

            showSuccessAlert('Success', 'You assessment successfully submitted');

            $('#submit-assessment')[0].reset();

            location.reload();

          }else{

            showErrorAlert('Error', 'You assessment unsuccessfully submitted, please check your file format.');

          }

      },

      error: function(error) {

        showHttpErrorAlert(error);

      // showErrorAlert('Error', 'Please complete you answer dont live un answer question. Thank you');

      }

    });

}
