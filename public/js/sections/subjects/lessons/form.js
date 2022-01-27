



$(document).ready(function() {

    checkActiveLi();

});



function createModalDismiss(){

     $("#create-modal").modal("hide");

     location.reload();

}

// $('#create-modal').on('hidden.bs.modal', function () {

//     location.reload();

// });



function checkActiveLi(){

    $('.subject-li').removeClass('active');

    id=$('#lesson').val();

    $(`#subject-li-${id}`).addClass( "active" );

}



function addLesson(lesson_id){

    showLoader('Loading','Please wait....');

    $.ajax({

        type: "post",

        url: "/sections/subjects/get-lesson",

        data: {

            lesson_id:lesson_id,

        },

        dataType: 'JSON',

        success: function (res) {

            console.log(res);

            $('#lesson-id').val(lesson_id);

            $('#lesson').val(res.name);

            Swal.close();

        },

        error: function(error) {

            showHttpErrorAlert(error);

        }

    });

    $("#lesson-modal").modal("show");

}



function deleteLesson(id){

    showLoader('Loading','Please wait....');

    section=$('#section').val();

    subject=$('#subject').val();

    if (confirm("Are you sure you want to delete!")) {

        //get canada province

        $.ajax({

            type: "post",

            url: "/sections/subjects/lessons/delete",

            data: {

                id:id

            },

            dataType: 'JSON',

            success: function (res) {

                if (res["status"] == "saved") {

                showSuccessAlert('Success', 'Lesson successfully delete');

                window.location = `/sections/subjects/lessons/view/${section}/${subject}/null`;

                Swal.close();

              }

            },

            error: function(error) {

                showHttpErrorAlert(error);

            }

        });

    }

}





function uploadLesson(id){

    showLoader('Loading','Please wait....');

    $.ajax({

            type: "post",

            url: "/sections/subjects/lessons/status",

            data: {

                id:id,

                status:1,

            },

            dataType: 'JSON',

            success: function (res) {

                if (res["status"] == "saved") {

                showSuccessAlert('Success', 'Lesson successfully uploaded/published,Enrolled Student and Institutional Admin can now see this lesson');

                Swal.close();

                location.reload();

              }

            },

            error: function(error) {

                showHttpErrorAlert(error);

            }

    });

}



function hideLesson(id){

    showLoader('Loading','Please wait....');

    $.ajax({

            type: "post",

            url: "/sections/subjects/lessons/status",

            data: {

                id:id,

                status:0,

            },

            dataType: 'JSON',

            success: function (res) {

                if (res["status"] == "saved") {

                showSuccessAlert('Success', 'Lesson successfully unpublished,You and shared teacher can only see this lesson');

                Swal.close();
                location.reload();

              }

            },

            error: function(error) {

                showHttpErrorAlert(error);

            }

    });

}



function uploadTopicStatus(id){

    showLoader('Loading','Please wait....');

    $.ajax({

            type: "post",

            url: "/sections/subjects/lessons/topic/status",

            data: {

                id:id,

                status:1,

            },

            dataType: 'JSON',

            success: function (res) {

                if (res["status"] == "saved") {

                showSuccessAlert('Success', 'Topic successfully uploded/published,Enrolled Student and Institutional Admin can now see this topic');

                Swal.close();
                location.reload();

              }

            },

            error: function(error) {

                showHttpErrorAlert(error);

            }

    });

}



function hideTopic(id){

    showLoader('Loading','Please wait....');

    $.ajax({

            type: "post",

            url: "/sections/subjects/lessons/topic/status",

            data: {

                id:id,

                status:0,

            },

            dataType: 'JSON',

            success: function (res) {

                if (res["status"] == "saved") {

                showSuccessAlert('Success', 'Topic successfully unpublished,You and shared teacher can only see this topic');

                Swal.close();
                location.reload();

              }

            },

            error: function(error) {

                showHttpErrorAlert(error);

            }

    });

}

function uploadSizeValidation () {
    const fi = document.getElementById('topic');
    // Check if any file is selected.
    if (fi.files.length > 0) {
        for (const i = 0; i <= fi.files.length - 1; i++) {

            const fsize = fi.files.item(i).size;
            const file = Math.round((fsize / 1024));
            // The size of the file.
            if (file >= 25600) {
                Swal.fire({
                    icon: 'error',
                    title: 'File is too Big!!!',
                    text: 'Please select a file less than 25MB'
                });
                $('#topic').val('');
            }
        }
    }
}

function uploadTopic(topic_id){

    showLoader('Loading','Please wait....');

    $.ajax({

        type: "post",

        url: "/sections/subjects/lessons/topic/view",

        data: {

            topic_id:topic_id,

        },

        dataType: 'JSON',

        success: function (res) {

            console.log(res);

            $('#topic-id').val(topic_id);

            $('#name').val(res.name);

            $("#upload-modal").modal("show");

            Swal.close();

        },

        error: function(error) {

            showHttpErrorAlert(error);
        }

    });
}



