let rowIndex=0;
let usersarr;
$(document).ready(function() {
    getUsers();
  
  $("#add-emails").submit(function(e) {
    	e.preventDefault();
    	var data = $(this).serializeArray();
    	post=$('#editor').html();
    	console.log(post);
    	$('#messages').val(post);
      	submitForm();
  });

});

function getUsers(){
    $.ajax({
        type: "get",
        url: "/get-users",
        data: null,
        dataType: 'JSON',
        success: function (res) {
            console.log(res);
            usersarr=res;
            addRow();
        },
        error: function(error) {
            showHttpErrorAlert(error);
        }
    });
}

function submitForm()
{
    showLoader('Saving','Please wait....');
    data = new FormData($('#add-emails')[0]);
    $.ajax({
    type:"post",
    url:"/emails",
    data: data,
    method:'POST',
    dataType:"json",
    contentType: false,
    cache: false,
    processData: false,
    success:function(res) {
      console.log(data);
        if (res["status"] == "saved") {
          showSuccessAlert('Success', 'Email successfully send');
          $('#add-emails')[0].reset();
          location.reload();

       }else{
         showErrorAlert('Error', 'Subject unsuccessfully added, please check your file format.');
       }  
    },
    error: function(error) {
        showHttpErrorAlert(error);
    }
  });
}

function addRow(){
    
    rowIndex ++;
    
    let userName = combine('user_names', rowIndex);
    let userId   = combine('user_ids', rowIndex);
    
    let cells = generateTableRow('table-user', 'worksheet_row', 2);
    cells[0].innerHTML  = `<input type="checkbox" class="worksheet-row-index" width="5%"/>`;
    cells[1].innerHTML  = `<input type="text" id="${userName}" name="user_names[]" class="form-control input-sm input-sieve"  autocomplete="off" required />`; 
    cells[1].innerHTML += `<input type="hidden" id="${userId}" name="user_ids[]" class="form-control input-sm"  autocomplete="off" readonly required/>`; 
    
    let users = jQuery.grep(usersarr, function(element, i) {
        return element.id;
    });
    
    if (users != null) {
        initAutocomplete(userName, userId, users, function(i, ui){},
        );

    }
    
}

function removeRow()
{
    $('.worksheet-row-index:checkbox:checked').parents('tr.worksheet_row').remove();
}