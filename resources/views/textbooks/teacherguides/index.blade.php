<!DOCTYPE html>

<html>

    @section('styles')

    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">

    @endsection



    @include('layouts.head', ['title' => 'TEXT BOOKS'])

    <body class="body-bg">

        @section('content')

            <div class="review-consult">

                <div class="container-reviews">

                    @include('textbooks.navbar')

                    <div class="tab-content" style="background-color: #f6f3ee !important; padding: 30px;">

                        <h5 class ="headline">Browse</h5>

                        <div class="row space-title">

                            <div class="col-6">

                                <form class="input-group" action="/textbooks/teachersguides" autocomplete="off">

                                    <div class="input-group-prepend col-6">

                                        <button class="search-btn geo-primary" data-toggle="tooltip" title="Search">

                                            <i class="fa fa-search"></i>

                                        </button>

                                         <input type="text" class="form-control mr-2" name="keyword" placeholder="Search Title" value="{{$keyword}}">

                                    </div>

                                </form>

                                <br><br>

                            </div>

                            <div class="col-6">

                                <a href="/textbooks/teachersguides/create" class="right geo-primary mb-1 button-add" data-toggle="tooltip" title="Add New TG">

                                   New<i class="fa fa-plus"></i>

                                </a>

                            </div>

                        </div>

                        <div style="overflow: auto;" class="border">

                            <table class="table">

                                <tr class="geo-secondary">

                                    <th width="10%">S.No</th>

                                    <th width="20%">Image</th>

                                    <th>Title</th>

                                    <th width="15%">Action</th>



                                </tr>

                                @foreach($results as $key=> $result)

                                    <tr>

                                        <td>{{$key + 1}}</td>

                                        <td>

                                            <img src="{{$result->cover_image ?? '/img/no_image.png'}}" width="130px" height="100px;" class="geo-border-primary border mt-2">

                                        </td>

                                        <td>{{$result->title ?? ''}}</td>

                                        <td>

                                            <a href="/textbooks/teachersguides/{{$result->id}}" data-toggle="tooltip" title="View TG" class="action-btn btn geo-primary text-light mb-1">

                                                <i class="fa fa-eye"></i>

                                            </a>



                                            <a href="/textbooks/workbooks/edit/{{$result->id}}" data-toggle="tooltip" title="Edit TG" class="action-btn btn btn-primary text-light mb-1">

                                                <i class="fa fa-edit"></i>

                                            </a>

                                            <button type="button" value="{{$result->id}}" onclick="deleteData(this.value)" data-toggle="tooltip" title="Delete CM" class="action-btn btn btn-danger text-light delete-btn mb-1">

                                                <i class="fa fa-trash"></i>

                                            </button>

                                        </td>

                                    </tr>

                                @endforeach

                            </table>

                        </div>

                       {{$results->render()}}

                    </div>

                </div>

            </div>

        @endsection

    @include('layouts.navbar', ['title' => 'TEACHERS GUIDES'])

    @include('layouts.alert')

    <script type="text/javascript" src="/js/alert.js"></script>

    <script type="text/javascript" src="/js/textbooks/navbar.js"></script>

    <script type="text/javascript" src="/js/textbooks/workbooks/index.js"></script>

    </body>

</html>
