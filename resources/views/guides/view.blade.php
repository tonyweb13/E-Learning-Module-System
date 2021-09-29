<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    @endsection
    @include('layouts.head', ['title' => 'EDGE GUIDES'])
<body class="body-bg">
    @section('content')
      <a href="/guides" class="right btn btn-info mb-1 text-light" data-toggle="tooltip" title="Browse">
          <i class="fa fa-list"></i>&nbsp;&nbsp;Browse
      </a>
      <h5>View Edge Guide</h5>
      <br>
      <form class="border geo-border-primary rounded p-3" id="view-guides"> 
          <iframe  frameborder="0" scrolling="no" class="reader"  src="{{$result->extract_file ?? ''}}" name="course" height="700px" width="100%" style="border-style: solid;border-width: 8px;border-color: lightblue;"></iframe>
        
      </form>
    @endsection
    
    @include('layouts.navbar', ['title' => 'EDGE GUIDES'])
    @include('layouts.alert')
 
</body>
  <script type="text/javascript" src="/js/guides/view.js"></script>
  <script type="text/javascript" src="/js/alert.js"></script>
  
</html>