$(document).ready(function() {
	
	removeClass();
    user=$('#user-type').val();
    if(user == 'Admin'){
        $('#admin-li').addClass( "active" );

    }else if(user == 'Institute Admin'){

        $('#insi-li').addClass( "active" );

    }else if(user == 'Teacher'){
        
        $('#teacher-li').addClass( "active" );

    }else if(user == 'Student'){
        
        $('#student-li').addClass( "active" );
        
    }else if(user == 'Import User'){
        $('#import-user-li').addClass( "active" );
    }
	
});


function removeClass(){

  $('#admin-li').removeClass('active');
  $('#institutional-li').removeClass('active');
  $('#teacher-li').removeClass('active');
  $('#student-li').removeClass('active');
  $('#import-user-li').removeClass('active');
}