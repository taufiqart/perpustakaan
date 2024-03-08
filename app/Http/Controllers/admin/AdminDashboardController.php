<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Category;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class AdminDashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response | \Inertia\Response
     */
    public function index(Request $request)
    {
        $month = $request->month ?? date('m');

        $reads = (new \App\Models\Post)->getReportView($month);
        $total_post = (new \App\Models\Post)->getReportCreate($month);
        $reads = array_map(function ($e) {
            $e->major_class_short = $e->major_class_short ?? "No Login";
            $e->major_class = $e->major_class ?? "No Login";
            return $e;
        }, $reads);

        $total_post = array_map(function ($e) {
            $e->major_class_short = $e->major_class_short ?? "No Login";
            $e->major_class = $e->major_class ?? "No Login";
            return $e;
        }, $total_post);



        if (auth()->user()->role == "user") {
            $postType = \App\Models\PostType::where('slug', 'paper')->first();
            $_paper = (clone $postType)->posts()->where('user_id', auth()->user()->id)->count();
            $_paper_new = (clone $postType)->posts()->where('user_id', auth()->user()->id)->whereDate('created_at', date('Y-m-d'))->count();

            $paper = array(
                "pages_count" => $_paper,
                "pages_new" => $_paper_new,
            );

            return Inertia::render('admin/Dashboard', compact('total_post', 'reads', 'paper'));
        }

        $postType = \App\Models\PostType::where('slug', 'paper')->first();
        $_paper = (clone $postType)->posts()->count();
        $_paper_new = (clone $postType)->posts()->whereDate('created_at', date('Y-m-d'))->count();

        $paper = array(
            "pages_count" => $_paper,
            "pages_new" => $_paper_new,
        );

        $folder = public_path() . env('ASSET_LOCATION');
        $folder = str_replace('//', '/', $folder);
        $navigations_count = Category::all()->count();
        $navigations_new = Category::whereDate('created_at', date('Y-m-d'))->get()->count();
        $pages_count = Article::all()->count();
        $pages_new = Article::whereDate('created_at', date('Y-m-d'))->get()->count();

        $files = scandir($folder, SCANDIR_SORT_ASCENDING);

        foreach (['.', '..'] as $remove) {
            if (($key = array_search($remove, $files)) !== false) {
                unset($files[$key]);
            }
        }

        $files_new = [];
        foreach ($files as $file) {
            if (date('Y-m-d', filemtime($folder . $file)) == date('Y-m-d')) {
                array_push($files_new, $file);
            }
        }

        $files_new = count($files_new);
        $files_count = count($files);

        $files = array(
            "files_count" => $files_count,
            "files_new" => $files_new,
        );
        $navigations = array(
            "navigations_count" => $navigations_count,
            "navigations_new" => $navigations_new,
        );

        $pages = array(
            "pages_count" => $pages_count,
            "pages_new" => $pages_new,
        );

        return Inertia::render('admin/Dashboard', compact('navigations', 'pages', 'files', 'total_post', 'reads', 'paper'));
    }
}
