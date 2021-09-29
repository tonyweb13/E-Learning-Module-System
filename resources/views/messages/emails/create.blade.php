<!DOCTYPE html>
<html>
    @section('styles')
    @endsection

    @include('layouts.head', ['title' => 'COMPOSE EMAIL'])
    <body class="body-bg">
        @section('content')
            <div class="review-consult">
                <div class="container-reviews">
                    @include('messages.navbar')
                    <div class="tab-content" style="background-color: #FFFFFF !important; padding: 30px 0px; border-top:1px #CCCCCC solid;">
                        <a href="/sent-email" style="color:#fff !important;" class="right orange-pastel mb-1 button-add" data-toggle="tooltip" title="Sent Message">
                            Sent<i class="fas fa-paper-plane"></i>
                        </a>
                        <a href="/emails" onclick="composeEmail();" style="color:#fff !important;" class="right green-pastel mb-1 button-add" data-toggle="tooltip" title="Inbox">
                            Inbox<i class="fas fa-inbox"></i>
                        </a>
                      <h5>Compose Email</h5>
                      <br>
                      <form class="border geo-border-primary rounded p-3" id="add-emails"> 
                          @csrf
                          <div class="row">
                            <div class="col-md-12">
                                <div class="row pl-3 pr-3">
                                    <div class="col-md-12 p-1">
                                        <label>SUBJECT</label>
                                        <input type="text" id="subject" name="subject" class="form-control geo-border-primary" required>
                                        <br>
                                    </div>
                                    <div class="col-md-12 p-1">
                                        <label>TO:</label>&nbsp;&nbsp;&nbsp;
                                        <button type="button" class="btn btn-sm btn-success" onclick="addRow()"><span class="glyphicon glyphicon-plus-sign"></span> Add Row</button>&nbsp;
                                        <button type="button" class="btn btn-sm btn-danger" onclick="removeRow()"><span class="glyphicon glyphicon-remove-sign"></span> Del Row</button>&nbsp;
                                        
                                        <table id="table-user" class="table table-bordered" >
                                            <br><br>
                                            <tr>
                                                <td width="5%"></td>
                                                <th>Receiver Name or Email</th>
                                            </tr>
                                        </table>
                                        <br>
                                    </div>
                                    <div class="col-md-12 p-1">
                                        <!--<label>COMPOSE:</label>-->
                                        @include('authoring-tool')
                                        <input type="hidden" id="messages" name="message" class="form-control geo-border-primary" >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <br>
                            <button class="btn geo-primary" value="{{$employee->id ?? ''}}" id="eid"><i class="far fa-paper-plane"></i>&nbsp;&nbsp;Send</button>
                        </div>
                        <br><br><br><br>
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
        <script type="text/javascript" src="/js/messages/emails/create.js"></script>
        <script type="text/javascript" src="/js/messages/navbar.js"></script>
    </body>
</html>