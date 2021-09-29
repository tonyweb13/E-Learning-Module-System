@extends('auth.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-7" style="margin-top: 20px;">
            <!--<div style='text-align:center; width:400px; margin:0px auto;'>-->
            <!--    <img src='/images/logo/myedgeLogo.png' style='width:250px'/>-->
            <!--</div>-->
            
        </div>
    </div>
</div>
@include('dashboards.verify-account-modal')
<script type="text/javascript" src="/js/dashboard/verify-account.js"></script>
@endsection

