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
                <a href="/users/{{Auth::user()->employee_id}}" class="row pointer">
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