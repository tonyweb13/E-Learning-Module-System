let rowIndex=0;

let rowIndex2=0;



let rowIndex3=0;

let letter=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];



let tempp=0;



$(document).ready(function() {

    //get category

    getCategory();

    hideQuestionTypeTable();

    checkActiveLi();

});



function checkActiveLi(){

    $('.assessment-li').removeClass('active');

    id=$('#assessment').val();

    $(`#assessment-li-${id}`).addClass( "active" );

}





$( "#question-type-id" ).change(function() {



    qtype=$('#question-type-id').val();

    $('#point').val(null);

    $("#point").attr("readonly", false);

    if(qtype == 1){//t/f

        trueOrFalse();



    }else if(qtype == 2){//essay

        hideQuestionTypeTable();

    }else if(qtype == 3){//mc

        multipleChoice();

    }else if(qtype == 4){//iden

        identification();

    }else if(qtype == 5){//matching type

        $('#point').val(0);

        $("#point").attr("readonly", true);

        matchingType();

    }

});



function hideQuestionTypeTable(){

     $('#answer-table tr td').parents('tr').remove();

     $('#add-button').hide();

     $('#add-button2').hide();

}



function trueOrFalse(data){

    console.log(data);

    $('#answer-table tr td').parents('tr').remove();

    $('#add-button').hide();

    $('#add-button2').hide();



    if(data){

        for (var i = 0; i < data.length; i++){

            let cells = generateTableRow('answer-table', 'worksheet_row', 2);

            console.log(data[i]);

            cells[0].innerHTML  = `<input type="text" name="answer[]" id="answer-${i}" class="form-control geo-border-primary" required value="${data[i].answer}" readonly>`;

            cells[0].innerHTML  += `<input type="hidden" name="answer_id[]" id="answer-id-${i}" class="form-control geo-border-primary"  value="${data[i].id}"required  readonly>`;

            cells[1].innerHTML  = `<input class="correct" type="radio" id="is-correct-${i}" name="is_correct[]" value="1"> Correct?`;



            if(data[i].is_correct == 1){//correct

                $(`#is-correct-${i}`).prop("checked", true);

            }

        }

    }else{//create



        arranswer=['True','False'];

        for (var i = 0; i < 2; i++) {

            let cells = generateTableRow('answer-table', 'worksheet_row', 2);

            cells[0].innerHTML  = `<input type="text" name="answer[]" id="answer-${i}" class="form-control geo-border-primary" required value="${arranswer[i]}" readonly>`;

            cells[0].innerHTML  += `<input type="hidden" name="answer_id[]" id="answer-id-${i}" class="form-control geo-border-primary"   readonly>`;

            cells[1].innerHTML  = `<input class="correct" type="radio" id="is-correct-${i}" name="is_correct[]" value="1"> Correct?`;

            cells[1].innerHTML  = `<input class="correct" type="radio" id="is-correct-${i}" name="is_correct[]" value="1"> Correct?`;



        }

    }

}



function multipleChoice(){

    $('#answer-table tr td').parents('tr').remove();

    $('#add-button').hide();

    $('#add-button2').show();



    //alert(1);

    // letter=['a','b','c','d'];

    // for (var i = 0; i < 4; i++) {

    //     let cells = generateTableRow('answer-table', 'worksheet_row', 2);

    //     cells[0].innerHTML  = `<input type="text" name="answer[]" id="answer-${i}" class="form-control geo-border-primary" required placeholder="Input answer for ${letter[i]}">`;

    //     cells[1].innerHTML  = `<input class="correct" type="radio" id="is-correct-${i}" name="is_correct[]" value="1"> Correct?`;



    // }

}



