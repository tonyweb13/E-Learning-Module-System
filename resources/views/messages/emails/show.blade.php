<!DOCTYPE html>
<html>
    @section('styles')
        <style>
            .rcorners2 {
              border-radius: 25px;
              border: 2px solid #142d57;
              padding: 50px;
            }

        </style>
    @endsection

    @include('layouts.head', ['title' => 'EMAIL'])
    <body class="body-bg">
        @section('content')
            <div class="review-consult">
                <div class="container-reviews">
                    @include('messages.navbar')
                    <div class="tab-content" style="background-color: #FFFFFF !important; padding: 30px;">
                        <a href="/sent-email" style="color:#fff !important;" class="right orange-pastel mb-1 button-add" data-toggle="tooltip" title="Sent Message">
                            Sent<i class="fas fa-paper-plane"></i>
                        </a>
                        <a href="/emails" onclick="composeEmail();" style="color:#fff !important;" class="right green-pastel mb-1 button-add" data-toggle="tooltip" title="Inbox">
                            Inbox<i class="fas fa-inbox"></i>
                        </a>
                      <h5>Email</h5>
                      <br>
                      <form class="border geo-border-primary rounded p-3" id="add-email-reply" style='background-color:#f9f9f9;'> 
                          @csrf
                          <div class="row">
                            <div class="col-md-12">
                                <div class="row pl-3 pr-3">
                                    <div class="col-md-12 p-1">
                                        <label>SUBJECT</label>
                                        <input type="text" id="subject" name="subject" class="form-control geo-border-primary" required readonly value="{{$data->subject ?? ''}}" style='background-color:#f0f0f0 !important;'>
                                        <br>
                                    </div>
                                    <div class="col-md-6 p-1">
                                        <label>From:</label>
                                        <input type="text" id="from" name="from" class="form-control geo-border-primary" required readonly value="{{$data->user->name ?? ''}}" style='background-color:#f0f0f0 !important;'>
                                        <br>
                                    </div>
                                    <div class="col-md-6 p-1">
                                        <label>TO:</label>&nbsp;&nbsp;&nbsp;
                                        @foreach($data->emailReceiver as $receiver)
                                            <input type="text" id="user-name" name="user_name[]" class="form-control geo-border-primary" readonly required value="{{$receiver->user->label ?? ''}}" style='background-color:#f0f0f0 !important;'>
                                            <input type="hidden" id="user-id" name="user_id[]" class="form-control geo-border-primary" required value="{{$receiver->user->id ?? ''}}" style='background-color:#f0f0f0 !important;'>
                                        @endforeach
                                        <br>
                                    </div>
                                    <div class="col-md-12 p-1">
                                        <label>MESSAGE:</label>
                                        <div class="col-md-12 p-1" style="background-color:#FFFFFF; border-radius:5px; border:1px #16436d solid; padding:20px 5px !important;"> <!--class="rcorners2 col-md-12 p-1"-->
                                            @if($data != null)
                                                <span style="padding:20px; margin-right:20px;">
                                                    <?php   
                                                        echo $data->message ?? ''; 
                                                    ?>
                                                </span>
                                            @endif
                                        </div>
                                    </div>
                                    @foreach($data->emailReply as $val)
                                        <div class="col-md-12 p-1" style='margin-top:30px;'>
                                            <label>REPLIED BY {{$val->user->name ?? 'UnKnown'}}:</label>
                                            <div class=" col-md-12 p-1" style="background-color:#FFFFFF; border-radius:5px; border:1px #16436d solid; padding:20px 5px !important;" >
                                                
                                                <span style="padding:20px; margin-right:20px;">
                                                    <?php   
                                                        echo $val->message ?? ''; 
                                                    ?>
                                                </span>
                                            </div>
                                        </div>
                                        <br>
                                    @endforeach
                                    <div class="col-md-12 p-1" style='margin-top:30px;'>
                                        <label>Reply:</label>
                                        <div class=" col-md-12 p-1" style="background-color:#FFFFFF;" >
                                            @include('authoring-tool')
                                            <input type="hidden" id="rep-message" name="rep_message" class="form-control geo-border-primary" >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <br>
                            <button class="btn geo-primary" value="{{$employee->id ?? ''}}" id="eid"><i class="far fa-paper-plane"></i>&nbsp;&nbsp;Send</button>
                        </div>
                        <br><br><br><br>
                        <input  type="hidden" name="id" class="form-control geo-border-primary" required value="{{$data->id ?? ''}}">
                        <input  type="hidden" name="current_user" class="form-control geo-border-primary" required value="{{Auth::user()->id ?? ''}}">
                      </form>
                    </div>
                </div>
            </div>
        @endsection
        @include('layouts.navbar', ['title' => 'COMPOSE EMAIL'])
        @include('layouts.alert')
        <script type="text/javascript" src="/js/alert.js"></script>
        <script type="text/javascript" src="/js/authoring-tool.js"></script>
        <script type="text/javascript" src="/js/messages/emails/reply.js"></script>
        <script type="text/javascript" src="/js/messages/navbar.js"></script>
    </body>
</html>