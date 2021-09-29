<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Config;
use DB;
use Storage;
use App\Ebook;
use Auth;
use App\WorkBook;
use App\AsignedEbook;
use App\User;
use ZipArchive;

class EbooksController extends Controller
{
    // public function databaseEdit(){
        
    //     $datas=Ebook::get();
        
    //     foreach($datas as $data){
            
    //         Ebook::where('id',$data->id)
    //              ->update([
    //                             'cover_image'   =>  str_replace("http://myedgetestsiteversion2.edupowerpublishing.com","",$data->cover_image),
    //                             'file'          =>  str_replace("http://myedgetestsiteversion2.edupowerpublishing.com","",$data->file),
    //                             'sample_file'   =>  str_replace("http://myedgetestsiteversion2.edupowerpublishing.com","",$data->sample_file),
    //                       ]);
    //     }
        
    // }
    
    
    public function index(Request $request)
    {
        $keyword = $request->keyword;
        if(Auth::user()->userType->name === 'Admin'){
          $results = Ebook::paginatedSearch($keyword);
          return view('ebooks.admins.index', compact('results', 'keyword'));
        }else{
          $type='myebook';
          $results = Ebook::paginatedSearchMyEbook($keyword);
          return view('ebooks.users.index', compact('results', 'keyword','type'));
        }
        
    }

    public function myEbook(Request $request){
      //add assign 
      $type='myebook';
      $keyword = $request->keyword;
      $results = Ebook::paginatedSearchMyEbook($keyword);
      //return $results;
      return view('ebooks.users.index', compact('results', 'keyword','type'));
    }

    public function EbookProduct(Request $request){
      //change this paginatedSearchMyEbook 
      $type='product';
      $keyword = $request->keyword;
      $results = Ebook::paginatedSearchMyEbook($keyword);
      return view('ebooks.users.product', compact('results', 'keyword','type'));
    }

    public function create()
    {
        $data=null;
        $tgs=WorkBook::where('type','TG')->where('is_deleted',0)->get();
        $cms=WorkBook::where('type','CM')->where('is_deleted',0)->get();
       // return $cms
        return view('ebooks.admins.create',compact('data','tgs','cms'));
    }

