

$(document).ready(function() {



	gridView();

});



function listView(){

	$('#list-view').show();

	$('#grid-view').hide();

}



function gridView(){

	$('#grid-view').show();

	$('#list-view').hide();

}



function openTg(tgid){

    showLoader('Loading','Please wait....');

    $.ajax({

        type: "post",

        url: "/get/view/tg",

        data: {

            tgid:tgid

        },

        dataType: 'JSON',

        success: function (res) {

            console.log(res);

            console.log(res.file);

            $('#title-id').text('View Teachers Guide');

            document.getElementById("tb-frame").src = res.file;

            Swal.close();
            $("#view-modal").modal("show");

        },

        error: function(error) {

            showHttpErrorAlert(error);

        }

    });



}



function openCM(tgid){

    showLoader('Loading','Please wait....');

    $.ajax({

        type: "post",

        url: "/get/view/tg",

        data: {

            tgid:tgid

        },

        dataType: 'JSON',

        success: function (res) {

            console.log(res);

            console.log(res.file);

            $('#title-id').text('View Curiculum Maps');

            document.getElementById("tb-frame").src = res.file;

            Swal.close();
            $("#view-modal").modal("show");

        },

        error: function(error) {

            showHttpErrorAlert(error);

        }

    });



}



// function openPdfEbook(tgid){

//     $('#title-id').text('View Ebook');

//     $('#tb-frame').contents().find('#download').css("display","none");

//     document.getElementById("tb-frame").src = tgid;

//     $("#view-modal").modal("show");



// }



function openPdfEbook(tgid){

    $('#title-id').text('View Ebook');

    document.getElementById("tb-frame").src = tgid + "#toolbar=0";

    var base_path = $('#appurl2').val();

    // tmp=`https://docs.google.com/viewerng/viewer?url=${base_path}${tgid}&embedded=true`;

    //console.log(tmp);

    //document.getElementById("tb-frame").src = tmp;

    $("#view-modal").modal("show");

    showLoader('LOading','sshsh');



}



$('#tb-frame').load(function () {



    Swal.close();



});



function openEbook(id){

    showLoader('Loading','Please wait....');
    console.log(id);

    $.ajax({

        type: "post",

        url: "/get/view/ebook",

        data: {

            id:id

        },

        dataType: 'JSON',

        success: function (res) {

            console.log(res);

            $('#title-id').text(res.ebook_title);

            document.getElementById("ebook-reader-iframe").src = 'http://myedgetestsiteversion2.edupowerpublishing.com/bibi/?book=/bibi-bookshelf/' + res.file_name;

            Swal.close();
            $("#ebook-reader-modal").modal("show");

        },

        error: function(error) {

            showHttpErrorAlert(error);

        }

    });



}