function identification(data){

    $('#answer-table tr td').parents('tr').remove();

    $('#add-button').hide();

    $('#add-button2').hide();



    if(data){



        let cells = generateTableRow('answer-table', 'worksheet_row', 2);

        cells[0].innerHTML  = `<input type="text" name="answer[]" id="answer-0" class="form-control geo-border-primary" required  value="${data[0].answer}" placeholder="Input answer here">`;

        cells[0].innerHTML  += `<input type="hidden" name="answer_id[]" id="answer-id-0" class="form-control geo-border-primary"  value="${data[0].id}" required  readonly>`;

        cells[1].innerHTML  = `<input class="correct" type="radio" checked id="is-correct-0" name="is_correct[]" value="1">`;



        $('#is-correct-0').hide();

    }else{//create

        let cells = generateTableRow('answer-table', 'worksheet_row', 2);

        cells[0].innerHTML  = `<input type="text" name="answer[]" id="answer-0" class="form-control geo-border-primary" required placeholder="Input answer here">`;

        cells[0].innerHTML  += `<input type="hidden" name="answer_id[]" id="answer-id-0" class="form-control geo-border-primary"  readonly>`;

        cells[1].innerHTML  = `<input class="correct" type="radio" checked id="is-correct-0" name="is_correct[]" value="1">`;



        $('#is-correct-0').hide();

    }



}



function matchingType(){

    $('#answer-table tr td').parents('tr').remove();

    $('#add-button').show();

    $('#add-button2').hide();

}



function addRow(data){



    if(data){

        let cells = generateTableRow('answer-table', 'worksheet_row', 3);

        cells[0].innerHTML  = `<input type="checkbox" class="worksheet-row-index"/>`;

        cells[1].innerHTML  = `<input type="text" name="answer[]" id="answer-${rowIndex}" class="form-control geo-border-primary" required value="${data.answer}" placeholder="Input Column A here">`;

        cells[0].innerHTML  += `<input type="hidden" name="answer_id[]" id="answer-id-${rowIndex}" class="form-control geo-border-primary"  value="${data.id}"required  readonly>`;

        cells[2].innerHTML  = `<input type="text" name="partner[]" id="partner-${rowIndex}" class="form-control geo-border-primary" required value="${data.partner}" placeholder="Input Column B here">`;

        cells[2].innerHTML  += `<input class="correct" type="radio"  id="is-correct-${rowIndex}" name="is_correct[]" value="1">`;







    }else{

        let cells = generateTableRow('answer-table', 'worksheet_row', 3);

        cells[0].innerHTML  = `<input type="checkbox" class="worksheet-row-index"/>`;

        cells[1].innerHTML  = `<input type="text" name="answer[]" id="answer-${rowIndex}" class="form-control geo-border-primary" required placeholder="Input Column A here">`;

        cells[0].innerHTML  += `<input type="hidden" name="answer_id[]" id="answer-id-${rowIndex}" class="form-control geo-border-primary"   readonly>`;



        cells[2].innerHTML  = `<input type="text" name="partner[]" id="partner-${rowIndex}" class="form-control geo-border-primary" required placeholder="Input Column B here">`;

        cells[2].innerHTML  += `<input class="correct" type="radio"  id="is-correct-${rowIndex}" name="is_correct[]" value="1">`;



    }

    $(`#is-correct-${rowIndex}`).hide();

    rowIndex ++;

    tempp=$("#answer-table tr").length;

    $('#point').val(tempp);



}



function removeRow()

{

    $('.worksheet-row-index:checkbox:checked').parents('tr.worksheet_row').remove();

    tempp=$("#answer-table tr").length;

    $('#point').val(tempp);

}





//nultiple choice

