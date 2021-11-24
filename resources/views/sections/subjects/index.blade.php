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

                        <h5>My Subjects</h5>

                        <br>

                        <div class="row space-title">

                            <div class="col-6">

                                <form class="input-group" action="/sections/subjects/{{$section->id}}" autocomplete="off">

                                    <div class="input-group-prepend">

                                        <button class="search-btn geo-primary" data-toggle="tooltip" title="Search">

                                            <i class="fa fa-search"></i>

                                        </button>

                                         <input type="text" class="form-control mr-12"  name="keyword" placeholder="Search Subject Name" value="{{$keyword}}">

                                    </div>

                                </form>

                                <br><br>

                            </div>

                            <div class="col-6">

                                <button type="button"  onclick="listView()" data-toggle="tooltip" title="List View" class="right action-btn btn  text-light mb-1" style="background-color: #f15a24;margin-left:10px;">

                                    <i class="fas fa-list"></i>

                                </button>

                                <button type="button"  onclick="gridView()" data-toggle="tooltip" title="Grid View" class="right text-right action-btn btn text-light mb-1" style="background-color: #f15a24;">

                                    <i class="fas fa-th-large"></i>

                                </button>

                                @if(Auth::user()->userType->name == 'Teacher' ||Auth::user()->userType->name == 'Institute Admin')

                                    @if(count($section->sectionTeacher) > 0)

                                        @if($section->sectionTeacher[0]->create_priv == 1)

                                            <a href="/sections/subjects/create/{{$section->id}}" class="right geo-primary mb-1 button-add" data-toggle="tooltip" title="Add Subject">

                                               New<i class="fa fa-plus"></i>

                                            </a>

                                        @endif

                                    @else

                                        <a href="/sections/subjects/create/{{$section->id}}" class="right geo-primary mb-1 button-add" data-toggle="tooltip" title="Add Subject">

                                           New<i class="fa fa-plus"></i>

                                        </a>

                                    @endif

                                @endif

                            </div>

                        </div>

                        <!--grid view-->

                        <div class="row" id="grid-view">

                            <div class="col-md-12">

                                <div class="row pl-3 pr-5">

                                    <br>

                                    @foreach($results as $key=> $result)

                                        <div class="col-md-3 pr-6" style="padding:9px;">

                                            <div class="border" style="background-color: #142d57; border-radius:5px;">

                                                <br>

                                                <div class='ebookTitle'>

                                                    <h6 class="text-center" style="color: white;">{{$result->mySubject->createdSubject->name ?? ''}}</h6>

                                                </div>

                                                <img src="{{$result->image ?? '/images/bg/math.jpg'}}" width="300px" height="300px;" class="geo-border-primary border mt-2">



                                                <div class="text-center" style="padding-top: 10px;padding-bottom: 10px;padding-left:px;">



                                                    @if(Auth::user()->userType->name == 'Teacher')

                                                        <a href="/sections/subjects/lessons/view/{{$section->id}}/{{$result->id}}/null" data-toggle="tooltip" title="Create/View Lessons" class="action-btn btn orange-pastel text-light mb-1">

                                                            <i class="fa fa-eye"></i>

                                                        </a>

                                                        <a href="/sections/subjects/assessments/{{$section->id}}/{{$result->id}}/null" data-toggle="tooltip" title="View Assessments" class="action-btn btn text-light mb-1" style="background-color: #874741;">

                                                            <i class="fa fa-tasks"></i>

                                                        </a>

                                                        @if(count($section->sectionTeacher) > 0)



                                                            @if($section->sectionTeacher[0]->edit_priv == 1)

                                                                <a href="/sections/subjects/edit/{{$section->id}}/{{$result->id}}" data-toggle="tooltip" title="Edit Subject" class="action-btn btn btn-primary text-light mb-1">

                                                                    <i class="fa fa-edit"></i>

                                                                </a>

                                                            @endif



                                                            @if($section->sectionTeacher[0]->delete_priv == 1)

                                                                <button type="button" value="{{$result->id}}" onclick="deleteData(this.value)" data-toggle="tooltip" title="Delete Subject" class="action-btn btn btn-danger text-light delete-btn mb-1">

                                                                    <i class="fa fa-trash"></i>

                                                                </button>

                                                            @endif

                                                            <a href="/sections/subjects/report/{{$section->id}}/{{$result->id}}" data-toggle="tooltip" title="View Online Learners Grades " class="action-btn btn text-light mb-1" style="background-color:#37cf30;">

                                                                <i class="fas fa-chart-pie"></i>

                                                            </a>

                                                            <a href="/sections/subjects/report/modular/{{$section->id}}/{{$result->id}}" data-toggle="tooltip" title="View Modular Learners  Grades " class="action-btn btn text-light mb-1" style="background-color:#f15a24;">

                                                                <i class="fas fa-chart-line"></i>

                                                            </a>

                                                        @else



                                                            <a href="/sections/subjects/edit/{{$section->id}}/{{$result->id}}" data-toggle="tooltip" title="Edit Subject" class="action-btn btn btn-primary text-light mb-1">

                                                                <i class="fa fa-edit"></i>

                                                            </a>



                                                            <button type="button" value="{{$result->id}}" onclick="deleteData(this.value)" data-toggle="tooltip" title="Delete Subject" class="action-btn btn btn-danger text-light delete-btn mb-1">

                                                                <i class="fa fa-trash"></i>

                                                            </button>



                                                            @if($result->status == 0)



                                                                <button type="button" value="{{$result->id}}" onclick="uploadSubject(this.value)" data-toggle="tooltip" title="Publish/Unpublish Subject" class="action-btn btn purple-pastel text-light delete-btn mb-1">

                                                                    <i class="far fa-check-circle"></i>

                                                                </button>



                                                            @else



                                                                <button type="button" value="{{$result->id}}" onclick="hideSubject(this.value)" data-toggle="tooltip" title="Publish/Unpublish Subject" class="action-btn btn green-pastel text-light delete-btn mb-1">

                                                                    <i class="fas fa-check-circle"></i>

                                                                </button>



                                                            @endif

                                                            <a href="/sections/subjects/report/{{$section->id}}/{{$result->id}}" data-toggle="tooltip" title="View Online Learners Grades " class="action-btn btn text-light mb-1" style="background-color:#37cf30;">

                                                                <i class="fas fa-chart-pie"></i>

                                                            </a>

                                                            <a href="/sections/subjects/report/modular/{{$section->id}}/{{$result->id}}" data-toggle="tooltip" title="View Modular Learners  Grades " class="action-btn btn text-light mb-1" style="background-color:#f15a24;">

                                                                <i class="fas fa-chart-line"></i>

                                                            </a>

                                                        @endif

                                                    @elseif(Auth::user()->userType->name == 'Institute Admin')

                                                        <a href="/sections/subjects/lessons/view/{{$section->id}}/{{$result->id}}/null" data-toggle="tooltip" title="Create/View Lessons" class="action-btn btn orange-pastel text-light mb-1">

                                                            <i class="fa fa-eye"></i>

                                                        </a>

                                                        <a href="/sections/subjects/assessments/{{$section->id}}/{{$result->id}}/null" data-toggle="tooltip" title="View Assessments" class="action-btn btn text-light mb-1" style="background-color: #874741;">

                                                            <i class="fa fa-tasks"></i>

                                                        </a>

                                                        <a href="/sections/subjects/edit/{{$section->id}}/{{$result->id}}" data-toggle="tooltip" title="Edit Subject" class="action-btn btn btn-primary text-light mb-1">

                                                            <i class="fa fa-edit"></i>

                                                        </a>



                                                        <button type="button" value="{{$result->id}}" onclick="deleteData(this.value)" data-toggle="tooltip" title="Delete Subject" class="action-btn btn btn-danger text-light delete-btn mb-1">

                                                            <i class="fa fa-trash"></i>

                                                        </button>



                                                        @if($result->status == 0)



                                                            <button type="button" value="{{$result->id}}" onclick="uploadSubject(this.value)" data-toggle="tooltip" title="Publish/Unpublish Subject" class="action-btn btn purple-pastel text-light delete-btn mb-1">

                                                                <i class="far fa-check-circle"></i>

                                                            </button>



                                                        @else



                                                            <button type="button" value="{{$result->id}}" onclick="hideSubject(this.value)" data-toggle="tooltip" title="Publish/Unpublish Subject" class="action-btn btn green-pastel text-light delete-btn mb-1">

                                                                <i class="fas fa-check-circle"></i>

                                                            </button>



                                                        @endif

                                                        <a href="/sections/subjects/report/{{$section->id}}/{{$result->id}}" data-toggle="tooltip" title="View Online Learners Grades " class="action-btn btn text-light mb-1" style="background-color:#37cf30;">

                                                            <i class="fas fa-chart-pie"></i>

                                                        </a>

                                                        <a href="/sections/subjects/report/modular/{{$section->id}}/{{$result->id}}" data-toggle="tooltip" title="View Modular Learners  Grades " class="action-btn btn text-light mb-1" style="background-color:#f15a24;">

                                                            <i class="fas fa-chart-line"></i>

                                                        </a>

                                                    @else

                                                        <a href="/sections/subjects/lessons/view/{{$section->id}}/{{$result->id}}/null" data-toggle="tooltip" title="View Lessons" class="action-btn btn orange-pastel text-light mb-1">

                                                            <i class="fa fa-eye"></i>

                                                        </a>

                                                        <a href="/sections/subjects/assessments/students/{{$section->id}}/{{$result->id}}/null" data-toggle="tooltip" title="View Assessments" class="action-btn btn text-light mb-1" style="background-color: #874741;">

                                                            <i class="fa fa-tasks"></i>

                                                        </a>

                                                    @endif



                                                </div>

                                            </div>

                                        </div>

                                    @endforeach

                                </div>

                            </div>

                        </div>

                        <!--list view-->

                        <div style="overflow: auto;" id="list-view">

                            <table class="table border" style="border-radius: 8px !important;">

                                <tr style="background-color:#0074bc;color:white;">

                                    <th class="text-center" width="5%">S No.</th>

                                    <th width="65%">Subject Name</th>

                                    <th class="text-center" width="30%">Actions</th>

                                </tr>

                                @foreach($results as $key=> $result)

                                    <tr>

                                        <td class="text-center">{{$key + 1}}</td>

                                        <td>{{$result->mySubject->createdSubject->name ?? ''}}</td>

                                        <td class="text-center">



                                            @if(Auth::user()->userType->name == 'Teacher')

                                                        <a href="/sections/subjects/lessons/view/{{$section->id}}/{{$result->id}}/null" data-toggle="tooltip" title="Create/View Lessons" class="action-btn btn orange-pastel text-light mb-1">

                                                            <i class="fa fa-eye"></i>

                                                        </a>

                                                        <a href="/sections/subjects/assessments/{{$section->id}}/{{$result->id}}/null" data-toggle="tooltip" title="View Assessments" class="action-btn btn text-light mb-1" style="background-color: #874741;">

                                                            <i class="fa fa-tasks"></i>

                                                        </a>

                                                        @if(count($section->sectionTeacher) > 0)



                                                            @if($section->sectionTeacher[0]->edit_priv == 1)

                                                                <a href="/sections/subjects/edit/{{$section->id}}/{{$result->id}}" data-toggle="tooltip" title="Edit Subject" class="action-btn btn btn-primary text-light mb-1">

                                                                    <i class="fa fa-edit"></i>

                                                                </a>

                                                            @endif



                                                            @if($section->sectionTeacher[0]->delete_priv == 1)

                                                                <button type="button" value="{{$result->id}}" onclick="deleteData(this.value)" data-toggle="tooltip" title="Delete Subject" class="action-btn btn btn-danger text-light delete-btn mb-1">

                                                                    <i class="fa fa-trash"></i>

                                                                </button>

                                                            @endif

                                                            <a href="/sections/subjects/report/{{$section->id}}/{{$result->id}}" data-toggle="tooltip" title="View Online Learners Grades " class="action-btn btn text-light mb-1" style="background-color:#37cf30;">

                                                                <i class="fas fa-chart-pie"></i>

                                                            </a>

                                                            <a href="/sections/subjects/report/modular/{{$section->id}}/{{$result->id}}" data-toggle="tooltip" title="View Modular Learners  Grades " class="action-btn btn text-light mb-1" style="background-color:#f15a24;">

                                                                <i class="fas fa-chart-line"></i>

                                                            </a>

                                                        @else



                                                            <a href="/sections/subjects/edit/{{$section->id}}/{{$result->id}}" data-toggle="tooltip" title="Edit Subject" class="action-btn btn btn-primary text-light mb-1">

                                                                <i class="fa fa-edit"></i>

                                                            </a>



                                                            <button type="button" value="{{$result->id}}" onclick="deleteData(this.value)" data-toggle="tooltip" title="Delete Subject" class="action-btn btn btn-danger text-light delete-btn mb-1">

                                                                <i class="fa fa-trash"></i>

                                                            </button>



                                                            @if($result->status == 0)



                                                                <button type="button" value="{{$result->id}}" onclick="uploadSubject(this.value)" data-toggle="tooltip" title="Publish/Unpublish Subject" class="action-btn btn purple-pastel text-light delete-btn mb-1">

                                                                    <i class="far fa-check-circle"></i>

                                                                </button>



                                                            @else



                                                                <button type="button" value="{{$result->id}}" onclick="hideSubject(this.value)" data-toggle="tooltip" title="Publish/Unpublish Subject" class="action-btn btn green-pastel text-light delete-btn mb-1">

                                                                    <i class="fas fa-check-circle"></i>

                                                                </button>



                                                            @endif

                                                            <a href="/sections/subjects/report/{{$section->id}}/{{$result->id}}" data-toggle="tooltip" title="View Online Learners Grades " class="action-btn btn text-light mb-1" style="background-color:#37cf30;">

                                                                <i class="fas fa-chart-pie"></i>

                                                            </a>

                                                            <a href="/sections/subjects/report/modular/{{$section->id}}/{{$result->id}}" data-toggle="tooltip" title="View Modular Learners  Grades " class="action-btn btn text-light mb-1" style="background-color:#f15a24;">

                                                                <i class="fas fa-chart-line"></i>

                                                            </a>

                                                        @endif

                                                    @elseif(Auth::user()->userType->name == 'Institute Admin')

                                                        <a href="/sections/subjects/lessons/view/{{$section->id}}/{{$result->id}}/null" data-toggle="tooltip" title="Create/View Lessons" class="action-btn btn orange-pastel text-light mb-1">

                                                            <i class="fa fa-eye"></i>

                                                        </a>

                                                        <a href="/sections/subjects/assessments/{{$section->id}}/{{$result->id}}/null" data-toggle="tooltip" title="View Assessments" class="action-btn btn text-light mb-1" style="background-color: #874741;">

                                                            <i class="fa fa-tasks"></i>

                                                        </a>

                                                        <a href="/sections/subjects/edit/{{$section->id}}/{{$result->id}}" data-toggle="tooltip" title="Edit Subject" class="action-btn btn btn-primary text-light mb-1">

                                                            <i class="fa fa-edit"></i>

                                                        </a>



                                                        <button type="button" value="{{$result->id}}" onclick="deleteData(this.value)" data-toggle="tooltip" title="Delete Subject" class="action-btn btn btn-danger text-light delete-btn mb-1">

                                                            <i class="fa fa-trash"></i>

                                                        </button>



                                                        @if($result->status == 0)



                                                            <button type="button" value="{{$result->id}}" onclick="uploadSubject(this.value)" data-toggle="tooltip" title="Publish/Unpublish Subject" class="action-btn btn purple-pastel text-light delete-btn mb-1">

                                                                <i class="far fa-check-circle"></i>

                                                            </button>



                                                        @else



                                                            <button type="button" value="{{$result->id}}" onclick="hideSubject(this.value)" data-toggle="tooltip" title="Publish/Unpublish Subject" class="action-btn btn green-pastel text-light delete-btn mb-1">

                                                                <i class="fas fa-check-circle"></i>

                                                            </button>



                                                        @endif

                                                        <a href="/sections/subjects/report/{{$section->id}}/{{$result->id}}" data-toggle="tooltip" title="View Online Learners Grades " class="action-btn btn text-light mb-1" style="background-color:#37cf30;">

                                                            <i class="fas fa-chart-pie"></i>

                                                        </a>

                                                        <a href="/sections/subjects/report/modular/{{$section->id}}/{{$result->id}}" data-toggle="tooltip" title="View Modular Learners  Grades " class="action-btn btn text-light mb-1" style="background-color:#f15a24;">

                                                            <i class="fas fa-chart-line"></i>

                                                        </a>

                                                    @else

                                                        <a href="/sections/subjects/lessons/view/{{$section->id}}/{{$result->id}}/null" data-toggle="tooltip" title="View Lessons" class="action-btn btn orange-pastel text-light mb-1">

                                                            <i class="fa fa-eye"></i>

                                                        </a>

                                                        <a href="/sections/subjects/assessments/students/{{$section->id}}/{{$result->id}}/null" data-toggle="tooltip" title="View Assessments" class="action-btn btn text-light mb-1" style="background-color: #874741;">

                                                            <i class="fa fa-tasks"></i>

                                                        </a>

                                                    @endif

                                        </td>

                                    </tr>

                                @endforeach

                            </table>

                        </div>

                        <!-- render here -->

                    </div>

                </div>

            </div>

        </div>

    @endsection



    @include('layouts.navbar', ['title' => 'CLASS - ' . $section->grade->name.' '. $section->name])

    @include('layouts.alert')

</body>

    <script type="text/javascript" src="/js/sections/navbar.js"></script>

    <script type="text/javascript" src="/js/sections/subjects/index.js"></script>

    <script type="text/javascript" src="/js/alert.js"></script>

    <script type="text/javascript" src="/js/zipcode.js"></script>





</html>
