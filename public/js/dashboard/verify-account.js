$(document).ready(function() {
    //modal show
    $("#verify-account-modal").modal("show");
    $('#verify-account-modal').modal({backdrop: 'static', keyboard: false});
});

function logoutUser(){
    window.location.href = '/logout';
}