function addRow2(data){

    //get multi-option

    multioption=$('#multi-option').val();



    if(rowIndex3 < 27){

        if(data){



            let cells = generateTableRow('answer-table', 'worksheet_row', 3);

            cells[0].innerHTML  = `<input type="checkbox" class="worksheet-row-index"/>`;

            tetemp = data.answer;

            if(tetemp.startsWith('https://')){



                cells[1].innerHTML = `

                                        <img id="preview-${rowIndex3}" src="${data.answer}" onerror="this.src='/images/no_image.png'" alt="your image" width="200" height="200"/>

                                        <br>

                                        <input type="file"  name="answer_image[]" id="answer-image-${rowIndex3}"  onchange="readURL(this,${rowIndex3});" autocomplete="off"   required readonly>

                                        <input type="text"  name="answer[]" id="answer-${rowIndex3}"  autocomplete="off" required readonly value="${data.answer}">

                                        `;

            }else{



                cells[1].innerHTML  = `<input type="text" name="answer[]" id="answer-${rowIndex3}" class="form-control geo-border-primary" value="${data.answer}" required placeholder="Input answer for ${letter[rowIndex3]}">`;





            }



            cells[1].innerHTML  += `<input type="hidden" name="answer_id[]" id="answer-id-${i}" class="form-control geo-border-primary"  value="${data.id}" required  readonly>`;

            cells[2].innerHTML  = `<input class="correct" type="radio" id="is-correct-${rowIndex3}" name="is_correct[]" value="1"> Correct?`;



            if(data.is_correct == 1){//correct

                $(`#is-correct-${rowIndex3}`).prop("checked", true);

            }



        }else{//create

            let cells = generateTableRow('answer-table', 'worksheet_row', 3);

            cells[0].innerHTML  = `<input type="checkbox" class="worksheet-row-index"/>`;



            if(multioption == 'imageoption'){//image

                cells[1].innerHTML = `

                                        <img id="preview-${rowIndex3}" src="#" onerror="this.src='/images/no_image.png'" alt="your image" width="200" height="200"/>

                                        <br>

                                        <input type="file"  name="answer_image[]" id="answer-image-${rowIndex3}"  onchange="readURL(this,${rowIndex3});" autocomplete="off"   required readonly>

                                        <input type="text"  name="answer[]" id="answer-${rowIndex3}"  autocomplete="off" required readonly>

                                        `;

            }else{

                cells[1].innerHTML  = `<input type="text" name="answer[]" id="answer-${rowIndex3}" class="form-control geo-border-primary" required placeholder="Input answer for ${letter[rowIndex3]}">

                                      `;

            }

            cells[1].innerHTML  += `<input type="hidden" name="answer_id[]" id="answer-id-${rowIndex3}" class="form-control geo-border-primary"   readonly>`;

            cells[2].innerHTML  = `<input class="correct" type="radio" id="is-correct-${rowIndex3}" name="is_correct[]" value="1"> Correct?`;

        }

        rowIndex3 ++;



    }else{

        showWarningAlert('Warning','Too many options!');

    }



}



function removeRow2()

{

    $('.worksheet-row-index:checkbox:checked').parents('tr.worksheet_row').remove();

}



function readURL(input,i) {

    if (input.files && input.files[0]) {

        var reader = new FileReader();



        reader.onload = function (e) {



            //$(`#preview-${i}`).attr('src', e.target.result);

            //$(`#answeroptype-${i}`).val('changeimage');



            showLoader('Uploading!','Please wait...');

            var file_data = $(`#answer-image-${i}`).prop('files')[0];

            var form_data = new FormData();

            form_data.append('imageFile', file_data);



            $.ajax({



                        type:"post",

                        url:"/upload/image",

                        data:form_data,

                        method:'POST',

                        dataType:"json",

                        contentType: false,

                        cache: false,

                        processData: false,

                        success:function(data) {

                        console.log(data);

                        if(data == 'error'){//error



                            showErrorAlert('Error','Please check your internet connection');



                        }else{//success

                            $(`#preview-${i}`).attr('src',data);

                            $(`#answer-${i}`).val(data);

                            //$(`#answeroptype-${i}`).val('changeimage');



                        }

                        Swal.close();



                        },

                        error: function(error) {

                            showHttpErrorAlert(error);

                        }

            });



        };



        //ext=this.files[0].type;

        console.log(input.files);

        ext=input.files[0].type;

        if(ext.includes("image")){

            reader.readAsDataURL(input.files[0]);

        }else{

            $(`#answer-${i}`).val('');

            showWarningAlert('Warning','Please select image');

        }



        //reader.readAsDataURL(input.files[0]);

    }

}



