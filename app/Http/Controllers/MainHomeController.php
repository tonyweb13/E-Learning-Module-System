<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Institute;
use App\User;
use Storage;
use Config;
use DB;
use App\RegisterToken;
use Mail;
use App\Mail\SendMail;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\ImportUser;
use App\UserImport;
use App\Grade;
use App\UserType;
use Illuminate\Support\Facades\Hash;
use App\Imports\ImportUserInstitute;
use App\ActivityLog;
use App\Forum;
use App\Province;
use App\Address;
use App\GoogleDriveStorage;

class MainHomeController extends Controller
{
    
    // public function testingonly(){
        
    //     $arr = ["abc","ded"];
    //     $result = [];
    //     $total = count($arr) + 2;
    //     $temp=null;
        
    //     for($i = 0; $i < $total+ 2; $i++){
            
    //         if($i = 0 || $i == $total-1){
                
    //             for($a=0; count($arr); $a++){
                    
    //                 $temp = $temp .'*';   
    //             }
    //             $result[] = $temp;
    //             $temp = null;
            
                
    //         }else{
                
    //             for($a=0; $total ; $a++){
                    
    //                 if($a == 0 || $a == $total-1){
    //                     $temp = $temp .'*';
    //                 }else{
    //                     $temp = $temp .$arr[$i];
    //                 } 
    //             }
    //             $result[] = $temp;
    //             $temp = null;
                
    //         }
            
    //     }
    

    //     return $result;
    	

    // }
    
    
    public function index()
    {
        
        if(Auth::user()){
            // check user
            $currentuser = Auth::user();
            
            if($currentuser->status == 2){
                
                $stat = $this->sendToken();   
            }
            
            if($currentuser->userType->name == 'Admin'){

                return view('dashboards.home-admin');

            }elseif($currentuser->userType->name == 'Teacher' || $currentuser->userType->name == 'Institute Admin' ){
                
                $forums = Forum::whereHas('forumViewer',function($q) use($currentuser){
                              $q->where('user_id',$currentuser->id);
                         })
                        ->where('is_deleted',0)
                        ->where('added_by','!=',$currentuser->id)
                        ->orderBy('date_created','desc')
                        ->limit(3)
                        ->get();
                        
                //create folder for drive
                if($currentuser->with_efolder == 0){
                    
                    $folder = GoogleDriveStorage::createFolderDriveOne($currentuser);    
                }
                
                return view('dashboards.home-teacher',compact('forums','currentuser'));
            
            }elseif($currentuser->userType->name == 'Student'){
                
                $forums = Forum::whereHas('forumViewer',function($q) use($currentuser){
                              $q->where('user_id',$currentuser->id);
                         })
                        ->where('is_deleted',0)
                        ->where('added_by','!=',$currentuser->id)
                        ->orderBy('date_created','desc')
                        ->limit(3)
                        ->get();
                        
                //create folder for drive
                if($currentuser->with_efolder == 0){
                    
                    $folder = GoogleDriveStorage::createFolderDriveTwo($currentuser);    
                }
                
                return view('dashboards.home-teacher',compact('forums','currentuser'));
                
            }else{

                return view('dashboards.home');

            }

        }else{//without login user
            
            //return view('homes.home');
            return view('homes.index');
        }
    }
    
    
    public function getProduct(){
        
        $products = Product::get();
        
    }
    public function sendToken(){
        
        $check=RegisterToken::where('user_id',Auth::user()->id)
                            ->where('is_deleted',0)
                            ->first();
                            
        if($check){
            
            return 'exist';
            
        }else{
            
            //random tocken
            $seedletter = str_split('abcdefghijklmnopqrstuvwxyz');
            // probably optional since array_is randomized; this may be redundant
            shuffle($seedletter);
            $randletter = '';
            foreach (array_rand($seedletter, 2) as $k)
            {
                $randletter .= $seedletter[$k];
            } 
            //generating the numeric character for verification code
            $seednumber = str_split('1234567890');
            shuffle($seednumber);
            $randnumber = '';
            foreach (array_rand($seednumber, 2) as $k)
            {
                $randnumber .= $seednumber[$k];
            } 
            $random=str_shuffle($randletter.$randnumber);
            
            //save token
            $tokenid=RegisterToken::create([
                                    'token'      => $random,
                                    'user_id'    => Auth::user()->id,
                                    'is_deleted' => 0,
                                  ])->id;
                                  
            $email=Auth::user()->email;
            $tag=env('APP_URL');
            $link=$tag.'/account/verify/'.$tokenid.'/'.Auth::user()->id; 
            $data = array('link'=>$link,'email'=>$email);
            
            Mail::send('dashboards.verify-email', $data, function($message) use ($email) {
                $message->to($email,'')->subject('Welcome to MyEDGE Learning');
                $message->from('myedge_verification@edupowerpublishing.com','Welcome to MyEDGE Learning');
            });
            
            return 'success';
            
        }
    }
    
