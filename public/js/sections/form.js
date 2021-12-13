$(document).ready(function() {
    getGrades();
    imageLoader();
});

function getGrades(){

	$.ajax({
        type: "get",
        url: "/get-grades",
        data: null,
        dataType: 'JSON',
        success: function (res) {
            //auto complete grades
            autoCompleteGrades(res);
        },
        error: function(error) {
            showHttpErrorAlert(error);
        }
    });
}

function autoCompleteGrades(data){

	let grades = jQuery.grep(data, function(element, i) {
	            return element.id;
	});
    
    if (grades != null) {
        //for country langugae
            initAutocomplete('#grade', '#grade-id', grades, 0,function(selection, isValid){      
        });
    }
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

