const mix = require('laravel-mix');

mix.styles([
    'resources/assets/css/web.css',
    'resources/assets/css/bootstrap/bootstrap.css',
    'resources/assets/css/animate/animate.min.css',
    'resources/assets/css/colors.css',
    'resources/assets/css/jquery-ui/jquery-ui.css',
    'resources/assets/css/swal/swal.min.css',
    'resources/assets/css/sidenav.css',
    'resources/assets/css/font-awesome.min.css',
    'resources/assets/css/additional.css',
],'public/css/auth_app.css');

mix.styles([
    'resources/assets/css/web.css',
    'resources/assets/css/bootstrap/bootstrap.css',
    'resources/assets/css/animate/animate.min.css',
    'resources/assets/css/colors.css',
    'resources/assets/css/add.css',
    'resources/assets/css/jquery-ui/jquery-ui.css',
    'resources/assets/css/swal/swal.min.css',
    'resources/assets/css/sidenav.css',
],'public/css/heaad.css');

mix.js([
    'resources/assets/js/jquery/jquery-3.4.1.min.js',
    'resources/assets/js/popper/popper.min.js',
    'resources/assets/js/bootstrap/bootstrap.min.js',
    'resources/assets/js/jquery-ui/jquery-ui.js',
    'resources/assets/js/swal/swal.min.js',
    'resources/assets/js/global_functions.js',
    'resources/assets/js/navbar.js',
], 'public/js/auth_app.js');

mix.copyDirectory('resources/assets/fonts','public/fonts', false);
mix.copyDirectory('resources/assets/img', 'public/img');

mix.copyDirectory('resources/js/dashboard', 'public/js/dashboard');
mix.copyDirectory('resources/js/ebooks', 'public/js/ebooks');
mix.copyDirectory('resources/js/guides', 'public/js/guides');
mix.copyDirectory('resources/js/sections', 'public/js/sections');
mix.copyDirectory('resources/js/subjects', 'public/js/subjects');
mix.copyDirectory('resources/js/textbooks', 'public/js/textbooks');
mix.copyDirectory('resources/js/users', 'public/js/users');

mix.version();
