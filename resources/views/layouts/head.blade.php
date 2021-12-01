<head>

    <title>{{$title}}</title>

    <link rel="icon" href="/images/icon/fabIcon-08.png">

    <meta charset="utf-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf-token" content="{{ csrf_token() }}" />

    @auth<meta name="uid" content="{{Auth::user()->id}}" />@endauth

    <link rel="stylesheet" href="{{ mix('css/public.css') }}">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">

    @yield('scripts')

    <!-- chartingjs --> <!-- currently use -->

    <script src="https://code.jscharting.com/latest/jscharting.js"></script>

    <!-- chart  google chart-->

    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

    <!-- chart js -->

    <script type="text/javascript" src="/js/jquery/jquery-3.4.1.min.js"></script>

    <script type="text/javascript" src="/js/popper/popper.min.js"></script>

    <script type="text/javascript" src="/js/bootstrap/bootstrap.min.js"></script>

    <script type="text/javascript" src="/js/socket.io/socket.io.min.js"></script>

    <script type="text/javascript" src="/js/global_functions.js"></script>

    <script src='https://cdn.plot.ly/plotly-latest.min.js'></script>

    <script src="{{ mix('js/public.js') }}"></script>

</head>
