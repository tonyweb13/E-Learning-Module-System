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
                                    <h4>Step 1: Create subjects/lessons/topics</h4>
                                    <div style="padding-left: 20px;"> 
                                        <p style="font-size: 15px; font-weight: bold;color: green;">  CREATE</p>
                                        - Click the New+ icon (<i class="fa fa-plus"></i>) to create a new subject.
                                        <br>
                                        - Create a grade scale for your subject.
                                        <br>
                                        - Click the Create/View Lessons icon (<i class="fa fa-eye"></i>) beside the name of the subject.
                                        <br>
                                        - Click the Plus Icon (<i class="fa fa-plus-circle"></i>) to add a new lesson.
                                        <br>
                                        - Create topics under each lesson by clicking the Create Topic icon (<i class="fas fa-plus-square"></i>) or the Upload Topic icon (<i class="fas fa-plus-square"></i>).
                                        <!--<br><br>-->
                                        <!--<p style="font-size: 15px; font-weight: bold;color: green;">  VIEW</p>-->
                                        <!--- View the subject by clicking the View icon beside the name of the subject.-->
                                        <br><br>
                                        <p style="font-size: 15px; font-weight: bold;color: green;">  EDIT</p>
                                        - Edit the details of the subject/lesson by clicking the Edit icon (<i class="fas fa-pen"></i>).
                                        <br><br>
                                        <p style="font-size: 15px; font-weight: bold;color: green;">  PUBLISH</p>
                                        - Click the Publish/Unpublish icon (<i class="fas fa-check-circle"></i>) to publish the subject. 
                                        <br>
                                        - Click the Publish/Unpublish button (<i class="fas fa-users-cog"></i>) to publish the lesson.
                                        <br><br>
                                        <p style="font-size: 15px; font-weight: bold;color: green;">  SHARE</p>
                                        - Share the subject/lesson to other teachers by clicking on the Share/Unshare icon (<i class="fas fa-users-cog"></i>)
                                        <br><br>
                                        <p style="font-size: 15px; font-weight: bold;color: green;">  DELETE</p>
                                        - Delete the subject/lesson/topic by clicking the Delete icon (<i class="fa fa-trash"></i>).
                                    </div>
                                    <br>
                                    <h4>Step 2: Enroll students</h4>
                                    <p style="padding: 20px;"> 
                                        - Enroll students to your class. 
                                    </p>

                                    <h4>Step 3: Create and assign assessments </h4>
                                    <p style="padding: 20px;"> 
                                        - Go to your subject then click the Plus button (insert icon image here) to create an assessment.

                                        <br> 
                                        - Publish the assessment by clicking the Publish/Unpublish button (insert icon image here). 
                                    </p>

                                    <h4>Step 4: View class reports/records</h4>
                                    <p style="padding: 20px;"> 
                                        - The general average of each student enrolled in your class is shown.
                                        <br>
                                        - Click the Eye button to view the detailed scores of your students for each assessment.

                                     </p>
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