function createTopic(topic_id){



    $.ajax({

        type: "post",

        url: "/sections/subjects/lessons/topic/view",

        data: {

            topic_id:topic_id,

        },

        dataType: 'JSON',

        success: function (res) {

            console.log(res);

            $('#topic-id2').val(topic_id);

            $('#name2').val(res.name);

            $('#editor').html(res.content);

        },

        error: function(error) {

            showHttpErrorAlert(error);

        }

    });

	$("#create-modal").modal("show");

}



function viewTopic(topic_id){

    showLoader('Loading','Please wait....');
	console.log(topic_id);

	//get topic

	$.ajax({

        type: "post",

        url: "/sections/subjects/lessons/topic/view",

        data: {

        	topic_id:topic_id,

        },

        dataType: 'JSON',

        success: function (res) {

            console.log(res);

            if(res.content_type == 'doc'){

                $('#span1').text(res.name);



                if(res.extension){



                    extension = res.extension.toLowerCase();

                    if(extension == 'pdf' || extension == 'mp3' || extension == 'mp4'){



                        document.getElementById("topic-frame").src = res.content;

                        $('#topic-image').hide();



                    }else if(extension == 'jpg' || extension == 'jpeg' || extension == 'png' || extension == 'gif'){



                        document.getElementById("topic-image").src = res.content;

                        $('#topic-frame').hide();

                    }else if(extension == 'doc' || extension == 'docx' || extension == 'docm'){



                        gid=res.content.match(/[-\w]{25,}/);

                        console.log(gid[0]);

                        temp =`https://docs.google.com/document/d/${gid}/edit`;

                        document.getElementById("topic-frame").src = temp;

                        $('#topic-image').hide();



                    }else if(extension == 'ppt' || extension == 'pptx' ){



                        gid=res.content.match(/[-\w]{25,}/);

                        console.log(gid[0]);

                        temp =`https://docs.google.com/presentation/d/${gid}/edit`;

                        document.getElementById("topic-frame").src = temp;

                        $('#topic-image').hide();



                    }else if(extension == 'xlsx' || extension == 'xlsm' || extension == 'xlsb' || extension == 'xltx' || extension == 'xltm' || extension == 'xls' || extension == 'xlt' || extension == 'xml'  || extension == 'xlam' || extension == 'xla'|| extension == 'xlw'|| extension == 'xlr'){



                        gid=res.content.match(/[-\w]{25,}/);

                        console.log(gid[0]);

                        temp =`https://docs.google.com/spreadsheets/d/${gid}/edit`;

                        document.getElementById("topic-frame").src = temp;

                        $('#topic-image').hide();



                    }else{



                        var base_path = $('#appurl').val();

                        tmp=`https://docs.google.com/gview?url=${base_path}${res.content}&embedded=true`

                        document.getElementById("topic-frame").src = tmp;

                        $('#topic-image').hide();

                    }



                }else{



                    extension=res.content.substring(res.content.lastIndexOf("."));

                    extension = extension.replace('.','');

                    extension = extension.toLowerCase();



                    if(extension == 'pdf' || extension == 'mp3' || extension == 'mp4'){



                        document.getElementById("topic-frame").src = res.content;

                        $('#topic-image').hide();



                    }else if(extension == 'jpg' || extension == 'jpeg' || extension == 'png' || extension == 'gif'){



                        document.getElementById("topic-image").src = res.content;

                        $('#topic-frame').hide();

                    }else{

                        var base_path = $('#appurl').val();

                        tmp=`https://docs.google.com/gview?url=${base_path}${res.content}&embedded=true`

                        document.getElementById("topic-frame").src = tmp;

                        $('#topic-image').hide();

                    }



                }








                $("#view-modal").modal("show");

            }else{

                $('#span2').text(res.name);

                $('#container').html(res.content);

                $("#view2-modal").modal("show");

            }

            Swal.close();

        },

        error: function(error) {

            showHttpErrorAlert(error);

        }

    });

}



function deleteData(id){

    if (confirm("Are you sure you want to delete!")) {

        showLoader('Loading','Please wait....');

        //get canada province

        $.ajax({

            type: "post",

            url: "/sections/subjects/lessons/topic/delete",

            data: {

                id:id

            },

            dataType: 'JSON',

            success: function (res) {

                if (res["status"] == "saved") {

                showSuccessAlert('Success', 'Topic successfully delete');

                Swal.close();
                location.reload();

              }

            },

            error: function(error) {

                showHttpErrorAlert(error);

            }

        });

    }

}
