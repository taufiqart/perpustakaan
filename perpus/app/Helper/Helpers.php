<?php


use App\Models\Assets;

if(!function_exists('upload_asset')){
    function upload_asset($asset){
        if(isset($asset)){
            $filename = $asset->getClientOriginalName();
            $base64 = file_get_contents($asset);

            Assets::create([
                'filename'=>$filename,
                'images'=>$base64
            ]);
            return true;
        }
        return false;
    }
}
