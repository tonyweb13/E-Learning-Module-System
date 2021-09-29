<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use DB;
use App\Province;
use App\Address;
use App\Zipcode;
use App\Institute;
use Illuminate\Support\Facades\Hash;
use App\ActivityLog;
use Auth;

class InstitutionalAdminUsersController extends Controller
{
    
    public function index(Request $request)
    {
        $keyword = $request->keyword;
        $user_type='Institute Admin';
        $results = User::paginatedSearch($keyword,$user_type);
        return view('users.institutionals.index', compact('results', 'keyword','user_type'));
    }

    public function create(Request $request)
    {
        $data=null;
        $user_type ='Institute Admin';
        $provinces=Province::get();
        return view('users.institutionals.create',compact('data','user_type','provinces'));
    }

    public function store(Request $request)
    {
        $has_exceptions = DB::transaction(function() use($request) {

            if(request('institute_id')){
                $institute_id=request('institute_id');
            }else{
                
                $tempname= strtolower(preg_replace('/\s+/', '', request('institute')));
                $temp = Institute::where('is_deleted',0)->where('wname','LIKE', '%'.$tempname.'%')->first();
                
                if($temp){
                    
                    $institute_id=$temp->id;
                    
                }else{
                    
                    $institute_id=Institute::create([
                                                    'name'       => request('institute'),
                                                    'wname'      => $tempname,
                                                    'is_deleted' =>0
                                                ])->id;
                                                
                }
                
            }
            
            if(request('id')){//edit

                User::where('id',request('id'))
                    ->update([
                                'first_name'        => request('first_name'),
                                'last_name'         => request('last_name'),
                                'name'              => request('first_name') . ' '. request('last_name'),
                                'email'             => request('email'),
                                'password'          => Hash::make(request('password')),
                                'gender'            => request('gender'), 
                                'status'            => request('status'),
                                'birthday'          => request('birthday'),
                                'about_me'          => request('about_me'),
                                'institute_id'      => $institute_id,
                                'create_num_teacher'=> request('assign_num1'),
                                'create_num_student'=> request('assign_num2'),
                                'create_num_parent' => request('assign_num3'),
                                'updated_by'        => Auth::user()->id,
                                
                            ]);
                if(request('zipcode') != 0){
                    
                    $ex=Address::where('user_id',request('id'))->first();
                    
                    if($ex){//update
                    
                        Address::where('user_id',request('id'))
                               ->update([
                                            'unit'          => request('unit'),
                                            'building'      => request('building'),
                                            'block'         => request('block'),
                                            'lot'           => request('lot'),
                                            'phase'         => request('phase'),
                                            'house_no'      => request('house_no'),
                                            'street'        => request('street'),
                                            'subdivision'   => request('subdivision'),
                                            'barangay'      => request('barangay'),
                                            'zipcode_id'    => request('zipcode'),
                                        ]);
                    }else{//create
                        Address::create([
                                    'user_id'       => request('id'),
                                    'unit'          => request('unit'),
                                    'building'      => request('building'),
                                    'block'         => request('block'),
                                    'lot'           => request('lot'),
                                    'phase'         => request('phase'),
                                    'house_no'      => request('house_no'),
                                    'street'        => request('street'),
                                    'subdivision'   => request('subdivision'),
                                    'barangay'      => request('barangay'),
                                    'zipcode_id'    => request('zipcode'),
                                ]);
                    } 
                }
                
                //activity log
                ActivityLog::create([
                                        'user_id'      => Auth::user()->id,
                                        'activity'     => 'edit',
                                        'module'       => 'user',
                                        'activity_id'  => request('id'),
                                        'activity_name'=> request('first_name') . ' '. request('last_name'),
                                        'is_deleted'   => 0
                                    ]);

            }else{//create

                $id=User::create([
                                    'first_name'        => request('first_name'),
                                    'last_name'         => request('last_name'),
                                    'name'              => request('first_name') . ' '. request('last_name'),
                                    'email'             => request('email'),
                                    'password'          => Hash::make(request('password')),
                                    'image'             => NULL, 
                                    'gender'            => request('gender'), 
                                    'status'            => request('status'),
                                    'birthday'          => request('birthday'),
                                    'about_me'          => request('about_me'),
                                    'user_type_id'      => 3,
                                    'institute_id'      => $institute_id,
                                    'grade_id'          => 0,
                                    'create_num_teacher'=> request('assign_num1'),
                                    'create_num_student'=> request('assign_num2'),
                                    'create_num_parent' => request('assign_num3'),
                                    'is_accept_term'    => 1,
                                    'is_deleted'        => 0,
                                    'added_by'          => Auth::user()->id,
                            ])->id;
                if(request('zipcode') != 0){
                    
                    Address::create([
                                    'user_id'       => $id,
                                    'unit'          => request('unit'),
                                    'building'      => request('building'),
                                    'block'         => request('block'),
                                    'lot'           => request('lot'),
                                    'phase'         => request('phase'),
                                    'house_no'      => request('house_no'),
                                    'street'        => request('street'),
                                    'subdivision'   => request('subdivision'),
                                    'barangay'      => request('barangay'),
                                    'zipcode_id'    => request('zipcode'),
                                ]);   
                }
                
                //activity log
                ActivityLog::create([
                                        'user_id'      => Auth::user()->id,
                                        'activity'     => 'create',
                                        'module'       => 'user',
                                        'activity_id'  => $id,
                                        'activity_name'=> request('first_name') . ' '. request('last_name'),
                                        'is_deleted'   => 0
                                    ]);
            }

        });

        
        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
    }

    public function edit($id)
    {
        $data=User::with([
                            'address.zipcode.cityId.provinceId',
                        ])
                  ->where('id',$id)
                  ->first();
        $user_type ='Institute Admin';
        $provinces=Province::get();
        return view('users.institutionals.create',compact('data','user_type','provinces'));
    }

    public function delete(Request $request){

        $has_exceptions = DB::transaction(function() use($request) {
            
            User::where('id',request('id'))
                   ->update([
                              'is_deleted' => 1,
                            ]);  

        });

        
        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
    }
    
    public function activityLogs(Request $request,$id){
        
        //get user ctivity log
        
        $user_type ='Institute Admin';
        $keyword   = $request->keyword;
        $results=ActivityLog::where(function($q) use($keyword) {
                                $q->where('activity', 'LIKE', '%'.$keyword.'%')
                                  ->orWhere('module', 'LIKE', '%'.$keyword.'%')
                                  ->orWhere('activity_id', 'LIKE', '%'.$keyword.'%');
                            })
                            ->where('user_id',$id)
                            ->where('is_deleted',0)
                            ->paginate(10);
                            
        $results->appends([
            'keyword' => $keyword,
            'search_pagination' => 10
        ]);
        
        return view('users.institutionals.activity', compact('results', 'keyword','user_type','id'));
    }


    public function show($id)
    {
        //
    }




    public function update(Request $request, $id)
    {
        //
    }


    public function destroy($id)
    {
        //
    }
}
