<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    @endsection

    @include('layouts.head', ['title' => 'USERS '])
    <body class="body-bg">
        @section('content')
            <div class="review-consult">
                <h5 class='headline'>Book Activation Keys</h5>

                <br/>
                
                <form class="input-group" action="" method="get">
                                    <div class="input-group-prepend col-6">
                                        <button class="search-btn geo-primary" data-toggle="tooltip" type='submit' title="" data-original-title="Search">
                                            <i class="fa fa-search"></i>
                                        </button>
                                         <input type="text" class="form-control mr-2" name="searquery"  value="">
                                    </div>
                                </form>
                
                <!--
                <form action="" method="get">
                    <input type="text" name="searquery" id="">
                    <input type="submit" value="Filter" style='background-color:#224D93; color:#FFFFFF; padding:2px 10px; border-radius:3px;'>
                </form>
                -->


                <table class="table" style='margin-top:30px;'>
                    <thead>
                        <tr class='geo-secondary'>
                            <th>Book</th>
                            <th>Total Keys</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                    <!--{{$keyword = request()->input('searquery')}}
                        @foreach (\App\Ebook::
                            when(request()->input('searquery'),function($q) use($keyword){
                                return $q->where(function($qq) use($keyword){
                                        $qq ->where('ebook_title', 'LIKE', '%'.$keyword.'%')
                                        ->orWhere('price','LIKE','%'.$keyword.'%');
                                    });
                            })->

                        where('is_deleted',0)->withCount('keys','keys_claimed')->orderBy('ebook_title','asc')->get() as $item)
                        -->

                            <tr>
                                <td>{{$item->ebook_title}}</td>
                                <th>
                                    {{$item->keys_claimed_count}}/{{$item->keys_count}}
                                </th>
                                <td>
                                    <a href="/activation/{{$item->id}}/add">Add Key</a>
                                </td>
                            </tr>
                        <!--@endforeach-->

                    </tbody>
                </table>

            </div>
        @endsection
    @include('layouts.navbar', ['title' => 'ACTIVATIONS'])
    @include('layouts.alert')
    <script type="text/javascript" src="/js/alert.js"></script>
    <script type="text/javascript" src="/js/users/navbar.js"></script>
    <script type="text/javascript" src="/js/users/admins/index.js"></script>
    </body>
</html>