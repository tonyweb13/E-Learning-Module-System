<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Storage;

class GoogleDriveStorage extends Model
{
    
    public static function createFolderDriveOne($user){

        $dir = '/';
        $recursive = false; // Get subdirectories also?
        $contents = collect(Storage::disk('google')->listContents($dir, $recursive));

        $folder = $user->id;

        $dir = $contents->where('type', '=', 'dir')
                        ->where('filename', '=', $folder)
                        ->first(); // There could be duplicate directory names!

        if (!$dir) {

            Storage::disk('google')->makeDirectory($folder);
        }
        
        User::where('id',$user->id)
            ->update([
                        'with_efolder' => 1,
                     ]);

        return 'success';
    }
    
    public static function createFolderDriveTwo($user){

        $dir = '/';
        $recursive = false; // Get subdirectories also?
        $contents = collect(Storage::disk('second_google')->listContents($dir, $recursive));

        $folder = $user->id;

        $dir = $contents->where('type', '=', 'dir')
                        ->where('filename', '=', $folder)
                        ->first(); // There could be duplicate directory names!

        if (!$dir) {

            Storage::disk('second_google')->makeDirectory($folder);
        }
        
        User::where('id',$user->id)
            ->update([
                        'with_efolder' => 1,
                     ]);

        return 'success';
    }
    
    public static function storeDriveOne($user,$file){
        
        $dir = '/';
        $recursive = false; // Get subdirectories also?
        $folder = $user->id;
        
        $contents = collect(Storage::disk('google')->listContents($dir, $recursive));
        
        $dir = $contents->where('type', '=', 'dir')
                        ->where('filename', '=', $folder)
                        ->first(); // There could be duplicate directory names!
                        
        if ( ! $dir) {

            return 'No Folder';
        
        }else{

            $fileName = $file->getClientOriginalName();
            $destinationPath = $dir['path'].'/'.$fileName;

            Storage::disk('google')->put($destinationPath, file_get_contents($file->getRealPath()));

            $url = Storage::disk('google')->url($destinationPath);

            return $url;
        }
        
    }
    
    public static function storeDriveTwo($user,$file){
        
        $dir = '/';
        $recursive = false; // Get subdirectories also?
        $folder = $user->id;
        
        $contents = collect(Storage::disk('second_google')->listContents($dir, $recursive));
        
        $dir = $contents->where('type', '=', 'dir')
                        ->where('filename', '=', $folder)
                        ->first(); // There could be duplicate directory names!
                        
        if ( ! $dir) {

            return 'No Folder';
        
        }else{

            $fileName = $file->getClientOriginalName();
            $destinationPath = $dir['path'].'/'.$fileName;

            Storage::disk('second_google')->put($destinationPath, file_get_contents($file->getRealPath()));

            $url = Storage::disk('second_google')->url($destinationPath);

            return $url;
        }
        
    }
    
}
