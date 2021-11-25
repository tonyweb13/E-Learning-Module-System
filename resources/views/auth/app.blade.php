<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>

    <title>@yield('page_title')</title>

    <link rel="icon" href="/images/icon/fabIcon-08.png">

    <link rel="stylesheet" href="{{ asset('css/public.css') }}">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">

    @yield('styles')

    <meta charset="utf-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf-token" content="{{ csrf_token() }}" />

    @yield('scripts')

    <script type="text/javascript" src="{{ asset('js/public.js') }}"></script>

</head>

<body  style="background-color:#F1F2F2;">

     @yield('content')

</body>
</html>