    public function sendToken2(){
        
        RegisterToken::where('user_id',Auth::user()->id)
                     ->update([
                                'is_deleted' => 0,
                              ]);
        //random tocken
        $seedletter = str_split('abcdefghijklmnopqrstuvwxyz');
        // probably optional since array_is randomized; this may be redundant
        shuffle($seedletter);
        $randletter = '';
        foreach (array_rand($seedletter, 2) as $k)
        {
            $randletter .= $seedletter[$k];
        } 
        //generating the numeric character for verification code
        $seednumber = str_split('1234567890');
        shuffle($seednumber);
        $randnumber = '';
        foreach (array_rand($seednumber, 2) as $k)
        {
            $randnumber .= $seednumber[$k];
        } 
        $random=str_shuffle($randletter.$randnumber);
        
        //save token
        $tokenid=RegisterToken::create([
                                'token'      => $random,
                                'user_id'    => Auth::user()->id,
                                'is_deleted' => 0,
                              ])->id;
                              
        $email=Auth::user()->email;
        $tag=env('APP_URL');
        $link=$tag.'/account/verify/'.$tokenid.'/'.Auth::user()->id; 
        $data = array('link'=>$link,'email'=>$email);
        
        Mail::send('dashboards.verify-email', $data, function($message) use ($email) {
            $message->to($email,'')->subject('Welcome to MyEDGE Learning');
            $message->from('myedge_verification@edupowerpublishing.com','MyEDGE Learning');
        }); 
        
        return response()->json('success');
    }
    
    public function indexs()
    {
        
        $ip = $this->getIp();
        ActivityLog::create([
                                'user_id'       => Auth::user()->id,
                                'activity'      => 'login',
                                'ip'            => $ip,
                                'is_deleted'    => 0,
                            ]);
        return redirect('/home');
    }
    
