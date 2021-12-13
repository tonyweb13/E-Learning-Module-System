let rowIndex=0;
$(document).ready(function() {

});

function enrollUser(){

    userid = [];
    $.each($("input[name='user_id']:checked"), function(){
        userid.push($(this).val());
    });
    console.log(userid);
    //check if have selected users
    if(userid.length > 0){
        submitForm(userid);
    }else{
        showWarningAlert('ERROR','please select user!');
    }
}

function submitForm(userid){
    console.log(userid);
    showLoader('Saving','Please wait....');
    ebook_id=$('#ebook-id').val();
    current_user=$('#current-user').val();
    $.ajax({
        type: "POST",
        url:"/ebooks/assign/users/store",
        data: {
               userid:userid,
               ebook_id:ebook_id,
               current_user:current_user
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

function unEnrollUser(){

    userid = [];
    $.each($("input[name='user_id']:checked"), function(){
        userid.push($(this).val());
    });
    console.log(userid);
    //check if have selected users
    if(userid.length > 0){
        console.log(userid);
        submitForm2(userid);
    }else{
        showWarningAlert('ERROR','please select user!');
    }
}

function submitForm2(userid){
    console.log(userid);
    showLoader('Saving','Please wait....');
    ebook_id=$('#ebook-id').val();
    current_user=$('#current-user').val();
    $.ajax({
        type: "POST",
        url:"/ebooks/unassign/users/store",
        data: {
               userid:userid,
               ebook_id:ebook_id,
               current_user:current_user
        },
        dataType: 'JSON',
        success: function (data) {
            if (data["status"] == "saved") {
               showSuccessAlert('Success', 'User was successfully unenrolled');
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



