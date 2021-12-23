$(document).ready(function() {
    imageLoader();
	
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