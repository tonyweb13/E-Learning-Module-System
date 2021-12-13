let rowIndex=0;
$(document).ready(function() {
	//get assign subject
	getAssignedProduct();
    getGradeScale();
    getAssessmentScale();
    imageLoader();
});


function getAssignedProduct(){

	type='Subject';
	user=$('#current-user').val();
	$.ajax({
        type: "post",
        url: "/subjects/assigned",
        data: {
        	type:type,
        	user:user
        },
        dataType: 'JSON',
        success: function (res) {
            console.log(res);
            productAutoComplete(res);
        },
        error: function(error) {
            showHttpErrorAlert(error);
        }
    });
}

function productAutoComplete(data){

	let subjects = jQuery.grep(data, function(element, i) {
	            return element.id;
	});
    
    if (subjects != null) {
        //for country langugae
            initUnrestrictedAutocomplete('#subject-name', '#subject-id', subjects, 0,function(selection, isValid){      
        });
    }
}


function getGradeScale(){

    subject_id=$('#id').val();
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
                addRow(res[i]);
            }
        },
        error: function(error) {
            showHttpErrorAlert(error);
        }
    });
}

function getAssessmentScale(){

    subject_id=$('#id').val();
    $.ajax({
        type: "post",
        url: "/get-sectionassessmentscale",
        data: {
            subject_id:subject_id,
        },
        dataType: 'JSON',
        success: function (res) {
            console.log(res);
            for (var i = 0; i < res.length; i++) {
                addRowScale(res[i]);
            }
        },
        error: function(error) {
            showHttpErrorAlert(error);
        }
    });
}

function imageLoader(){

	//image
	$('#select_img').click(function() {
		$('#image_select').click();
	})

	$('#image_select').change(function() {
		if (this.files && this.files[0]) {
			var reader = new FileReader();
			reader.onload = function(e) {
				$('#image').attr('src', e.target.result);
			}
			reader.readAsDataURL(this.files[0]);
		}
	});

}

function addRow(data){

    rowIndex ++;
    let cells = generateTableRow('table-grade-scale', 'worksheet_row', 3);
    cells[0].innerHTML  = `<input type="checkbox" class="worksheet-row-index"/>`;
    if(data){
        cells[1].innerHTML  = `<input type="text" id="category" name="category[]" class="form-control input-sm" value="${data.name}" autocomplete="off" required />`; 
        cells[1].innerHTML  += `<input type="hidden" id="scale-id" name="scale_id[]" class="form-control input-sm" value="${data.id}" autocomplete="off" required />`; 
        cells[2].innerHTML  = `<input type="number" id="weight" name="weight[]" class="form-control input-sm" value="${data.weight}" autocomplete="off" required/>`; 
    }else{
        cells[1].innerHTML  = `<input type="text" id="category" name="category[]" class="form-control input-sm"  autocomplete="off" required />`; 
        cells[1].innerHTML  += `<input type="hidden" id="scale-id" name="scale_id[]" class="form-control input-sm"  autocomplete="off" />`; 
        cells[2].innerHTML  = `<input type="number" id="weight" name="weight[]" class="form-control input-sm"  autocomplete="off" required/>`; 

    }
}

function removeRow()
{
    $('.worksheet-row-index:checkbox:checked').parents('tr.worksheet_row').remove();
}


