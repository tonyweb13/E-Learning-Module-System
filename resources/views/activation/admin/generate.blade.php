<!DOCTYPE html>
<html>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/sidenav.css">
    <link href="//cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css" rel="stylesheet">
    <link href="//cdn.datatables.net/buttons/1.6.2/css/buttons.dataTables.min.css" rel="stylesheet">
    @endsection
    

    @include('layouts.head', ['title' => 'USERS '])
    <body class="body-bg">
        @section('content')
            <div class="review-consult">
                 <h5 class='headline'>Activation Keys for  {{$book->ebook_title}}</h5>
                 <br/>
                <form action="/activation" method="POST" class="pb-2">
                    @csrf
                    <input type="hidden" name="book_id" value="{{$book->id}}">
                    <input class="form-control" type="text" name="slug" value="{{ preg_replace('/\s+/', '-',$book->ebook_title)}}"placeholder="Prefix">
                    <input class="form-control" type="number" name="count" value="1"placeholder="NUMBER OF EBOOKS ACTIVATION">
                    <input class="form-control" type="text" name="slug1" value="{{ preg_replace('/\s+/', '/',$book->batch)}}"placeholder="Batch">
                    <input class="form-control"type="date" name="DOE" value="{{$book->DOE}}">     
                   
                    <br>
                    
                    <input type="submit" value="Generate" style='margin:20px 0px; text-align:center; padding:10px 20px; background-color:#5CAF4E; color:#FFFFFF; border:0px; border-radius:10px;'>
                </form>
                <form action="" class="py-3" method="get">
                    <label for="">Claimed</label>
                    <input type="radio" name="filter" value="claimed" id="">
                    
                    <label for="" style='margin-left:20px;'>Unclaimed</label>
                    <input type="radio" name="filter" value="unclaimed" id="">
                    

                    <input type="submit" class="submit_button" value="Filter" style='margin:0px 20px; text-align:center; padding:2px 5px; background-color:#224D93; color:#FFFFFF; border:0px; border-radius:3px;'>

                 </form>

                 <form action="" method="get">
                    <input type="text" name="searquery1" id="">
                    <input type="submit" value="Filter" style='margin:0px 5px; text-align:center; padding:2px 5px; background-color:#224D93; color:#FFFFFF; border:0px; border-radius:3px;'>
                    <button type="submit" style='margin:0px 5px; text-align:center; padding:2px 5px; background-color:#224D93; color:#FFFFFF; border:0px; border-radius:3px;'>Excel</button >
                </form>

               


                <table class="table" style='margin-top:20px;'>
                    <thead>
                        <tr class='geo-secondary'>
                            <th>Activation Key</th>
                            <th>Batch</th>
                            <th>Claimed By</th>
                            <th>Date Generated</th>
                            <th>Date Claimed</th>
                           <th>Expiration Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>


                        <!--filter-->
                        
                        {{$keyword = request()->input('searquery1')}}
                        @foreach (\App\Activation::

                        when(request()->input('searquery1'),function($q) use($keyword){
                                return $q->where(function($qq) use($keyword){
                                        $qq ->where('activation_key', 'LIKE', '%'.$keyword.'%')
                                        ->orWhere('batch','LIKE','%'.$keyword.'%');
                                    });
                        
                            })->
                            
                        when(request()->input('filter')=='claimed',function($q){
                            return $q->where('status',1);
                        })->
                        when(request()->input('filter')=='unclaimed',function($q){
                            return $q->where('status',0);
                        })->
                        where('book_id',$book->id)->orderBy('created_at','asc')->get() as $item)

                        


                            <tr>
                                <td>{{$item->activation_key}}</td>
                                <td>{{$item->BATCH}}</td>
                                <td>
                                   {{$item->status?$item->teacher->email:'unclaimed'}}
                                </td>
                                <td>{{$item->created_at}}</td>
                                <td>{{$item->claimed_at}}</td>
                                <td>{{$item->DOE}}</td>
                                <td>
                                    <button class="del_button" data-id="{{$item->id}}" style='background-color:#DC3545; border-radius:3px; padding:2px 5px; color:#FFFFFF;'> Delete</button>
                                </td>
                            </tr>
                        @endforeach

                    </tbody>
                </table>
            </div>
        @endsection
    @include('layouts.navbar', ['title' => 'ACTIVATIONS'])
    @include('layouts.alert')
    <script>
      $('.del_button').each(function () {
            var $this = $(this);
            $this.on("click", function () {
                let key = $(this).data('id');
                let conf = confirm('Are you sure you want to delete this key?')

                if(conf){
                    $.ajax({
                method: "delete",
                url: `/activation/${key}`,
                context: document.body
                }).done(function() {
                    window.location.reload()
                });
                }
            });
        });
    </script>

    <script>

    </script>
    <script type="text/javascript" src="/js/alert.js"></script>
    <script type="text/javascript" src="/js/users/navbar.js"></script>
    <script type="text/javascript" src="/js/users/admins/index.js"></script>
    </body>
</html>
