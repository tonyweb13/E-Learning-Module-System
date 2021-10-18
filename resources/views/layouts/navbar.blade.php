<div class="d-flex no-print" id="wrapper">



    <!-- Sidebar -->

    <div class="border-right geo-border-primary" id="sidebar-wrapper">

        <div style="align-items: center !important;">



            <a href="/home" class="sidenav-home list-group-item @if (Request::is('dashboards*')) sidenav-home-active @endif " >

                <div class="SN_Btn" id='home_SNBtn'><span id="forum-badge" class="badge badge-danger" style="width:20px !important; line-height:15px; text-align:center !important; margin-left:35px; margin-top:-20px; border-radius:25px !important;"></span></div>

            </a>



            <!-- super admin -->

            @if(Auth::user()->userType->name == 'Super Admin')



            <!-- admin -->

            @elseif(Auth::user()->userType->name == 'Admin')

                <a href="/users/admins" class="sidenav-user list-group-item @if (Request::is('users*')) sidenav-user-active @endif">

                    <div class="SN_Btn" id='users_SNBtn'></div>

                </a>



                <a href="/ebooks" class="sidenav-ebook list-group-item @if (Request::is('ebooks*')) sidenav-ebook-active @endif">

                    <div class="SN_Btn" id='ebook_SNBtnADMIN'></div>

                </a>



                <a href="/textbooks/workbooks" class="sidenav-textbook list-group-item @if (Request::is('textbooks*')) sidenav-textbook-active  @endif">

                     <div class="SN_Btn" id='textbook_SNBtn'></div>

                </a>



                <a href="/createdsubjects" class="sidenav-subject list-group-item @if (Request::is('createdsubjects*')) sidenav-subject-active @endif">

                    <div class="SN_Btn" id='subject_SNBtn2'></div>

                </a>



                <a href="/subjects/get/mysubjects" class="sidenav-subject list-group-item @if (Request::is('subjects*')) sidenav-subject-active @endif">

                    <div class="SN_Btn" id='subject_SNBtn2'></div>

                </a>



                <a href="/employees" class="sidenav-assessment list-group-item @if (Request::is('employees*')) sidenav-assessment-active @endif">

                    <div class="SN_Btn" id='scorm_SNBtn2'></div>

                </a>



                <a href="/chats" class="sidenav-message list-group-item @if (Request::is('messages*')) sidenav-module-active  @endif">

                    <div class="SN_Btn" id='module_SNBtn_ADMIN'></div>

                </a>



                <a href="/chats" class="sidenav-message list-group-item @if (Request::is('messages*')) sidenav-message-active  @endif">

                    <div class="SN_Btn" id='message_SNBtn'></div>

                </a>



                 <a href="/employees" class="sidenav-payment list-group-item @if (Request::is('employees*')) sidenav-payment-active @endif">

                     <div class="SN_Btn" id='payment_SNBtn'></div>

                </a>



                 <a href="/activation" class="sidenav-activationcode list-group-item @if (Request::is('activation*')) sidenav-activationcode-active @endif">

                    <div class="SN_Btn" id='activation_SNBtn'></div>

                </a>



            @elseif(Auth::user()->userType->name == 'Institute Admin')



                <a href="/users/teachers" class="sidenav-user list-group-item @if (Request::is('users*')) sidenav-user-active @endif">

                    <div class="SN_Btn" id='users_SNBtn_IA'></div>

                </a>





                <a href="/sections" class="sidenav-class list-group-item @if (Request::is('sections*')) sidenav-class-active @endif" >

                    <div class="SN_Btn" id='classes_SNBtn_IA'></div>

                </a>



                <a href="/libraries" class="sidenav-library list-group-item @if (Request::is('libraries')) sidenav-library-active @endif">

                    <div class="SN_Btn" id='library_SNBtn_IA'></div>

                </a>

                <a href="/ebooks/get/myebooks" class="sidenav-ebook list-group-item @if (Request::is('ebooks*')) sidenav-ebook-active @endif">

                    <div class="SN_Btn" id='ebook_SNBtn_IA'></div>

                </a>





                <a href="#" onclick="alert('This page is under development');" class="sidenav-subject list-group-item @if (Request::is('subjects*')) sidenav-subject-active @endif">

                    <div class="SN_Btn" id='subject_SNBtn_IA'></div>

                </a>



                <a href="/chats" class="sidenav-message list-group-item @if (Request::is('messages*')) sidenav-module-active  @endif">

                    <div class="SN_Btn" id='module_SNBtn_ADMIN'></div>

                </a>



                <a href="/chats" class="sidenav-message list-group-item @if (Request::is('messages*')) sidenav-message-active  @endif">

                    <div class="SN_Btn" id='message_SNBtn'><span id="email-badge-insti" class="badge badge-danger" style="width:20px !important; line-height:15px; text-align:center !important; margin-left:35px; margin-top:-20px; border-radius:25px !important;"></span></div>

                </a>

                <a href="/guides" class="sidenav-guide list-group-item @if (Request::is('guides*')) sidenav-guide-active @endif">

                    <div class="SN_Btn" id='product_SNBtn2'></div>

                </a>



                <a href="/activation" class="sidenav-activationcode list-group-item @if (Request::is('activation*')) sidenav-activationcode-active @endif">

                    <div class="SN_Btn" id='activation_SNBtn'></div>

                </a>



            @elseif(Auth::user()->userType->name == 'Teacher')



                <a href="/sections" class="sidenav-class list-group-item @if (Request::is('sections*')) sidenav-class-active @endif" >

                    <div class="SN_Btn" id='classes_SNBtn'></div>

                </a>

                <a href="/libraries" class="sidenav-library list-group-item @if (Request::is('libraries')) sidenav-library-active @endif">

                    <div class="SN_Btn" id='library_SNBtn'></div>

                </a>

                <a href="/ebooks/get/myebooks" class="sidenav-ebook list-group-item @if (Request::is('ebooks*')) sidenav-ebook-active @endif">

                    <div class="SN_Btn" id='ebook_SNBtn'></div>

                </a>

                <a href="#" onclick="alert('This page is under development');" class="sidenav-subject list-group-item @if (Request::is('subjects*')) sidenav-subject-active @endif">

                    <div class="SN_Btn" id='subject_SNBtn'></div>

                </a>

                <a href="#" onclick="alert('This page is under development');" class="sidenav-subject list-group-item @if (Request::is('messages*')) sidenav-module-active @endif">

                     <div class="SN_Btn" id='module_SNBtn'></div>

                </a>

                <a href="/chats" class="sidenav-message list-group-item @if (Request::is('messages*')) sidenav-message-active  @endif">

                    <div class="SN_Btn" id='message_SNBtn2'><span id="email-badge-teacher" class="badge badge-danger" style="width:20px !important; line-height:15px; text-align:center !important; margin-left:35px; margin-top:-20px; border-radius:25px !important;"></span></div>

                </a>

                <a href="/#" onclick="alert('This page is under development');" class="sidenav-guide list-group-item @if (Request::is('guides*')) sidenav-guide-active @endif">

                    <div class="SN_Btn" id='product_SNBtn'></div>

                </a>



                <a href="/activation" class="sidenav-guide list-group-item @if (Request::is('activation*')) sidenav-activationcode-active @endif">

                    <div class="SN_Btn" id='activation_SNBtn'></div>

                </a>



            @elseif(Auth::user()->userType->name == 'Student')

                <a href="/sections" class="sidenav-class list-group-item @if (Request::is('sections*')) sidenav-class-active @endif" >

                    <div class="SN_Btn" id='classes_SNBtn'></div>

                </a>

                <a href="/libraries" class="sidenav-library list-group-item @if (Request::is('libraries')) sidenav-library-active @endif">

                    <div class="SN_Btn" id='library_SNBtn'></div>

                </a>

                <a href="/ebooks/get/myebooks" class="sidenav-ebook list-group-item @if (Request::is('ebooks*')) sidenav-ebook-active @endif">

                    <div class="SN_Btn" id='ebook_SNBtn'></div>

                </a>

                <a href="#" onclick="alert('This page is under development');"  class="sidenav-subject list-group-item @if (Request::is('subjects*')) sidenav-subject-active @endif">

                    <div class="SN_Btn" id='subject_SNBtn'></div>

                </a>

                <a href="/chats" class="sidenav-message list-group-item @if (Request::is('messages*')) sidenav-message-active  @endif">

                    <div class="SN_Btn" id='message_SNBtn'><span id="email-badge-student" class="badge badge-danger" style="width:20px !important; line-height:15px; text-align:center !important; margin-left:35px; margin-top:-20px; border-radius:25px !important;"></span></div>

                </a>

                <a href="#" onclick="alert('This page is under development');" class="sidenav-guide list-group-item @if (Request::is('guides*')) sidenav-guide-active @endif">

                    <div class="SN_Btn" id='product_SNBtn2'></div>

                </a>

                <a href="/activation" class="sidenav-guide list-group-item @if (Request::is('activation*')) sidenav-activationcode-active @endif">

                    <div class="SN_Btn" id='activation_SNBtn'></div>

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



            <div class="collapse navbar-collapse" id="navbar_main" style="padding:10px;">

                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">

                    <li class="nav-item active">
                        <a class="nav-link text-light"><b>MYEDGE</b></a>
                        <!--<img src="/images/logo/myedge_logo-03.png" id='myedgeLogo'>-->

                    </li>

                </ul>

                <span class="my-account-2 my-lg-0 pointer" data-toggle="popover" id="my-account">

                     <img src="{{Auth::user()->image ?? ''}}" onerror="this.src='/images/default.png'" class="profile-img" style="width:40px;height:40px;;"> 

                    <span class='accntNameHolder'>

                        <span class='aHolder'>

                            <span class='accntName'>{{Auth::user()->name ?? 'Welcome user!'}}</span>

                            <span class='accntPosition'>{{Auth::user()->userType->name ?? ''}}</span>

                            <!--<span class='accntName'>Stacey Anne Dela Cruz</span>-->

                            <!--<span class='accntPosition'>Teacher</span>-->

                        </span>

                    </span>

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

                    <a href="/profile" class="row pointer">

                        <div class="pt-2 pb-2 col-3">

                            <i class="fas fa-user-cog"></i>

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
