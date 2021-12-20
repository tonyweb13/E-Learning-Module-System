$(document).ready(function() {



});



function editAssessmentScore()

{

    showLoader('Saving','Please wait....');

    data = new FormData($('#edit-assessment-score')[0]);

    $.ajax({

      type:"post",

      url:"/sections/subjects/report/edit-grade/store",

      data: data,

      method:'POST',

      dataType:"json",

      contentType: false,

      cache: false,

      processData: false,

      success:function(data) {

        if (data["status"] == "saved") {

           showSuccessAlert('Success', 'Assessment was successfully edited');

           location.reload();

        }else{

          showErrorAlert('Error', 'Assessment was unsuccessfully edited, please check your internet connection.');

        }

      },

      error: function(error) {

          showHttpErrorAlert(error);

      }

    });

}



function editScore(data){

    showLoader('Loading','Please wait....');

    id = $(data).attr('value');

    uid = $(data).attr('uid');

    $('#score-edit-modal').modal({backdrop: 'static', keyboard: false});

    $("#score-edit-modal").modal("show");

    //get submitted report assessment

    $.ajax({

        type: "post",

        url: "/sections/subjects/report/get-submitted-report",

        data: {

            id:id,

            uid:uid

        },

        dataType: 'JSON',

        success: function (res) {

            console.log(res);

            for(i=0; i < res.length; i++){

                appendRow(res[i],i);

            }

            swal.close();

        },

        error: function(error) {

            showHttpErrorAlert(error);

        }

    });

}



function appendRow(data,i){

    //temp = data.question.question.innerHTML ;

    let cells = generateTableRow('table-submiited-report', 'worksheet_row', 3);

    cells[0].innerHTML  = `${data.question.question}`;

    cells[1].innerHTML  = `<input type="number" id="apoints" name="apoints[]" class="form-control input-sm" value="${data.apoint}" autocomplete="off"  required/>`;

    cells[2].innerHTML  = `<input type="text" id="points" name="points[]" class="form-control input-sm" value="${data.point}" autocomplete="off" readonly required/>`;

    cells[2].innerHTML  += `<input type="hidden" id="ar-id" name="ar_id[]" class="form-control input-sm" value="${data.id}" autocomplete="off"  required/>`;

}





function reportClose(){



    $("#score-edit-modal").modal("hide");

    $("#table-submiited-report").empty();

    $('#table-submiited-report').append(`

                                            <tr>

                                                <th>Question</th>

                                                <th width="15%">Score</th>

                                                <th width="15%">Total Item Score</th>

                                            </tr>`

                                        );

}
