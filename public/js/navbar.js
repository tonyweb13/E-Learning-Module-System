$("#menu-toggle").click(function(n){n.preventDefault(),$("#wrapper").toggleClass("toggled")}),$("#my-account").popover({placement:"bottom",html:!0,content:'\n            <div id="my-account-drop">\n            <span class="smaller">WELCOME!</span>\n                <a href="/users/{{Auth::user()->employee_id}}" class="row pointer">\n                    <div class="pt-2 pb-2 col-3">\n                        <i class="fa fa-user"></i>\n                    </div>\n                    <div class="pt-2 pb-2 col-9 ">\n                        My Account\n                    </div>\n                </a>\n                \n                <a href="/logout" class="row pointer">\n                    <div class="pt-2 pb-2 col-3">\n                        <i class="fa fa-sign-out-alt"></i>\n                    </div>\n                    <div class="pt-2 pb-2 col-9 ">\n                        Logout\n                    </div>\n                </a>\n            </div>\n        '}),$("body").on("click",function(n){$("[data-toggle=popover]").each(function(){$(this).is(n.target)||0!==$(this).has(n.target).length||0!==$("#my-account-drop").has(n.target).length||$(this).popover("hide")})});