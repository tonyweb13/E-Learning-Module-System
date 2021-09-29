<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    @endsection
    @include('layouts.head', ['title' => 'SUBJECT PRODUCTS'])
<body class="body-bg">
    @section('content')
      <a href="/createdsubjects" class="right btn btn-info mb-1 text-light" data-toggle="tooltip" title="Browse">
          <i class="fa fa-list"></i>&nbsp;&nbsp;Browse
      </a>
      <h5>Add New Subject</h5>
      <br>
      <form class="border geo-border-primary rounded p-3" id="add-createdsubject"> 
          @csrf
          @include('createdsubjects.form')
      </form>
    @endsection
    
    @include('layouts.navbar', ['title' => 'SUBJECT PRODUCTS'])
    @include('layouts.alert')
 
</body>
  <script type="text/javascript" src="/js/createdsubjects/form.js"></script>
  <script type="text/javascript" src="/js/createdsubjects/create.js"></script>
  <script type="text/javascript" src="/js/alert.js"></script>
</html>