function addRowScale(data){

    rowIndex ++;
    let cells = generateTableRow('table-assessment-scale', 'worksheet_row', 7);
    cells[0].innerHTML  = `<input type="checkbox" class="worksheet-row-index"/>`;
    if(data){
        cells[1].innerHTML  = `<input type="text" id="details" name="scale_description[]" value="${data.details}" class="form-control input-sm"  autocomplete="off" required />`; 
        cells[1].innerHTML  += `<input type="hidden" id="assessment-scale-id" name="assessment_scale_id[]" value="${data.id}" class="form-control input-sm"  autocomplete="off" required />`; 
        cells[2].innerHTML  = `<input type="number" id="scale-from-id" name="scale_from_id[]" value="${data.scale_from}" class="form-control input-sm"  autocomplete="off" />`;
        cells[3].innerHTML  = `<input type="number" id="scale-to-id" name="scale_to_id[]" value="${data.scale_to}" class="form-control input-sm"  autocomplete="off" />`;
        console.log(data.remarks);
        if(data.remarks == 'Passed'){
            cells[4].innerHTML  = `<select class="form-control" id="remarks" name="remarks[]" required>
                                        <option value="Passed" selected>Passed</option>
                                        <option value="Failed">Failed</option>
                                   </select>`;    
        }else{
            cells[4].innerHTML  = `<select class="form-control" id="remarks" name="remarks[]" required>
                                        <option value="Passed">Passed</option>
                                        <option value="Failed" selected>Failed</option>
                                   </select>`;
        }
        cells[5].innerHTML  = `<select class="form-control fa" id="icons-${rowIndex}" name="icons[]" required>
                                    <option value="far fa-grin-stars">&#xf587; Grin Star</option>
                                    <option value="far fa-grin-hearts">&#xf584; Grin Heart</option>
                                    <option value="far fa-laugh-beam">&#xf59a; Laugh Beam</option>
                                    <option value="far fa-surprise">&#xf5c2; Surprise</option>
                                    <option value="far fa-laugh">&#xf599; Laugh</option>
                                    <option value="far fa-frown">&#xf119; Frown</option>
                                    <option value="far fa-smile">&#xf118; Smile</option>
                                    <option value="far fa-sad-tear">&#xf5b4; Sad Tear</option>
                                    <option value="far fa-sad-cry">&#xf5b3; Sad Cry</option>
                                    <option value="far fa-dizzy">&#xf567; Dizzy</option>
                                    <option value="far fa-star">&#xf005; Star</option>
                                    <option value="fas fa-star-half-alt">&#xf089; Half Star</option>
                                    <option value="fas fa-star">&#xf005; Full Star</option>
                                </select>`; 
        
        cells[6].innerHTML  = `<select class="form-control" id="colors-${rowIndex}" name="colors[]" required>
                                    <option style="color:#000000 !important;" value="#000000">Black</option>
                                    <option style="color:#FF0000 !important;" value="#FF0000">Red</option>
                                    <option style="color:#FFC0CB !important;" value="#FFC0CB">Pink</option>
                                    <option style="color:#FFA500 !important;" value="#FFA500">Orange</option>
                                    <option style="color:#0000FF !important;" value="#0000FF">Blue</option>
                                    <option style="color:#a7d3b7  !important;" value="#a7d3b7">Glenwood Green</option>
                                    <option style="color:#09f655 !important;" value="#09f655">Green</option>
                                    <option style="color:#d70141  !important;" value="#d70141 ">Joker Smile</option>
                                    <option style="color:#41729f !important;" value="#41729f">Naval</option>
                                    <option style="color:#75dbc1 !important;" value="#75dbc1">Star Grass</option>
                                    <option style="color:#bf3cff   !important;" value="#bf3cff">Magnetos </option>
                                </select>`;
                                
        $(`#icons-${rowIndex} option[value="${data.icons}"]`).attr('selected', 'selected'); 
        $(`#colors-${rowIndex} option[value="${data.colors}"]`).attr('selected', 'selected'); 
    }else{
        cells[1].innerHTML  = `<input type="text" id="description" name="scale_description[]" class="form-control input-sm"  autocomplete="off" required />`; 
        cells[1].innerHTML  += `<input type="hidden" id="assessment-scale-id" name="assessment_scale_id[]" class="form-control input-sm"  autocomplete="off" required />`; 
        cells[2].innerHTML  = `<input type="number" id="scale-from-id" name="scale_from_id[]" class="form-control input-sm"  autocomplete="off" />`;
        cells[3].innerHTML  = `<input type="number" id="scale-to-id" name="scale_to_id[]" class="form-control input-sm"  autocomplete="off" />`;
        cells[4].innerHTML  = `<select class="form-control" id="remarks" name="remarks[]" required>
                                <option value="Passed">Passed</option>
                                <option value="Failed">Failed</option>
                               </select>`; 
        cells[5].innerHTML  = `<select class="form-control fa" id="icons" name="icons[]" required>
                                    <option value="far fa-grin-stars">&#xf587; Grin Star</option>
                                    <option value="far fa-grin-hearts">&#xf584; Grin Heart</option>
                                    <option value="far fa-laugh-beam">&#xf59a; Laugh Beam</option>
                                    <option value="far fa-surprise">&#xf5c2; Surprise</option>
                                    <option value="far fa-laugh">&#xf599; Laugh</option>
                                    <option value="far fa-frown">&#xf119; Frown</option>
                                    <option value="far fa-smile">&#xf118; Smile</option>
                                    <option value="far fa-sad-tear">&#xf5b4; Sad Tear</option>
                                    <option value="far fa-sad-cry">&#xf5b3; Sad Cry</option>
                                    <option value="far fa-dizzy">&#xf567; Dizzy</option>
                                    <option value="far fa-star">&#xf005; Star</option>
                                    <option value="fas fa-star-half-alt">&#xf089; Half Star</option>
                                    <option value="fas fa-star">&#xf005; Full Star</option>
                                </select>`; 
        
        cells[6].innerHTML  = `<select class="form-control" id="colors" name="colors[]" required>
                                    <option style="color:#000000 !important;" value="#000000">Black</option>
                                    <option style="color:#FF0000 !important;" value="#FF0000">Red</option>
                                    <option style="color:#FFC0CB !important;" value="#FFC0CB">Pink</option>
                                    <option style="color:#FFA500 !important;" value="#FFA500">Orange</option>
                                    <option style="color:#0000FF !important;" value="#0000FF">Blue</option>
                                    <option style="color:#a7d3b7 !important;" value="#a7d3b7">Glenwood Green</option>
                                    <option style="color:#09f655 !important;" value="#09f655">Green</option>
                                    <option style="color:#d70141 !important;" value="#d70141 ">Joker Smile</option>
                                    <option style="color:#41729f !important;" value="#41729f">Naval</option>
                                    <option style="color:#75dbc1 !important;" value="#75dbc1">Star Grass</option>
                                    <option style="color:#bf3cff !important;" value="#bf3cff">Magnetos </option>
                                </select>`; 
    }
}

function removeRowScale()
{
    $('.worksheet-row-index:checkbox:checked').parents('tr.worksheet_row').remove();
}