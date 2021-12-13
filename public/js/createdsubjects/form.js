let rowIndex=0;
$(document).ready(function() {
	//get assign subject
    getGradeScale();
    imageLoader();
});

//for edit
function getGradeScale(){

    subject_id=$('#id').val();
    console.log(subject_id);
    $.ajax({
        type: "post",
        url: "/get/createdsubject/gradescale",
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