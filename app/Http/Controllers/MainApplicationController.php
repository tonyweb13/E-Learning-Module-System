<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\User;
use App\Product;

class MainApplicationController extends Controller
{
   
    //login user
    public function verifyaccount(Request $request){
        
        $val = json_decode($request->getContent(), true);
        $email = $val['email'];
        
        $user=User::with(['userType'])->where('email',$val['email'])->first();
        
        if($user){//check if password correct
            
            if(Hash::check($val['password'], $user->password)){
                $msg='sucess';
            }else{
                $msg='wp';
            }
            
        }else{
            
            $msg='failed';
        }
        
 
    
       	return json_encode(array('data'=>$user,'msg'=>$msg));
       	
    }
    
    public function getProduct(){
        
        $return =  Product::get();
        return json_encode($return);
    }
    
    public function index()
    {
        //
    }


    public function create()
    {
        //
    }

 
    public function store(Request $request)
    {
        //
    }


    public function show($id)
    {
        //
    }


    public function edit($id)
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
