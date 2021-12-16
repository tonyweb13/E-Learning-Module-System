
function submitAnswer($key){
    
    alert($key);
    var current_user = $('#current-user').prop('files')[0];   
    var form_data = new FormData();                  
    form_data.append('imageFile', file_data);
}