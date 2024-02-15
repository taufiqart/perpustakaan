<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Slider;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class AdminSliderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response | \Inertia\Response
     */
    public function index()
    {
        $sliders = Slider::latest()->get();
        return Inertia::render('admin/Slider', compact('sliders'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response | null
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response | \Illuminate\Http\RedirectResponse 
     */
    public function store(Request $request)
    {
        $files = $request->file('image');
        $imageFolder = public_path() . env('SLIDER_LOCATION');
        $errors = [];
        foreach ($files as $file) {
            if (is_uploaded_file($file)) {
                try {
                    $upload_db = Slider::create(['image' => env('SLIDER_LOCATION') . $file->getClientOriginalName()]);
                    if ($upload_db) {
                        $upload = move_uploaded_file($file->getPathName(), $imageFolder . $file->getClientOriginalName());
                        if (!$upload) {
                            $slider = Slider::where('image', env('SLIDER_LOCATION') . $file->getClientOriginalName())->get()->first();
                            if ($slider) {
                                // return dd($slider);
                                $slider->delete();
                            }
                            array_push($errors, ['filename' => "gagal upload " . $file->getClientOriginalName()]);
                        }
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
     * Display the specified resource.
     *
     * @param  \App\Models\Slider  $slider
     * @return \Illuminate\Http\Response | null
     */
    public function show(Slider $slider)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Slider  $slider
     * @return \Illuminate\Http\Response | null
     */
    public function edit(Slider $slider)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Slider  $slider
     * @return \Illuminate\Http\Response | null
     */
    public function update(Request $request, Slider $slider)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Slider  $slider
     * @return \Illuminate\Http\Response | \Illuminate\Http\RedirectResponse
     */
    public function destroy(Slider $slider)
    {

        $delete = $slider->delete();
        if ($delete) {
            if (file_exists(public_path($slider->image))) {
                unlink(public_path($slider->image));
                return back()->with(['success' => 'berhasil menghapus data']);
            }
        }
        return back()->with(['success' => 'gagal menghapus data']);
    }
}
