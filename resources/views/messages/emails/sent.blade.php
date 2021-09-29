<!DOCTYPE html>
<html>
    @section('styles')
    @endsection

    @include('layouts.head', ['title' => 'EMAILS'])
    <body class="body-bg">
        @section('content')
            <div class="review-consult">
                <div class="container-reviews">
                    @include('messages.navbar')
                    <div class="tab-content" style="background-color: #f6f3ee !important; padding: 30px;">
                        <h4>Sent Email</h4>
                        <div class="row space-title">
                            <div class="col-6">
                                <form class="input-group" action="/sent-email" autocomplete="off">
                                    <div class="input-group-prepend">
                                        <button class="search-btn geo-primary" data-toggle="tooltip" title="Search">
                                            <i class="fa fa-search"></i>
                                        </button>
                                         <input type="text" class="form-control mr-12"  name="keyword" placeholder="Search Subject" value="{{$keyword}}" col=13>
                                    </div>
                                </form>
                                <br><br>
                            </div>
                            <div class="col-6">
                                <a href="/emails" onclick="composeEmail();" style="color:#fff !important;" class="right green-pastel mb-1 button-add" data-toggle="tooltip" title="Inbox">
                                    Inbox<i class="fas fa-inbox"></i>
                                </a>
                                <a href="/emails/create"  class="right geo-primary mb-1 button-add" data-toggle="tooltip" title="Compose">
                                    Compose<i class="fa fa-plus"></i>
                                </a>
                            </div>
                        </div>
                        <div style="overflow: auto;">
                            <table class="table">
                                <tr class="geo-secondary">
                                    <th width="25%">Subject</th>
                                    <th width="25%">Receiver Name</th>
                                    <th width="25%">Sender Email</th>
                                    <th width="10%">No. of Thread</th>
                                    <th width="15%">Actions</th>
                                </tr>
                                @foreach($results as $key=> $result)
                                    <tr>
                                        <td>{{$result->subject ?? ''}}</td>
                                        <td>
                                            @foreach($result->emailReceiver as $receiver)
                                                {{$receiver->user->name ?? 'sasa'}}
                                                <br>
                                            @endforeach
                                        </td>
                                        <td>
                                            @foreach($result->emailReceiver as $receiver)
                                                {{$receiver->user->email ?? ''}}
                                                <br>
                                            @endforeach
                                        </td>
                                        <td class="text-center">{{$result->thread ?? ''}}</td>
                                        <td>
                                            
                                            <a href="/emails/show/{{$result->id}}"  data-toggle="tooltip" title="View Email" class="action-btn btn btn-warning text-light mb-1">
                                                <i class="fa fa-eye"></i>
                                            </a>
                                            
                                            <!--<button type="button" value="{{$result->id}}" onclick="deleteSentMail(this.value)" data-toggle="tooltip" title="Delete Email" class="action-btn btn btn-danger text-light delete-btn mb-1">-->
                                            <!--    <i class="fa fa-trash"></i>-->
                                            <!--</button>-->
                                        </td>
                                    </tr>
                                @endforeach 
                            </table>
                        </div>
                        <br>
                        <div id="page-nav">{{ $results->links() }}</div>
                    </div>
                </div>
            </div>
        @endsection
        @include('layouts.navbar', ['title' => 'EMAILS'])
        @include('layouts.alert')
        <script type="text/javascript" src="/js/alert.js"></script>
        <script type="text/javascript" src="/js/messages/emails/sent.js"></script>
        <script type="text/javascript" src="/js/messages/navbar.js"></script>
    </body>
</html>