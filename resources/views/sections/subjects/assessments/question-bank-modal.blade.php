<div id="question-bank-modal" class="modal fade" role="dialog">
  @csrf
    <div class="modal-dialog" style="max-width: 80% !important;">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header" style="background-color: #142d57; color: white;">
                <h4><center>Upload Question</center></h4>
                <button type="button" class="close" data-dismiss="modal">
                    &times;</button>
            </div>
            <form id="add-question-qb" class=" form-control"> 
              @csrf 
              <div class="modal-body form-control">
                <div class="col-md-12">
                    <div class="row space-title">
                        <div class="col-6">
                            <h5>Question Bank</h5>
                            <br>
                            <form class="input-group" action="/sections/subjects/{{$section->id}}" autocomplete="off">
                                <div class="input-group-prepend">
                                    <button class="search-btn geo-primary" data-toggle="tooltip" title="Search">
                                        <i class="fa fa-search"></i>
                                    </button>
                                     <input type="text" class="form-control mr-12"  name="keyword" placeholder="Search Subject Name" value="{{$keyword}}">
                                </div>
                            </form>
                            <br><br>
                        </div>
                        <br>
                        <div style="overflow: auto;" class="border col-md-12">
                            <table class="table" id="question-qb-table">
                                <tr class="geo-secondary">
                                    <td width="5%"></td>
                                    <th width="5%">S No.</th>
                                    <th width="20%">Question Tag</th>
                                    <th width="20%">Question Type</th>
                                    <th width="35%">Question</th>
                                    <th width="5%">Point</th>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
              </div>
              <input type="hidden" name="current_user" id="current-user" class="form-control geo-border-primary" required value="{{Auth::user()->id ?? ''}}">
            </form>
        </div>
    </div>
</div>