<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    @endsection
    @include('layouts.head', ['title' => 'CLASS'])
<body class="body-bg">
    @section('content')
        <h5>CLASS- {{$section->grade->name}} {{$section->name}}</h5>
        <br>
        <div class="review-consult">
            <div class="container-reviews">
                @include('sections.navbar')
                <div class="tab-content" style="background-color: #f6f3ee !important; padding: 30px;">
                    <div id="admin-card" class="tab-pane fade show active">
                        <a href="/sections/subjects/{{$section->id}}" class="right btn btn-info mb-1 text-light" data-toggle="tooltip" title="Browse My Subject">
                            <i class="fa fa-list"></i>&nbsp;&nbsp;Browse
                        </a>
                        <h5>Lessons on {{$subject->mySubject->createdSubject->name}}</h5>
                        <br>
                        <div class="border geo-border-primary rounded p-3"> 
                            @include('sections.subjects.lessons.browse')
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endsection
    
    @include('file-preview-modal')
    @include('sections.subjects.lessons.lesson-modal')
    @include('sections.subjects.lessons.upload-modal')
    @include('sections.subjects.lessons.create-modal')
    @include('sections.subjects.lessons.view-modal')
    @include('sections.subjects.lessons.view2-modal')
    
    @include('layouts.navbar', ['title' => 'CLASS- ' . $section->grade->name.' '. $section->name])
    @include('layouts.alert')
</body>
    <script type="text/javascript" src="/js/sections/navbar.js"></script>
    <script type="text/javascript" src="/js/sections/subjects/lessons/form.js"></script>
    <script type="text/javascript" src="/js/sections/subjects/lessons/create.js"></script>
    <script type="text/javascript" src="/js/sections/subjects/lessons/editor.js"></script>
    <script type="text/javascript" src="/js/alert.js"></script>
    <script type="text/javascript" src="/js/authoring-tool.js"></script>
</html>