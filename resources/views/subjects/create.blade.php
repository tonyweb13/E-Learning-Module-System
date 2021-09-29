<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    @endsection
    @include('layouts.head', ['title' => 'SUBJECT'])
<body class="body-bg">
    @section('content')
      <a href="/subjects" class="right btn btn-info mb-1 text-light" data-toggle="tooltip" title="Browse">
          <i class="fa fa-list"></i>&nbsp;&nbsp;Browse
      </a>
      <h5>Add New Subject</h5>
      <br>
      <form class="border geo-border-primary rounded p-3" id="add-subject"> 
          @csrf
          @include('subjects.form')
      </form>
    @endsection
    
    @include('layouts.navbar', ['title' => 'SUBJECT'])
    @include('layouts.alert')
 
</body>
  <script type="text/javascript" src="/js/subjects/form.js"></script>
  <script type="text/javascript" src="/js/subjects/create.js"></script>
  <script type="text/javascript" src="/js/alert.js"></script>
</html>