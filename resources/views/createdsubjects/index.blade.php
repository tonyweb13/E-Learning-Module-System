<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    <link rel="stylesheet" type="text/css" href="/css/font-awesome.min.css">
    @endsection
    @include('layouts.head', ['title' => 'Subject Product'])
    <body class="body-bg">
        @section('content')
        <h5 class ="headline">Browse</h5>
        <div class="row space-title">
            <div class="col-6">
                <form class="input-group" action="/createdsubjects" autocomplete="off">
                    <div class="input-group-prepend">
                        <button class="search-btn geo-primary" data-toggle="tooltip" title="Search">
                            <i class="fa fa-search"></i>
                        </button>
                         <input type="text" class="form-control mr-12" size="30" name="keyword" placeholder="Search Class Name" value="{{$keyword}}">
                    </div>
                </form>
                <br><br>
            </div>
            <div class="col-6">
                <a href="/createdsubjects/create" class="right geo-primary mb-1 button-add" data-toggle="tooltip" title="Add Subject">
                   New<i class="fa fa-plus"></i>
                </a>
            </div>
        </div>
        <div style="overflow: auto;" class="border">
            <table class="table">
                <tr class="geo-secondary">
                    <th width="5%">S No.</th>
                    <th>Subject Name</th>
                    <th width="20%" class="text-center">Actions</th>
                </tr>
                @foreach($results as $key=> $result)
                    <tr>
                        <td>{{$key + 1}}</td>
                        <td>{{$result->name ?? ''}}</td>
                        <td>
                            <a href="/createdsubjects/view/{{$result->id}}" data-toggle="tooltip" title="View Subject" class="action-btn btn geo-primary text-light mb-1">
                                <i class="fa fa-eye"></i>
                            </a>
                            
                            <a href="/createdsubjects/edit/{{$result->id}}" data-toggle="tooltip" title="Edit Subject" class="action-btn btn btn-primary text-light mb-1">
                                <i class="fa fa-edit"></i>
                            </a>
                            <a href="/createdsubjects/shared/{{$result->id}}" data-toggle="tooltip" title="Share/Unshare Subject" class="action-btn btn  text-light mb-1" style="background-color:#f39189;">
                                <i class="fas fa-users-cog"></i>
                            </a>
                            <button type="button" value="{{$result->id}}" onclick="deleteData(this.value)" data-toggle="tooltip" title="Delete Subject" class="action-btn btn btn-danger text-light delete-btn mb-1">
                                <i class="fa fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                @endforeach
            </table>
        </div>
        <!-- render here -->
    @endsection
    
    @include('layouts.navbar', ['title' => 'SUBJECT PRODUCT'])
    @include('layouts.alert')
    <script type="text/javascript" src="/js/alert.js"></script>
    <script type="text/javascript" src="/js/createdsubjects/index.js"></script>
    </body>
</html>