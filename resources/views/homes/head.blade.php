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

            <link rel="stylesheet" href="{{ asset('css/public.css') }}">

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

            <!-- chartingjs -->
            <script src="https://code.jscharting.com/latest/jscharting.js"></script>

            <script src="{{ mix('js/public.js') }}"></script>
    </head>
    <body>
