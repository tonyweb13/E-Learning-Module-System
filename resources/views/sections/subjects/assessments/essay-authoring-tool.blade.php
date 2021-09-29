<div class="shadow-sm container p-5 bg-light rounded">
    <hr>
    <div class="container p-2 rounded" style="background-color: #eeeeee">
        <div id="editparent">
            <div id="editControls" class=" p-2 m-2 bg-light">
                <div class="btn-group">
                    <a class="btn text-dark" data-role="undo" href="#" title="Undo">
                        <i class="fa fa-undo"></i>
                    </a>
                    <a class="btn text-dark" data-role="redo" href="#" title="Redo">
                        <i class="fa fa-redo"></i>
                    </a>
                    <a class="btn text-dark" data-role="cut" href="#" title="Cut">
                        <i class="fa fa-cut"></i>
                    </a>
                    <a class="btn text-dark" data-role="copy" href="#" title="Copy">
                        <i class="fa fa-copy"></i>
                    </a>
                    <a class="btn text-dark" data-role="JustifyLeft" href="#" title="Align Left">
                        <i class="fas fa-align-left"></i>
                    </a>
                    <a class="btn text-dark" data-role="JustifyCenter" href="#" title="Align Center">
                        <i class="fas fa-align-center"></i>
                    </a>
                    <a class="btn text-dark" data-role="JustifyRight" href="#" title="Align Right">
                        <i class="fas fa-align-right"></i>
                    </a>
                    <a class="btn text-dark" data-role="outdent" href="#" title="Decrease indent">
                        <i class="fas fa-outdent"></i>
                    </a>
                    <a class="btn text-dark" data-role="indent" href="#" title="Increase indent">
                        <i class="fas fa-indent"></i>
                    </a>
                    <a class="btn text-dark" data-role="insertUnorderedList" href="#" title="Unordered List">
                        <i class="fa fa-list-ul"></i>
                    </a>
                    <a class="btn text-dark" data-role="insertOrderedList" href="#" title="Ordered List">
                        <i class="fa fa-list-ol"></i>
                    </a>
                    <a class="btn text-dark" data-role="subscript" href="#" title="Subscript">
                        <i class="fa fa-subscript"></i>
                    </a>
                    <a class="btn text-dark" data-role="superscript" href="#" title="Superscript">
                        <i class="fa fa-superscript"></i>
                    </a>
                    <a class="btn text-dark" data-role="RemoveFormat" href="#" title="Clear Formating">
                        <i class="fas fa-eraser"></i>
                    </a>
                    <button  class="btn mt-1 hide-1" id="editor_select_img" value="{{$aessay}}" onclick="imageClick(this.value);" title="Upload Image" type="button" style="background-color: #f8f9fa;width: 20px;">
                        <i class="far fa-images"></i>
                    </button>
                    <input type="file" hidden name="editor_image" id="editor_image_select">
                    &emsp;
                    <button value="{{$aessay}}" title="Upload Video / Music" onclick="videoClick(this.value);" class="btn mt-1 hide-1" id="editor_select_img2" type="button" style="background-color: #f8f9fa;width: 20px;">
                        <i class="fas fa-film"></i>
                    </button>
                    <input type="file" hidden name="editor_image2" id="editor_image_select2">
                    &emsp;
                    <button   class="btn mt-1 hide-1" id="link-btn" type="button" value="{{$aessay}}" onclick="fileClick(this.value);" title="Upload File" style="background-color: #f8f9fa;width: 20px;">
                        <i class="far fa-file-alt"></i>
                    </button>
                    <input type="file" hidden name="editor_image3" id="editor_image_select3">
                    &emsp;
                    
                    <button  title="Attached Link" class="btn mt-1 hide-1" id="link-btn" type="button" value="{{$aessay}}" onclick="linkClick(this.value);" style="background-color: #f8f9fa;width: 20px;">
                        <i class="fas fa-link"></i>
                    </button>
                    &emsp;
                    <button  title="Embeed Video/Image" class="btn mt-1 hide-1"  id="embed-video-btn" value="{{$aessay}}" onclick="embeedVideoClick(this.value);"   type="button"  style="background-color: #f8f9fa;width: 20px;">
                        <i class="fas fa-code"></i>
                    </button>
                </div>
                <br>
                <div class="btn-group">
                    <a class="btn text-dark" data-role="h1" href="#" title="Heading 1">
                        <i class="fas fa-heading"></i><sup>1</sup>
                    </a>
                    <a class="btn text-dark" data-role="h2" href="#" title="Heading 2">
                        <i class="fas fa-heading"></i><sup>2</sup>
                    </a>
                    <a class="btn text-dark" data-role="h3" href="#" title="Heading 3">
                        <i class="fas fa-heading"></i><sup>3</sup>
                    </a>
                    <a class="btn text-dark" data-role="h4" href="#" title="Heading 4">
                        <i class="fas fa-heading"></i><sup>4</sup>
                    </a>
                    <a class="btn text-dark" data-role="h5" href="#" title="Heading 5">
                        <i class="fas fa-heading"></i><sup>5</sup>
                    </a>
                    <a class="btn text-dark" data-role="p" href="#" title="Paragraph">
                        <i class="fa fa-paragraph"></i>
                    </a>
                    <a class="btn text-dark" data-role="bold" href="#" title="Bold">
                        <i class="fa fa-bold"></i>
                    </a>
                    <a class="btn text-dark" data-role="italic" href="#" title="Italic">
                        <i class="fa fa-italic"></i>
                    </a>
                    <a class="btn text-dark" data-role="underline" href="#" title="Underline">
                        <i class="fa fa-underline"></i>
                    </a>
                    <a class="btn text-dark" data-role="strikeThrough" href="#" title="Strikethrough">
                        <i class="fa fa-strikethrough"></i>
                    </a>
                    <select onchange="fontEditor('fontName',this[this.selectedIndex].value)">
                        <option value="Andale Mono">Andale Mono</option>
                        <option value="Arial">Arial</option>
                        <option value="Arial Black">Arial Black</option>
                        <option value="Arial Italic">Arial Italic</option>
                        <option value="Bitter">Bitter</option>
                        <option value="Book Antiqua">Book Antiqua</option>
                        <option value="Comic Sans MS">Comic Sans MS</option>
                        <option value="Comic Sans MS Bold">Comic Sans MS Bold</option>
                        <option value="Comic Sans MS">Comic Sans MS</option>
                        <option value="Calibri">Calibri</option>
                        <option value="Courier New">Courier New</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Georgia Bold">Georgia Bold</option>
                        <option value="Helvetica">Helvetica</option>
                        <option value="Impact">Impact</option>
                        <option value="RobotoLightNew">RobotoLightNew</option>
                        <option value="Tahoma">Tahoma</option>
                        <option value="Terminal">Terminal</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Verdana">Verdana</option>
                    </select>
                    &emsp;
                    <select onchange="setColor(this[this.selectedIndex].value)">
                        <option style="color:#000000 !important;" value="#000000">MyEdge</option>
                        <option style="color:#FF0000 !important;" value="#FF0000">MyEdge</option>
                        <option style="color:#FFC0CB !important;" value="#FFC0CB">MyEdge</option>
                        <option style="color:#FFA500 !important;" value="#FFA500">MyEdge</option>
                        <option style="color:#0000FF !important;" value="#0000FF">MyEdge</option>
                        <option style="color:#728EF0 !important;" value="#728EF0">MyEdge</option>
                        <option style="color:#008000 !important;" value="#008000">MyEdge</option>
                        <option style="color:#FFFF00 !important;" value="#FFFF00">MyEdge</option>
                        <option style="color:#FA4988 !important;" value="#FA4988">MyEdge</option>
                        
                        <option style="color:#b00b69 !important;" value="#b00b69">MyEdge</option>
                        <option style="color:#0e5c66 !important;" value="#0e5c66">MyEdge</option>
                        
                        <option style="color:#f8874f !important;" value="#f8874f">MyEdge</option>
                        <option style="color:#36896e !important;" value="#36896e">MyEdge</option>
                        <option style="color:#b4f9e6 !important;" value="#b4f9e6">MyEdge</option>
                        <option style="color:#d83f66 !important;" value="#d83f66">MyEdge</option>
                        <option style="color:#c6d645 !important;" value="#c6d645">MyEdge</option>
                    </select>
                    &emsp;
                    <select onchange="setBackColor(this[this.selectedIndex].value)">
                        <option style="color:#000000 !important;" value="#000000">MyEdge</option>
                        <option style="color:#FF0000 !important;" value="#FF0000">MyEdge</option>
                        <option style="color:#FFC0CB !important;" value="#FFC0CB">MyEdge</option>
                        <option style="color:#FFA500 !important;" value="#FFA500">MyEdge</option>
                        <option style="color:#0000FF !important;" value="#0000FF">MyEdge</option>
                        <option style="color:#728EF0 !important;" value="#728EF0">MyEdge</option>
                        <option style="color:#008000 !important;" value="#008000">MyEdge</option>
                        <option style="color:#FFFF00 !important;" value="#FFFF00">MyEdge</option>
                        <option style="color:#FA4988 !important;" value="#FA4988">MyEdge</option>
                        
                        <option style="color:#b00b69 !important;" value="#b00b69">MyEdge</option>
                        <option style="color:#0e5c66 !important;" value="#0e5c66">MyEdge</option>
                        
                        <option style="color:#f8874f !important;" value="#f8874f">MyEdge</option>
                        <option style="color:#36896e !important;" value="#36896e">MyEdge</option>
                        <option style="color:#b4f9e6 !important;" value="#b4f9e6">MyEdge</option>
                        <option style="color:#d83f66 !important;" value="#d83f66">MyEdge</option>
                        <option style="color:#c6d645 !important;" value="#c6d645">MyEdge</option>
                    </select>
                    &emsp;
                    <select onchange="fontEditor('fontsize',this[this.selectedIndex].value)">
                        <?php $a= 8 ?>
                        @for($i=1; $i < 10 ;$i++)
                            <option value="{{$i}}">{{$a}}px</option>
                            <?php $a= $a + 2 ?>
                        @endfor  
                    </select>
                </div>
            </div>
            <div id="essayeditor-{{$aessay}}" class="essayeditors p-2 m-2 bg-light" contenteditable style="height: 500px; overflow-y: auto">
                @if($data->answer != null)
                    <?php   
                        echo $data->answer ?? ''; 
                    ?>
                @endif
            </div>
        </div>
    </div>
</div>
@include('authoring-tool-file-modal')
@include('authoring-tool-link-modal')
@include('authoring-tool-embeed-modal')
@include('authoring-tool-frame-modal')
@include('authoring-tool-image-modal')
@include('file-preview-modal')