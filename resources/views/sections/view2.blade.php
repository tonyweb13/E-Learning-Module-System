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
                        <h5>Instructions</h5>
                        <br>
                        <form class="border geo-border-primary rounded p-3" id="add-instruction"> 
                            @csrf
                            <div class="row">
                                <div style="padding: 30px;">
                                   

                                </div>
                            </div>
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
    <script type="text/javascript" src="/js/alert.js"></script>
    <script type="text/javascript" src="/js/zipcode.js"></script>

</html>