function addAssessment(assessment_id){

    showLoader('Loading','Please wait....');

    //hide 4 buttons not work

    $('.hide-1').hide();



    console.log(assessment_id);

    $.ajax({

        type: "post",

        url: "/sections/subjects/assessment/get-assessement",

        data: {

            assessment_id:assessment_id,

        },

        dataType: 'JSON',

        success: function (res) {

            console.log(res);

            $('#id').val(res.id);

            $('#title').val(res.name);

            $('#topic').val(res.topic);

            $('#mode').val(res.mode);

            $('#instruction').val(res.instruction);

            $('#editor').html(res.instruction);

            $('#scale-id').val(res.section_subject_scale_id);

            $('#start-date').val(res.start_date);

            $('#end-date').val(res.end_date);

            // for(i=0; i < res.section_assessment_scale.length; i++){

            //     addRowScale(res.section_assessment_scale[i]);

            // }

            Swal.close();
        },

        error: function(error) {

            showHttpErrorAlert(error);

        }

    });

	$("#create-assessment-modal").modal("show");

}



function deleteAssessment(id){

    showLoader('Loading','Please wait....');

    section=$('#section').val();

    subject=$('#subject').val();



    if (confirm("Are you sure you want to delete!")) {

        //get canada province

        $.ajax({

            type: "post",

            url: "/sections/subjects/assessment/delete",

            data: {

                id:id

            },

            dataType: 'JSON',

            success: function (res) {

                if (res["status"] == "saved") {

                showSuccessAlert('Success', 'Assessment successfully delete');

                window.location = `/sections/subjects/assessments/${section}/${subject}/null`;

              }

              Swal.close();
            },

            error: function(error) {

                showHttpErrorAlert(error);

            }

        });

    }

}



function uploadAssessmentStatus(id){

    showLoader('Loading','Please wait....');

  		$.ajax({

  		    type: "post",

  		    url: "/sections/subjects/assessment/status",

  		    data: {

  		    	id:id,

  		    	status:1,

  		    },

  		    dataType: 'JSON',

  		    success: function (res) {

  		        if (res["status"] == "saved") {

                showSuccessAlert('Success', 'Assessment successfully uploaded, Enrolled and Assign Student in this assessment & The Institutional Admin can now see this assessment');

                location.reload();

              }
              Swal.close();
  		    },

    	    error: function(error) {

    	        showHttpErrorAlert(error);

    	    }

  		});

}



function hideAssessment(id){



  		$.ajax({

  		    type: "post",

  		    url: "/sections/subjects/assessment/status",

  		    data: {

  		    	id:id,

  		    	status:0,

  		    },

  		    dataType: 'JSON',

  		    success: function (res) {

  		        if (res["status"] == "saved") {

                showSuccessAlert('Success', 'Assessment successfully unpublished, You and shared teacher can only see this assessment');

                location.reload();

              }

  		    },

    	    error: function(error) {

    	        showHttpErrorAlert(error);

    	    }

  		});

}



function getCategory(){



    subject_id = $('#subject-id').val();

    console.log(subject_id);

    $.ajax({

        type: "post",

        url: "/get-sectiongradescale",

        data: {

            subject_id:subject_id,

        },

        dataType: 'JSON',

        success: function (res) {

            console.log(res);

            for (var i = 0; i < res.length; i++) {

                $('#scale-id').append(`<option value="${res[i].id}">${res[i].label}</option>`)

            }



        },

        error: function(error) {

            showHttpErrorAlert(error);

        }

    });

}



//add question

function addQuestion(){

    $("#question-modal").modal("show");

}



//upload question

function uploadQuestion(){



    addedby=$('#current-user').val();

    $.ajax({

        type: "post",

        url: "/get/questionbank",

        data: {

            addedby:addedby,

        },

        dataType: 'JSON',

        success: function (res) {

            console.log(res);

            for(i=0; i < res.data.length; i++){

                qbTableAppend(res.data[i]);

            }

        },

        error: function(error) {

            showHttpErrorAlert(error);

        }

    });

    $("#question-bank-modal").modal("show");

}



