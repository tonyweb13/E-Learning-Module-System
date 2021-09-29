<?php

namespace App\Imports;

use App\UserImport;
use Maatwebsite\Excel\Concerns\ToModel;
use Illuminate\Support\Facades\Hash;
use Auth;
use DB;

class ImportUser implements ToModel
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
                'institute_id'        =>$row[3],
                'user_type'           =>$row[4],
                'grade'               =>$row[5],
                'create_num_teacher'  =>$row[6] ?? 0,
                'create_num_student'  =>$row[7] ?? 0,
                'create_num_parent'   =>$row[8] ?? 0,
                'added_by'            =>Auth::user()->id,
                'is_deleted'          =>0,

        ]);
    }
}

