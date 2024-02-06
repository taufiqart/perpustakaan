<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use App\Models\Slider;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($any = '/')
    {
        $menu = $any;
        if ($any != '/') {
            $menu = explode('/', $any);
        }
        // return dd($menu);
        // return dd($menu->article);
        $category = Category::where('parent_id', null)->get();
        if ($any != '/') {
            $other = Article::latest()->whereHas('category', function ($q) use ($menu) {
                return $q->where('slug', '!=', $menu[count($menu) - 1]);
            })->limit(5)->get();
        } else {

            $other = Article::latest()->whereHas('category', function ($q) use ($menu) {
                return $q->where('slug', '!=', '/');
            })->limit(5)->get();
        }
        $sliders = Slider::latest()->get();
        $sliders = count($sliders) > 0 ? $sliders : json_decode(json_encode([['image' => '/assets/images/1.jpeg'], ['image' => '/assets/images/2.jpeg'], ['image' => '/assets/images/3.jpeg'], ['image' => '/assets/images/4.jpeg']]));

        if ($menu[0] && isset($menu[1])) {
            $article = Category::where('slug', $menu[1])->first()?->article;
            if ($article) {
                return Inertia::render('Index', compact('category', 'article', 'other','sliders'));
            }
            $article = Article::where('slug', $menu[1])->first();
            return Inertia::render('Index', compact('category', 'article', 'other','sliders'));
            return abort(404);
        }

        if ($menu[0]) {
            $article = Category::where('slug', $menu[0])->first()?->article;
            if ($article) {

                return Inertia::render('Index', compact('category', 'article', 'other','sliders'));
            }
            $article = Article::where('slug', $menu[0])->first();
            // $article = Article::latest()->first();
            // return dd($article);
            return Inertia::render('situsiba/Index', compact('category', 'article', 'other','sliders'));
            // return dd('ka');
            return abort(404);
        }
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function show(Article $article)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function edit(Article $article)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Article $article)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        //
    }
}
