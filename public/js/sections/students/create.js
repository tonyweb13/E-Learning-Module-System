let rowIndex=0;

$(document).ready(function() {

});



$('#select-all').change(function() {

    if(this.checked) {

        $('.student-id').prop('checked', true);

    }else{

        $('.student-id').prop('checked', false);

    }

});



function enrollStudents(){



    students = [];

    $.each($("input[name='student_id']:checked"), function(){

        students.push($(this).val());

    });

    console.log(students);

    //check if have selected student

    if(students.length > 0){

        submitForm(students);

    }else{

        showWarningAlert('ERROR','please select students!');

    }

}



function submitForm(students){



    showLoader('Saving','Please wait....');

    section_id=$('#section-id').val();

    current_user=$('#current-user').val();

    $.ajax({

        type: "POST",

        url:"/sections/students/store",

        data: {

               students:students,

               section_id:section_id,

               current_user:current_user

        },

        dataType: 'JSON',

        success: function (data) {

            if (data["status"] == "saved") {

               showSuccessAlert('Success', 'Students was successfully enrolled');

               location.reload();

            }else{

              showErrorAlert('Error', 'Students was unsuccessfully added, please check your file format.');

            }

        },



        error: function(error) {

          showHttpErrorAlert(error);

      }

    });

}
