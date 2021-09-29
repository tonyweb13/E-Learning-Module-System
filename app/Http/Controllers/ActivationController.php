<?php

namespace App\Http\Controllers;

use App\Activation;
use App\Ebook;
use Illuminate\Http\Request;

class ActivationController extends Controller
{
    public function destroy($id){
        if(Activation::find($id)->delete())
            return response()->json(['status'=>'success']);
    }
    public function index(Request $request)
    {


        if(\Auth::user()->userType->name == 'Admin'){
            return view('activation.admin.index');
        }else{
            return view('activation.index');
        }

    }
    public function claim_book(Request $request){
        // where('ebook_id',$activation->book_id)->
        
       $activation =  Activation::with('ebook')->where('activation_key','=',$request->activation_key)->first();
        $is_assigned = \App\AsignedEbook::where('user_id',\Auth::user()->id)->count() >= 1;
        if(!$is_assigned){
            $ebook = $activation->ebook;
            $new_assigned =new \App\AsignedEbook();
            $new_assigned->ebook_id = $ebook->id;
            $new_assigned->ebook_title = $ebook->ebook_title;
            $new_assigned->user_id = \Auth::user()->id;
            $new_assigned->added_by = 23;
            $new_assigned->is_deleted = 0;
            $new_assigned->save();
        }

        if(!$activation)
            return \Redirect::back()->withErrors(['Activation Key is invalid']);
        else{


            $count_activated = Activation::whereStatus(1)->where('book_id',$activation->book_id)->where('user_id',\Auth::user()->id)->where('status',1)->get();

            // if($count_activated )
            //     return \Redirect::back()->withErrors(['You Already Claimed this type of book']);


           
            if($activation->status == 1)
                return \Redirect::back()->withErrors(['Book Already Claimed']);
            else if($activation->status == 0 && count($count_activated )>=1)
                return \Redirect::back()->withErrors(['You Already Claimed this type of book']);
            else{

                $activation->user_id = \Auth::user()->id;
                $activation->claimed_at = now();
                $activation->status = 1;
                $activation->update();
                return redirect()
                    ->back()
                    ->withInput()
                    ->with('message', 'Code Activated');}
            }

    }
    public function add_book($id,Request $request)
    {
        return view('activation.admin.generate', ['book' => Ebook::find($id)]);
    }
    public function store(Request $req){
        \DB::transaction(function () use ($req) {
            for ($i=0; $i < $req->count ; $i++) {
                $ebook = new \App\Activation();
                $ebook->book_id = $req->book_id;
                  $ebook->activation_key = $req->slug.substr(uniqid(rand(), true), 7, 7);
                $ebook->BATCH = $req->slug1;
                $ebook->DOE = $req->DOE;
                $ebook->status = 0;
                $ebook->save();
            }
        });
        return redirect()->back()->with('id', $req->book_id);

    }
}