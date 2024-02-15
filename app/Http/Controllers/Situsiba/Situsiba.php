<?php

namespace App\Http\Controllers\Situsiba;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Category;
use App\Models\Slider;
use Illuminate\Http\Request;
use Inertia\Inertia;

class Situsiba extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response | \Inertia\Response | null
     */
    public function index()
    {
        $category = Category::where('parent_id', null)->get();
            $other = Article::latest()->whereHas('category', function ($q) {
                return $q->where('slug', '!=', '/');
            })->limit(5)->get();

        $sliders = Slider::latest()->get();
        $sliders = count($sliders) > 0 ? $sliders : json_decode(json_encode([['image' => '/assets/images/1.jpeg'], ['image' => '/assets/images/2.jpeg'], ['image' => '/assets/images/3.jpeg'], ['image' => '/assets/images/4.jpeg']]));

        return Inertia::render('situsiba/Index', compact('category','other', 'sliders'));
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
     * @return \Illuminate\Http\Response | null
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response | null
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response | null
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
     * @return \Illuminate\Http\Response | null
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response | null
     */
    public function destroy($id)
    {
        //
    }
}
