<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    @endsection

    @include('layouts.head', ['title' => 'USERS '])
    <body class="body-bg">
        @section('content')
        
            <div class="review-consult">
                <!--
                @if($errors->any())
                <h4>{{$errors->first()}}</h4>
                @endif
                <h1>Book Activation Keys</h1>
                -->
                <br/> <br/>
                
                <div class='noteBox' style='border:3px #1F4788 solid; background-color:#F2F5F9; border-radius:20px; padding:20px; width:400px; margin:20px auto;'>
                    <table>
                        <tr  style='background-color:#F2F5F9 !important;'>
                            <td style='width:80px; text-align:center;'>
                                <i class="fas fa-search-plus" style='font-size:40px;'></i>
                            </td>
                            <td>
                                
To find the code to activate your EDGE Subject/eBook, please go to the first page of your text book and find the 12 alphanumeric characters and then enter it below.
                            </td>
                        </tr>
                    </table>
                </div>
                
                
                
                <div style='width:350px; margin:0px auto; padding:30px 0px; text-align:center'>
                    <h3 style='text-align:center;'>Enter Code Here</h3>
                <form action="/activation/claim" method="POST">
                    @csrf

                    @if(session('message'))
                        <div class="alert"><h4 style='color:#428BCA;'>Book Claimed</h4></div>
                    @endif
                    <input type="text" name="activation_key" style='text-align:center; font-size:20px; width:100%;'>
                    <br/>
                    <input type="submit" class="submit_button" value="Activate Code" style='margin:20px 0px; text-align:center; padding:10px 20px; background-color:#5CAF4E; color:#FFFFFF; border:0px; border-radius:10px;'>
                </form>
                </div>
                
            </div>
        @endsection
    @include('layouts.navbar', ['title' => 'ACTIVATIONS'])
    @include('layouts.alert')
    <script type="text/javascript" src="/js/alert.js"></script>
    <script type="text/javascript" src="/js/users/navbar.js"></script>
    <script type="text/javascript" src="/js/users/admins/index.js"></script>
    </body>
</html>
