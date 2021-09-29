<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    <!--<link id="bibi-style" rel="stylesheet" href="/bibi/resources/styles/bibi.css" />-->
	<!--<link id="bibi-dress" rel="stylesheet" href="/bibi/wardrobe/everyday/bibi.dress.css" />-->
    @endsection
    @include('layouts.head', ['title' => 'EBOOKS'])
    <body class="body-bg">
        @section('content')
            <h5>My Ebooks</h5>
            <br>
            <div>
                <iframe src="http://myedgetestsiteversion2.edupowerpublishing.com/bibi/?book=/bibi-bookshelf/Computer5.epub"width="100%" height="800" align="center"></iframe>
            </div>
            
           
        @endsection
        @include('layouts.navbar', ['title' => 'EBOOKS'])
        @include('layouts.alert')
    </body>
    <script id="bibi-script" src="/bibi/resources/scripts/bibi.js"></script>
    <script id="bibi-preset" src="/bibi/presets/default.js" data-bibi-bookshelf=""></script>
    <script type="text/javascript" src="/js/alert.js"></script>
</html>