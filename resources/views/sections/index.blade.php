<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    @endsection
    @include('layouts.head', ['title' => 'CLASSES'])
    <body class="body-bg">
        @section('content')
        <h5 class ="headline">Browse My Classes</h5>
        <div class="row space-title">
            <div class="col-6">
                <form class="input-group" action="/sections" autocomplete="off">
                    <div class="input-group-prepend">
                        <button class="search-btn geo-primary" data-toggle="tooltip" title="Search">
                            <i class="fa fa-search"></i>
                        </button>
                         <input type="text" class="form-control mr-12" size="30" name="keyword" placeholder="Search Class Name or Grade" value="{{$keyword}}">
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
                    <a href="/sections/create" class="right geo-primary mb-1 button-add" data-toggle="tooltip" title="Add Class">
                       New<i class="fa fa-plus"></i>
                    </a>
                @endif
            </div>
        </div>
        <!--grid view-->
        <div class="row" id="grid-view">
            <div class="col-md-12">
                <div class="row pl-3 pr-5">
                    <br>
                    @foreach($results as $key=> $result)
                        <div class="col-md-3 pr-6" style="padding:10px;">
                            <div class="border" style="background-color: #142d57; border-radius:5px;">
                                <br>
                                <div class='ebookTitle'>
                                    <h6 class="text-center" style="color: white;">{{$result->grade->name ?? ''}}-{{$result->name ?? ''}}</h6>
                                </div>
                                <img src="{{$result->image ?? '/images/bg/math.jpg'}}" onerror="this.src='/images/bg/math.jpg'" width="300px" height="300px;" class="geo-border-primary border mt-2">
                                
                                <p class="text-center" style="color: white; margin-top: 10px;">Start Date:{{date("M d, Y", strtotime($result->start_date)) ?? ''}} - End Date:{{date("M d, Y", strtotime($result->end_date)) ?? ''}} </p>
                               
                                <div class="text-center" style="padding: 10px;">
                                    
                                    @if(Auth::user()->userType->name == 'Teacher')
                                        
                                        <a href="/sections/view/{{$result->id}}" data-toggle="tooltip" title="View Class" class="action-btn btn text-light mb-1 orange-pastel">
                                            <i class="fa fa-eye"></i>
                                        </a>
                                        
                                        @if(count($result->sectionTeacher) > 0)
                                        
                                            @if($result->sectionTeacher[0]->edit_priv == 1)
                                                <a href="/sections/edit/{{$result->id}}" data-toggle="tooltip" title="Edit Class" class="action-btn btn btn-primary text-light mb-1">
                                                    <i class="fa fa-edit"></i>
                                                </a>
                                            @endif
                                            
                                            @if($result->sectionTeacher[0]->delete_priv == 1)
                                                <button type="button" value="{{$result->id}}" onclick="deleteData(this.value)" data-toggle="tooltip" title="Delete Class" class="action-btn btn btn-danger text-light delete-btn mb-1">
                                                    <i class="fa fa-trash"></i>
                                                </button>
                                            @endif
                                            
                                        @else
                                            <a href="/sections/edit/{{$result->id}}" data-toggle="tooltip" title="Edit Class" class="action-btn btn btn-primary text-light mb-1">
                                                <i class="fa fa-edit"></i>
                                            </a>
                                            
                                            <button type="button" value="{{$result->id}}" onclick="deleteData(this.value)" data-toggle="tooltip" title="Delete Class" class="action-btn btn btn-danger text-light delete-btn mb-1">
                                                <i class="fa fa-trash"></i>
                                            </button>
                                            
                                            @if($result->status == 0)
                                                
                                                <button type="button" value="{{$result->id}}" onclick="uploadClass(this.value)" data-toggle="tooltip" title="Publish/Unpublish Class" class="action-btn btn purple-pastel text-light delete-btn mb-1">
                                                    <i class="far fa-check-circle"></i>
                                                </button>
                                                
                                            @else
                                            
                                                <button type="button" value="{{$result->id}}" onclick="hideClass(this.value)" data-toggle="tooltip" title="Publish/Unpublish Class" class="action-btn btn green-pastel text-light delete-btn mb-1">
                                                    <i class="fas fa-check-circle"></i>
                                                </button>
                                            @endif
                                            
                                            <a href="/sections/shared/{{$result->id}}" data-toggle="tooltip" title="Share/Unshare Class" class="action-btn btn  text-light mb-1" style="background-color:#f39189;">
                                                <i class="fas fa-users-cog"></i>
                                            </a>
                                        @endif
                                        
                                    @elseif(Auth::user()->userType->name == 'Institute Admin')
                                        <a href="/sections/view/{{$result->id}}" data-toggle="tooltip" title="View Class" class="action-btn btn text-light mb-1 orange-pastel">
                                            <i class="fa fa-eye"></i>
                                        </a>
                                        <a href="/sections/edit/{{$result->id}}" data-toggle="tooltip" title="Edit Class" class="action-btn btn btn-primary text-light mb-1">
                                            <i class="fa fa-edit"></i>
                                        </a>
                                        
                                        <button type="button" value="{{$result->id}}" onclick="deleteData(this.value)" data-toggle="tooltip" title="Delete Class" class="action-btn btn btn-danger text-light delete-btn mb-1">
                                            <i class="fa fa-trash"></i>
                                        </button>
                                        
                                        @if($result->status == 0)
                                                
                                            <button type="button" value="{{$result->id}}" onclick="uploadClass(this.value)" data-toggle="tooltip" title="Publish/Unpublish Class" class="action-btn btn purple-pastel text-light delete-btn mb-1">
                                                <i class="far fa-check-circle"></i>
                                            </button>
                                            
                                        @else
                                        
                                            <button type="button" value="{{$result->id}}" onclick="hideClass(this.value)" data-toggle="tooltip" title="Publish/Unpublish Class" class="action-btn btn green-pastel text-light delete-btn mb-1">
                                                <i class="fas fa-check-circle"></i>
                                            </button>
                                        @endif
                                        
                                        <a href="/sections/shared/{{$result->id}}" data-toggle="tooltip" title="Share/Unshare Class" class="action-btn btn  text-light mb-1" style="background-color:#f39189;">
                                            <i class="fas fa-users-cog"></i>
                                        </a>
                                    @else 
                                        <a href="/sections/subjects/{{$result->id}}" data-toggle="tooltip" title="View Class" class="action-btn btn text-light mb-1 orange-pastel">
                                            <i class="fa fa-eye"></i>
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
            <table class="table border rounded text-center">
                <tr style="background-color:#0074bc;color:white;">
                    <th width="5%">S No.</th>
                    <th width="25%">Class Name</th>
                    <th width="20%">Grade</th>
                    <th width="15%">Start Date</th>
                    <th width="15%">End Date</th>
                    <th width="20%" class="text-center">Actions</th>
                </tr>
                
                @foreach($results as $key=> $result)
                    <tr>
                        <td>{{$key + 1}}</td>
                        <td>{{$result->name ?? ''}}</td>
                        <td>{{$result->grade->name ?? ''}}</td>
                        <td>{{$result->start_date ?? ''}}</td>
                        <td>{{$result->end_date ?? ''}}</td>
                        <td class="text-center">
                            @if(Auth::user()->userType->name == 'Teacher')
                                        
                                <a href="/sections/view/{{$result->id}}" data-toggle="tooltip" title="View Class" class="action-btn btn text-light mb-1 orange-pastel">
                                    <i class="fa fa-eye"></i>
                                </a>
                                
                                @if(count($result->sectionTeacher) > 0)
                                
                                    @if($result->sectionTeacher[0]->edit_priv == 1)
                                        <a href="/sections/edit/{{$result->id}}" data-toggle="tooltip" title="Edit Class" class="action-btn btn btn-primary text-light mb-1">
                                            <i class="fa fa-edit"></i>
                                        </a>
                                    @endif
                                    
                                    @if($result->sectionTeacher[0]->delete_priv == 1)
                                        <button type="button" value="{{$result->id}}" onclick="deleteData(this.value)" data-toggle="tooltip" title="Delete Class" class="action-btn btn btn-danger text-light delete-btn mb-1">
                                            <i class="fa fa-trash"></i>
                                        </button>
                                    @endif
                                    
                                @else
                                    <a href="/sections/edit/{{$result->id}}" data-toggle="tooltip" title="Edit Class" class="action-btn btn btn-primary text-light mb-1">
                                        <i class="fa fa-edit"></i>
                                    </a>
                                    
                                    <button type="button" value="{{$result->id}}" onclick="deleteData(this.value)" data-toggle="tooltip" title="Delete Class" class="action-btn btn btn-danger text-light delete-btn mb-1">
                                        <i class="fa fa-trash"></i>
                                    </button>
                                    
                                    @if($result->status == 0)
                                        
                                        <button type="button" value="{{$result->id}}" onclick="uploadClass(this.value)" data-toggle="tooltip" title="Publish/Unpublish Class" class="action-btn btn purple-pastel text-light delete-btn mb-1">
                                            <i class="far fa-check-circle"></i>
                                        </button>
                                        
                                    @else
                                    
                                        <button type="button" value="{{$result->id}}" onclick="hideClass(this.value)" data-toggle="tooltip" title="Publish/Unpublish Class" class="action-btn btn green-pastel text-light delete-btn mb-1">
                                            <i class="fas fa-check-circle"></i>
                                        </button>
                                    @endif
                                    
                                    <a href="/sections/shared/{{$result->id}}" data-toggle="tooltip" title="Share/Unshare Class" class="action-btn btn  text-light mb-1" style="background-color:#f39189;">
                                        <i class="fas fa-users-cog"></i>
                                    </a>
                                @endif
                                
                            @elseif(Auth::user()->userType->name == 'Institute Admin')
                                <a href="/sections/view/{{$result->id}}" data-toggle="tooltip" title="View Class" class="action-btn btn text-light mb-1 orange-pastel">
                                    <i class="fa fa-eye"></i>
                                </a>
                                <a href="/sections/edit/{{$result->id}}" data-toggle="tooltip" title="Edit Class" class="action-btn btn btn-primary text-light mb-1">
                                    <i class="fa fa-edit"></i>
                                </a>
                                
                                <button type="button" value="{{$result->id}}" onclick="deleteData(this.value)" data-toggle="tooltip" title="Delete Class" class="action-btn btn btn-danger text-light delete-btn mb-1">
                                    <i class="fa fa-trash"></i>
                                </button>
                                
                                @if($result->status == 0)
                                        
                                    <button type="button" value="{{$result->id}}" onclick="uploadClass(this.value)" data-toggle="tooltip" title="Publish/Unpublish Class" class="action-btn btn purple-pastel text-light delete-btn mb-1">
                                        <i class="far fa-check-circle"></i>
                                    </button>
                                    
                                @else
                                
                                    <button type="button" value="{{$result->id}}" onclick="hideClass(this.value)" data-toggle="tooltip" title="Publish/Unpublish Class" class="action-btn btn green-pastel text-light delete-btn mb-1">
                                        <i class="fas fa-check-circle"></i>
                                    </button>
                                @endif
                                
                                <a href="/sections/shared/{{$result->id}}" data-toggle="tooltip" title="Share/Unshare Class" class="action-btn btn  text-light mb-1" style="background-color:#f39189;">
                                    <i class="fas fa-users-cog"></i>
                                </a>
                            @else 
                                <a href="/sections/subjects/{{$result->id}}" data-toggle="tooltip" title="View Class" class="action-btn btn text-light mb-1 orange-pastel">
                                    <i class="fa fa-eye"></i>
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
    
    @include('layouts.navbar', ['title' => 'MY CLASSES'])
    @include('layouts.alert')
    <script type="text/javascript" src="/js/alert.js"></script>
    <script type="text/javascript" src="/js/sections/index.js"></script>
    </body>
</html>