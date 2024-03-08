<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class HandleReadRequest
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $slug = $request->route()->parameter('slug');
        if ($request->is('situsiba/papers/*') && !empty($slug)) {
            $_slug = md5($slug);
            $paper = \App\Models\Post::where('slug', $slug)->first();
            if (empty($request->cookie($_slug))) {
                if (!empty($paper)) {
                    $paper->pivotView()->create(["user_id" => @auth()->user()->id]);
                    return $next($request)->withCookie(cookie($_slug, true, 60));
                }
            }
        }
        return $next($request);
    }
}
