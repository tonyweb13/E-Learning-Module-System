let rowIndex=0;
let gradeScales;
let questionTypes;
$(document).ready(function() {
	
    //get category
    getCategory();
    //depracate
    getQuestionType();

});

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
            gradeScales=res;
            let scales = jQuery.grep(gradeScales, function(element, i) {
                return element.id;
            });

            if (scales != null) {
                initAutocomplete('#category', '#category-id', scales,0, function(i, ui){
                });
            }else{
                showErrorAlert('Error','please try again later');
            }

        },
        error: function(error) {
            showHttpErrorAlert(error);
        }
    });
}

function getQuestionType(){

    $.ajax({
        type: "get",
        url: "/get-question-type",
        data: null,
        dataType: 'JSON',
        success: function (res) {
            questionTypes=res;
        },
        error: function(error) {
            showHttpErrorAlert(error);
        }
    });
}


// depracated
function addRow(){

    rowIndex ++;
    let question_type=  combine('question_type', rowIndex);
    let question_type_id= combine('question_type_id', rowIndex);

    let cells = generateTableRow('table-question-scale', 'worksheet_row', 7);

    cells[0].innerHTML  = `<input type="checkbox" class="worksheet-row-index"/>`;
    cells[1].innerHTML  = `
                            <input type="text" name="question_type[]" id="${question_type}" class="form-control geo-border-primary" required  placeholder="Select Question Type">
                            <input type="text" name="question_type_id[]" id="${question_type_id}" class="form-control geo-border-primary" required>
                          `; 
    cells[2].innerHTML  = `<input type="text" id="tags" name="tags[]" class="form-control input-sm" placeholder="Create Tags" autocomplete="off" required/>`; 

    cells[3].innerHTML  = `<input type="text" id="questions" name="questions[]" class="form-control input-sm" placeholder="Question here" autocomplete="off" required/>`; 

    //cells[4].innerHTML  = `<input type="text" id="answer-choices" name="answer_choices[]" class="form-control input-sm" placeholder="Answer choices here" autocomplete="off" required readonly/>`; 

   // cells[5].innerHTML  = `<input type="text" id="answer" name="answer[]" class="form-control input-sm" placeholder="Correcr answer here" autocomplete="off" required/>`; 


    let questions = jQuery.grep(questionTypes, function(element, i) {
        return element.id;
    });

    if (questions != null) {
        initAutocomplete(question_type, question_type_id, questions,0, function(i, ui){
            console.log(i);
            if(i.name == 'Identification'){//identification
            
                cells[4].innerHTML  = `<input type="text" id="answer-id" name="answer[]" class="form-control input-sm" placeholder="Correcr answer here" autocomplete="off" required/>`; 
                cells[4].innerHTML  += `<input type="hidden" id="is-correct" name="is_correct[]" class="form-control input-sm" value="1"/>`; 
                cells[5].innerHTML  = `N/A`; 
                cells[6].innerHTML  = `<input type="number" id="points" name="points[]" class="form-control input-sm"  autocomplete="off" required/>`; 
            
            }else if(i.name == 'True or False'){

                cells[4].innerHTML  = `
                                        <select class="form-control" id="answer-id" name="answer" required>
                                            <option>Select Answer</option>
                                            <option value="True">True</option>
                                            <option value="False">False</option>
                                        </select>
                                      `; 

                cells[4].innerHTML  += `<input type="hidden" id="is-correct" name="is_correct[]" class="form-control input-sm" value="1"/>`; 
                cells[5].innerHTML  = `N/A`; 
                cells[6].innerHTML  = `<input type="number" id="points" name="points[]" class="form-control input-sm"  autocomplete="off" required/>`; 
                
            }else if(i.name == 'Essay'){
                
                cells[4].innerHTML  = `The teacher is the one that score and this question`; 
                cells[5].innerHTML  = `N/A`; 
                cells[6].innerHTML  = `<input type="number" id="points" name="points[]" class="form-control input-sm"  autocomplete="off" required/>`;  
            
            }else if(i.name == 'Multiple Choice'){

                cells[4].innerHTML  = `<input type="text" id="answer-id" name="answer[]" class="form-control input-sm" placeholder="Correct answer here" autocomplete="off" required/>`; 
                cells[4].innerHTML  += `<input type="hidden" id="is-correct" name="is_correct[]" class="form-control input-sm" value="1"/>`; 
                
                cells[5].innerHTML  = `<input type="text" id="answer-id" name="answer[]" class="form-control input-sm" placeholder="Incorrect answer here" autocomplete="off" required/>`; 
                cells[5].innerHTML  += `<input type="hidden" id="is-correct" name="is_correct[]" class="form-control input-sm" value="0"/>`; 
                
                cells[5].innerHTML  += `<input type="text" id="answer-id" name="answer[]" class="form-control input-sm" placeholder="Incorrect answer here" autocomplete="off" required/>`; 
                cells[5].innerHTML  += `<input type="hidden" id="is-correct" name="is_correct[]" class="form-control input-sm" value="0"/>`; 
                
                cells[5].innerHTML  += `<input type="text" id="answer-id" name="answer[]" class="form-control input-sm" placeholder="Incorrect answer here" autocomplete="off" required/>`; 
                cells[5].innerHTML  += `<input type="hidden" id="is-correct" name="is_correct[]" class="form-control input-sm" value="0"/>`; 
            
                cells[6].innerHTML  = `<input type="number" id="points" name="points[]" class="form-control input-sm"  autocomplete="off" required/>`; 

            }
        });
    }

}
    
function removeRow()
{
    $('.worksheet-row-index:checkbox:checked').parents('tr.worksheet_row').remove();
}