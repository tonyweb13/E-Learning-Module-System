<h5 class ="headline">Browse</h5>
<div class="row space-title">
    <div class="col-6">
        <form class="input-group" action="/users/admins" autocomplete="off">
            <div class="input-group-prepend col-6">
                <button class="search-btn geo-primary" data-toggle="tooltip" title="Search">
                    <i class="fa fa-search"></i>
                </button>
                 <input type="text" class="form-control mr-2" name="keyword" placeholder="Search Name, Email or Institute" value="{{$keyword}}">
            </div>
        </form>
        <br><br>
    </div>
    <div class="col-6">

        <a href="/users/admins/create" class="right geo-primary mb-1 button-add" data-toggle="tooltip" title="Add Admin">
           New<i class="fa fa-plus"></i>
        </a>
    </div>
</div>
<div style="overflow: auto;" class="border">
    <table class="table">
        <tr class="geo-secondary">
            <th width="10%">S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Institution</th>
            <th>Status</th>
            <th>Last Login</th>
            <th>Action</th>
            @foreach($results as $key=> $result)
                <tr>
                    <td>{{$key + 1}}</td>
                    <td>{{$result->name ?? ''}}</td>
                    <td>{{$result->email ?? ''}}</td>
                    <td>{{$result->institute->name ?? ''}}</td>
                    <td>{{$result->is_active ?? 'Active'}}</td>
                    <td></td>
                    <td>
                        <a href="/users/admins/edit/{{$result->id}}" data-toggle="tooltip" title="Edit Guide" class="action-btn btn btn-primary text-light mb-1">
                            <i class="fa fa-edit"></i>
                        </a>
                        <button type="button" value="{{$result->id}}" onclick="deleteData(this.value)" data-toggle="tooltip" title="Delete Guide" class="action-btn btn btn-danger text-light delete-btn mb-1">
                            <i class="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            @endforeach
        </tr>
    </table>
</div>
{{$results->render()}}