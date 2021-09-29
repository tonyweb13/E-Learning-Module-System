<div id="compose-modal" class="modal fade" role="dialog" style=" width: 100% !important;">
    <div class="modal-dialog" style=" max-width: 70% !important;">
        <!-- Modal content-->
        <div class="modal-content" style=" width: 100% !important;">
            <div class="modal-header" style="background-color: #428bca; color: white;">
                <h4><center>COMPOSE EMAIL</center></h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row pl-3 pr-3">
                            <div class="col-md-12 p-1">
                                <label>SUBJECT:</label>
                                
                            </div>
                            <div class="col-md-10 p-1">
                                <label>To:</label>&nbsp;&nbsp;&nbsp;
                                <button type="button" class="btn btn-sm btn-success" onclick="addRow()"><span class="glyphicon glyphicon-plus-sign"></span> Add Row</button>&nbsp;
                                <button type="button" class="btn btn-sm btn-danger" onclick="removeRow()"><span class="glyphicon glyphicon-remove-sign"></span> Del Row</button>&nbsp;
                                
                                <table id="table-receiver" class="table table-bordered" >
                                    <br><br>
                                    <tr>
                                        <td width="5%"></td>
                                        <th>Receiver Name or Email</th>
                                    </tr>
                                </table>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <label>COMPOSE:</label>
                        @include('authoring-tool')
                        <input type="text" id="message" name="message" class="form-control geo-border-primary" >
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn" style="background-color: #ff9955;color: white;" data-dismiss="modal">
                      Close
                </button>
              </div>
        </div>
    </div>
</div>