function qbTableAppend(data){

    rowIndex2 ++;

    let cells = generateTableRow('question-qb-table', 'worksheet_row', 6);

    cells[0].innerHTML  = `<input type="checkbox" class="worksheet-row-index"/>`;

    cells[1].innerHTML  = `${rowIndex2 + 1}`;



    cells[2].innerHTML  = `<input type="text"  class="form-control input-sm" value="${data.question_type.name}" autocomplete="off" required/>`;

    cells[3].innerHTML  = `<input type="text"  class="form-control input-sm" value="${data.question}" autocomplete="off" required/>`;

    cells[2].innerHTML  = `<input type="text"  class="form-control input-sm" value="${data.point}" autocomplete="off" required/>`;



}



function deleteQuestion(id){



    if (confirm("Are you sure you want to remove this question!")) {

        //get canada province

        $.ajax({

            type: "post",

            url: "/sections/subjects/assessment/question/delete",

            data: {

                id:id

            },

            dataType: 'JSON',

            success: function (res) {

                if (res["status"] == "saved") {

                showSuccessAlert('Success', 'Question successfully delete');

                location.reload();

              }

            },

            error: function(error) {

                showHttpErrorAlert(error);

            }

        });

    }

}



function editQuestion(id){

    //get question

    console.log(id);

    $.ajax({

            type: "post",

            url: "/sections/subjects/assessment/question/get/question",

            data: {

                id:id

            },

            dataType: 'JSON',

            success: function (res) {

                console.log(res);

                $('#question-type-id').val(res.question_type_id);

                $('#question-id').val(res.id);

                $('#tag').val(res.tag);

                $('#point').val(res.point);

                $('#editor').html(res.question);

                if(res.question_type.name == 'True or False'){

                    trueOrFalse(res.answer);

                }else if(res.question_type.name == 'Essay'){

                    hideQuestionTypeTable();

                }else if(res.question_type.name == 'Multiple Choice'){

                    multipleChoice();

                    for(i=0; i < res.answer.length; i++){

                        addRow2(res.answer[i]);

                    }

                }else if(res.question_type.name == 'Identification'){

                    identification(res.answer);



                }else if(res.question_type.name == 'Matching Type'){

                    matchingType();

                    for(i=0; i < res.answer.length; i++){

                        addRow(res.answer[i]);

                    }



                }

                $("#question-modal").modal("show");

            },

            error: function(error) {

                showHttpErrorAlert(error);

            }

    });

}





function createAssessmentModalDismiss(){

     $("#create-assessment-modal").modal("hide");

     location.reload();

}



function createQuestionModalDismiss(){

     $("#question-modal").modal("hide");

     location.reload();

}







// /* Assessment EDITOR*/

// function assessmenteditor(){

//   	$('#editControls2 a').click(function(e) {

//         e.preventDefault();

//         switch($(this).data('role')) {

//             case 'h1':

//             case 'h2':

//             case 'h3':

//             case 'h4':

//             case 'h5':

//             case 'h6':

//             case 'p':

//                 document.execCommand('formatBlock', false, $(this).data('role'));

//                 break;

//             default:

//                 document.execCommand($(this).data('role'), false, null);

//                 break;

//         }

//     });



//     $("#editor2").keyup(function() {

//         var value = $(this).html();

//     }).keyup();



//     $("#editor2").keydown(function(e) {

//         if(e.keyCode === 9) { // tab was pressed

//             // get caret position/selection

//             var start = this.selectionStart;

//                 end = this.selectionEnd;



//             var $this = $(this);



//             // set textarea value to: text before caret + tab + text after caret

//             $this.val($this.val().substring(0, start)

//                         + "\t"

//                         + $this.val().substring(end));



//             // put caret at right position again

//             document.execCommand('insertText', false /*no UI*/, '          ');

//             this.selectionStart = this.selectionEnd = start + 1;

//             // prevent the focus lose

//             return false;

//         }

//     });

// }



// function editorPaste2(){



// 	showInfoAlert('Unsupported operation',`Your browser doesn't support direct access to the clipboard.Please use the Ctrl/Cmd + X/C/V keyboard shortcuts instead.`);



// }



// function fontEditor2(type,fontName) {

//     document.execCommand(type, false, fontName);

// }



// //image

