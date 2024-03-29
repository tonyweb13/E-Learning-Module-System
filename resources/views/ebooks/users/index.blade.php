<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    <!--<link rel="stylesheet" href="/bibi/resources/styles/bibi.css" />-->
    @endsection
    @include('layouts.head', ['title' => 'EBOOKS'])
    <body class="body-bg">
        @section('content')
            <h5>My Ebooks</h5>
            <br>
            <div class="row space-title">
                <div class="col-6">
                    <form class="input-group" action="/ebooks/get/myebooks" autocomplete="off">
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
                                    <div class='ebookTitle'>
                                        <h6 class="text-center" style="color: white;">{{$result->ebook->ebook_title ?? ''}}</h6>
                                    </div>
                                    <!--<h5 class="text-center" style="color: white;">{{$result->ebook->ebook_title ?? ''}}</h5>-->
                                    <img src="{{$result->ebook->cover_image ?? '/images/no_image.png'}}" onerror="this.src='/images/no_image.png'" width="300px" height="300px;" class="geo-border-primary border mt-2">
                                    <p class="text-center" style="color: white; margin-top: 10px;"></p>
                                    <div class="text-center" style="padding: 10px;">
                                        <!--MODAL START-->
                                        @php
            								$arr = explode('/',$result->file);
            							@endphp
							            
							            @if(pathinfo($result->ebook->file, PATHINFO_EXTENSION) == 'pdf')
                                            <button type="button"  value="{{$result->ebook->file}}" class=" btn orange-pastel text-light mb-1" onclick="openPdfEbook(this.value);">
                                                <i class="fa fa-eye"></i>View
                                            </button>
                                        @else
                                            <button data-target="#modal-lg4-{{$result->id}}" data-toggle="modal" title="View" class="btn text-light mb-1 orange-pastel" >
                                                <i class="fa fa-eye"></i> View
                                            </button>
                                        @endif
                                        
                                        <div class="modal fade" id="modal-lg4-{{$result->id}}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                            <div class="modal-dialog"style="max-width: 1800px!important;">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                        <h4 class="modal-title"></h4>
                                                    </div>
                                                    <div class="modal-body">
                                                      <iframe src="/bibi/?book=/bibi-bookshelf/{{$result->ebook->ebook_title}}"width="100%" height="800" align="center">
                                                      </iframe>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!--MODAL END-->
                   
                                        @if(Auth::user()->userType->name == 'Teacher' || Auth::user()->userType->name == 'Institute Admin')
                                            @if($result->ebook->tg_id || $result->ebook->tg_id != 0)
                                                <button type="button" value="{{$result->ebook->tg_id}}" class="btn text-light mb-1" style="background-color: #9575cd;" onclick="openTg(this.value);">
                                                    <i class="fa fa-eye"></i>
                                                    View TG
                                                </button>
                                            @else
                                                <button type="button" value="{{$result->ebook->tg_id}}" class="btn text-light mb-1" style="background-color: #9575cd; opacity: 0.7;" >
                                                    <i class="fa fa-eye"></i>
                                                    View TG
                                                </button>
                                            @endif
                                            
                                            @if($result->ebook->cm_id || $result->ebook->cm_id !=0)
                                                <button type="button" class="btn text-light mb-1" value="{{$result->ebook->cm_id}}" style="background-color: #66cdaa;" onclick="openCM(this.value);">
                                                    <i class="fa fa-eye"></i>
                                                    View CM
                                                </button>
                                            @else
                                                <button type="button" class="btn text-light mb-1" value="{{$result->ebook->cm_id}}" style="background-color: #66cdaa; opacity:0.9;">
                                                    <i class="fa fa-eye"></i>
                                                    View CM
                                                </button>
                                            @endif
                                        @endif
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
                        <!--<th>Price</th>-->
                        <th width="23%">Actions</th>
                    </tr>
                    @foreach($results as $key=> $result)
                        <tr>
                            <td>{{ $results->firstItem() + $key }}</td>
                            <td>
                                <img src="{{$result->ebook->cover_image ?? '/images/no_image.png'}}" onerror="this.src='/images/no_image.png'" width="100px" height="100px;" class="geo-border-primary border mt-2" style='border-radius:5px;'>
                            </td>
                            
                            <td>{{$result->ebook->ebook_title ?? ''}}</td>
                            <!--<td>{{$result->price ?? ''}}</td>-->
                            
                            <td>
                                @php
    								$arr = explode('/',$result->file);
    							@endphp
    							@if(pathinfo($result->ebook->file, PATHINFO_EXTENSION) == 'pdf')
                                    <button type="button"  value="{{$result->ebook->file}}" class="action-btn btn orange-pastel text-light mb-1" onclick="openPdfEbook(this.value);">
                                        <i class="fa fa-eye"></i>
                                    </button>
                                @else
                                    <button data-target="#modal-lg3-{{$result->id}}" data-toggle="modal" title="View" class="action-btn btn orange-pastel text-light mb-1">
                                        <i class="fa fa-eye"></i>
                                    </button>
                                @endif
    							<!--MODAL START-->
                                <div class="modal fade" id="modal-lg3-{{$result->id}}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                    <div class="modal-dialog"style="max-width: 1800px!important;">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                <h4 class="modal-title"></h4>
                                            </div>
                                            <div class="modal-body">
                                              <iframe src="/bibi/?book=/bibi-bookshelf/{{$result->ebook->ebook_title}}"width="100%" height="800" align="center">
                                              </iframe>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--MODAL END-->
                                @if(Auth::user()->userType->name == 'Teacher' || Auth::user()->userType->name == 'Institute Admin')
                                    @if($result->ebook->tg_id || $result->ebook->tg_id != 0)
                                        <button type="button" value="{{$result->ebook->tg_id}}" title="View TG" class="btn text-light mb-1" style="background-color: #9575cd;" onclick="openTg(this.value);">
                                            <i class="fa fa-eye"></i>
                                        </button>
                                    @else
                                        <button type="button" value="{{$result->ebook->tg_id}}" title="View TG" class="btn text-light mb-1" style="background-color: #9575cd;opacity: 0.7;" >
                                            <i class="fa fa-eye"></i>
                                        </button>
                                    @endif
                                    
                                    @if($result->ebook->cm_id || $result->ebook->cm_id !=0)
                                        <button type="button" class="btn text-light mb-1" title="View CM" value="{{$result->ebook->cm_id}}" style="background-color: #66cdaa;" onclick="openCM(this.value);">
                                            <i class="fa fa-eye"></i>
                                        </button>
                                    @else
                                        <button type="button" class="btn text-light mb-1" title="View CM" value="{{$result->ebook->cm_id}}" style="background-color: #66cdaa; opacity: 0.7;" >
                                            <i class="fa fa-eye"></i>
                                        </button>
                                    @endif
                                @endif  
                            </td>
                        </tr>
                    @endforeach  
                </table>
            </div>
            <br>
            <div id="page-nav">{{ $results->links() }}</div>
            <br>
            <br>
        @endsection
        @include('ebooks.users.view-modal')
        @include('ebooks.users.ebook-reader-modal')
        @include('layouts.navbar', ['title' => 'EBOOKS'])
        @include('layouts.alert')
    </body>
 <!--   <script src="/bibi/resources/scripts/bibi.js"></script>-->
	<!--<script src="/bibi/presets/default.js"></script>-->
    <script type="text/javascript" src="/js/ebooks/users/index.js"></script>
    <script type="text/javascript" src="/js/ebooks/users/navbar.js"></script>
    <script type="text/javascript" src="/js/alert.js"></script>
</html>