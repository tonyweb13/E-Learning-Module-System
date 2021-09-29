<?php

namespace App\Imports;

use App\UserImport;
use Maatwebsite\Excel\Concerns\ToModel;
use Illuminate\Support\Facades\Hash;
use Auth;
use DB;

class ImportUserInstitute implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {   
        return new UserImport([
                'first_name'          =>$row[0],
                'last_name'           =>$row[1],
                'email'               =>$row[2],
                'institute_id'        =>Auth::user()->institute->id,
                'user_type'           =>$row[3],
                'grade'               =>$row[4],
                'create_num_teacher'  =>0,
                'create_num_student'  =>0,
                'create_num_parent'   =>0,
                'added_by'            =>Auth::user()->id,
                'is_deleted'          =>0,

        ]);
    }
}

