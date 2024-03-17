<?php

namespace App\Http\Controllers\Situsiba;

use App\Http\Controllers\Controller;
use App\Meta;
use App\Models\Article;
use App\Models\Category;
use App\Models\PostCategory;
use App\Models\PostGenre;
use App\Models\PostType;
use App\Models\Slider;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Closure;

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
        $paper_mostreads = (clone $postType)->posts()->withCount('pivotView')->orderBy('pivot_view_count','desc')->limit(5)->get();
        // return dd($paper_mostreads);

        Meta::addMeta('title', 'SITU SIBA');
        Meta::addMeta('description', 'Selamat datang di SITU SIBA disini kami menyediakan platform bagi siswa siswi SMKN 1 Pasuruan agar Karya Tulis seperti Cerpen, Novel ataupun karya ilmiah agar dapat dipublish dan dibaca oleh umum.');
        Meta::addMeta('keywords', 'membaca,baca,tulis,menulis,karya,cerpen');
        Meta::addProperty('og:title', 'SITU SIBA');
        Meta::addProperty('og:description', 'SITU SIBA');

        return Inertia::render('situsiba/Index', compact('papers', 'paper_latests', 'paper_mostreads'));
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
    public function show(Request $request, $slug)
    {
        $postType = PostType::where('slug', 'paper')->first();
        $paper = (clone $postType)->posts()->with([
            'user',
            'post_assets',
        ])->where('slug', $slug)->first();
        $paper->{"total_view"} = $paper->total_view == 0 ? 0 : $paper->total_view - 1;
        if (!$paper) {
            return abort(404);
        }
        $categories = PostCategory::orderBy('category', 'asc')->get();
        $genres = PostGenre::orderBy('genre', 'asc')->get();

        return Inertia::render('situsiba/Show', compact('paper', 'categories', 'genres'));
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
