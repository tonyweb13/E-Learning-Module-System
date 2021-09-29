<div class="d-flex no-print" id="wrapper">
    
    <!-- Sidebar -->
    <div class="border-right geo-border-primary" id="sidebar-wrapper">
        <div style="background-color: #214a8c !important;">
             <center>
                <img src="/images/logo-new.gif" class="m-2 "><br>
               <!--  <span style="color: white;">ABIVA PUBLISHING HOUSE, INC.</span> -->
             </center>
        </div>
        <div style="align-items: center !important;">
            <a href="/home" class="list-group-item @if (Request::is('dashboards.home*')) left-bar @endif" style="background-color: #fea3aa ;">
                <!-- <div class="fas fa-home fa-2x" style="width: 20px;"></div> -->
                <img class ="display-image" src="/images/icon/home.png"  onmouseover=logo.src='/images/icon/home2.png' onmouseout=logo.src='/images/icon/home.png' alt="">
                <br>
                <span style="margin-left:-3px;">HOME</span>
            </a>

            <!-- super admin -->
            @if(Auth::user()->userType->name == 'Super Admin')

            <!-- admin -->
            @elseif(Auth::user()->userType->name == 'Admin')
                
                <a href="/users/admins" class="list-group-item @if (Request::is('users*')) left-bar @endif" style="background-color: #f8b88b">
                    <div class="fas fa-users fa-2x" style="width: 50px;"></div>
                    <span style="margin-left: -3px;">USERS</span>
                </a>

                <a href="/ebooks" class="list-group-item @if (Request::is('ebooks*')) left-bar @endif" style="background-color: #ece80a">
                    <div class="fas fa-book-reader fa-2x" style="width: 50px;"></div>
                    <span style="margin-left: -9px;">EBOOKS</span>
                </a>

                <a href="/subjects" class="list-group-item @if (Request::is('subjects*')) left-bar @endif" style="background-color: #baed91">
                    <div class="fas fa-book fa-2x" style="width: 50px;"></div>
                    <span style="margin-left: -15px;">SUBJECTS</span>
                </a>

                <a href="/employees" class="list-group-item @if (Request::is('employees*')) left-bar @endif" style="background-color: #f2a2e8;">
                    <!-- scrom -->
                    <div class="fas fa-sticky-note fa-2x" style="width: 50px;"></div>
                    <span style="margin-left: -20px; font-size: 11px;">ASSESSMENTS</span>
                </a>
                
                <a href="/textbooks/workbooks" class="list-group-item @if (Request::is('textbooks*')) left-bar @endif" style="background-color: #b2cefe;">
                    <div class="fas fa-book-open fa-2x" style="width: 50px;"></div>
                    <span style="margin-left: -2px;">TEXT BOOKS</span>
                </a>

                <a href="/employees" class="list-group-item @if (Request::is('employees*')) left-bar @endif" style="background-color: #DBFFD6;">
                    <div class="fas fa-money-bill-alt fa-2x" style="width: 50px;"></div>
                    <span style="margin-left: -13px;">PAYMENTS</span>
                </a>

                <a href="/employees" class="list-group-item @if (Request::is('employees*')) left-bar @endif" style="background-color:#ffcbc1;">
                    <div class="fas fa-user-lock fa-2x" style="width: 50px;"></div>
                    <span style="margin-left: -15px;font-size: 11px;">ACTIVATION CODE</span>
                </a>
                
                <a href="/employees" class="list-group-item @if (Request::is('employees*')) left-bar @endif" style="background-color: #85E3FF;">
                    <div class="fas fa-envelope fa-2x" style="width: 50px;"></div>
                    <span style="margin-left:-12px;">MESSAGE</span>
                </a>

                <a href="/employees" class="list-group-item @if (Request::is('employees*')) left-bar @endif" style="background-color:#C5A3FF">
                    <div class="far fa-comments fa-2x" style="width: 50px;"></div>
                    <span style="margin-left: -10px;">FORUM</span>
                </a>
                
                <a href="/employees" class="list-group-item @if (Request::is('employees*')) left-bar @endif" style="background-color: #AFF8DB;">
                    <div class="fas fa-comments fa-2x" style="width: 50px;"></div>
                    <span style="margin-left: 1px;">CHAT</span>
                </a>
                
                <a href="/guides" class="list-group-item @if (Request::is('guides*')) left-bar @endif" style="background-color: #a0d468;">
                    <div class="fa fa-users fa-2x" style="width: 50px;"></div>
                    <span>EDGE GIDES</span>
                </a>
                <!-- <a href="/employees" class="list-group-item @if (Request::is('employees*')) left-bar @endif">
                    PRODUCT
                </a>
                <a href="/employees" class="list-group-item @if (Request::is('employees*')) left-bar @endif">
                    PAYMENTS
                </a>
                <a href="/employees" class="list-group-item @if (Request::is('employees*')) left-bar @endif">
                    ACTIVATION CODE
                </a> -->
            
            <!-- teacher -->
            @elseif(Auth::user()->userType->name == 'Teacher')
                <a href="/sections" class="list-group-item @if (Request::is('sections*')) left-bar @endif" >
                    <div class="fa fa-users fa-1x text-center" style="width: 20px;"></div>
                    <span style="margin-left:-10px;">CLASSES</span>
                </a>
                <a href="/" class="list-group-item @if (Request::is('')) left-bar @endif" style="background-color: #ece80a;">
                    <div class="fa fa-archive fa-2x" style="width: 20px;"></div><br>
                    <span style="margin-left:-10px;">LIBRARY</span>
                </a>
                <a href="/employees" class="list-group-item @if (Request::is('employees*')) left-bar @endif" style="background-color: #85E3FF;">
                    <div class="fas fa-envelope fa-2x" style="width: 50px;"></div>
                    <span style="margin-left:-12px;">MESSAGE</span>
                </a>

                <a href="/employees" class="list-group-item @if (Request::is('employees*')) left-bar @endif" style="background-color:#C5A3FF">
                    <div class="far fa-comments fa-2x" style="width: 50px;"></div>
                    <span style="margin-left: -10px;">FORUM</span>
                </a>
                
                <a href="/employees" class="list-group-item @if (Request::is('employees*')) left-bar @endif" style="background-color: #AFF8DB;">
                    <div class="fas fa-comments fa-2x" style="width: 50px;"></div>
                    <span style="margin-left: 1px;">CHAT</span>
                </a>
                <a href="/guides" class="list-group-item @if (Request::is('guides*')) left-bar @endif" style="background-color: #a0d468;">
                    <div class="fa fa-book fa-2x" style="width: 50px;"></div>
                    <span>BOOKS</span>
                </a>
            @endif
        </div>
    </div>
    <!-- /#sidebar-wrapper -->
   <!-- Page Content -->
    <div id="page-content-wrapper">
        <nav class="navbar navbar-expand-lg" style="background-color: #428bca;">
            <button class="navbar-brand navbar-toggler text-light" type="button" id="menu-toggle">
                <i class="fa fa-bars"></i>
            </button>
            <button class="navbar-toggler text-light" type="button" data-toggle="collapse" data-target="#navbar_main" aria-expanded="false">
                <i class="fa fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbar_main">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link text-light"><b>{{$title}}</b></a>
                    </li>
                </ul>
                <span class="my-account-2 my-lg-0 pointer" data-toggle="popover" id="my-account">
                    <img src="'/images/default.png'" class="profile-img">
                </span>
            </div>
        </nav>
        <div style="width: 100%;padding-left: 20px; padding-right: 20px;">
        <!-- <div class="container-fluid"> -->
            @yield('content')
        </div>
    </div>
    <!-- /#page-content-wrapper -->

</div>
<!-- /#wrapper -->

<script type="text/javascript">
    $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });

        $('#my-account').popover({
            placement : 'bottom',
            html : true,
            content : `
                <div id="my-account-drop">
                <span class="smaller">WELCOME!</span>
                    <a href="/users/{{Auth::user()}}" class="row pointer">
                        <div class="pt-2 pb-2 col-3">
                            <i class="fa fa-user"></i>
                        </div>
                        <div class="pt-2 pb-2 col-9 ">
                            My Account
                        </div>
                    </a>
                    
                    <a href="/logout" class="row pointer">
                        <div class="pt-2 pb-2 col-3">
                            <i class="fa fa-sign-out-alt"></i>
                        </div>
                        <div class="pt-2 pb-2 col-9 ">
                            Logout
                        </div>
                    </a>
                </div>
            `
        });

        $('body').on('click', function (e) {
            $('[data-toggle=popover]').each(function () {
                if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('#my-account-drop').has(e.target).length === 0) {
                    $(this).popover('hide');
                }
            });
        });
</script>



