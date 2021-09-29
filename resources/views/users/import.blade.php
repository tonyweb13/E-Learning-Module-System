<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    @endsection
    @include('layouts.head', ['title' => 'Import User'])
    <body class="body-bg">
        @section('content')
            <div class="review-consult">
                <div class="container-reviews">
                    @include('users.navbar')
                    <div class="tab-content" style="background-color: #f6f3ee !important; padding: 30px;">
                        <div id="admin-card" class="tab-pane fade show active">
                            <form class="border geo-border-primary rounded p-3" id="add-import-user" enctype="multipart/form-data"> 
                                @csrf
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="row pl-3 pr-3">
                                            <div class="col-md-4 p-1">
                                                <label>Upload Excel File</label>
                                                <input type="file" name="file" id="file" class="form-control geo-border-primary" required maxlength="100">
                                            </div>
                                        </div>
                                        <div class="row pl-3 pr-3">
                                            @if(Auth::user()->userType->name == 'Admin')
                                                <a href="/images/importuser/IMPORT USER IN PHS BY ABIVA ADMIN.xlsx">Download Sample file here.</a>
                                            @else
                                                <a href="/images/importuser/SAMPLE IMPORT FOR INSTITUTE ADMIN.xlsx">Download Sample file here.</a>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <div class="right">
                                    <button class="btn geo-primary" value="{{$employee->id ?? ''}}" id="eid"><i class="fa fa-save"></i>&nbsp;&nbsp;Save</button>
                                    <button class="btn btn-danger" type="button" id="reset_btn"><i class="fa fa-eraser"></i>&nbsp;&nbsp;Reset</button>
                                </div>
                                <br><br>
                                <input  type="hidden" name="current_user" class="form-control geo-border-primary" required value="{{Auth::user()->id ?? ''}}">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        @endsection
        @include('layouts.navbar', ['title' => 'Import User'])
        @include('layouts.alert')
    </body>
    <script type="text/javascript" src="/js/alert.js"></script>
    <script type="text/javascript" src="/js/users/navbar.js"></script>
    <script type="text/javascript" src="/js/users/import.js"></script>
</html>