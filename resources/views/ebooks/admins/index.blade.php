<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    <link rel="stylesheet" type="text/css" href="/css/font-awesome.min.css">
    <!--<link rel="stylesheet" href="/bibi/resources/styles/bibi.css" />-->
    @endsection

    @include('layouts.head', ['title' => 'EBOOKS'])
    <body class="body-bg">
        @section('content')
        <h5 class ="headline">Browse EBOOKS</h5>
        <div class="row space-title">
            <div class="col-6">
                <form class="input-group" action="/ebooks" autocomplete="off">
                    <div class="input-group-prepend">
                        <button class="search-btn geo-primary" data-toggle="tooltip" title="Search">
                            <i class="fa fa-search"></i>
                        </button>
                         <input type="text" class="form-control mr-2" name="keyword" placeholder="Search title or price" value="{{$keyword}}">
                    </div>
                </form>
                <br><br>
            </div>
            <div class="col-6">
                <a href="/ebooks/create" class="right geo-primary mb-1 button-add" data-toggle="tooltip" title="Add Ebook">
                   New<i class="fa fa-plus"></i>
                </a>
            </div>
            <div class="col-12 text-right">
                <button type="button"  onclick="listView()" data-toggle="tooltip" title="List View" class="action-btn btn  text-light mb-1" style="background-color: #f15a24;">
                    <i class="fas fa-list"></i>
                </button>
                <button type="button"  onclick="gridView()" data-toggle="tooltip" title="Grid View" class="action-btn btn text-light mb-1" style="background-color: #f15a24;">
                    <i class="fas fa-th-large"></i>
                </button>
            </div>
        </div>
        
        <div class="row" id="grid-view">
            <div class="col-md-12">
                <div class="row pl-3 pr-5">
                    <br>
                    @foreach($results as $key=> $result)
                        <div class="col-md-3 pr-5" style="padding:10px;">
                            <div class="border" style="background-color: #142d57; border-radius:5px;">
                                <br>
                                <div class='ebookTitle'>
                                    <h6 class="text-center" style="color: white;">{{$result->ebook_title ?? ''}}</h6>
                                </div>
                                <img src="{{$result->cover_image ?? '/images/no_image.png'}}" onerror="this.src='/images/no_image.png'" width="300px" height="300px;" class="geo-border-primary border mt-2">
                                <p class="text-center" style="color: white; margin-top: 10px;">Price: PHP {{$result->price}}</p>
                                <div class="text-center" style="padding: 10px;">
                                    @php
        								$arr = explode('/',$result->file);
        							@endphp
        							
        							@if(pathinfo($result->file, PATHINFO_EXTENSION) == 'pdf')
                                        <button type="button"  value="{{$result->file}}" class=" btn orange-pastel text-light mb-1" onclick="openPdfEbook(this.value);">
                                            <i class="fa fa-eye"></i>View
                                        </button>
                                    @else
                                        <button type="button" data-toggle="modal" data-target="#modal-lg1-{{$result->id}}" title="view" class="btn btn orange-pastel text-light mb-1">
                                            <i class="fa fa-eye"></i>
                                            View
                                        </button>
                                    @endif
                                        
                                    <!--modal start-->
                                    <div class="modal fade" id="modal-lg1-{{$result->id}}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                        <div class="modal-dialog"style="max-width: 1800px!important;">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                    <h4 class="modal-title"></h4>
                                                </div>
                                                <div class="modal-body">
                                                  <iframe src="/bibi/?book=/bibi-bookshelf/{{$result->ebook_title}}"width="100%" height="800" align="center">
                                                  </iframe>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--modal end--> 
                                    <a href="/ebooks/assigned/teacher/{{$result->id}}" data-toggle="tooltip" title="Assign Ebook" class=" btn green-pastel text-light mb-1">
                                        <i class="fa fa-user"></i>Assign
                                    </a>
                                    <button type="button" class="btn btn-primary text-light mb-1" onclick="location.href='/ebooks/edit/{{$result->id}}';" >
                                        <i class="fa fa-edit"></i>
                                        Edit
                                    </button>
                                    <button type="button" class="btn btn-danger text-light mb-1"  value="{{$result->id}}" onclick="deleteData(this.value)">
                                        <i class="fa fa-trash"></i>
                                        Delete
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
                    <th width="23%">Actions</th>
                </tr>
                @foreach($results as $key=> $result)
                    <tr>
                        <td>{{ $results->firstItem() + $key }}</td>
                        <td>
                            <img src="{{$result->cover_image ?? '/images/no_image.png'}}" onerror="this.src='/images/no_image.png'" width="100px" height="100px;" class="geo-border-primary border mt-2" style='border-radius:5px;'>
                        </td>
                        <td>{{$result->ebook_title ?? ''}}</td>
                        <td>{{$result->price ?? ''}}</td>
                        <td>
                            @php
								$arr = explode('/',$result->file);
							@endphp
                            
                            @if(pathinfo($result->file, PATHINFO_EXTENSION) == 'pdf')
                                <button type="button"  value="{{$result->file}}" class="action-btn btn orange-pastel text-light mb-1" onclick="openPdfEbook(this.value);">
                                    <i class="fa fa-eye"></i>
                                </button>
                            @else
                                <button data-target="#modal-lg-{{$result->id}}" data-toggle="modal" title="View" class="action-btn btn orange-pastel text-light mb-1">
                                    <i class="fa fa-eye"></i>
                                </button>
                            @endif
                            <div class="modal fade" id="modal-lg-{{$result->id}}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div class="modal-dialog"style="max-width: 1800px!important;">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                            <h4 class="modal-title"></h4>
                                        </div>
                                        <div class="modal-body">
                                          <iframe src="/bibi/?book=/bibi-bookshelf/{{$result->ebook_title}}"width="100%" height="800" align="center">
                                          </iframe>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--<a href="/bibi/?book=/bibi-bookshelf/{{$result->ebook_title}}"target="#modal-lg" data-toggle="tooltip" title="View" class="action-btn btn geo-primary text-light mb-1">-->
                            <!--    <i class="fa fa-eye"></i>-->
                            <!--</a>-->
                            
                            <a href="/ebooks/edit/{{$result->id}}" data-toggle="tooltip" title="Edit Ebook" class="action-btn btn btn-primary text-light mb-1">
                                <i class="fa fa-edit"></i>
                            </a>
                            <a href="/ebooks/assigned/teacher/{{$result->id}}" data-toggle="tooltip" title="Assign Ebook" class="action-btn btn green-pastel text-light mb-1">
                                <i class="fa fa-user"></i>
                            </a>
                            <button type="button" value="{{$result->id}}" onclick="deleteData(this.value)" data-toggle="tooltip" title="Delete Ebook" class="action-btn btn btn-danger text-light delete-btn mb-1">
                                <i class="fa fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                @endforeach  
            </table>
        </div>
        <br>
        <div id="page-nav">{{ $results->links() }}</div>
        <br><br>
    @endsection
    @include('ebooks.users.view-modal')
    @include('layouts.navbar', ['title' => 'EBOOKS'])
    @include('layouts.alert')
    <script type="text/javascript" src="/js/alert.js"></script>
    <script type="text/javascript" src="/js/ebooks/index.js"></script>
    </body>
</html>