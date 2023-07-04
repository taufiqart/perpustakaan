<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
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
        // return dd($menu[0]);
        // return dd($menu->article);
        $category = Category::where('parent_id', null)->get();

        if ($menu[0] && isset($menu[1])) {
            $article = Category::where('slug', $menu[1])->first()?->article;
            if ($article) {
                return Inertia::render('Index', compact('category', 'article'));
            }
            return Inertia::render('Index', compact('category', 'article'));
            return abort(404);
        }

        if ($menu[0]) {
            $article = Category::where('slug', $menu[0])->first()?->article;
            if ($article) {

                return Inertia::render('Index', compact('category', 'article'));
            }
            // $article = Article::latest()->first();
            // return dd($article);
            return Inertia::render('Index', compact('category', 'article'));
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
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        //
    }
}
