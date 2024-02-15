<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Category;
use Inertia\Inertia;

class AdminDashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response | \Inertia\Response
     */
    public function index()
    {
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

        return Inertia::render('admin/Dashboard', compact('navigations', 'pages', 'files'));
    }
}
