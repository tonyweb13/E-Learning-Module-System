
<div class="col-md-12">
    <h5>Student of Institute {{Auth::user()->institute->name ?? ''}}</h5>
    <br>
    <div class="row">
        <div class="col-md-6">
            <form class="input-group" action="/sections/students/modular/create/{{$section->id}}" autocomplete="off">
                <div class="input-group-prepend">
                    <button class="search-btn geo-primary" data-toggle="tooltip" title="Search">
                        <i class="fa fa-search"></i>
                    </button>
                     <input type="text" class="form-control mr-12 " name="keyword" placeholder="Search Student Name, Email or Gender" value="{{$keyword}}" style="width: 300px;">
                </div>
            </form>
        </div>
        <div class="col-md-6">
            <button type="button" class="btn btn-outline-success right" onclick="enrollModularStudents();">Enroll To Class</button>
        </div>
    </div>
    <br>
    <input type="hidden" name="section_id" id="section-id" class="form-control geo-border-primary" value="{{$section->id ?? ''}}">
    <div class="row">
        <div class="col-md-12">
            <div class="row pl-3 pr-3">
                <div class="col-md-12 p-1">
                    <table class="table border">
                        <tr style="background-color:#0074bc;color:white;">
                            <td width="3%"></td>
                            <th width="5%">S No.</th>
                            <th>Student Name</th>
                            <th>Email</th>
                            <th>Grade</th>
                            <th>Gender</th>
                        </tr>
                        @foreach($results as $key=> $result)
                            <tr>
                                <td>
                                    <input class="student-id" type="checkbox" id="student-id" name="student_id" value="{{$result->id}}">
                                </td>
                                <td>{{$key + 1}}</td>
                                <td>{{$result->name ?? ''}}</td>
                                <td>{{$result->email ?? ''}}</td>
                                <td>{{$result->grade->name ?? ''}}</td>
                                <td>{{$result->gender ?? ''}}</td>
                            </tr>
                        @endforeach  
                    </table>
                </div>
            </div>
        </div>
    </div> 
</div>
<br>
<input type="hidden" name="current_user" id="current-user" class="form-control geo-border-primary" required value="{{Auth::user()->id ?? ''}}">

    