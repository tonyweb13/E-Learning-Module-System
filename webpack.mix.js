const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

 mix.styles([
    'resources/assets/css/bootstrap/bootstrap.min.css',
    'resources/assets/css/bootstrap/bootstrap-grid.min.css',
    'resources/assets/css/bootstrap/bootstrap-reboot.min.css',
    'resources/assets/css/bootstrap/bootstrap-select.min.css',
    'resources/assets/css/animate/animate.min.css',
    'resources/assets/css/jquery-ui/jquery-ui.css',
    'resources/assets/css/swal/swal.min.css',
    'resources/assets/css/fontawesome.min.css',
    'resources/assets/css/footer-responsive.css',
    'resources/assets/css/main-break.css',
    'resources/assets/css/main.css',
    'resources/assets/css/owl.carousel.min.css',
    'resources/assets/css/prettyPhoto.css',
    'resources/assets/css/responsive.css',
    'resources/assets/css/add.css',
    'resources/assets/css/additional.css',
    'resources/assets/css/app.css',
    'resources/assets/css/chat.css',
    'resources/assets/css/colors.css',
    'resources/assets/css/login.css',
    'resources/assets/css/sidenav.css',
    'resources/assets/css/web.css',
    'resources/assets/css/sidenav.css',
],'public/css/public.css');

mix.js([
    'resources/assets/js/manifest.js',
    'resources/assets/js/vendor.js',
    'resources/assets/js/helper.js',
], 'public/js/public.js');

mix.copyDirectory('resources/assets/fonts','public/fonts', false);

mix.copyDirectory('resources/assets/img', 'public/img');

mix.version();
