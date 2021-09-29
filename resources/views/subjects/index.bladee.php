<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    <link rel="stylesheet" type="text/css" href="/css/font-awesome.min.css">
    @endsection

    @include('layouts.head', ['title' => 'MY SUBJECT'])
    <body class="body-bg">
        @section('content')
        <h5 class ="headline">Browse My Subject</h5>
        <div class="row space-title">
            <div class="col-6">
                <form class="input-group" action="/subjects" autocomplete="off">
                    <div class="input-group-prepend">
                        <button class="search-btn geo-primary" data-toggle="tooltip" title="Search">
                            <i class="fa fa-search"></i>
                        </button>
                         <input type="text" class="form-control mr-2" name="keyword" placeholder="Search title/price/grade" value="{{$keyword}}">
                    </div>
                </form>
                <br><br>
            </div>
            <div class="col-6">
                <a href="/subjects/create" class="right geo-primary mb-1 button-add" data-toggle="tooltip" title="Add Subject">
                   New<i class="fa fa-plus"></i>
                </a>
            </div>
        </div>
        <div style="overflow: auto;" class="border">
            <table class="table">
                <tr class="geo-secondary">
                    <th width="25%">Title</th>
                    <!--<th width="25%">Guide</th>-->
                    <th width="20%">Grade</th>
                    <th width="15%">Price</th>
                    <th width="15%">Actions</th>
                </tr>
                @foreach($results as $key=> $result)
                    <tr>
                        <td>{{ $results->firstItem() + $key }}</td>
                        <!--<td>{{$result->guide->title ?? ''}}</td>-->
                        <td>{{$result->grade->name ?? ''}}</td>
                        <td>{{$result->price ?? ''}}</td>
                        <td>

                            <a href="/guides/view/{{$result->id}}" data-toggle="tooltip" title="Under development" class="action-btn btn geo-primary text-light mb-1">
                                <i class="fa fa-eye"></i>
                            </a>
                            <!--remove this if get the 2 buttons out of if-->
                            @if(Auth::user()->userType->name == 'Admin')
                                <a href="/subjects/edit/{{$result->id}}" data-toggle="tooltip" title="Edit Subject" class="action-btn btn btn-primary text-light mb-1">
                                <i class="fa fa-edit"></i>
                                </a>
                                <button type="button" value="{{$result->id}}" onclick="deleteData(this.value)" data-toggle="tooltip" title="Delete Subject" class="action-btn btn btn-danger text-light delete-btn mb-1">
                                    <i class="fa fa-trash"></i>
                                </button>
                                <a href="/subjects/assigned/teacher/{{$result->id}}" data-toggle="tooltip" title="Assign Subject" class="action-btn btn text-light mb-1" style="background-color: #ff9955;">
                                    <i class="fa fa-user"></i>
                                </a>
                            @endif
                        </td>
                    </tr>
                @endforeach  
            </table>
        </div>
        <br>
        <div id="page-nav">{{ $results->links() }}</div>
        <br><br>
    @endsection
    
    @include('layouts.navbar', ['title' => 'EDGE GUIDES'])
    @include('layouts.alert')
    <script type="text/javascript" src="/js/alert.js"></script>
    <script type="text/javascript" src="/js/subjects/index.js"></script>
    </body>
</html>