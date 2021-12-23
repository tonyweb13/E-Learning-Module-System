$(document).ready(function() {
	
	removeClass();
  type=$('#type').val();
  if(type == 'instruction'){

      $('#instruction-li').addClass( "active" );

  }else if(type == 'subject'){

      $('#subject-li').addClass( "active" );

  }else if(type == 'student'){
      $('#student-li').addClass( "active" );
    
  }else if(type == 'student2'){
      $('#student-modular-li').addClass( "active" );
    
  }else if(type == 'record'){
      $('#record-li').addClass( "active" );
  } 

 
});

function removeClass(){

  $('#admin-li').removeClass('active');
  $('#institutional-li').removeClass('active');
  $('#student-li').removeClass('active');
  $('#student-modular-li').removeClass( "active" );
}

