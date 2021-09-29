<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    @endsection
    @include('layouts.head', ['title' => 'EBOOKS'])
<body class="body-bg">
    @section('content')
        <div class="review-consult">
            <div class="container-reviews">
                @include('ebooks.users.navbar')
                <div class="tab-content" style="background-color: #f6f3ee !important; padding: 30px;">
                    <div id="ebook-card" class="tab-pane fade show active">
                        <h5>Ebooks</h5>
                        <br>
                        <div class="row space-title">
                            <div class="col-6">
                                <form class="input-group" action="/ebooks/get/products" autocomplete="off">
                                    <div class="input-group-prepend col-md-6">
                                        <button class="search-btn geo-primary" data-toggle="tooltip" title="Search">
                                            <i class="fa fa-search"></i>
                                        </button>
                                         <input type="text" class="form-control mr-12" name="keyword" placeholder="Search Ebook Name" value="{{$keyword}}">
                                    </div>
                                </form>
                                <br><br>
                            </div>
                            <div class="col-6 text-right">
                                <button type="button"  onclick="listView()" data-toggle="tooltip" title="List View" class="action-btn btn  text-light mb-1" style="background-color: #f15a24;">
                                    <i class="fas fa-list"></i>
                                </button>
                                <button type="button"  onclick="gridView()" data-toggle="tooltip" title="Grid View" class="action-btn btn text-light mb-1" style="background-color: #f15a24;">
                                    <i class="fas fa-th-large"></i>
                                </button>
                            </div>
                        </div>
                        <br>
                        <div class="row" id="grid-view">
                                <div class="col-md-12">
                                    <div class="row pl-3 pr-2">
                                        @foreach($results as $key=> $result)
                                            <div class="col-md-3 pr-2">
                                                <div class="border" style="background-color: #142d57;">
                                                    <br>
                                                    <h5 class="text-center" style="color: white;">{{$result->ebook_title ?? ''}}</h5>
                                                    <img src="{{$result->cover_image ?? '/images/no_image.png'}}" onerror="this.src='/images/no_image.png'" width="300px" height="300px;" class="geo-border-primary border mt-2">
                                                    <p class="text-center" style="color: white; margin-top: 10px;">Price: PHP {{$result->price}}</p>
                                                    <div class="text-center" style="padding: 10px;">
                                                        <button type="button" class="btn btn-primary text-light mb-1">
                                                            <i class="fa fa-eye"></i>
                                                            View
                                                        </button>
                                                        <button type="button" class="btn text-light mb-1" style="background-color: #f15a24;">
                                                            <i class="fas fa-shopping-cart"></i>
                                                            Buy Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                        <div style="overflow: auto;" class="border" id="list-view">
                            <table class="table" style="text-align: center;">
                                <tr class="geo-secondary">
                                    <th width="10%">S.No</th>
                                    <th>Ebook Cover Photo</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th width="15%">Actions</th>
                                </tr>
                                @foreach($results as $key=> $result)
                                    <tr>
                                        <td>{{$key + 1}}</td>
                                        <td>
                                            <img src="{{$result->cover_image ?? '/images/no_image.png'}}" onerror="this.src='/images/no_image.png'" width="130px" height="100px;" class="geo-border-primary border mt-2">
                                        </td>
                                        <td>{{$result->ebook_title ?? ''}}</td>
                                        <td>{{$result->price ?? ''}}</td>
                                        <td>
                                            <a href="/ebooks/view/{{$result->id}}" data-toggle="tooltip" title="View Sample" class="action-btn btn geo-primary text-light mb-1">
                                                <i class="fa fa-eye"></i>
                                            </a>
                                            <a href="/ebooks/view/{{$result->id}}" data-toggle="tooltip" title="Buy Now" class="action-btn btn text-light mb-1" style="background-color: #f15a24;">
                                                <i class="fas fa-shopping-cart"></i>
                                            </a>
                                        </td>
                                    </tr>
                                @endforeach  
                            </table>
                        </div>
                        <br>
                        <div id="page-nav">{{ $results->links() }}</div>
                    </div>
                </div>
            </div>
        </div>
    @endsection
    
    @include('layouts.navbar', ['title' => 'EBOOKS'])
    @include('layouts.alert')
</body>
<script type="text/javascript" src="/js/ebooks/users/index.js"></script>
<script type="text/javascript" src="/js/ebooks/users/navbar.js"></script>
<script type="text/javascript" src="/js/alert.js"></script>
</html>