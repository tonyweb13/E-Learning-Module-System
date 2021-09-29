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
                    <div class="tab-content border" style="background-color: #f6f3ee !important; padding: 30px 30px; border-top:1px #CCCCCC solid;">
                        <h4>Inbox</h4>
                        <div class="row space-title">
                            <div class="col-6">
                                <form class="input-group" action="/emails" autocomplete="off">
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
                                <a href="/sent-email" style="color:#fff !important; background-color:#28A745 !important;" class="right  mb-1 button-add" data-toggle="tooltip" title="Sent Message"  >
                                    Sent<i class="fas fa-paper-plane"></i>
                                </a>
                                <a href="/emails/create"  class="right geo-primary mb-1 button-add" data-toggle="tooltip" title="Compose" style='background-color:#28A745 !important;'>
                                    Compose<i class="fa fa-plus"></i>
                                </a>
                            </div>
                        </div>
                        <div style="overflow: auto;">
                            <table class="table">
                                <tr class="geo-secondary">
                                    <th width="25%">Subject</th>
                                    <th width="25%">Sender Name</th>
                                    <th width="25%">Sender Email</th>
                                    <th width="10%">No. of Thread</th>
                                    <th width="15%">Actions</th>
                                </tr>
                                @foreach($results as $key=> $result)
                                    <tr>
                                        @if($result->seen == 0)
                                            <td style="font-weight:bold;">{{$result->email->subject ?? ''}}</td>
                                            <td style="font-weight:bold;">{{$result->email->user->name ?? ''}}</td>
                                            <td style="font-weight:bold;">{{$result->email->user->email ?? ''}}</td>
                                            <td style="font-weight:bold;" class="text-center">{{$result->email->thread ?? ''}}</td>
                                        @else
                                            <td>{{$result->email->subject ?? ''}}</td>
                                            <td>{{$result->email->user->name ?? ''}}</td>
                                            <td>{{$result->email->user->email ?? ''}}</td>
                                            <td class="text-center">{{$result->email->thread ?? ''}}</td>
                                        @endif
                                        <td>
                                            
                                            <a href="/emails/show/{{$result->email->id}}"  data-toggle="tooltip" title="View Email" class="action-btn btn btn-warning text-light mb-1">
                                                <i class="fa fa-eye"></i>
                                            </a>
                                            
                                            <button type="button" value="{{$result->id}}" onclick="deleteMail(this.value)" data-toggle="tooltip" title="Delete Email" class="action-btn btn btn-danger text-light delete-btn mb-1">
                                                <i class="fa fa-trash"></i>
                                            </button>
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
        <script type="text/javascript" src="/js/messages/emails/inbox.js"></script>
        <script type="text/javascript" src="/js/messages/navbar.js"></script>
    </body>
</html>