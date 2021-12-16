let rowIndex=0;

let userids;

$(document).ready(function() {



});



function enrollUser(){

    userids=null;

    userid=[];

    $.each($("input[name='user_id']:checked"), function(){

        userid.push($(this).val());

    });



    console.log(userid);

    //check if have selected users

    if(userid.length > 0){

        //show modal

        userids=userid;

        $("#privallage-modal").modal("show");

    }else{

        showWarningAlert('ERROR','please select user!');

    }

}



function dismissPrivModal(){

    $("#privallage-modal").modal("hide");

}



function addStudNum(){

    privnum=$('#priv-num').val();

    if(privnum > 0){

        $("#privallage-modal").modal("hide");

        submitForm(privnum);

    }else{

        showWarningAlert('ERROR','please insert atleast 1 student!');

    }



}







function submitForm(privnum){



    showLoader('Saving','Please wait....');

    subject_id=$('#subject-id').val();

    current_user=$('#current-user').val();

    $.ajax({

        type: "POST",

        url:"/subjects/assign/users/store",

        data: {

               userid:userid,

               subject_id:subject_id,

               current_user:current_user,

               privnum:privnum

        },

        dataType: 'JSON',

        success: function (data) {

            if (data["status"] == "saved") {

               showSuccessAlert('Success', 'User was successfully enrolled');

               location.reload();

            }else{

              showErrorAlert('Error', 'User was unsuccessfully added, please check your file format.');

            }

        },



        error: function(error) {

          showHttpErrorAlert(error);

      }

    });

}
