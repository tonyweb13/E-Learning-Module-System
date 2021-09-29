<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    @endsection
    @include('layouts.head', ['title' => 'EBOOKS'])
<body class="body-bg">
    @section('content')
      <a href="/ebooks" class="right btn btn-info mb-1 text-light" data-toggle="tooltip" title="Browse">
          <i class="fa fa-list"></i>&nbsp;&nbsp;Browse
      </a>
      <h5>Add New Ebooks</h5>
      <br>
      <form class="border geo-border-primary rounded p-3" id="add-ebook"> 
          @csrf
          @include('ebooks.admins.form')
      </form>
    @endsection
    
    @include('layouts.navbar', ['title' => 'EBOOKS'])
    @include('layouts.alert')
 
</body>
  <script type="text/javascript" src="/js/ebooks/form.js"></script>
  <script type="text/javascript" src="/js/ebooks/create.js"></script>
  <script type="text/javascript" src="/js/alert.js"></script>
</html>