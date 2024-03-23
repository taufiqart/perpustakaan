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
        $metadata["title"] = [$paper->title . " - " . env("APP_NAME_SITUSIBA")];

        if (!empty (GenerateDescription($paper))) {
            $metadata["description"] = [GenerateDescription($paper)];
        }

        DefaultMetadata("situsiba", $metadata);
        return Inertia::render('situsiba/Show', compact('paper', 'categories', 'genres'));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response | \Inertia\Response | null
     */
    public function search(Request $request)
    {
        $postType = PostType::where('slug', 'paper')->first();

        $papers = (clone $postType)->posts();

        if (!empty ($request->get("search"))) {
            $query = ["like", "%{$request->get("search")}%"];
            $papers = $papers->where("title", ...$query)
                ->orWhere("content", ...$query);
        }


        if (!empty ($request->get("genres"))) {
            $filter = gettype($request->get("genres")) == "string" ? [$request->get("genres")] : $request->get("genres");
            $papers = $papers->whereHas("genres", function ($genre) use ($filter) {
                $genre = $genre->where("genre", "like", "%$filter[0]%");
                unset ($filter[0]);
                if (count($filter) > 0) {
                    foreach ($filter as $f) {
                        $genre = $genre->where("genre", "like", "%$f%");
                    }
                }
                return $genre;
            });
        }

        if (!empty ($request->get("category"))) {
            $filter = gettype($request->get("category")) == "string" ? [$request->get("category")] : $request->get("category");

            $papers = $papers->whereHas("categories", function ($genre) use ($filter) {
                $genre = $genre->where("category", "like", "%$filter[0]%");
                unset ($filter[0]);
                if (count($filter) > 0) {
                    foreach ($filter as $f) {
                        $genre = $genre->where("category", "like", "%$f%");
                    }
                }
                return $genre;
            });
        }

        $papers = $papers->latest('created_at')->limit(9)->get();

        $recom_papers = (clone $postType)->posts()->inRandomOrder()->limit(4)->get();

        $categories = PostCategory::orderBy('category', 'asc')->get();
        $genres = PostGenre::orderBy('genre', 'asc')->get();

        DefaultMetadata("situsiba");
        return Inertia::render('situsiba/Search', compact('papers', 'recom_papers', 'categories', 'genres'));
    }
}
