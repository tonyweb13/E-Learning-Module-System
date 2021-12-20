$(document).ready(function() {
	
	removeClass();
    type=$('#type').val();
    if(type == 'WorkBook'){

        $('#workbook-li').addClass( "active" );

    }else if(type == 'TeachersGuide'){
        $('#teacher-guide-li').addClass( "active" );
    }
});


function removeClass(){

  $('#workbook-li').removeClass('active');
  $('#teacher-guide-li').removeClass('active');
}