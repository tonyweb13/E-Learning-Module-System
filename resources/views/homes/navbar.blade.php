<div class="row" style="background-color: #075990; padding: 8px;">
    <div class="col-md-12">
        <div class="row pl-3 pr-3">
            <div class="col-md-5">
            </div>
            <div class="col-md-5 right" style="font-size: 18px; font-weight: bold;">
                <a class="home-a right" href="{{ route('register') }}">&emsp;Register</a>
                <a class="home-a right" href="{{ route('login') }}">Login&emsp;</a>
            </div>
            <div class="col-md-2">
            </div>
        </div>
    </div>
</div>
<nav class="navbar navbar-expand-md navbar-dark  sticky-top" style="background-color: #0f87d8;font-size: 15px; padding: 12px;">
  <div class="navbar-toggler-right">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
  <div class="collapse navbar-collapse flex-column row" id="navbar">
    <div class="col-md-12">
        <div class="row pl-3 pr-3">
            <div class="col-md-5 text-center">
              <img src="/images/logo/myEDGELogo.png" width="15%">
            </div>
            <div class="col-md-5">
              <ul class="navbar-nav right">
                <li class="nav-item active">
                  <a class="nav-link home-a" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link home-a" href="#">About <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link home-a" href="#">Features <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link home-a" href="#">Content <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link home-a" href="#">Get App <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link home-a" href="#">How-To's <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link home-a" href="#">Contact <span class="sr-only">(current)</span></a>
                </li>
              </ul>
            </div>
            <div class="col-md-2">
            </div>
        </div>
    </div>
  </div>
</nav>
@yield('content')