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
                    array_push($filenames, ["title" => $file->getClientOriginalName(), "mime_type" => $file->getClientMimeType(), "url" => $filename]);
                }
            }
        }
        try {
            \DB::beginTransaction();
            // $type_id = PostType::select("id")->where("slug", "paper")->first();
            $post = PostType::select("id")->where("slug", "paper")->first()->posts()->create([
                "user_id" => \Auth::user()->id,
                "poster" => $coverFilename,
                "title" => $request->title,
                "content" => $request->content
            ]);

            $post->post_assets()->createMany($filenames);

            \DB::commit();

            return back()->with(['success' => 'Success create']);
            // return dd($request);
        } catch (\Exception $e) {
            \DB::rollback();
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
        $paper->load(['user','user.user_detail']);
        // return dd($paper);
        return \Inertia\Inertia::render("");
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
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