// $('#editor_select_imga2').click(function() {

//     imageIndex++;

//     $('#editor2').append(`<img src="'/images/no_image.png'" onerror="this.src='/images/no_image.png'"

//                         width="30%" height="300px;" class="geo-border-primary border mt-2" id="image-${imageIndex}">`);

//     $('#editor_image_selecta2').click();

// });



// $('#editor_image_selecta2').change(function() {



//     if (this.files && this.files[0]) {

//         var reader = new FileReader();



//         reader.onload = function(e) {

//             //upload image

//             showLoader('Uploading!','Please wait...');

//             var file_data = $('#editor_image_selecta2').prop('files')[0];

//             var form_data = new FormData();

//             form_data.append('imageFile', file_data);



//             $.ajax({



//                         type:"post",

//                         url:"/upload/image",

//                         data:form_data,

//                         method:'POST',

//                         dataType:"json",

//                         contentType: false,

//                         cache: false,

//                         processData: false,

//                         success:function(data) {

//                         console.log(data);

//                         if(data == 'error'){//error

//                             $(`#image-${imageIndex}`).remove();

//                             showErrorAlert('Error','Please check your internet connection');



//                         }else{//success

//                             $(`#image-${imageIndex}`).attr('src',data);

//                         }

//                         Swal.close();



//                         },

//                         error: function(error) {

//                             showHttpErrorAlert(error);

//                         }

//             });

//         }

//         // check if file is png

//         ext=this.files[0].type;

//         if(ext.includes("image")){

//             reader.readAsDataURL(this.files[0]);

//         }else{

//             $(`#image-${imageIndex}`).remove();

//             showWarningAlert('Warning','Please select image');

//         }

//     }

// });



// // video/music

// $('#editor_select_img2a2').click(function() {

//     imageIndex++;

//     $('#editor2').append(`<iframe src="https://www.w3schools.com" id="vidoe-${imageIndex}" style="width: 30%; height: 300px;"

//                             class="geo-border-primary border mt-2" controlsList="nodownload"></iframe>`);

//     $('#editor_image_select2a2').click();

// });



// $('#editor_image_select2a2').change(function() {



//     if (this.files && this.files[0]) {

//         var reader = new FileReader();



//         reader.onload = function(e) {

//             //upload image

//             showLoader('Uploading!','Please wait...');

//             var file_data2 = $('#editor_image_select2a2').prop('files')[0];

//             var form_data2 = new FormData();

//             form_data2.append('videoFile', file_data2);



//             $.ajax({



//                     type:"post",

//                     url:"/upload/video",

//                     data:form_data2,

//                     method:'POST',

//                     dataType:"json",

//                     contentType: false,

//                     cache: false,

//                     processData: false,

//                     success:function(data) {

//                     console.log(data);

//                     if(data == 'error'){//error

//                         $(`#vidoe-${imageIndex}`).remove();

//                         showErrorAlert('Error','Please check your internet connection');



//                     }else{//success

//                         $(`#vidoe-${imageIndex}`).attr('src',data);

//                     }

//                     Swal.close();



//                     },

//                     error: function(error) {

//                         showHttpErrorAlert(error);

//                     }

//                 });

//         }

//         // check if file is png

//         ext=this.files[0].type;

//         console.log(ext);

//         if(ext.includes("video") || ext.includes("audio")){

//             reader.readAsDataURL(this.files[0]);

//         }else{

//             $(`#vidoe-${imageIndex}`).remove();

//             showWarningAlert('Warning','Please select image');

//         }

//     }

// });



// function attachedLink2(){



//     $("#assessment-link-modal").modal("show");



// }



// function dismissLinkModal2(){

//     $("#assessment-link-modal").modal("hide");

// }



// function appendLink2(){



//     link=$('#link-url2').val();

//     displaytext=$('#link-display-text2').val();



//     $('#editor2').append(`<a id="link-${imageIndex}" href="${link}">${displaytext}</a>`);

//     $("#assessment-link-modal").modal("hide");

//     $('#link-url2').val('');

//     $('#link-display-text2').val('');



// }
