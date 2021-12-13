$(document).ready(function() {
    imageLoader();
    getSubjects();
	
});

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


function getSubjects(){

	$.ajax({
        type: "get",
        url: "/get-subjects",
        data: null,
        dataType: 'JSON',
        success: function (res) {
            console.log(res);
            //auto complete grades
            autoCompleteSubjects(res);
        },
        error: function(error) {
            showHttpErrorAlert(error);
        }
    });
}

function autoCompleteSubjects(data){

	let grades = jQuery.grep(data, function(element, i) {
	            return element.id;
	});
    
    if (grades != null) {
        //for country langugae
            initAutocomplete('#subject', '#subject-id', grades, 0,function(selection, isValid){      
        });
    }
}
