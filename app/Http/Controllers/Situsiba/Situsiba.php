<?php

namespace App\Http\Controllers\Situsiba;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Category;
use App\Models\PostType;
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
        $postType = PostType::where('slug', 'paper')->first();
        $papers = (clone $postType)->posts()->inRandomOrder()->limit(9)->get();
        $paper_latests = (clone $postType)->posts()->latest('created_at')->limit(5)->get();
        $paper_mostreads = (clone $postType)->posts()->orderBy('created_at', 'desc')->limit(5)->get();

        return Inertia::render('situsiba/Index', compact('papers','paper_latests','paper_mostreads'));
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
     * @return \Illuminate\Http\Response | \Inertia\Response | null
     */
    public function show($slug)
    {
        $postType = PostType::where('slug', 'paper')->first();
        $paper = (clone $postType)->posts()->where('slug',$slug)->first();
        return Inertia::render('situsiba/Show', compact('paper'));
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
