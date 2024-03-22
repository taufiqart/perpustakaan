<?php

namespace App\Http\Controllers\Situsiba;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\PostCategory;
use App\Models\PostGenre;
use App\Models\PostType;

class Situsiba extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response | \Inertia\Response | null
     */
    public function search(Request $request)
    {
        $postType = PostType::where('slug', 'paper')->first();

        $papers = (clone $postType)->posts();
        if ($request->get("search")) {
            $query = ["like", "%{$request->get("search")}%"];
            $papers = $papers->where("title", ...$query)
                ->orWhere("content", ...$query)
                ->latest('created_at')->limit(9)->get();
        } else {
            $papers = $papers->latest('created_at')->limit(9)->get();
        }

        DefaultMetadata("situsiba");
        return Inertia::render('situsiba/Search', compact('papers'));
    }

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
        $paper_mostreads = (clone $postType)->posts()->withCount('pivotView')->orderBy('pivot_view_count', 'desc')->limit(5)->get();

        DefaultMetadata("situsiba");
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

        if (!$paper) {
            return abort(404);
        }
        $paper->{"total_view"} = $paper->total_view == 0 ? 0 : $paper->total_view - 1;

        $categories = PostCategory::orderBy('category', 'asc')->get();
        $genres = PostGenre::orderBy('genre', 'asc')->get();

        $metadata = MetadataSitusiba();
        $metadata["image"] = [$paper->poster];
        $metadata["title"] = [$paper->title ." - ". env("APP_NAME_SITUSIBA")];

        if (!empty (GenerateDescription($paper))) {
            $metadata["description"] = [GenerateDescription($paper)];
        }

        DefaultMetadata("situsiba", $metadata);
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
