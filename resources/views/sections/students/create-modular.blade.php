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
                            <a href="/sections/students/modular/{{$section->id}}" class="right btn btn-info mb-1 text-light" data-toggle="tooltip" title="Browse">
                                <i class="fa fa-list"></i>&nbsp;&nbsp;Browse
                            </a>
                            <h5>Enroll Modular Students</h5>
                            <br>
                            <form class="border geo-border-primary rounded p-3" id="add-subject"> 
                                @csrf
                                @include('sections.students.form-modular')
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
    <script type="text/javascript" src="/js/sections/students/create-modular.js"></script>
    <script type="text/javascript" src="/js/alert.js"></script>
</html>