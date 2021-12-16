$(document).ready(function() {
	
	removeClass();
  type=$('#type').val();
  if(type == 'myebook'){

      $('#ebook-li').addClass( "active" );

  }else{

      $('#product-li').addClass( "active" );

  }

});

function removeClass(){

  $('#ebook-li').removeClass('active');
  $('#product-li').removeClass('active');
}

