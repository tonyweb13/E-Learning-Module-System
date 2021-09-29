<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\WorkBook;
use Config;
use DB;
use Storage;

class WorkBooksController extends Controller
{
    public function databaseEdit(){
            
        $datas=WorkBook::get();
        
        foreach($datas as $data){
            
            WorkBook::where('id',$data->id)
                 ->update([
                                'cover_image'   =>  str_replace("http://myedgetestsiteversion2.edupowerpublishing.com","",$data->cover_image),
                                'file'          =>  str_replace("http://myedgetestsiteversion2.edupowerpublishing.com","",$data->file),
                          ]);
        }
            
        return 'done';
    }
    
    public function index(Request $request)
    {
        $keyword = $request->keyword;
        $types='CM';
        $results = WorkBook::paginatedSearch($keyword,$types);
        $type='WorkBook';
        return view('textbooks.workbooks.index', compact('results', 'keyword','type'));
    }

    public function create()
    {
        $data=null;
        $type='WorkBook';
        return view('textbooks.workbooks.create',compact('data','type'));
    }

    public function store(Request $request)
    {
        $has_exceptions = DB::transaction(function() use($request) {

            if(request('id')){//edit
                
                $path1=null;
                $file1=request('file')->storeAs('textbooks.workbooks',request('file')->getClientOriginalName(),'public');
                // $path1='http://myedgetestsiteversion2.edupowerpublishing.com/storage/'.$file1;
                $path1='/storage/'.$file1;
                
                //cover image
                if (request('image') != null) {
                    $path3 = Storage::disk('public')->put('textbooks.workbooks', request('image'));
                    // $image='http://myedgetestsiteversion2.edupowerpublishing.com/storage/'.$path3;
                    $image='/storage/'.$path3;

                    WorkBook::where('id',request('id'))
                            ->update([
                                       'cover_image'=>$image,
                                   ]);
                }

                WorkBook::where('id',request('id'))
                        ->update([
                                    'title'=> request('title'),
                                    'description'=> request('description'),
                                    'file'=>$path1,
                                    'type' =>'CM',
                                    'downloadable'=> request('downloadable'),
                            ]);


            }else{//create

                $path1=null;
                $file1=request('file')->storeAs('textbooks.workbooks',request('file')->getClientOriginalName(),'public');
                // $path1='http://myedgetestsiteversion2.edupowerpublishing.com/storage/'.$file1;
                $path1='/storage/'.$file1;
                
                //for image path
                if (request('image') != null) {
                    $path3 = Storage::disk('public')->put('textbooks.workbooks', request('image'));
                    // $image='http://myedgetestsiteversion2.edupowerpublishing.com/storage/'.$path3;
                    $image='/storage/'.$path3;
                }

                WorkBook::create([

                            'title'=> request('title'),
                            'description'=> request('description'),
                            'cover_image'=>$image,
                            'file'=>$path1,
                            'type' =>'CM',
                            'downloadable'=> request('downloadable'),
                            'is_deleted'=>0  
                        ]);
             }

        });

        
        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
    }

    public function show($id)
    {
        $data=WorkBook::where('id',$id)->first();
        $type='WorkBook';
        return view('textbooks.workbooks.view',compact('data','type'));
    }


    public function edit($id)
    {
        $data=WorkBook::where('id',$id)->first();
        $type='WorkBook';
        return view('textbooks.workbooks.create',compact('data','type'));
    }
    
    
    public function delete(Request $request){
        $has_exceptions = DB::transaction(function() use($request) {
            
            WorkBook::where('id',request('id'))
                   ->update([
                              'is_deleted' => 1,
                            ]);  

        });

        
        // Return the transaction response.
        $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
        return response()->json($response);
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
