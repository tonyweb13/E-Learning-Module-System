<header>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="top-nav container">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="ml-auto" id="additions-wrapper">
        <ul class="navbar-nav ml-auto upper-nav align-items-center justify-content-end ">
          <li>
            <a class="home-a" href="{{ route('login') }}">Logsdin</a>
            <a class="home-a" href="{{ route('register') }}">&emsp;Register</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-collapse collapse" id="navbarCollapse" style="background-color: #0f87d8 !important;">
      <div class="container nav-container">
        <a class="navbar-brand" href="home.html">
          <img src="/images/logo.jpeg">
        </a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/advisors">About</a>  
          </li>
          <li class="nav-item">
            <!-- turn to drop down -->
            <a class="nav-link" href="/firms">Feature</a>  
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/forums">Content</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/education-and-tips">Get App</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/news-and-articles">How-To's</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact-us">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
@yield('content')