    public function store(Request $request)
    {
       $has_exceptions = DB::transaction(function() use($request) {

            if(request('id')){//edit
                    $today=date('Ymdhis');
                    //file
                    if(request('file')){

                        $file1=request('file')->storeAs('ebooks/ebooks_file'.request('title').'/'.$today,request('file')->getClientOriginalName(),'public');
                        // $path1='http://myedgetestsiteversion2.edupowerpublishing.com/storage/'.$file1;
                        $path1='/storage/'.$file1;
                        $ext = pathinfo(request('file'), PATHINFO_EXTENSION);
                        
                        if($ext != 'pdf'){
                            $zip = new ZipArchive;
                            if($zip->open(request('file')) === TRUE){
                                $zip->extractTo(public_path().'/bibi-bookshelf/'.request('title'));
                                //  $zip->extractTo($_SERVER['DOCUMENT_ROOT'] . '/storage/ebooks/ebooks_file/'.request('title').'/'.$today.'/');
                                $zip->close();
                                $path1='/storage/ebooks/ebooks_file/'.request('title').'/'.$today;
                                // $path1='http://myedgetestsiteversion2.edupowerpublishing.com/storage/ebooks/ebooks_file/'.request('title').'/'.$today;
                            } 
                        }
                        
                        Ebook::where('id',request('id'))
                             ->update([
                                            'file'=>$path1,
                                      ]);

                    }
                
                    //offline file
                    if(request('sample_file')){

                        $file2=request('sample_file')->storeAs('ebooks/ebooks_sample'.request('title').'/'.$today,request('sample_file')->getClientOriginalName(),'public');
                        // $path2='http://myedgetestsiteversion2.edupowerpublishing.com/storage/'.$file2;
                        $path2='/storage/'.$file2;
                        $ext2 = pathinfo(request('sample_file'), PATHINFO_EXTENSION);
                        
                        if($ext2 != 'pdf'){
                            $zip = new ZipArchive;
                            if($zip->open(request('sample_file')) === TRUE){
                                $zip->extractTo($_SERVER['DOCUMENT_ROOT'] . '/storage/ebooks/ebooks_sample/'.request('title').'/'.$today.'/');
                                $zip->close();
                                // $path2='http://myedgetestsiteversion2.edupowerpublishing.com/storage/ebooks/ebooks_sample/'.request('title').'/'.$today;
                                $path2='/storage/ebooks/ebooks_sample/'.request('title').'/'.$today;
                            }   
                        }
                        
                        Ebook::where('id',request('id'))
                             ->update([
                                            'sample_file'=>$path2,
                                      ]);

                    }
        
                    //cover image
                    if (request('image') != null) {
                        $path3 = Storage::disk('public')->put('ebooks.images', request('image'));
                        // $image='http://myedgetestsiteversion2.edupowerpublishing.com/storage/'.$path3;
                        $image='/storage/'.$path3;

                        Ebook::where('id',request('id'))
                             ->update([
                                          'cover_image' => $image,
                                      ]);
                    }
                    


                    Ebook::where('id',request('id'))
                             ->update([
                                          'subject_id'=> request('subject_id'),
                                          'tg_id'=> request('tg'),
                                           'cm_id'=> request('cm'),
                                          'ebook_title'=> request('title'),
                                          'description'=> request('description'),
                                          'price' => request('price'),  
                                      ]);


            }else{//create

                $path1=null;
                $path2=null;
                $image=null;
                $today=date('Ymdhis');
                
                //main file
                $file1=request('file')->storeAs('ebooks/ebooks_file/'.request('title').'/'.$today,request('file')->getClientOriginalName(),'public');
                // $path1='http://myedgetestsiteversion2.edupowerpublishing.com/storage/'.$file1;
                $path1='/storage/'.$file1;
                $ext = pathinfo(request('file'), PATHINFO_EXTENSION);
                
                if($ext != 'pdf'){
                    $zip = new ZipArchive;
                    if($zip->open(request('file')) === TRUE){
                        //$zip->extractTo($_SERVER['DOCUMENT_ROOT'] . '/storage/ebooks/ebooks_file/'.request('title').'/'.$today.'/');
                        $zip->extractTo(public_path().'/bibi-bookshelf/'.request('title'));
                        $zip->close();
                        // $path1='http://myedgetestsiteversion2.edupowerpublishing.com/storage/ebooks/ebooks_file/'.request('title').'/'.$today;
                        $path1='/storage/ebooks/ebooks_file/'.request('title').'/'.$today;
                    }   
                }
                
                
                //sample file
                $path2=null;
                if(request('sample_file')){
                    $file2=request('sample_file')->storeAs('ebooks/ebooks_sample'.request('title').'/'.$today,request('sample_file')->getClientOriginalName(),'public');
                    // $path2='http://myedgetestsiteversion2.edupowerpublishing.com/storage/'.$file2;
                    $path2='/storage/'.$file2;
                    $ext2 = pathinfo(request('sample_file'), PATHINFO_EXTENSION);
                    if($ext2 != 'pdf'){
                        $zip = new ZipArchive;
                        if($zip->open(request('sample_file')) === TRUE){
                            $zip->extractTo($_SERVER['DOCUMENT_ROOT'] . '/storage/ebooks/ebooks_sample/'.request('title').'/'.$today.'/');
                            $zip->close();
                            // $path2='http://myedgetestsiteversion2.edupowerpublishing.com/storage/ebooks/ebooks_sample/'.request('title').'/'.$today;
                            $path2='/storage/ebooks/ebooks_sample/'.request('title').'/'.$today;
                        }    
                    }
                }

                //for image path
                if (request('image') != null) {
                    $path3 = Storage::disk('public')->put('ebooks/images', request('image'));
                    // $image='http://myedgetestsiteversion2.edupowerpublishing.com/storage/'.$path3;
                    $image='/storage/'.$path3;
                    $image='/storage/'.$path3;
                }
                if($ext != 'pdf'){
                    $path = public_path().'/bibi-bookshelf';
    				$filereader = request('file');
    				$up = $filereader->move($path,request('file')->getClientOriginalName());   
                }

                Ebook::create([

                                'subject_id'=> request('subject_id'),
                                'tg_id'=> request('tg'),
                                'cm_id'=> request('cm'),
                                'ebook_title'=> request('title'),
                                'description'=> request('description'),
                                'price' => request('price'),  
                                'cover_image'=>$image,
                                'file'=>$path1,
                                'sample_file'=>$path2,
                                'is_deleted'=>0  
                            ]);
            }

       });

       
       // Return the transaction response.
       $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
       return response()->json($response);
    }

