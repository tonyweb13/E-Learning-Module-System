<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    @endsection
    @include('layouts.head', ['title' => 'TEST'])
<body class="body-bg">
    @section('content')
      <a href="/subjects" class="right btn btn-info mb-1 text-light" data-toggle="tooltip" title="Browse">
          <i class="fa fa-list"></i>&nbsp;&nbsp;Browse
      </a>
      <h5>Add New Subject</h5>
      <br>
      <form class="border geo-border-primary rounded p-3" id="add-test"> 
          @csrf
            <label>Subject file <span style="font-size: 12px;color:red; ">**upload zip file only</span></label>
            <input type="file" name="file" class="form-control geo-border-primary" required placeholder="Guide File">

             <button class="btn geo-primary" value="{{$employee->id ?? ''}}" id="eid"><i class="fa fa-save"></i>&nbsp;&nbsp;Save</button>
      </form>
    @endsection
    
    @include('layouts.navbar', ['title' => 'TEST'])
    @include('layouts.alert')
 
</body>
  <script type="text/javascript" src="/js/test/index.js"></script>
  <script type="text/javascript" src="/js/alert.js"></script>
</html>