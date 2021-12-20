<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <title>@yield('page_title')</title>
    <link rel="icon" href="/img/logo2_small.png">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">

    <link rel="stylesheet" href="{{ mix('css/auth_app.css') }}">

    @yield('styles')
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}" />

    @yield('scripts')

    <script type="text/javascript" src="{{ mix('js/auth_app.js') }}"></script>

</head>
<body  style="background-image: url('/img/background/bridge-road-admin-bg.png');">
     @yield('content')
</body>
</html>
