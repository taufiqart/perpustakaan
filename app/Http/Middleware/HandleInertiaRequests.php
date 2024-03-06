<?php

namespace App\Http\Middleware;

use App\Helpers\Navigation;
use App\Models\Category;
use App\Models\Slider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {

        $navigation = [];
        if ($request->is('dashboard*') && $request->user()) {
            $navigation = (new Navigation)->get_navigations($request->user()->role);
        }
        $sliders = [];
        if (!$request->is("dashboard*")) {
            $sliders = Slider::latest()->get();
            $sliders = count($sliders) > 0 ? $sliders : json_decode(json_encode([['image' => '/assets/images/1.jpeg'], ['image' => '/assets/images/2.jpeg'], ['image' => '/assets/images/3.jpeg'], ['image' => '/assets/images/4.jpeg']]));
        }

        $category = [];
        if (!$request->is('dashboard*')) {
            $category = Category::where('parent_id', null)->get()->toArray();
            array_push($category, json_decode(json_encode(["title" => "SITU SIBA", "slug" => "situsiba", "child" => []])));
        }

        return array_merge(parent::share($request), [
            'flash' => [
                'error' => fn() => $request->session()->get('error'),
                'success' => fn() => $request->session()->get('success')
            ],
            'navigation' => $navigation,
            'category' => $category,
            'sliders' => $sliders,
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }
}
