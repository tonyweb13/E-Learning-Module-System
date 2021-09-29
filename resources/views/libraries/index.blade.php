<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    @endsection
    @include('layouts.head', ['title' => 'Library'])
<body class="body-bg">
    @section('content')
        <div class="review-consult">
                <div class="container-reviews">
                    @include('libraries.navbar')
                    <div class="tab-content" style="background-color: #f6f3ee !important; padding: 30px;">
                        <h5 class ="headline">Browse</h5>
                        <div class="row space-title">
                            <div class="col-6">
                                <form class="input-group" action="/libraries" autocomplete="off">
                                    <div class="input-group-prepend col-6">
                                        <button class="search-btn geo-primary" data-toggle="tooltip" title="Search">
                                            <i class="fa fa-search"></i>
                                        </button>
                                         <input type="text" class="form-control mr-2" name="keyword" placeholder="Search Tag, Point or Question Type" value="{{$keyword}}">
                                    </div>
                                </form>
                                <br><br>
                            </div>
                            
                        </div>
                        <div style="overflow: auto;" class="border">
                             <table class="table">
                                    <tr class="geo-secondary">
                                        <td width="5%"></td>
                                        <th width="5%">S No.</th>
                                        <th width="20%">Question Tag</th>
                                        <th width="20%">Question Type</th>
                                        <th width="5%">Point</th>
                                        <th width="35%">Question</th>
                                        
                                    </tr>
                                    @foreach($results as $key=> $result)
                                        <tr>
                                            <td>
                                                <input class="question-id" type="checkbox" id="student-id" name="student_id" value="{{$result->id}}">
                                            </td>
                                            <td>{{$key + 1}}</td>
                                            <td>{{$result->tag ?? ''}}</td>
                                            <td>{{$result->questionType->name ?? ''}}</td>
                                            <td>{{$result->point ?? ''}}</td>
                                            <td>
                                                <div style="width:100% !important;">
                                                     <?php   
                                                        echo $result->question ?? ''; 
                                                    ?>
                                                </div>
                                               
                                            </td>
                                            
                                        </tr>
                                    @endforeach
                                </table>
                        </div>
                        {{$results->links()}}
                    </div>
                </div>
            </div>
    @endsection
    
    @include('layouts.navbar', ['title' => 'LIBRARY'])
    @include('layouts.alert')
</body>
<script type="text/javascript" src="/js/ebooks/users/index.js"></script>
<script type="text/javascript" src="/js/ebooks/users/navbar.js"></script>
<script type="text/javascript" src="/js/alert.js"></script>
</html>