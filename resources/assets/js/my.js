$(document).ready(function() {	
	 //let socket = io.connect('http://192.168.0.45:3001');
// 	let socket = io.connect('http://pgareachserver.632apps.com');
	let socket = io.connect('https://chat-server.edupowerpublishing.com/');
	
	getNotifForum();
	getNotifEmailChat();
	
	socket.on('message', msg => {
		//getNotifChat();
	});
});

function getNotifForum(){
    
    $.ajax({
      type: "GET",
      url: "/getnotifications/forum",
      data: null,
      dataType: 'JSON',
      success: function (res) {
        console.log(res);
        if(res == 0){
            $('#forum-badge').hide;
        }else{
            $('#forum-badge').show;
            $('#forum-badge').text(res); 
        }
      },

      error: function(error) {
        showHttpErrorAlert(error);
    }
  }); 
  
}

function getNotifEmailChat(){
    
    $.ajax({
      type: "GET",
      url: "/getnotifications/emailchat",
      data: null,
      dataType: 'JSON',
      success: function (res) {
        console.log(res);
        if(res == 0){
            
            $('#email-badge-insti').hide;
            $('#email-badge-teacher').hide;
            $('#email-badge-student').hide;
        }else{
            
            $('#email-badge-insti').show;
            $('#email-badge-teacher').show;
            $('#email-badge-student').show;
            
            $('#email-badge-insti').text(res);
            $('#email-badge-teacher').text(res);
            $('#email-badge-student').text(res);
        }
      },

      error: function(error) {
        showHttpErrorAlert(error);
    }
  }); 
  
}

// function getNotifChat(){
    
//     $.ajax({
//       type: "GET",
//       url: "/getnotifications/chat",
//       data: null,
//       dataType: 'JSON',
//       success: function (res) {
//         console.log(res);
//         $('#message-badge').text(res);
//       },

//       error: function(error) {
//         showHttpErrorAlert(error);
//     }
//   }); 
  
// }