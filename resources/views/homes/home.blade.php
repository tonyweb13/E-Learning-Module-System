@section('styles')
<link rel="stylesheet" type="text/css" href="/css/sidenav.css">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<style>
    .mySlides {
        display:none;
    }
</style>
@endsection
@include('homes.head', ['title' => 'Home'])
@section('content')
	<div style="margin-top: -30px;">
        <div>
            <img class="mySlides"  src="/images/home/slider1bg.png" width="100%">
          
        </div>
        
        <div>
            <img class="mySlides" src="/images/home/slider2bg.png" width="100%">
        </div>
        
        <div>
            <img class="mySlides" src="/images/home/slider3bg.png" width="100%">
        </div>
        
        <div>
            <img class="mySlides" src="/images/home/slider4bg.png" width="100%">
        </div>

        <button class="w3-button w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
        <button class="w3-button w3-display-right" onclick="plusDivs(+1)">&#10095;</button>
    </div>
    <br>
    <div class="col-md-12 sidenav-center">
        <div class="row">
            <div class="col-md-2">
                <p style="font-size: 50px;color: #4fb4ed;">809</p>
                <p style="margin-top: -20px;">Lesson</p>
            </div>
            <div class="col-md-4 text-center">
                <p style="font-size: 50px;color: #4fb4ed;">29,821</p>
                <p style="margin-top: -20px;">Lesson</p>
            </div>
            <div class="col-md-4 text-center">
                <p style="font-size: 50px;color: #4fb4ed;">1,683</p>
                <p style="margin-top: -20px;">Lesson</p>
            </div>
            <div class="col-md-2">
                <p style="font-size: 50px;color: #4fb4ed;">75</p>
                <p style="margin-top: -20px;">Lesson</p>
            </div>
        </div>
    </div>
    <br><br>
    <div class="col-md-12">
        <h4 class="text-center" style="color: #0f87d8; font-weight: bold;">About</h4>
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-7">
                    <p style="margin-right:100px;padding: 20px; text-align: justify;">
                        MyEDGE is a free app that enables online and offline access to interactive K-12 contents. It makes teaching and learning of K-12 subjects English, Math, and Science easy and fun.
                        <br><br>
                        MyEDGE App includes tools such as an e-Reader and a Learning Management System. It delivers e-Textbooks and interactive digital teaching, learning, and assessment contents for K-12 levels.
                        <br><br>
                        Download this education app now and get ready access to numerous lessons, examples, and assessments that are aligned with Philippine curriculum standards and promote student engagement and mastery.
                        <br><br>
                        It is a product of Abiva Publishing House, Inc., the pioneer textbook publisher in the Philippines.
                    </p>
                    <center>
                        <button type="button" class="btn btn-primary">View more</button>
                    </center>
                </div>
                <div class="col-md-5">
                    <img class="right" src="/images/home/about.png" width="100%" style="margin-right: -30px;">
                </div>
            </div>
        </div>
    </div>
	@include('homes.footer')
@endsection
@include('homes.navbar', ['title' => 'ADMIN HOME'])
<script type="text/javascript" src="/js/homes/home.js"></script>