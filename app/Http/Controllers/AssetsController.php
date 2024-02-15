<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use App\Helpers\ScanDirectory;
class AssetsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response | \Inertia\Response
     */
    public function index(Request $request,)
    {
        $folder = public_path() . env('ASSET_LOCATION');
        $folder = str_replace('//', '/', $folder);
        if (is_dir($folder)) {
            $files = [];
            foreach ((new ScanDirectory)->scan($folder, SCANDIR_SORT_DESCENDING) as $dir) {
                if ($dir != '.' || $dir != '..') {
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
        }
        return Inertia::render('admin/FileManager/Index.jsx');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response | \Illuminate\Http\RedirectResponse
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
                    }
                } catch (Exception $e) {
                    array_push($errors, ['filename' => "gagal upload " . $file->getClientOriginalName()]);
                }
            } else {
                array_push($errors, ['filename' => "gagal upload " . $file->getClientOriginalName()]);
            }
        }
        if (!empty($errors)) {
            return back()->with(['error' => $errors]);
        }
        return back()->with(['success' => 'berhasil mengupload file']);
    }

   
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response | \Illuminate\Http\RedirectResponse
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
     * @return \Illuminate\Http\Response | \Illuminate\Http\RedirectResponse
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
            return back()->with(['error' => 'gagal menghapus data']);
        }
        return back()->with(['success' => 'berhasil menhapus data']);
    }
}
