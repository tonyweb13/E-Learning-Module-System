$(document).ready(function() {
    $(`.radio-c`).attr("disabled", true);
    $(`.radio-e`).attr("disabled", true);
    $(`.radio-d`).attr("disabled", true);
    $(`.radio-a`).attr("disabled", true);
});

$('.student-id').change(function() {
    
    index=$(this).attr('index');
    console.log(index);
    
        
    if($(`#user-id-${index}`).is(':checked')){
        
        $(`#create-priv-n-${index}`).prop('checked', true);
        $(`#edit-priv-n-${index}`).prop('checked', true);
        $(`#delete-priv-n-${index}`).prop('checked', true); 
        $(`#asign-priv-n-${index}`).prop('checked', true); 
        
        $(`#create-priv-n-${index}`).attr("disabled", false);
        $(`#edit-priv-n-${index}`).attr("disabled", false);
        $(`#delete-priv-n-${index}`).attr("disabled", false);
        $(`#asign-priv-n-${index}`).attr("disabled", false);
        
        $(`#create-priv-y-${index}`).attr("disabled", true);
        $(`#edit-priv-y-${index}`).attr("disabled", true);
        $(`#delete-priv-y-${index}`).attr("disabled", true);
        $(`#asign-priv-y-${index}`).attr("disabled", true);
        
        
    }else{
       
        $(`#create-priv-n-${index}`).prop('checked', false);
        $(`#edit-priv-n-${index}`).prop('checked', false);
        $(`#delete-priv-n-${index}`).prop('checked', false);
        $(`#asign-priv-n-${index}`).prop('checked', false);
        
        $(`#create-priv-y-${index}`).prop('checked', false);
        $(`#edit-priv-y-${index}`).prop('checked', false);
        $(`#delete-priv-y-${index}`).prop('checked', false);
        $(`#asign-priv-y-${index}`).prop('checked', false);
        
        $(`#create-priv-y-${index}`).attr("disabled", true);
        $(`#edit-priv-y-${index}`).attr("disabled", true);
        $(`#delete-priv-y-${index}`).attr("disabled", true);
        $(`#asign-priv-y-${index}`).attr("disabled", true);
        
        $(`#create-priv-n-${index}`).attr("disabled", true);
        $(`#edit-priv-n-${index}`).attr("disabled", true);
        $(`#delete-priv-n-${index}`).attr("disabled", true);
        $(`#asign-priv-n-${index}`).attr("disabled", true);
    }
});

$(".radio-c,.radio-d,.radio-e,.radio-a").click(function() {
    index=$(this).attr('index');
    
    //create
    if($(`#create-priv-y-${index}`).is(':checked')){
        $(`#create-priv-n-${index}`).prop('checked', false);
        $(`#create-priv-n-${index}`).attr("disabled", true);
         
    }else if($(`#create-priv-n-${index}`).is(':checked')){
        $(`#create-priv-y-${index}`).prop('checked', false);
        $(`#create-priv-y-${index}`).attr("disabled", true);
    }else{
        $(`#create-priv-n-${index}`).attr("disabled", false);
        $(`#create-priv-y-${index}`).attr("disabled", false);
    }
    
    //edit
    if($(`#edit-priv-y-${index}`).is(':checked')){
        $(`#edit-priv-n-${index}`).prop('checked', false);
        $(`#edit-priv-n-${index}`).attr("disabled", true);
         
    }else if($(`#edit-priv-n-${index}`).is(':checked')){
        $(`#edit-priv-y-${index}`).prop('checked', false);
        $(`#edit-priv-y-${index}`).attr("disabled", true);
    }else{
        $(`#edit-priv-n-${index}`).attr("disabled", false);
        $(`#edit-priv-y-${index}`).attr("disabled", false);
    }
    
    //delete
    if($(`#delete-priv-y-${index}`).is(':checked')){
        $(`#delete-priv-n-${index}`).prop('checked', false);
        $(`#delete-priv-n-${index}`).attr("disabled", true);
         
    }else if($(`#delete-priv-n-${index}`).is(':checked')){
        $(`#delete-priv-y-${index}`).prop('checked', false);
        $(`#delete-priv-y-${index}`).attr("disabled", true);
    }else{
        $(`#delete-priv-n-${index}`).attr("disabled", false);
        $(`#delete-priv-y-${index}`).attr("disabled", false);
    }
    
    //asign
    if($(`#asign-priv-y-${index}`).is(':checked')){
        $(`#asign-priv-n-${index}`).prop('checked', false);
        $(`#asign-priv-n-${index}`).attr("disabled", true);
         
    }else if($(`#asign-priv-n-${index}`).is(':checked')){
        $(`#asign-priv-y-${index}`).prop('checked', false);
        $(`#asign-priv-y-${index}`).attr("disabled", true);
    }else{
        $(`#asign-priv-n-${index}`).attr("disabled", false);
        $(`#asign-priv-y-${index}`).attr("disabled", false);
    }
});

function share(){

    users = [];
    $.each($("input[name='user_id']:checked"), function(){
        users.push($(this).val());
    });
    console.log(users);
    //check if have selected user
    if(users.length > 0){
        // create
        createpriv = [];
        $.each($("input[name='create_priv']:checked"), function(){
            createpriv.push($(this).val());
        });
        console.log(createpriv);
        
        // edit
        editpriv = [];
        $.each($("input[name='edit_priv']:checked"), function(){
            editpriv.push($(this).val());
        });
        console.log(editpriv);
        
        // delete
        deletepriv = [];
        $.each($("input[name='delete_priv']:checked"), function(){
            deletepriv.push($(this).val());
        });
        console.log(deletepriv);
        
        // asign
        asignpriv = [];
        $.each($("input[name='asign_priv']:checked"), function(){
            asignpriv.push($(this).val());
        });
        console.log(deletepriv);
        
        
        submitForm(users,createpriv,editpriv,deletepriv,asignpriv);
    }else{
        showWarningAlert('ERROR','please select users!');
    }
}

function submitForm(users,createpriv,editpriv,deletepriv){

    showLoader('Saving','Please wait....');
    section_id=$('#section-id').val();
    current_user=$('#current-user').val();
    $.ajax({
        type: "POST",
        url:"/sections/share/store",
        data: {
               users:users,
               createpriv:createpriv,
               editpriv:editpriv,
               deletepriv:deletepriv,
               asignpriv:asignpriv,
               section_id:section_id,
               current_user:current_user
        },
        dataType: 'JSON',
        success: function (data) {
            if (data["status"] == "saved") {
               showSuccessAlert('Success', 'The class is successfully shared to the selected users.');
               location.reload();
            }else{
              showErrorAlert('Error', 'The class is unsuccessfully shared to the selected users.');
            } 
        },

        error: function(error) {
          showHttpErrorAlert(error);
      }
    }); 
}

function removeUser(id){
    if (confirm("Are you sure you want to remove this user!")) {
  		//get canada province
  		$.ajax({
  		    type: "post",
  		    url: "/sections/share/delete",
  		    data: {
  		    	id:id
  		    },
  		    dataType: 'JSON',
  		    success: function (res) {
  		        console.log(res);
  	            if (res["status"] == "saved") {
                showSuccessAlert('Success', 'User successfully remove');
                location.reload();
        }
  		    },
  	    error: function(error) {
  	        showHttpErrorAlert(error);
  	    }
  		});
    } 
}