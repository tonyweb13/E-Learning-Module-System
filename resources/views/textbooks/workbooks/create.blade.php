<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    @endsection
    @include('layouts.head', ['title' => 'WORKBOOK'])
<body class="body-bg">
    @section('content')
        <div class="review-consult">
            <div class="container-reviews">
                @include('textbooks.navbar')
                <div class="tab-content" style="background-color: #f6f3ee !important; padding: 30px;">
                    <a href="/textbooks/workbooks" class="right btn btn-info mb-1 text-light" data-toggle="tooltip" title="Browse">
                      <i class="fa fa-list"></i>&nbsp;&nbsp;Browse
                    </a>
                    <h5>Add New Text Book</h5>
                    <br>
                    <form class="border geo-border-primary rounded p-3" id="add-workbook"> 
                        @csrf
                        @include('textbooks.workbooks.form')
                    </form>
                </div>
            </div>
        </div>
    @endsection
    
    @include('layouts.navbar', ['title' => 'WORKBOOK'])
    @include('layouts.alert')
 
</body>
  <script type="text/javascript" src="/js/textbooks/workbooks/form.js"></script>
  <script type="text/javascript" src="/js/textbooks/workbooks/create.js"></script>
  <script type="text/javascript" src="/js/alert.js"></script>
  <script type="text/javascript" src="/js/textbooks/navbar.js"></script>
</html>