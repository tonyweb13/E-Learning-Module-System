<div class="container p-2 rounded editor-a" style="background-color: #eeeeee;">
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
                <!-- hete -->
                <a class="btn text-dark" data-role="paste" href="#" onclick="editorPaste();" title="Pate">
                    <i class="fa fa-paste"></i>
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
                <a class="btn text-dark" data-role="Justify" href="#" title="Justify">
                    <i class="fas fa-align-justify"></i>
                </a>
                <a class="btn text-dark" data-role="outdent" href="#" title="Decrease indent">
                    <i class="fas fa-outdent"></i>
                </a>
                <a class="btn text-dark" data-role="indent" href="#" title="Increase indent">
                    <i class="fas fa-indent"></i>
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
                <a class="btn text-dark" data-role="subscript" href="#" title="Subscript">
                    <i class="fa fa-subscript"></i>
                </a>
                <a class="btn text-dark" data-role="superscript" href="#" title="Superscript">
                    <i class="fa fa-superscript"></i>
                </a>
                <a class="btn text-dark" data-role="RemoveFormat" href="#" title="Clear Formating">
                    <i class="fas fa-eraser"></i>
                </a>
                <a class="btn text-dark" data-role="table" href="#" title="Table">
                    <i class="fas fa-table"></i>
                </a>
                <a class="btn text-dark" data-role="table" href="#" title="Table">
                    <i class="far fa-smile-beam"></i>
                </a>
                <a class="btn text-dark" data-role="table" href="#" title="Table">
                    <i class="fas fa-question-circle"></i>
                </a>

            </div>
            <br>
            <div class="btn-group">
                <a class="btn text-dark" data-role="h1" href="#" title="Heading 1">
                    <i class="fas fa-heading"></i>
                    <sup>1</sup>
                </a>
                <a class="btn text-dark" data-role="h2" href="#" title="Heading 2">
                    <i class="fas fa-heading"></i>
                    <sup>2</sup>
                </a>
                <a class="btn text-dark" data-role="h3" href="#" title="Heading 3">
                    <i class="fas fa-heading"></i>
                    </i><sup>3</sup>
                </a>
                <a class="btn text-dark" data-role="h4" href="#" title="Heading 3">
                    <i class="fas fa-heading"></i>
                    </i><sup>4</sup>
                </a>
                <a class="btn text-dark" data-role="h5" href="#" title="Heading 3">
                    <i class="fas fa-heading"></i>
                    </i><sup>5</sup>
                </a>
                <a class="btn text-dark" data-role="h6" href="#" title="Heading 3">
                    <i class="fas fa-heading"></i>
                    </i><sup>6</sup>
                </a>
                <a class="btn text-dark" data-role="p" href="#" title="Paragraph">
                    <i class="fa fa-paragraph"></i>
                </a>
                <a class="btn text-dark" data-role="insertUnorderedList" href="#" title="Unordered List">
                    <i class="fa fa-list-ul"></i>
                </a>
                <a class="btn text-dark" data-role="insertOrderedList" href="#" title="Ordered List">
                    <i class="fa fa-list-ol"></i>
                </a>
                <select onchange="fontEditor('fontName',this[this.selectedIndex].value)">
                    <option value="Andale Mono">Andale Mono</option>
                    <option value="Arial">Arial</option>
                    <option value="Arial Black">Arial Black</option>
                    <option value="Bitter">Bitter</option>
                    <option value="Book Antiqua">Book Antiqua</option>
                    <option value="Comic Sans MS">Comic Sans MS</option>
                    <option value="Calibri">Calibri</option>
                    <option value="Courier New">Courier New</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Helvetica">Helvetica</option>
                    <option value="Impact">Impact</option>
                    <option value="RobotoLightNew">RobotoLightNew</option>
                    <option value="Tahoma">Tahoma</option>
                    <option value="Terminal">Terminal</option>
                    <option value="Verdana">Verdana</option>
                </select>
                &emsp;
                <select onchange="fontEditor('fontsize',this[this.selectedIndex].value)">
                    <?php $a= 8 ?>
                    @for($i=1; $i < 8 ;$i++)
                        <option value="{{$i}}">{{$a}}px</option>
                        <?php $a= $a + 2 ?>
                    @endfor  
                </select>
                &emsp;
                <button value="/images/no_image.png" class="btn mt-1" id="editor_select_img" title="Upload Image" type="button" style="background-color: #f8f9fa;width: 20px;">
                    <i class="far fa-images"></i>
                </button>
                <input type="file" hidden name="editor_image" id="editor_image_select">
                &emsp;
                <button value="/images/no_image.png" title="Upload Video / Music" class="btn mt-1" id="editor_select_img2" type="button" style="background-color: #f8f9fa;width: 20px;">
                    <i class="fas fa-film"></i>
                </button>
                <input type="file" hidden name="editor_image2" id="editor_image_select2">

                <button  title="Attached Link" class="btn mt-1" onclick="attachedLink();"  style="background-color: #f8f9fa;width: 20px;">
                    <i class="fas fa-link"></i>
                </button>
            </div>
        </div>
        <div id="editor" class="p-2 m-2 bg-light" contenteditable style="width:100%;height: 260px; overflow-y: auto">
        </div>
    </div>
</div>
@include('link-modal');