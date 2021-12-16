$(document).ready(function() {



    removeClass();

    getNotifEmail();

    getNotifChat();

    type=$('#type').val();

    if(type == 'chat'){



        $('#chat-li').addClass( "active" );



    }else if(type == 'email'){



        $('#email-li').addClass( "active" );



    }else if(type == 'forum'){

        $('#forum-li').addClass( "active" );

    }



});



function removeClass(){



    $('#chat-li').removeClass('active');

    $('#email-li').removeClass('active');

    $('#forum-li').removeClass('active');

}



function getNotifEmail(){

    showLoader('Loading','Please wait....');

    $.ajax({

      type: "GET",

      url: "/getnotifications/email",

      data: null,

      dataType: 'JSON',

      success: function (res) {

        console.log(res);

        if(res == 0){



            $('#email-badge').hide;

        }else{



            $('#email-badge').show;

            $('#email-badge').text(res);

        }

        Swal.close();

      },



      error: function(error) {

        showHttpErrorAlert(error);

    }

  });



}



function getNotifChat(){

    showLoader('Loading','Please wait....');

    $.ajax({

      type: "GET",

      url: "/getnotifications/chat",

      data: null,

      dataType: 'JSON',

      success: function (res) {

        console.log(res);

        if(res == 0){

            $('#message-badge').hide;

        }else{



            $('#message-badge').show;

            $('#message-badge').text(res);

        }

        Swal.close();

      },



      error: function(error) {

        showHttpErrorAlert(error);

    }

  });



}
