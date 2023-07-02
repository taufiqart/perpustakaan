<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class AdminNavigationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::orderBy('order', 'asc')->where('parent_id', null)->get();
        return Inertia::render('admin/Navigation', compact('categories'));
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
        $validateData = Validator::make($request->all(), [
            'parent_id' => 'nullable',
            'title' => 'required',
            'order' => 'nullable',
            'slug' => 'required|unique:categories'
        ]);

        if ($validateData->fails()) {
            return back()->withErrors($validateData->errors());
        }
        $validateData = $validateData->validate();
        $category = Category::create($validateData);
        if (!$category) {
            return back()->with(['error' => 'gagal menambah data']);
        }
        return back()->with(['success' => 'berhasil menambah data']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $navigation)
    {
        $validateData = Validator::make($request->all(), [
            'parent_id' => 'nullable',
            'title' => 'required',
            'order' => 'nullable',
            'slug' => 'required|unique:categories,slug,' . $navigation->id
        ]);

        if ($validateData->fails()) {
            return back()->withErrors($validateData->errors());
        }
        // return dd($navigation);
        $validateData = $validateData->validate();
        $navigation = $navigation->update($validateData);
        if (!$navigation) {
            return back()->with(['error' => 'gagal mengedit data']);
        }
        return back()->with(['success' => 'berhasil mengedit data']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateOrder(Request $request, Category $navigation)
    {
        $validateData = Validator::make($request->all(), [
            'id' => 'required',
            'parent_id' => 'nullable',
            'order' => 'required',
        ]);

        if ($validateData->fails()) {
            return back()->withErrors($validateData->errors());
        }

        $validateData = $validateData->validate();

        return dd(Category::where());
        $navigation = $navigation->update($validateData);
        if (!$navigation) {
            return back()->with(['error' => 'gagal mengedit data']);
        }
        return back()->with(['success' => 'berhasil mengedit data']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $navigation)
    {
        $category = $navigation->delete();
        if (!$category) {
            return back()->with(['error' => 'gagal menghapus data']);
        }
        return back()->with(['success' => 'berhasil menghapus data']);
    }
}
