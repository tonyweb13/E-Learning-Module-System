<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Guide;
use DB;
use ZipArchive;

class GuidesController extends Controller
{

    public function index(Request $request)
    {
        $keyword = $request->keyword;
        $results = Guide::paginatedSearch($keyword);
        //return $results;
        return view('guides.index', compact('results', 'keyword'));
    }


    public function create()
    {
        $data=null;
        return view('guides.create',compact('data'));
    }

    public function store(Request $request)
    {
       $has_exceptions = DB::transaction(function() use($request) {

            if(request('id')){//edit

                if(request('file')){
                    $path=null;
                    $today=date('Ymdhis');
                    $file=request('file')->storeAs('edge-guides'.request('title').'/'.$today,request('file')->getClientOriginalName(),'public');
                    $path='http://localhost:8000/storage/'.$file;
                    $zip = new ZipArchive;

                    if ($zip->open(request('file')) === TRUE) {
                        $zip->extractTo($_SERVER['DOCUMENT_ROOT'] . '/storage/edge-guides/'.request('title').'/'.$today.'/');
                        $zip->close();
                        $target='http://localhost:8000/storage/edge-guides/'.request('title').'/'.$today.'/index.html';
                        
                        
                        Guide::where('id',request('id'))
                             ->update([
                                        'file' => $path,  
                                        'extract_file'=>$target,
                                    ]);
                    }
                }

                Guide::where('id',request('id'))
                     ->update([
                                  'title' => request('title'),
                            ]);

            }else{//create

                $path=null;
                $today=date('Ymdhis');
                $file=request('file')->storeAs('edge-guides/'.request('title').'/'.$today,request('file')->getClientOriginalName(),'public');
                $path='http://localhost:8000/storage/'.$file;
                $zip = new ZipArchive;

                if ($zip->open(request('file')) === TRUE) {
                    $zip->extractTo($_SERVER['DOCUMENT_ROOT'] . '/storage/edge-guides/'.request('title').'/'.$today.'/');
                    $zip->close();
                    $target='http://localhost:8000/storage/edge-guides/'.request('title').'/'.$today.'/index.html';
                    
                    Guide::create([
                                    'file' => $path,  
                                    'extract_file'=>$target,
                                    'title'=>request('title'),
                                    'is_deleted'=>0  
                                ]);
                }
            }

       });

       
       // Return the transaction response.
       $response = array('status' => (!$has_exceptions) ? 'saved' : 'not_saved');
       return response()->json($response);
    }

    public function show($id)
    {
        $result=Guide::where('id',request('id'))->where('is_deleted',0)->first();
        return view('guides.view',compact('result'));
        // return realpath($result->file);
        // $zip = new ZipArchive;
        // if ($zip->open($result->file) === TRUE) {
        //     $zip->extractTo('\storage\edge-guides');
        //     $zip->close();
        //     echo 'ok';
        // } else {
        //     echo 'failed';
        // }
    }

    public function edit($id)
    {
        $data=Guide::where('id',$id)->where('is_deleted',0)->first();
        return view('guides.create',compact('data'));
        
    }

    public function delete(Request $request){

        $has_exceptions = DB::transaction(function() use($request) {
            
            Guide::where('id',request('id'))
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

    public function getGuides(){

        $results = Guide::where('is_deleted',0)->get();
        return response()->json($results);
    }
}
