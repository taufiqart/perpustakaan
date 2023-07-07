<?php

namespace App\Http\Controllers;

use App\Models\Assets;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class AssetsController extends Controller
{
    function better_scandir($dir, $sorting_order = SCANDIR_SORT_ASCENDING)
    {

        /****************************************************************************/
        // Roll through the scandir values.
        $files = array();
        foreach (scandir($dir, $sorting_order) as $file) {
            if ($file[0] === '.') {
                continue;
            }
            $files[$file] = filemtime($dir . '/' . $file);
        } // foreach

        /****************************************************************************/
        // Sort the files array.
        if ($sorting_order == SCANDIR_SORT_ASCENDING) {
            asort($files, SORT_NUMERIC);
        } else {
            arsort($files, SORT_NUMERIC);
        }

        /****************************************************************************/
        // Set the final return value.
        $ret = array_keys($files);

        /****************************************************************************/
        // Return the final value.
        return $ret;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request,)
    {
        $folder = public_path() . env('ASSET_LOCATION');
        $folder = str_replace('//', '/', $folder);
        if (is_dir($folder)) {
            $files = [];
            foreach ($this->better_scandir($folder, SCANDIR_SORT_DESCENDING) as $dir) {
                if ($dir == '.' || $dir == '..') {
                } else {
                    if (in_array(pathinfo($dir, PATHINFO_EXTENSION), ['jpg', 'jpeg', 'png', 'svg', 'gif'])) {
                        $type = 'image';
                        $icon = null;
                    } else if (in_array(pathinfo($dir, PATHINFO_EXTENSION), ['mp4', 'mkv', 'webp', 'avi', '3gp', 'mpg', 'mpeg',])) {
                        $type = 'video';
                        $icon = null;
                    } else if (in_array(pathinfo($dir, PATHINFO_EXTENSION), ['wav', 'mp3', 'wma', 'aiff', 'aac', 'ogg'])) {
                        $type = 'audio';
                        $icon = '<i class="fa-solid fa-headphones"></i>';
                    } else {
                        $type = 'document';
                        $icon = '<i class="fa-solid fa-file"></i>';
                    }
                    array_push($files, ["filename" => $dir, "path" => env('ASSET_LOCATION') . $dir, 'type' => $type, 'icon' => $icon]);
                }
            }
            return Inertia::render('admin/FileManager/Index', compact('files'));
            return dd($files);
        }
        // return dd($request->file('img')->getClientMimeType());
        // return dd($request->file('img')->getClientOriginalName());
        // $asset = $request->file('img');
        // $files = file_get_contents($asset->getPathname());
        // $type = $asset->getMimeType();
        // $filename = $asset->getClientOriginalName();;
        // $base64 = base64_encode($files);
        // $image = Assets::create([
        //     'path'=>"/assets/".$filename,
        //     'type'=>$type,
        //     'filename'=>$type,
        //     'base64'=>$base64
        // ]);
        // return response()->json($image);
        // return dd($request->file('img')->getPathname());
        // $assets = Assets::all();
        // header('Content-Type:'.$assets->type);
        // return;
        return Inertia::render('admin/FileManager/Index.jsx');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $files = $request->file('file');
        $imageFolder = public_path() . env('ASSET_LOCATION');
        $errors = [];
        foreach ($files as $file) {
            if (is_uploaded_file($file)) {
                try {

                    $upload = move_uploaded_file($file->getPathName(), $imageFolder . $file->getClientOriginalName());
                    if (!$upload) {
                        array_push($errors, ['filename' => "gagal upload " . $file->getClientOriginalName()]);
                        return dd('kk');
                    }
                } catch (Exception $e) {
                    array_push($errors, ['filename' => "gagal upload " . $file->getClientOriginalName()]);
                    return dd('kk');
                }
            } else {
                array_push($errors, ['filename' => "gagal upload " . $file->getClientOriginalName()]);
            }
        }
        if (!empty($errors)) {
            return back()->with(['error' => $errors]);
        }
        return back()->with(['success' => 'berhasil mengupload file']);
        return dd($request->file('file'));

        // if (is_uploaded_file($temp['tmp_name'])) {
        //     if (!in_array(strtolower(pathinfo($temp['name'], PATHINFO_EXTENSION)), array("gif", "jpg", "png"))) {
        //         header("HTTP/1.1 400 Invalid extension.");
        //         return;
        //     }

        //     $filetowrite = $imageFolder . $temp['name'];
        //     move_uploaded_file($temp['tmp_name'], $filetowrite);
        //     $location = env('ASSET_LOCATION') . $temp['name'];

        //     return response()->json(['location' => $location]);
        // } else {
        //     header("HTTP/1.1 500 Server Error");
        //     return;
        // }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Assets  $assets
     * @return \Illuminate\Http\Response
     */
    public function show($assets)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Assets  $assets
     * @return \Illuminate\Http\Response
     */
    public function edit($assets)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Assets  $assets
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $validateData = Validator::make($request->all(), [
            'filename' => 'required',
            'path' => 'required',
        ]);

        if ($validateData->fails()) {
            return back()->withErrors($validateData->errors());
        }

        // return dd($request);
        $validateData = $validateData->validate();
        $originalFilename = public_path() . $validateData['path'];
        $originalFilename = str_replace('//', '/', $originalFilename);

        $rename = rename($originalFilename, public_path() . env('ASSET_LOCATION') . $validateData['filename']);
        // $validateData['slug'] = $slug;
        // $article = $article->update($validateData);
        if (!$rename) {
            return back()->with(['error' => 'gagal mengedit data']);
        }
        return back()->with(['success' => 'berhasil mengedit data']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Assets  $assets
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $validateData = Validator::make($request->all(), [
            'path' => 'required',
        ]);

        if ($validateData->fails()) {
            return back()->withErrors($validateData->errors());
        }
        $validateData = $validateData->validate();
        $originalFilename = public_path() . $validateData['path'];
        $originalFilename = str_replace('//', '/', $originalFilename);
        $delete = unlink($originalFilename);
        if (!$delete) {
            return back()->with(['error' => 'gagal mengedit data']);
        }
        return back()->with(['success' => 'berhasil mengedit data']);
    }
}
