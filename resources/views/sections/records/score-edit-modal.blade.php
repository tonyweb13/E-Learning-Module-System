<div id="score-edit-modal" class="modal fade" role="dialog">
    <div class="modal-dialog" style="max-width: 70% !important;">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header" style="background-color: #142d57; color: white;">
                <h4><center>Edit Score</center></h4>
                <button type="button" class="close" onclick="reportClose();">&times;</button>
            </div>
            <form id="edit-assessment-score" class=" form-control"> 
                @csrf 
                <div class="modal-body form-control">
                    <div class="col-md-12">
                        <table id="table-submiited-report" class="table table-bordered">
                            <tr>
                                <th>Question</th>
                                <th width="15%">Score</th>
                                <th width="15%">Total Item Score</th>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" onclick="reportClose();">Close</button>
                    <button type="button" class="btn btn-success" onclick="editAssessmentScore();">Save</button>
                </div>
            </form>
        </div>
    </div>
</div>