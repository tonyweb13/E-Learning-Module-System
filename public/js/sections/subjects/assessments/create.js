
$(document).ready(function() {

	//save button
	$("#add-subject-assessment").submit(function(e) {
    	e.preventDefault();
    	var data = $(this).serializeArray();
    // 	console.log($('#editor').val());
    // 	topic=$('#editor').html();
    // 	console.log(topic);
    	$('#htmleditor-value').val($('#instruction').val());
        submitForm();
  });

  $("#add-assessment-question").submit(function(e) {
      e.preventDefault();
      var data = $(this).serializeArray();
      submitQuestionForm();
  });
});


$('#select-all').change(function() {
    if(this.checked) {
        $('.student-id').prop('checked', true);
    }else{
        $('.student-id').prop('checked', false);
    }
});

function submitForm()
{
    showLoader('Saving','Please wait....')
    data = new FormData($('#add-subject-assessment')[0]);
    $.ajax({
      type:"post",
      url:"/sections/subjects/assessment/store",
      data: data,
      method:'POST',
      dataType:"json",
      contentType: false,
      cache: false,
      processData: false,
      success:function(data) {
        if (data["status"] == "saved") {
           showSuccessAlert('Success', 'Assessment was successfully added');
           $('#add-subject-assessment')[0].reset();
           location.reload();
        }else{
          showErrorAlert('Error', 'Assessment was unsuccessfully added, please check your file format.');
        }
      },
      error: function(error) {
          showHttpErrorAlert(error);
      }
    });
}

function submitQuestionForm(){

    $('#question').val($('#editor').html());
    var btns = document.querySelectorAll('input[type="radio"]');
    for(var i=0;i< btns.length;i++){
        if($(`#is-correct-${i}`).is(':checked')){

            $(`#is-corrects-${i}`).val(1);
        }else{
            $(`#is-corrects-${i}`).val(0);
        }
    }

    showLoader('Saving','Please wait....');
    data = new FormData($('#add-assessment-question')[0]);
    $.ajax({
      type:"post",
      url:"/sections/subjects/assessment/question/store",
      data: data,
      method:'POST',
      dataType:"json",
      contentType: false,
      cache: false,
      processData: false,
      success:function(data) {
        if (data["status"] == "saved") {

            showSuccessAlert('Success', 'Question was successfully added');
            $('#add-assessment-question')[0].reset();
            location.reload();

            }else{
                showErrorAlert('Error', 'Question was unsuccessfully added, please check your file format.');
            }
      },
      error: function(error) {
          showHttpErrorAlert(error);
      }
    });
}

function submitQuestionForm(){

    showLoader('Saving','Please wait....');
    arr=[];
    answer=[];
    answer_id=[];
    partner=[];

    var btns = document.querySelectorAll('input[type="radio"]');
    for(var i=0;i< btns.length;i++){
        if($(`#is-correct-${i}`).is(':checked')){
            arr.push(1);
        }else{
            arr.push(0);
        }
        answer.push($(`#answer-${i}`).val());
        answer_id.push($(`#answer-id-${i}`).val());
        partner.push($(`#partner-${i}`).val());
    }
    console.log(answer);
    console.log(answer_id);
    console.log(partner);

    question_type_id=$('#question-type-id').val();
    question_id=$('#question-id').val();
    console.log(question_id);
    tag=$('#tag').val();
    point=$('#point').val();
    question=$('#editor').html();
    is_correct=arr;
    current_user=$('#current-user').val();
    assessment_id=$('#assessment-id').val();

    $.ajax({
        type:"post",
        url:"/sections/subjects/assessment/question/store",
        data: {
            question_type_id: question_type_id,
            question_id:question_id,
            tag:tag,
            point:point,
            question:question,
            answer:answer,
            answer_id:answer_id,
            is_correct:is_correct,
            current_user:current_user,
            assessment_id:assessment_id,
            partner:partner
        },
        dataType:"json",
        success:function(data) {
            console.log(data);
            if (data["status"] == "saved") {

            showSuccessAlert('Success', 'Question was successfully added');
            $('#add-assessment-question')[0].reset();
            location.reload();


            }else{
                showErrorAlert('Error', 'Question was unsuccessfully added, please check your file format.');
            }
        },
        error: function(error) {
            showHttpErrorAlert(error);
        }
    });
}


//add question from question bank

function addQBQuestion(){

    questions = [];
    $.each($("input[name='student_id']:checked"), function(){
        questions.push($(this).val());
    });
    console.log(questions);
    //check if have selected student
    if(questions.length > 0){
        storeQuestion(questions);
    }else{
        showWarningAlert('ERROR','please select question!');
    }
}