    public function edit($id)
    {
        $data=Ebook::with(['subject'])
                   ->where('id',$id)
                   ->where('is_deleted',0)
                   ->first();
        $tgs=WorkBook::where('type','TG')->where('is_deleted',0)->get();
        $cms=WorkBook::where('type','CM')->where('is_deleted',0)->get();
        return view('ebooks.admins.create',compact('data','tgs','cms'));
    }


    public function delete(Request $request){

        $has_exceptions = DB::transaction(function() use($request) {
            
            Ebook::where('id',request('id'))
                   ->update([
                              'is_deleted' => 1,
                            ]);  

        });

        
        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
    }
    
    public function assignedEbookTeacher(Request $request,$id){
        //currently display all user of ebook no fiter nut user type but will revise this by teacher only
        $keyword = $request->keyword;
        $results=AsignedEbook::whereHas('user',function($q) use ($keyword){
                                    $q->where('name', 'LIKE', '%'.$keyword.'%')
                                      ->orWhere('email','LIKE','%'.$keyword.'%')
                                      ->orWhereHas('userType',function($q) use($keyword){
                                            $q->where('name','LIKE','%'.$keyword.'%');
                                        })
                                      ->orWhereHas('institute',function($q) use($keyword){
                                            $q->where('name','LIKE','%'.$keyword.'%');
                                        });
                              })
                             ->where('ebook_id',$id)
                             ->where('is_deleted',0)
                             ->paginate(10);
        //return $results
        return view('ebooks.assigns.teachers.index',compact('id','keyword','results'));
    }
    
    public function assignEbookTeacher(Request $request,$id){
        //currently display all user of ebook no fiter nut user type but will revise this by teacher only
        $keyword = $request->keyword;
        $users=AsignedEbook::where('ebook_id',$id)->get();
        $userids=[];
        foreach($users as $user){
          $userids[]=$user->user_id;  
        }
        $results=User::where(function($q) use ($keyword){
                        $q->where('name', 'LIKE', '%'.$keyword.'%')
                          ->orWhere('email','LIKE','%'.$keyword.'%')
                          ->orWhereHas('userType',function($q) use($keyword){
                                $q->where('name','LIKE','%'.$keyword.'%');
                            })
                          ->orWhereHas('institute',function($q) use($keyword){
                                $q->where('name','LIKE','%'.$keyword.'%');
                            });
                      })
                     ->whereNotIn('id',$userids)
                     ->where('is_deleted',0)
                     ->whereIn('user_type_id',['3','4','5'])
                     ->paginate(10);
       // return $results;
        return view('ebooks.assigns.teachers.create',compact('id','keyword','results'));
    }
    
    public function assignEbook(Request $request){

        $has_exceptions = DB::transaction(function() use($request) {

            for ($i=0; $i < count(request('userid')) ; $i++) { 
                
                $ebook=Ebook::where('id',request('ebook_id'))->first();
                AsignedEbook::create([
                                            'ebook_id'        =>request('ebook_id'),
                                            'ebook_title'     =>$ebook->ebook_title,
                                            'user_id'         =>request('userid')[$i],
                                            'added_by'        =>request('current_user'),
                                            'is_deleted'      =>0,
                                        ]);   
            }
        });
        
        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
    }
    
    public function getTG(Request $request){
        
        $result=Workbook::where('id',request('tgid'))->first();
        return response()->json($result);
    }
    
    public function getSingleEbook(Request $request){
        
        $result=Ebook::where('id',request('id'))->first();
        return response()->json($result);
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
    
    public function trialOnly(){
       // return 1;
        return view('ebooks.users.trail');
    }
    
    
    public function asas(){
        $aal=AsignedEbook::where('ebook_title','')->get();
        
        foreach($aal as $a){
            $ebok=Ebook::where('id',$a->ebook_id)->first();
            AsignedEbook::where('id',$a->id)->update(['ebook_title'=>$ebok->ebook_title ?? '']);
        }
    }
}
