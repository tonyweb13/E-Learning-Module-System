<head>

    <title>{{$title}}</title>

    <link rel="icon" href="/images/icon/fabIcon-08.png">

    <link rel="stylesheet" type="text/css" href="/css/web.css">

    <link rel="stylesheet" type="text/css" href="/css/bootstrap/bootstrap.css">

    <link rel="stylesheet" href="/css/animate/animate.min.css">

    <link rel="stylesheet" type="text/css" href="/css/colors.css">

    <link rel="stylesheet" type="text/css" href="/css/add.css">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">

    <!--<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">-->

    <link rel="stylesheet" type="text/css" href="/css/jquery-ui/jquery-ui.css">

    <link rel="stylesheet" type="text/css" href="/css/swal/swal.min.css">

    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">



    @yield('styles')

    <meta charset="utf-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf-token" content="{{ csrf_token() }}" />

    @auth<meta name="uid" content="{{Auth::user()->id}}" />@endauth



    @yield('scripts')





    <script type="text/javascript" src="/js/jquery/jquery-3.4.1.min.js"></script>

    <script src="/js/jquery-ui/jquery-ui.js"></script>

    <script type="text/javascript" src="/js/popper/popper.min.js"></script>

    <script type="text/javascript" src="/js/bootstrap/bootstrap.min.js"></script>

    <script type="text/javascript" src="/js/socket.io/socket.io.min.js"></script>

    <script type="text/javascript" src="/js/global_functions.js"></script>

    <script type="text/javascript" src="/js/my.js"></script>

    <script type="text/javascript" src="/js/swal/swal.min.js"></script>





    <!-- chartingjs --> <!-- currently use -->

    <script src="https://code.jscharting.com/latest/jscharting.js"></script>

    <!-- chart  google chart-->

    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

    <!-- chart js -->

    <script src='https://cdn.plot.ly/plotly-latest.min.js'></script>



    <!-- psi -->



    <script src="{{ asset('js/manifest.js') }}"></script> <!-- Laravel Webpack Manifest -->

    <script src="{{ asset('js/vendor.js') }}"></script> <!-- External Libraries -->

    <script src="{{ asset('js/helper.js') }}"></script> <!-- Helper Scripts -->

</head>