function storeQuestion(questions){

    showLoader('Saving','Please wait....');
    assessment_id=$('#assessment-id').val();
    current_user=$('#current-user').val();

    $.ajax({
        type: "POST",
        url:"/sections/subjects/assessments/question-bank/store",
        data: {
               questions:questions,
               assessment_id:assessment_id,
               current_user:current_user
        },
        dataType: 'JSON',
        success: function (data) {
            if (data["status"] == "saved") {
               showSuccessAlert('Success', 'Question was successfully addedd');
               location.reload();
            }else{
              showErrorAlert('Error', 'Question was unsuccessfully added, please check your file format.');
            }
        },

        error: function(error) {
          showHttpErrorAlert(error);
      }
    });
}


function assignAssessmentStudent(){

    students = [];
    $.each($("input[name='student_id']:checked"), function(){
        students.push($(this).val());
    });
    console.log(students);
    //check if have selected student
    if(students.length > 0){
        storeAssignStudent(students);
    }else{
        showWarningAlert('ERROR','please select students!');
    }

}

function storeAssignStudent(students){

    showLoader('Saving','Please wait....');
    assessment_id=$('#assessment-id').val();
    current_user=$('#current-user').val();

    $.ajax({
        type: "POST",
        url:"/sections/subjects/assessment/assign/assessement/store",
        data: {
               students:students,
               assessment_id:assessment_id,
               current_user:current_user
        },
        dataType: 'JSON',
        success: function (data) {
            if (data["status"] == "saved") {
               showSuccessAlert('Success', 'Assessment was successfully assign to student');
               location.reload();
            }else{
              showErrorAlert('Error', 'Assessment was unsuccessfully assign to student, please check your file format.');
            }
        },

        error: function(error) {
          showHttpErrorAlert(error);
      }
    });
}

function assignAssessmentModularStudent(){

    students = [];
    $.each($("input[name='student_id']:checked"), function(){
        students.push($(this).val());
    });
    console.log(students);
    //check if have selected student
    if(students.length > 0){
        storeAssignModularStudent(students);
    }else{
        showWarningAlert('ERROR','please select students!');
    }

}

function storeAssignModularStudent(students){

    showLoader('Saving','Please wait....');
    assessment_id=$('#assessment-id').val();
    current_user=$('#current-user').val();

    $.ajax({
        type: "POST",
        url:"/sections/subjects/assessment/assign/assessement/modular/store",
        data: {
               students:students,
               assessment_id:assessment_id,
               current_user:current_user
        },
        dataType: 'JSON',
        success: function (data) {
            if (data["status"] == "saved") {
               showSuccessAlert('Success', 'Assessment was successfully assign to modular student');
               location.reload();
            }else{
              showErrorAlert('Error', 'Assessment was unsuccessfully assign to modular student, please check your file format.');
            }
        },

        error: function(error) {
          showHttpErrorAlert(error);
      }
    });
}


function unassignAssessmentStudent(){

    students = [];
    $.each($("input[name='student_id']:checked"), function(){
        students.push($(this).val());
    });
    console.log(students);
    //check if have selected student
    if(students.length > 0){
        storeUnssignStudent(students);
    }else{
        showWarningAlert('ERROR','please select students!');
    }

}

function storeUnssignStudent(students){

    showLoader('Saving','Please wait....');
    assessment_id=$('#assessment-id').val();
    current_user=$('#current-user').val();

    $.ajax({
        type: "POST",
        url:"/sections/subjects/assessment/unassign/assessement/store",
        data: {
               students:students,
               assessment_id:assessment_id,
               current_user:current_user
        },
        dataType: 'JSON',
        success: function (data) {
            if (data["status"] == "saved") {
               showSuccessAlert('Success', 'Assessment was successfully unassign to student');
               location.reload();
            }else{
              showErrorAlert('Error', 'Assessment was unsuccessfully unassign to student, please check your internet connection.');
            }
        },

        error: function(error) {
          showHttpErrorAlert(error);
      }
    });
}

function unassignAssessmentModularStudent(){

    students = [];
    $.each($("input[name='student_id']:checked"), function(){
        students.push($(this).val());
    });
    console.log(students);
    //check if have selected student
    if(students.length > 0){
        storeUnssignModularStudent(students);
    }else{
        showWarningAlert('ERROR','please select students!');
    }

}

function storeUnssignModularStudent(students){

    showLoader('Saving','Please wait....');
    assessment_id=$('#assessment-id').val();
    current_user=$('#current-user').val();

    $.ajax({
        type: "POST",
        url:"/sections/subjects/assessment/unassign/assessement/modular/store",
        data: {
               students:students,
               assessment_id:assessment_id,
               current_user:current_user
        },
        dataType: 'JSON',
        success: function (data) {
            if (data["status"] == "saved") {
               showSuccessAlert('Success', 'Assessment was successfully unassign to student');
               location.reload();
            }else{
              showErrorAlert('Error', 'Assessment was unsuccessfully unassign to student, please check your internet connection.');
            }
        },

        error: function(error) {
          showHttpErrorAlert(error);
      }
    });
}
