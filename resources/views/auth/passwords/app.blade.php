<!DOCTYPE html>

<html lang="{{ app()->getLocale() }}">

<head>

    <title>@yield('page_title')</title>

    <link rel="icon" href="/img/logo2_small.png">

    <link rel="stylesheet" href="{{ asset('css/public.css') }}">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">


    @yield('styles')

    <meta charset="utf-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf-token" content="{{ csrf_token() }}" />



    @yield('scripts')

    <script type="text/javascript" src="/js/jquery/jquery-3.4.1.min.js"></script>

    <script type="text/javascript" src="/js/popper/popper.min.js"></script>

    <script type="text/javascript" src="/js/bootstrap/bootstrap.min.js"></script>

    <script type="text/javascript" src="/js/jquery-ui/jquery-ui.js"></script>

    <script type="text/javascript" src="/js/swal/swal.min.js"></script>

    <script type="text/javascript" src="/js/global_functions.js"></script>

    <script type="text/javascript" src="/js/navbar.js"></script>

</head>

<body  style="background-image: url('/img/background/bridge-road-admin-bg.png');">

     @yield('content')

</body>

</html>
