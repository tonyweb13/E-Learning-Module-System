<div class="container p-2 rounded" style="background-color: #eeeeee">
    <div id="editparent">
        <div id="editControls" class=" p-2 m-2 bg-light">
            <div class="btn-group">
                <a class="btn text-dark" data-role="undo" href="#" title="Undo">
                    <i class="fa fa-undo"></i>
                </a>
                <a class="btn text-dark" data-role="redo" href="#" title="Redo">
                    <i class="fa fa-repeat"></i>
                </a>
            </div>

            <div class="btn-group">
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
            </div>

            <div class="btn-group">
                <a class="btn text-dark" data-role="indent" href="#" title="Blockquote">
                    <i class="fa fa-indent"></i>
                </a>
                <a class="btn text-dark" data-role="insertUnorderedList" href="#" title="Unordered List">
                    <i class="fa fa-list-ul"></i>
                </a>
                <a class="btn text-dark" data-role="insertOrderedList" href="#" title="Ordered List">
                    <i class="fa fa-list-ol"></i>
                </a>
            </div>

            <div class="btn-group">
                <a class="btn text-dark" data-role="h1" href="#" title="Heading 1">
                    <i class="fa fa-header"></i><sup>1</sup>
                </a>
                <a class="btn text-dark" data-role="h2" href="#" title="Heading 2">
                    <i class="fa fa-header"></i><sup>2</sup>
                </a>
                <a class="btn text-dark" data-role="h3" href="#" title="Heading 3">
                        <i class="fa fa-header"></i><sup>3</sup>
                </a>
                <a class="btn text-dark" data-role="p" href="#" title="Paragraph">
                    <i class="fa fa-paragraph"></i>
                </a>
            </div>
        </div>
        <div id="editor" class="p-2 m-2 bg-light" contenteditable style="width:100%;height: 260px; overflow-y: auto">
            @if($data != null)
                <?php   
                    echo $data->short_description ?? ''; 
                ?>
            @endif
        </div>
    </div>
</div>