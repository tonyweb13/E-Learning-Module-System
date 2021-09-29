<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use App\Institute;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6', 'confirmed'],
            'user_type_id' => [ 'required'],
            'institute_name' => ['required'],
            'institute_id' => ['required'],
            'grade_id' => [ 'required'],
            'is_accept_term' => [ 'required'],

        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        if ($data['institute_id'] > 0) {

            $institute_id=$data['institute_id'];
            
        }else{
            
            $tempname= strtolower(preg_replace('/\s+/', '', $data['institute_name']));
            $temp = Institute::where('is_deleted',0)->where('wname','LIKE', '%'.$tempname.'%')->first();
            
            if($temp){
                
                $institute_id=$temp->id;
                
            }else{
                
                $institute_id=Institute::create([
                                                'name'=>$data['institute_name'],
                                                'wname'=>$tempname,
                                                'is_deleted'=>0
                                            ])->id; 
            }
        }
       
        return User::create([
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'name'=>$data['first_name'].' '.$data['last_name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'user_type_id' => $data['user_type_id'],
            'institute_id' => $institute_id,
            'grade_id' => $data['grade_id'],
            'status'=>2,
            'is_accept_term' => 1,
        ]);
    }
}
