let imageIndex=0;
let imageFile;
let fileFile;
let keyholder;
let tempfilename = null;
let extension=null;

$(document).ready(function() {
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

    $(".essayeditors").keyup(function() {
        var value = $(this).html();
    }).keyup();

    $(".essayeditors").keydown(function(e) {
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
});

function fontEditor(type,fontName) {
    document.execCommand(type, false, fontName);
}

function setColor(color) {
    document.execCommand('styleWithCSS', false, true);
    document.execCommand('foreColor', false, color);
}

function setBackColor(color) {
    document.execCommand('styleWithCSS', false, true);
    document.execCommand('BackColor', false, color);
}

//image
function imageClick(key){
    console.log(key);
    keyholder=key;
    $("#authoring-tool-image-modal").modal("show");
}

function getImageSize(){
    
    $("#authoring-tool-image-modal").modal("hide");
    w2=$('#width2-url').val();
    h2=$('#height2-url').val();
    
    imageIndex++;
    
    $(`#essayeditor-${keyholder}`).append(`<img src="'/images/no_image.png'" onerror="this.src='/images/no_image.png'" 
                        width="${w2}px;" height="${h2}px;" class="geo-border-primary border mt-2" id="image-${imageIndex}">`);
    $('#editor_image_select').click();
}

$('#editor_image_select').change(function() {

    if (this.files && this.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            //upload image
            showLoader('Uploading!','Please wait...');
            var file_data = $('#editor_image_select').prop('files')[0];   
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
                            $(`#image-${imageIndex}`).remove();
                            showErrorAlert('Error','Please check your internet connection');

                        }else{//success
                            $(`#image-${imageIndex}`).attr('src',data);
                        }
                        Swal.close();
                         
                        },
                        error: function(error) {
                            showHttpErrorAlert(error);
                        }
            });  
        }
        // check if file is png
        ext=this.files[0].type;
        if(ext.includes("image")){
            reader.readAsDataURL(this.files[0]);
        }else{
            $(`#image-${imageIndex}`).remove();
            showWarningAlert('Warning','Please select image');
        }
    }
});

function dismissImageModal(){
    $("#authoring-tool-image-modal").modal("hide");
}

//video
function videoClick(key){
    
    console.log(key);
    keyholder=key;
    $("#authoring-tool-frame-modal").modal("show");
}

function getFrameSize(){
    $("#authoring-tool-frame-modal").modal("hide");
    w=$('#width-url').val();
    h=$('#height-url').val();
    imageIndex++;
    $(`#essayeditor-${keyholder}`).append(`<iframe src="https://www.w3schools.com" id="vidoe-${imageIndex}" style="width:${w}px; height: ${h}px;" 
                            class="geo-border-primary border mt-2" controlsList="nodownload"></iframe>`);
    $('#editor_image_select2').click();
}

$('#editor_image_select2').change(function() {

    if (this.files && this.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            //upload image
            showLoader('Uploading!','Please wait...');
            var file_data2 = $('#editor_image_select2').prop('files')[0];   
            var form_data2 = new FormData();                  
            form_data2.append('videoFile', file_data2);
            
            $.ajax({
                     
                    type:"post",
                    url:"/upload/video",
                    data:form_data2,
                    method:'POST',
                    dataType:"json",
                    contentType: false,
                    cache: false,
                    processData: false,
                    success:function(data) {
                    console.log(data);
                    if(data == 'error'){//error
                        $(`#vidoe-${imageIndex}`).remove();
                        showErrorAlert('Error','Please check your internet connection');

                    }else{//success
                        $(`#vidoe-${imageIndex}`).attr('src',data);
                    }
                    Swal.close();
                     
                    },
                    error: function(error) {
                        showHttpErrorAlert(error);
                    }
                });  
        }
        // check if file is png
        ext=this.files[0].type;
        console.log(ext);
        if(ext.includes("video") || ext.includes("audio")){
            reader.readAsDataURL(this.files[0]);
        }else{
            $(`#vidoe-${imageIndex}`).remove();
            showWarningAlert('Warning','Please select video or audio');
        }
    }
});

function dismissFrameModal(){
    $("#authoring-tool-frame-modal").modal("hide");
}

//file
function fileClick(key){
    
    imageIndex++;
    keyholder=key;
    $('#editor_image_select3').click();
}

