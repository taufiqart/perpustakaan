<?php

namespace App\Http\Controllers\Helper;

use App\Http\Controllers\Controller;
use App\Models\PostAsset;
use Illuminate\Http\Request;

class AssetController extends Controller
{
    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse | null
     */
    public function destroy(Request $request)
    {
        $asset = PostAsset::where("url", $request->asset['url'])->first();
        
        if ($asset) {
            if (is_file(public_path($asset->url))) {
                unlink(public_path($asset->url));
            }
            $asset->delete();
        }
        return back()->with(['success' => 'Success deleted']);
    }
}
