$(document).ready(function() {
    editor();
    imageLoader();
    getGrades();
    getGuides();
	
});

function editor(){
  	$('#editControls a').click(function(e) {
        e.preventDefault();
        switch($(this).data('role')) {
            case 'h1':
            case 'h2':
            case 'h3':
            case 'h4':
            case 'h5':
            case 'p':
                document.execCommand('formatBlock', false, $(this).data('role'));
                break;
            default:
                document.execCommand($(this).data('role'), false, null);
                break;
        }
    });

    $("#editor").keyup(function() {
        var value = $(this).html();
    }).keyup();

    $("#editor").keydown(function(e) {
        if(e.keyCode === 9) { // tab was pressed
            // get caret position/selection
            var start = this.selectionStart;
                end = this.selectionEnd;

            var $this = $(this);

            // set textarea value to: text before caret + tab + text after caret
            $this.val($this.val().substring(0, start)
                        + "\t"
                        + $this.val().substring(end));

            // put caret at right position again
            document.execCommand('insertText', false /*no UI*/, '          ');
            this.selectionStart = this.selectionEnd = start + 1;
            // prevent the focus lose
            return false;
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


function getGrades(){

	$.ajax({
        type: "get",
        url: "/get-grades",
        data: null,
        dataType: 'JSON',
        success: function (res) {
            console.log(res);
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

function getGuides(){

        $.ajax({
            type: "get",
            url: "/get-guides",
            data: null,
            dataType: 'JSON',
            success: function (res) {
                console.log(res);
                //auto complete grades
                autoCompleteGuides(res);
            },
            error: function(error) {
                showHttpErrorAlert(error);
            }
        });

}

function autoCompleteGuides(data){

    let guides = jQuery.grep(data, function(element, i) {
                return element.id;
    });
    
    if (guides != null) {
        //for country langugae
        initAutocomplete('#guide', '#guide-id', guides, 0,function(selection, isValid){      
        });
    }
}