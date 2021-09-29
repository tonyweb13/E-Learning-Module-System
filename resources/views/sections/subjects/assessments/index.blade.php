<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    <style>
        input[type='radio'] {
                -webkit-appearance: none;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                outline: none;
                border: 3px solid #113478;
            }

            input[type='radio']:before {
                content: '';
                display: block;
                width: 60%;
                height: 60%;
                margin: 20% auto;
                border-radius: 50%;
            }

         input[type="radio"]:checked:before {
                background: green;
                
            }
            
            input[type="radio"]:checked {
              border-color:green;
            }

            .role {
                margin-right: 80px;
                margin-left: 20px;
                font-weight: normal;
            }

            .checkbox label {
                margin-bottom: 20px !important;
                margin-right: 20px !important;
            }

            .roles {
                margin-bottom: 40px;
            }
    </style>
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
                        <h5>Assessments on {{$subject->mySubject->createdSubject->name}}</h5>
                        <br>
                        <div class="border geo-border-primary rounded p-3"> 
                            @include('sections.subjects.assessments.browse')
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endsection
    @include('sections.subjects.assessments.question-modal')
    @include('sections.subjects.assessments.create-assessment-modal')
    @include('sections.subjects.assessments.question-bank-modal')
    
    
    
    @include('layouts.navbar', ['title' => 'CLASS- ' . $section->grade->name.' '. $section->name])
    @include('layouts.alert')
</body>
<script type="text/javascript" src="/js/authoring-tool.js"></script>
<script type="text/javascript" src="/js/sections/navbar.js"></script>
<script type="text/javascript" src="/js/sections/subjects/assessments/form.js"></script>
<script type="text/javascript" src="/js/sections/subjects/assessments/create.js"></script>
<script type="text/javascript" src="/js/sections/subjects/lessons/editor.js"></script>
<script type="text/javascript" src="/js/alert.js"></script>

</html>