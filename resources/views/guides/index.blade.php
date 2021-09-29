<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    <link rel="stylesheet" type="text/css" href="/css/font-awesome.min.css">
    @endsection

    @include('layouts.head', ['title' => 'EDGE GUIDES'])
    <body class="body-bg">
        @section('content')
        <h5 class ="headline">Browse Edge Guides</h5>
        <div class="row space-title">
            <div class="col-6">
                <form class="input-group" action="/guides" autocomplete="off">
                    <div class="input-group-prepend">
                        <button class="search-btn geo-primary" data-toggle="tooltip" title="Search">
                            <i class="fa fa-search"></i>
                        </button>
                         <input type="text" class="form-control mr-2" name="keyword" placeholder="Search title" value="{{$keyword}}">
                    </div>
                </form>
                <br><br>
            </div>
            <div class="col-6">

                <a href="/guides/create" class="right geo-primary mb-1 button-add" data-toggle="tooltip" title="Add Edge Guide">
                   New<i class="fa fa-plus"></i>
                </a>
            </div>
        </div>
        <div style="overflow: auto;" class="border">
            <table class="table">
                <tr class="geo-secondary">
                    <th>S.No</th>
                    <th>Title</th>
                    <th>Actions</th>
                </tr>
                @foreach($results as $key=> $result)
                    <tr>
                        <td>{{$key + 1}}</td>
                        <td>{{$result->title ?? ''}}</td>
                        <td>
                            <!-- <a href="/guides/view/{{$result->id}}" data-toggle="tooltip" title="View full information" class="action-btn btn geo-primary text-light mb-1">
                                <i class="fa fa-eye"></i>
                            </a> -->

                            <a href="/guides/view/{{$result->id}}" data-toggle="tooltip" title="Under development" class="action-btn btn geo-primary text-light mb-1">
                                <i class="fa fa-eye"></i>
                            </a>
                            
                            <a href="/guides/edit/{{$result->id}}" data-toggle="tooltip" title="Edit Guide" class="action-btn btn btn-primary text-light mb-1">
                                <i class="fa fa-edit"></i>
                            </a>
                            <button type="button" value="{{$result->id}}" onclick="deleteData(this.value)" data-toggle="tooltip" title="Delete Guide" class="action-btn btn btn-danger text-light delete-btn mb-1">
                                <i class="fa fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                @endforeach  
            </table>
        </div>
        <div id="page-nav">{{ $results->links() }}</div>
    @endsection
    
    @include('layouts.navbar', ['title' => 'EDGE GUIDES'])
    @include('layouts.alert')
    <script type="text/javascript" src="/js/alert.js"></script>
    <script type="text/javascript" src="/js/guides/index.js"></script>
    </body>
</html>