    public function getIp(){
        $ip=null;
         foreach (array('HTTP_CLIENT_IP', 'HTTP_X_FORWARDED_FOR', 'HTTP_X_FORWARDED', 'HTTP_X_CLUSTER_CLIENT_IP', 'HTTP_FORWARDED_FOR', 'HTTP_FORWARDED', 'REMOTE_ADDR') as $key){
            if (array_key_exists($key, $_SERVER) === true){
                foreach (explode(',', $_SERVER[$key]) as $ip){
                    $ip = trim($ip); // just to be safe
                    if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) !== false){
                        return $ip;
                    }
                }
            }
        }
        
    }
    
    public function sampleEbook(){
        
        return view('homes.sample-ebook');
    }
    
    public function uploadImage(Request $request){

        if (request('imageFile')) {
            
            if(Auth::user()->userType->name == 'Student'){ // drive 2
            
                $image = GoogleDriveStorage::storeDriveTwo(Auth::user(),request('imageFile'));
                
            }else{
                
                $image = GoogleDriveStorage::storeDriveOne(Auth::user(),request('imageFile'));
                
            }
            
            if($image == 'No Folder'){
                    
                $path3 = Storage::disk('public')->put('editor/images', request('imageFile'));
                $image=env('APP_URL').'/storage/'.$path3;
                
            }
            
            return response()->json($image);

        }else{
            return response()->json('error');
        }
    }

    public function uploadVideo(Request $request){

        if (request('videoFile')) {
            
            if(Auth::user()->userType->name == 'Student'){ // drive 2
            
                $path = GoogleDriveStorage::storeDriveTwo(Auth::user(),request('videoFile'));
                
            }else{
                
                $path = GoogleDriveStorage::storeDriveOne(Auth::user(),request('videoFile'));
                
            }
            
            if($path == 'No Folder'){
                    
                $file=request('videoFile')->storeAs('editor/videoaudio',request('videoFile')->getClientOriginalName(),'public');
                $path=env('APP_URL').'/storage/'.$file;
                
            }
            
            return response()->json($path);

        }else{
            return response()->json('error');
        }
    }
    
    public function uploadFile(Request $request){

        if (request('fileFile')) {
            
            if(Auth::user()->userType->name == 'Student'){ // drive 2
            
                $path = GoogleDriveStorage::storeDriveTwo(Auth::user(),request('fileFile'));
                
            }else{
                
                $path = GoogleDriveStorage::storeDriveOne(Auth::user(),request('fileFile'));
                
            }
            
            if($path == 'No Folder'){
                    
                $file=request('fileFile')->storeAs('editor/fileDocs',request('fileFile')->getClientOriginalName(),'public');
                $path=env('APP_URL').'/storage/'.$file;
                
            }

            return response()->json($path);

        }else{
            return response()->json('error');
        }
    }
    
    public function profile(){
        
        $data=User::where('id',Auth::user()->id)->first();
        $provinces=Province::get();
        return view('dashboards.profile',compact('data','provinces'));
    }
    
    public function profileStore(Request $request){
        
        $has_exceptions = DB::transaction(function() use($request) {
            
            if (request('image') != null) {
                
                if(Auth::user()->userType->name == 'Student'){ // drive 2
                    
                    $image = GoogleDriveStorage::storeDriveTwo(Auth::user(),request('image'));
                    
                }else{ //drive 1
                    
                    $image = GoogleDriveStorage::storeDriveOne(Auth::user(),request('image'));
                    
                }
                
                if($image == 'No Folder'){
                    
                    $path3 = Storage::disk('public')->put(Auth::user()->name.'/profile', request('image'));
                    $image='/storage/'.$path3;
                    
                }
                
                
                User::where('id',Auth::user()->id)
                ->update([
                            'image'             => $image,
                        ]);

            }
            
            User::where('id',Auth::user()->id)
                ->update([
                            'first_name'        => request('first_name'),
                            'last_name'         => request('last_name'),
                            'name'              => request('first_name') . ' '. request('last_name'),
                            'gender'            => request('gender'), 
                            'birthday'          => request('birthday'),
                        ]);
            
            Address::where('user_id',Auth::user()->id)
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
        });
        
        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
       
    }
    
    public function storeProfileDrive1($data,$file){
        
        $dir = '/';
        $recursive = false; // Get subdirectories also?
        $folder = $data->name;

        //find the parent(user) folder or directory
        $contents = collect(Storage::disk('google')->listContents($dir, $recursive));

        $dir = $contents->where('type', '=', 'dir')
                        ->where('filename', '=', $folder)
                        ->first(); // There could be duplicate directory names!

        if ( ! $dir) {

            Storage::disk('google')->makeDirectory($folder);
            
            $path3 = Storage::disk('public')->put($data->name.'/profile', $file);
            $image='/storage/'.$path3;
            
            return $image;
        
        }else{

            $fileName = $file->getClientOriginalName();
            $destinationPath = $dir['path'].'/'.$fileName;

            Storage::disk('google')->put($destinationPath, file_get_contents($file->getRealPath()));

            $url = Storage::disk('google')->url($destinationPath);
            
            return $url;

        }
        
    }
    
    public function storeProfileDrive2($data,$file){
        
        $dir = '/';
        $recursive = false; // Get subdirectories also?
        $folder = $data->name;

        //find the parent(user) folder or directory
        $contents = collect(Storage::disk('second_google')->listContents($dir, $recursive));

        $dir = $contents->where('type', '=', 'dir')
                        ->where('filename', '=', $folder)
                        ->first(); // There could be duplicate directory names!

        if ( ! $dir) {

            Storage::disk('second_google')->makeDirectory($folder);
            
            $path3 = Storage::disk('public')->put($data->name.'/profile', $file);
            $image='/storage/'.$path3;
            
            return $image;
        
        }else{

            $fileName = $file->getClientOriginalName();
            $destinationPath = $dir['path'].'/'.$fileName;

            Storage::disk('second_google')->put($destinationPath, file_get_contents($file->getRealPath()));

            $url = Storage::disk('second_google')->url($destinationPath);
            
            return $url;

        }
        
    }
    
    public function changepassword(Request $request){
        
        $user = User::where('id',Auth::user()->id)->first();
        
        if(Hash::check(request('p1'), $user->password)){
            
            User::where('id',Auth::user()->id)
                ->update([
                            'password' => Hash::make(request('p2'))
                         ]);
                         
            return response()->json('success');
        }else{
            return response()->json('invalid');
        }
        
    }
    
    //verify account 
    public function verifyAccount($id,$uid){
        
        $check=RegisterToken::where('id',$id)->first();
        
        if($check){
            if($check->is_deleted == 1){
                $result='Token already used';
            }else{
                $result='Congratulation!,Your account is already verified'; 
                RegisterToken::where('id',$id)->update(['is_deleted'=>1]);
                User::where('id',$uid)->update(['status'=>1]);
                
            }
        }else{
            $result='Sorry you token was not match!';
        }
        
        return view('dashboards.verify-account',compact('result')); 
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


    /*Add ons function*/

    //get institute
    public function getInstitute(){
        
        $currentuser=Auth::user();
        
        if($currentuser->userType->name == 'Institute Admin'){
            
            $results=Institute::where('id',$currentuser->institute_id)
                              ->where('is_deleted',0)
                              ->get();
            
        }else{
            
            $results=Institute::where('is_deleted',0)->get(); 
            
        }
        return response()->json($results);
    }
    
    //self register
    public function getInstituteSelf(){

        $results=Institute::where('is_deleted',0)->get();
        return response()->json($results);
    }
    
    public function getCreatedUser(Request $request){
        
        $currentuser=Auth::user();
        if(request('utype') == 'teacher'){
            
            $results=User::where('institute_id',$currentuser->institute_id)
                         ->where('user_type_id',4)
                         ->where('is_deleted',0)
                         ->get();
            $result=count($results);
            $data=array((int)$currentuser->create_num_teacher, $result,$currentuser->userType->name);
            
        }else if(request('utype') == 'student'){
            
            $results=User::where('institute_id',$currentuser->institute_id)
                         ->where('user_type_id',5)
                         ->where('is_deleted',0)
                         ->get();
            $result=count($results);
            $data=array((int)$currentuser->create_num_student, $result,$currentuser->userType->name);
        }
        
        return response()->json($data);
    }
    
    //import user
    public function importUser(){
        
        $user_type ='Import User';
        return view('users.import',compact('user_type'));
    }
    
    public function importUserStore(Request $request){
        $has_exceptions = DB::transaction(function() use($request) {
            
            $file=$request->file('file');
            
            if(Auth::user()->userType->name == 'Admin'){
                Excel::import(new ImportUser,$file);
            }else{
                Excel::import(new ImportUserInstitute,$file);
            }
            $users=UserImport::where('is_deleted',0)->where('first_name','!=','first_name')->get();
            
            foreach($users as $user){
                
                $grade=Grade::where('name',$user->grade)->first();
                $usertype=UserType::where('name',$user->user_type)->first();
                User::create([
                                'first_name'        => $user->first_name,
                                'last_name'         => $user->last_name,
                                'name'              => $user->first_name . ' '. $user->last_name,
                                'email'             => $user->email,
                                'password'          => Hash::make('myedge'),
                                'user_type_id'      => $usertype->id,
                                'status'            => 1,
                                'institute_id'      => $user->institute_id,
                                'grade_id'          => $grade->id ?? 0,
                                'create_num_teacher'=> $user->create_num_teacher ?? 0,
                                'create_num_student'=> $user->create_num_student ?? 0,
                                'create_num_parent' => $user->create_num_parent ?? 0,
                                'added_by'          => $user->added_by,
                             ]);
            }
            
            UserImport::where('is_deleted',0)
                       ->where('first_name','!=','first_name') 
                       ->update([
                                    'is_deleted'=>1,
                               ]);
            
       });

       // Return the transaction response.
       $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
       return response()->json($response);
    }
    
    
    
    //test
    public function sampleexternal(){

        return view('test.index');
    }

    //upon user first login check if have a folder on drive if non create one
    public function createMyDriveFolder(){
        
        Storage::disk('google')->makeDirectory(23);
        // $dir = '/';
        // $recursive = false; // Get subdirectories also?
        // $contents = collect(Storage::disk('google')->listContents($dir, $recursive));

        // $folder = 'Jane';

        // $dir = $contents->where('type', '=', 'dir')
        //                 ->where('filename', '=', $folder)
        //                 ->first(); // There could be duplicate directory names!
        // if (!$dir) {

        //     Storage::disk('google')->makeDirectory($folder);
        // }
        
        // return $dir;
        
        

    }
    
    public function testsaveProfileModuleSample(Request $request){
        
        $image = GoogleDriveStorage::storeDriveOne(Auth::user(),request('file'));
        
        return response()->json($image);
    }
    
    
    public function testsaveProfileModuleSamples(Request $request){
        
        Storage::disk('google')->makeDirectory('Sample');
        
        $dir = '/';
        $recursive = false; // Get subdirectories also?
        // $folder = 'teacherjane@phs.com';
        $folder = 'Sample';
        
      //  Storage::disk('second_google')->makeDirectory($folder);
        //find the parent(user) folder or directory
        
        $contents = collect(Storage::disk('google')->listContents($dir, false));

        $dir = $contents->where('type', '=', 'dir')
                        ->where('filename', '=', $folder)
                        ->first(); // There could be duplicate directory names!

        // if ( ! $dir) {
        //     //return response()->json('error your request cantt saved right now');
        
        // }else{

           
        // }
        
         $file = request('file'); 
            $fileName = $file->getClientOriginalName();
            $destinationPath = $dir['path'].'/'.$fileName;

            Storage::disk('google')->put($destinationPath, file_get_contents($file->getRealPath()));

            $url = Storage::disk('google')->url($destinationPath);

            // DriveTest::create([
            //                         'file' =>$url
            //                   ]);

            return response()->json('success');

    }
}
