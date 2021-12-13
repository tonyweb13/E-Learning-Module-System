$(document).ready(function() {
    checkStat();
   
});

function checkStat(){
    
    //for deleted stat
    stat=$('#usersta').val();
    if(stat == 1){//delete 
        showWarningAlert('Warning','Your account is either deleted or un verified, Please verify you account or contct us!, Thank you');
         window.location.href = '/logout';
    }
    
}