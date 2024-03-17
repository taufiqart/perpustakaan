<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Cviebrock\EloquentSluggable\Services\SlugService;

class AdminPagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response | \Inertia\Response
     */
    public function index()
    {
        $articles = Article::latest()->get();
        return Inertia::render('admin/Pages', compact('articles'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response | \Inertia\Response
     */
    public function create()
    {
        $articles = Article::select('id')->where('deleted_at', null)->pluck('id');
        $parent = Category::select('parent_id')->where('parent_id', '!=', null)->where('deleted_at', null)->pluck('parent_id');
        $categories = Category::whereNotIn('id', [...$articles, ...$parent])->where('deleted_at', null)->get();
        return Inertia::render('admin/Pages/Create', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response | \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $validateData = Validator::make($request->all(), [
            'title' => 'required',
            'content' => 'required',
            'category_id' => 'nullable',
        ]);

        if ($validateData->fails()) {
            return back()->withErrors($validateData->errors());
        }

        // return dd($navigation);
        $validateData = $validateData->validate();
        $article = Article::create($validateData);
        if (!$article) {
            return back()->with(['error' => 'gagal menambah data']);
        }
        return back()->with(['success' => 'berhasil menambah data']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response | null
     */
    public function show(Article $article)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response | \Inertia\Response
     */
    public function edit(Article $page)
    {
        $article = $page;
        $article->content = clean_directive($article->content);

        $articles = Article::select('id')->where('deleted_at', null)->pluck('id');
        $parent = Category::select('parent_id')->where('parent_id', '!=', null)->where('deleted_at', null)->pluck('parent_id');
        $categories = Category::whereNotIn('id', [...$articles, ...$parent])->where('deleted_at', null)->get();
        return Inertia::render('admin/Pages/Create', compact('article', 'categories'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response | \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, Article $page)
    {
        $article = $page;

        $validateData = Validator::make($request->all(), [
            'title' => 'required',
            'content' => 'required',
            'category_id' => 'nullable',
        ]);

        if ($validateData->fails()) {
            return back()->withErrors($validateData->errors());
        }
        $slug = $page->slug;
        if ($request->title != $page->title) {
            $slug = SlugService::createSlug(Article::class, 'slug', $request['title']);
        }

        $validateData = $validateData->validate();
        $validateData['content'] = clean_directive($validateData['content']);
        $validateData['slug'] = $slug;
        $article = $article->update($validateData);
        if (!$article) {
            return back()->with(['error' => 'gagal mengedit data']);
        }
        return back()->with(['success' => 'berhasil mengedit data']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response | \Illuminate\Http\RedirectResponse
     */
    public function destroy(Article $page)
    {
        $article = $page->delete();
        if (!$article) {
            return back()->with(['error' => 'gagal menghapus data']);
        }
        return back()->with(['success' => 'berhasil menghapus data']);
    }
}
