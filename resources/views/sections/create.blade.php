<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    @endsection
    @include('layouts.head', ['title' => 'CLASSES'])
<body class="body-bg">
    @section('content')
      <a href="/sections" class="right btn btn-info mb-1 text-light" data-toggle="tooltip" title="Browse">
          <i class="fa fa-list"></i>&nbsp;&nbsp;Browse
      </a>
      <h5>Add New Class</h5>
      <br>
      <form class="border geo-border-primary rounded p-3" id="add-class"> 
          @csrf
          @include('sections.form')
      </form>
    @endsection
    
    @include('layouts.navbar', ['title' => 'CLASSES'])
    @include('layouts.alert')
 
</body>
  <script type="text/javascript" src="/js/sections/form.js"></script>
  <script type="text/javascript" src="/js/sections/create.js"></script>
  <script type="text/javascript" src="/js/alert.js"></script>
</html>