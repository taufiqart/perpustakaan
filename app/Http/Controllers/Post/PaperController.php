<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\PostAsset;
use App\Models\PostCategory;
use App\Models\PostGenre;
use App\Models\Post;
use App\Models\PostType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PaperController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response | \Inertia\Response
     */
    public function index()
    {
        $papers = PostType::where('slug', 'paper')->first()
            ->posts()->where('user_id', \Auth::user()->id)->orWhere('user_id', null)
            ->orderBy('created_at', 'desc')->get();
        return \Inertia\Inertia::render("admin/Paper/Index", compact("papers"));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response | \Inertia\Response
     */
    public function create()
    {
        $categories = PostCategory::orderBy('category', 'asc')->get();
        $genres = PostGenre::orderBy('genre', 'asc')->get();
        return \Inertia\Inertia::render("admin/Paper/Create", compact("categories", "genres"));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response | \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            "title" => "required",
            "categories" => "required|array",
            "cover" => "required|max:2048",
            "genres" => "nullable",
            "content" => "nullable"
        ]);

        if ($validate->fails()) {
            return back()->withErrors($validate->errors());
        }

        $coverFilename = "";
        if (!empty($request->file('cover'))) {
            $cover = $request->file('cover');
            $coverFilename = env("POST_LOCATION") . explode(".", $cover->getClientOriginalName())[0] . "-" . randomFilename($cover->clientExtension());
            move_uploaded_file($cover->getPathname(), public_path($coverFilename));
        }

        $filenames = [];

        if (!empty($request->file('assets')) && count($request->file('assets')) > 0) {
            foreach ($request->file('assets') as $file) {
                $filename = env("POST_LOCATION") . randomFilename($file->clientExtension());
                if (move_uploaded_file($file->getPathname(), public_path($filename))) {
                    array_push($filenames, [
                        "title" => $file->getClientOriginalName(),
                        "mime_type" => $file->getClientMimeType(),
                        "url" => $filename,
                        "size" => filesize(public_path($filename))
                    ]);
                }
            }
        }
        try {
            \DB::beginTransaction();

            $post = PostType::select("id")->where("slug", "paper")->first()->posts()->create([
                "user_id" => \Auth::user()->id,
                "poster" => $coverFilename,
                "title" => $request->title,
                "content" => $request->content
            ]);
            $categories = [];
            if ($request->categories) {
                foreach ($request->categories as $category) {
                    if (@$category["__isNew__"]) {
                        $newCategory = PostCategory::create(["category" => $category["label"]]);
                        $category["value"] = $newCategory->id;
                        unset($category["__isNew__"]);
                    }
                    array_push($categories, $category["value"]);
                }
            }
            if (count($categories) > 0) {
                $post->categories()->attach($categories);
            }
            $genres = [];
            if ($request->genres) {
                foreach ($request->genres as $genre) {
                    if (@$genre["__isNew__"]) {
                        $newGenre = PostGenre::firstOrCreate(["genre" => $genre["label"]]);
                        $genre["value"] = $newGenre->id;
                        unset($genre["__isNew__"]);
                    }
                    array_push($genres, $genre["value"]);
                }
            }

            if (count($genres) > 0) {
                $post->genres()->attach($genres);
            }
            if (count($filenames) > 0) {
                $post->post_assets()->createMany($filenames);
            }
            \DB::commit();

            return back()->with(['success' => 'Success create']);
            // return dd($request);
        } catch (\Exception $e) {
            \DB::rollback();
            foreach ($filenames as $file) {
                if (is_file(public_path($file))) {
                    unlink(public_path($file));
                }
            }
            if (is_file(public_path($coverFilename))) {
                unlink(public_path($coverFilename));
            }
            // return dd($e);
            return back()->with(['error' => 'Error create']);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $paper
     * @return \Illuminate\Http\Response | \Inertia\Response
     */
    public function show(Post $paper)
    {
        $paper->load(['user', 'user.user_detail','post_assets']);
        $categories = PostCategory::orderBy('category', 'asc')->get();
        $genres = PostGenre::orderBy('genre', 'asc')->get();
        $paper->{"total_view"} = $paper->total_view == 0 ? 0 : $paper->total_view - 1;

        return \Inertia\Inertia::render("admin/Paper/View", compact("paper", "categories", "genres"));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $id
     * @return \Illuminate\Http\Response | \Inertia\Response | null
     */
    public function edit(Post $paper)
    {
        $paper->load(['genres', 'categories', 'post_assets']);
        // return dd($paper);
        $categories = PostCategory::orderBy('category', 'asc')->get();
        $genres = PostGenre::orderBy('genre', 'asc')->get();
        return \Inertia\Inertia::render("admin/Paper/Create", compact("paper", "categories", "genres"));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $paper
     * @return \Illuminate\Http\Response | \Illuminate\Http\RedirectResponse | null
     */
    public function update(Request $request, Post $paper)
    {
        $validate = Validator::make($request->all(), [
            "title" => "required",
            "categories" => "required|array",
            "cover" => "nullable|max:2048",
            "genres" => "nullable",
            "content" => "nullable"
        ]);

        if ($validate->fails()) {
            return back()->withErrors($validate->errors());
        }

        $coverFilename = "";
        if (!empty($request->file('cover'))) {
            $cover = $request->file('cover');
            $coverFilename = env("POST_LOCATION") . explode(".", $cover->getClientOriginalName())[0] . "-" . randomFilename($cover->clientExtension());
            move_uploaded_file($cover->getPathname(), public_path($coverFilename));
        }

        $filenames = [];

        if (!empty($request->file('assets')) && count($request->file('assets')) > 0) {
            foreach ($request->file('assets') as $file) {
                $filename = env("POST_LOCATION") . randomFilename($file->clientExtension());
                if (move_uploaded_file($file->getPathname(), public_path($filename))) {
                    array_push($filenames, [
                        "title" => $file->getClientOriginalName(),
                        "mime_type" => $file->getClientMimeType(),
                        "url" => $filename,
                        "size" => filesize(public_path($filename))
                    ]);
                }
            }
        }

        try {
            \DB::beginTransaction();
            $updateData = [
                "user_id" => \Auth::user()->id,
                "title" => $request->title,
                "content" => $request->content
            ];

            if (!empty($cover)) {
                $updateData["poster"] = $coverFilename;
            }

            $post = tap($paper)->update($updateData);
            $categories = [];

            if ($request->categories) {
                foreach ($request->categories as $category) {
                    if (@$category["__isNew__"]) {
                        $newCategory = PostCategory::create(["category" => $category["label"]]);
                        $category["value"] = $newCategory->id;
                        unset($category["__isNew__"]);
                    }
                    array_push($categories, $category["value"]);
                }
            }
            if (count($categories) > 0) {
                $paper->categories()->sync($categories);
            }
            $genres = [];
            if ($request->genres) {
                foreach ($request->genres as $genre) {
                    if (@$genre["__isNew__"]) {
                        $newGenre = PostGenre::firstOrCreate(["genre" => $genre["label"]]);
                        $genre["value"] = $newGenre->id;
                        unset($genre["__isNew__"]);
                    }
                    array_push($genres, $genre["value"]);
                }
            }

            if (count($genres) > 0) {
                $paper->genres()->sync($genres);
            }
            if (count($filenames) > 0) {
                $paper->post_assets()->createMany($filenames);
            }

            \DB::commit();

            return redirect(route("paper.edit",$post->slug))->with(['success' => 'Success updated']);
        } catch (\Exception $e) {
            \DB::rollback();
            foreach ($filenames as $file) {
                if (is_file(public_path($file))) {
                    unlink(public_path($file));
                }
            }
            if (is_file(public_path($coverFilename))) {
                unlink(public_path($coverFilename));
            }
            return back()->with(['error' => 'Error updated']);
        }
    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $paper
     * @return \Illuminate\Http\Response | \Illuminate\Http\RedirectResponse | null
     */
    public function destroy(Post $paper)
    {
        $delete = $paper->delete();
        if($delete){
            return redirect(route("paper.index"))->with(['success' => 'Success deleted']);
        }
        return back()->with(['error' => 'Error deleted']);

    }
}