$('#editor_image_select3').change(function() {

    if (this.files && this.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            //upload image
            showLoader('Uploading!','Please wait...');
            var file_data3 = $('#editor_image_select3').prop('files')[0];   
            var form_data3 = new FormData();                  
            form_data3.append('fileFile', file_data3);
            
            $.ajax({
                     
                    type:"post",
                    url:"/upload/file",
                    data:form_data3,
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
                        console.log(1);
                        // filename = data.substring(data.lastIndexOf('/')+1);
                        // extension = filename.split('.').pop();
                        // if(extension == 'pdf'){
                        //     tmp=data;
                        // }else{
                        //     tmp=`https://docs.google.com/gview?url=${data}&embedded=true`;   
                        // }
                        if(extension == 'pdf'){
                            tmp=data; 
                            
                        }else if(extension == 'doc' || extension == 'docx' || extension == 'docm'){
                            
                            gid=data.match(/[-\w]{25,}/);
                            console.log(gid[0]);
                            tmp =`https://docs.google.com/document/d/${gid}/edit`;
                            
                        }else if(extension == 'ppt' || extension == 'pptx' ){
                            
                            gid=data.match(/[-\w]{25,}/);
                            console.log(gid[0]);
                            tmp =`https://docs.google.com/presentation/d/${gid}/edit`;
                        
                        }else if(extension == 'xlsx' || extension == 'xlsm' || extension == 'xlsb' || extension == 'xltx' || extension == 'xltm' || extension == 'xls' || extension == 'xlt' || extension == 'xml'  || extension == 'xlam' || extension == 'xla'|| extension == 'xlw'|| extension == 'xlr'){
                            
                            gid=data.match(/[-\w]{25,}/);
                            console.log(gid[0]);
                            tmp =`https://docs.google.com/spreadsheets/d/${gid}/edit`;
                            
                        }
                        
                        $(`#essayeditor-${keyholder}`).append(`<button type="button" class="btn btn-light" value="${tmp}" onclick="fileLinkShow(this.value)">${filename}</button>`);
                        // $(`#essayeditor-${keyholder}`).append(`<a href="${tmp}" onclick="fileLinkShow(this)">${filename}</a>`);
                    }
                    Swal.close();
                    },
                    error: function(error) {
                        showHttpErrorAlert(error);
                    }
                });  
        }
        // check if file is png
        ext=this.files[0].type;
        console.log(ext);
        if(ext.includes("application")){
            filename = this.files[0].name;
            extension = filename.split('.').pop();
            reader.readAsDataURL(this.files[0]);
        }else{
            showWarningAlert('Warning','Please select documents');
        }
    }
});

function fileLinkShow(link){
    
    $('#document-preview-frame').attr('src', link);
    $("#file-preview-modal").modal("show");
    
}

// function fileLinkShow(link){
//     filename = link.substring(link.lastIndexOf('/')+1);
//     //document.getElementById("topic-frame").src = tmp;
//     $('#document-preview-frame').attr('src', link);
//     $('#preview-tag').val(filename);
//     $("#file-preview-modal").modal("show");
// }

function dismissFileModal(){
    $("#authoring-tool-file-modal").modal("hide");
}


//link
function linkClick(key){
    
    console.log(key);
    keyholder=key;
    $("#authoring-tool-link-modal").modal("show");
}

function appendLink(){
    
    link=$('#link-url').val();
    displaytext=$('#link-display-text').val();
    $(`#essayeditor-${keyholder}`).append(`<a id="link-${imageIndex}" href="${link}">${displaytext}</a>`);
    $("#authoring-tool-link-modal").modal("hide");
    $('#link-url').val('');
    $('#link-display-text').val('');

}

function dismissLinkModal(){
    $("#authoring-tool-link-modal").modal("hide");
}

//embeed
function embeedVideoClick(key){
    
    console.log(key);
    keyholder=key;
    $("#authoring-tool-embeed-modal").modal("show");
    
}

function appendEmbeed(){
    imageIndex++;
    link=$('#link-embeed-url').val();
    if(link.includes("youtu.be") == true){
        result = /[^/]*$/.exec(link)[0];
        $(`#essayeditor-${keyholder}`).append(`<iframe src="https://www.youtube.com/embed/${result}" id="frame-${imageIndex}" style="width: 100%; height: 600px;" class="geo-border-primary border mt-2" controlsList="nodownload"></iframe>`);   
    }else if(link.includes("youtube") == true){
        result = link.substring(link.indexOf('=') + 1);
        console.log(result);
        $(`#essayeditor-${keyholder}`).append(`<iframe src="https://www.youtube.com/embed/${result}" id="frame-${imageIndex}" style="width: 100%; height: 600px;" class="geo-border-primary border mt-2" controlsList="nodownload"></iframe>`);   
    }else{
        $(`#essayeditor-${keyholder}`).append(`<iframe src="${link}" id="frame-${imageIndex}" style="width: 100%; height: 600px;" class="geo-border-primary border mt-2" controlsList="nodownload"></iframe>`);   
    }
    
    $("#authoring-tool-embeed-modal").modal("hide");
    $('#link-embeed-url').val('');
}



