<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    @endsection
    @include('layouts.head', ['title' => 'CLASS'])
<body class="body-bg">
    @section('content')
        <div class="review-consult">
            <div class="container-reviews">
                @include('sections.navbar')
                <div class="tab-content" style="background-color: #f6f3ee !important; padding: 30px;">
                    <div id="admin-card" class="tab-pane fade show active">
                        <a href="/sections/subjects/{{$section->id}}" class="right btn btn-info mb-1 text-light" data-toggle="tooltip" title="Browse My Subject">
                            <i class="fa fa-list"></i>&nbsp;&nbsp;Browse
                        </a>
                        <h5>Create / Import Subject</h5>
                        <br>
                        <form class="border geo-border-primary rounded p-3" id="add-subject"> 
                            @csrf
                            @include('sections.subjects.form')
                        </form>
                    </div>
                </div>
            </div>
        </div>
    @endsection
    
    @include('layouts.navbar', ['title' => 'CLASS- ' . $section->grade->name.' '. $section->name])
    @include('layouts.alert')
</body>
    <script type="text/javascript" src="/js/sections/navbar.js"></script>
    <script type="text/javascript" src="/js/sections/subjects/form.js"></script>
    <script type="text/javascript" src="/js/sections/subjects/create.js"></script>
    <script type="text/javascript" src="/js/alert.js"></script>
</html>