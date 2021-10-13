<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="">
    <!--<!s[endif]-->
    <head>
        <title>{{$title}}</title>
            <link rel="icon" href="/images/icon/fabIcon-08.png">
            <link rel="stylesheet" type="text/css" href="/css/web.css">
            <link rel="stylesheet" href="{{asset('assets/css/bootstrap.min.css')}}">
            <link rel="stylesheet" href="{{asset('css/animate/animate.min.css')}}">
            <link rel="stylesheet" type="text/css" href="{{asset('css/colors.css')}}">
            <link rel="stylesheet" href="{{asset('assets/css/fontawesome.min.css')}}">
            <link rel="stylesheet" href="{{asset('assets/css/owl.carousel.min.css')}}">
            <link rel="stylesheet" type="text/css" href="{{asset('/css/jquery-ui/jquery-ui.css')}}">
            <link rel="stylesheet" type="text/css" href="/css/swal/swal.min.css">
            <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
            <link rel="stylesheet" href="{{asset('assets/css/main.css')}}">
            <link rel="stylesheet" href="{{asset('assets/css/responsive.css')}}">
            <!-- problem in select -->
            <link rel="stylesheet" href="{{asset('assets/css/bootstrap-select.min.css')}}">
            <!-- alpha test revision -->
            <link rel="stylesheet" href="css/font-awesome.min.css">
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet">

            @yield('styles')
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta name="csrf-token" content="{{ csrf_token() }}" />
            <meta name="description" content="">
            <meta name="author" content="">
            @auth<meta name="uid" content="{{Auth::user()->id}}" />@endauth
            

            @yield('scripts')

            <script type="text/javascript" src="/js/jquery/jquery-3.4.1.min.js"></script>
            <script type="text/javascript" src="/js/popper/popper.min.js"></script>
            <script type="text/javascript" src="/js/bootstrap/bootstrap.min.js"></script>
            <script type="text/javascript" src="/js/socket.io/socket.io.min.js"></script>
            <script type="text/javascript" src="/js/global_functions.js"></script>
            <script src="/js/jquery-ui/jquery-ui.js"></script>
            <script type="text/javascript" src="/js/swal/swal.min.js"></script>
            <script type="text/javascript" src="/js/alert.js"></script>

            <!-- chartingjs --> 
            <script src="https://code.jscharting.com/latest/jscharting.js"></script>

            <!-- psi -->
            <script src="{{ asset('js/helper.js') }}"></script>
            <script src="{{ asset('js/manifest.js') }}"></script> 
    </head>
    <body>