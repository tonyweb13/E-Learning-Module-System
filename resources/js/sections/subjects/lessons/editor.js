$(document).ready(function() {

  $("#add-created-topic").submit(function(e) {
      e.preventDefault();
      var data = $(this).serializeArray();
      createTopicStore();
  });


});

function createTopicStore(){

  showLoader('Saving','Please wait....');
  //topic=$('#editor').html();
  topic=$('#editor').html();
  name=$('#name2').val();
  current_user=$('#current-user2').val();
  lesson_id=$('#lesson-id2').val();
  content_type=$('#content-type2').val();
  topic_id=$('#topic-id2').val();
  console.log(content_type);
  $.ajax({
      type:"post",
      url:"/sections/subjects/topic/store",
      data: {
          name: name, 
          topic:topic,
          current_user:current_user,
          lesson_id:lesson_id,
          content_type:content_type,
          topic_id:topic_id
      },
      dataType:"json",
      success:function(data) {
          if (data["status"] == "saved") {
             showSuccessAlert('Success', 'Topic was successfully added');
             $('#add-created-topic')[0].reset();
             location.reload();
          }else{
            showErrorAlert('Error', 'Topic was unsuccessfully added, please check your file format.');
          }  
      },
      error: function(error) {
        showHttpErrorAlert(error);
      }
  });

}