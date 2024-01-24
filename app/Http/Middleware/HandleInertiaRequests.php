<?php

namespace App\Http\Middleware;

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
        $icons = [
            'dashboard' => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style="height:inherit;width:inherit;"><linearGradient id="Y7aOsaOFAG_8728tH5LZCa" x1="8.364" x2="38.396" y1="518.692" y2="493.353" gradientTransform="matrix(1 0 0 -1 0 526)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#a1aab3"/><stop offset="1" stop-color="#8f979e"/></linearGradient><path fill="url(#Y7aOsaOFAG_8728tH5LZCa)" d="M42,34H6c-1.105,0-2-0.895-2-2V9c0-1.105,0.895-2,2-2h36c1.105,0,2,0.895,2,2v23 C44,33.105,43.105,34,42,34z"/><radialGradient id="Y7aOsaOFAG_8728tH5LZCb" cx="65.965" cy="517.317" r="83.03" gradientTransform="matrix(.8095 0 0 -.7188 -4.957 428.702)" gradientUnits="userSpaceOnUse"><stop offset=".323" stop-color="#23d9d6"/><stop offset=".427" stop-color="#23d4d7"/><stop offset=".542" stop-color="#21c7dc"/><stop offset=".664" stop-color="#1fb0e2"/><stop offset=".789" stop-color="#1c91ec"/><stop offset=".917" stop-color="#1969f8"/><stop offset=".944" stop-color="#1860fb"/></radialGradient><rect width="36" height="23" x="6" y="9" fill="url(#Y7aOsaOFAG_8728tH5LZCb)"/><linearGradient id="Y7aOsaOFAG_8728tH5LZCc" x1="-314" x2="-314" y1="491.013" y2="484.988" gradientTransform="rotate(180 -145 263)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#a1aab3"/><stop offset="1" stop-color="#8f979e"/></linearGradient><path fill="url(#Y7aOsaOFAG_8728tH5LZCc)" d="M14,38v-3h20v3l13,0.335V40c0,0.552-0.448,1-1,1H2c-0.552,0-1-0.448-1-1v-1.419L14,38z"/><linearGradient id="Y7aOsaOFAG_8728tH5LZCd" x1="24" x2="24" y1="492.011" y2="486.99" gradientTransform="matrix(1 0 0 -1 0 526)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#484b4f"/><stop offset=".028" stop-color="#565b61"/><stop offset=".066" stop-color="#626a72"/><stop offset=".114" stop-color="#6b757d"/><stop offset=".181" stop-color="#717b84"/><stop offset=".367" stop-color="#727d86"/></linearGradient><path fill="url(#Y7aOsaOFAG_8728tH5LZCd)" d="M46.909,38.335l-2.867-3.584C43.663,34.276,43.088,34,42.481,34H5.519 c-0.608,0-1.182,0.276-1.562,0.751L1.09,38.335C0.876,38.603,1.067,39,1.41,39h14.966c0.382,0,0.73-0.217,0.898-0.56l0.431-0.88 c0.168-0.343,0.516-0.56,0.898-0.56h10.793c0.382,0,0.73,0.217,0.898,0.56l0.431,0.88c0.168,0.343,0.516,0.56,0.898,0.56H46.59 C46.933,39,47.124,38.603,46.909,38.335z"/><path fill="#ccdcff" d="M22,13h4c0.552,0,1,0.448,1,1v15h-6V14C21,13.448,21.448,13,22,13z"/><path fill="#e6eeff" d="M16,22h4c0.552,0,1,0.448,1,1v6h-6v-6C15,22.448,15.448,22,16,22z"/><path fill="#e6eeff" d="M28,17h4c0.552,0,1,0.448,1,1v11h-6V18C27,17.448,27.448,17,28,17z" style="&#10;    height: 100000px;&#10;"/></svg>',
            'navigation' => '<style>li:hover .navigation-rotate,svg:hover .navigation-rotate {animation: navigation_rotate 1s infinite;}@keyframes navigation_rotate {0% {transform: matrix(1, 0, 0, 1, 24, 24)}50% {transform: matrix(-0.7118211984634399, 0.7023607492446899, -0.7023607492446899, -0.7118211984634399, 24, 24)}100% {transform: matrix(1, 0, 0, 1, 24, 24)}}</style><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" preserveAspectRatio="xMidYMid meet" style="width: inherit; height: inherit; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_11"><rect width="48" height="48" x="0" y="0"/></clipPath></defs><g clip-path="url(#__lottie_element_11)"><g transform="matrix(1,0,0,1,24,24)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(33,150,243)" fill-opacity="1" d=" M20,0 C20,11.045999526977539 11.045999526977539,20 0,20 C-11.045999526977539,20 -20,11.045999526977539 -20,0 C-20,-11.045999526977539 -11.045999526977539,-20 0,-20 C11.045999526977539,-20 20,-11.045999526977539 20,0"/></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(238,238,238)" fill-opacity="1" d=" M16,0 C16,8.836999893188477 8.836999893188477,16 0,16 C-8.836999893188477,16 -16,8.836999893188477 -16,0 C-16,-8.836999893188477 -8.836999893188477,-16 0,-16 C8.836999893188477,-16 16,-8.836999893188477 16,0"/></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(144,164,174)" fill-opacity="1" d=" M0,-14 C0,-14 -2,0 -2,0 C-2,0 0,14 0,14 C0,14 2,0 2,0 C2,0 0,-14 0,-14z"/></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(144,164,174)" fill-opacity="1" d=" M-9.89900016784668,-9.89900016784668 C-9.89900016784668,-9.89900016784668 -1.4140000343322754,1.4140000343322754 -1.4140000343322754,1.4140000343322754 C-1.4140000343322754,1.4140000343322754 9.89900016784668,9.89900016784668 9.89900016784668,9.89900016784668 C9.89900016784668,9.89900016784668 1.4140000343322754,-1.4140000343322754 1.4140000343322754,-1.4140000343322754 C1.4140000343322754,-1.4140000343322754 -9.89900016784668,-9.89900016784668 -9.89900016784668,-9.89900016784668z"/></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(144,164,174)" fill-opacity="1" d=" M9.89900016784668,-9.89900016784668 C9.89900016784668,-9.89900016784668 -1.4140000343322754,-1.4140000343322754 -1.4140000343322754,-1.4140000343322754 C-1.4140000343322754,-1.4140000343322754 -9.89900016784668,9.89900016784668 -9.89900016784668,9.89900016784668 C-9.89900016784668,9.89900016784668 1.4140000343322754,1.4140000343322754 1.4140000343322754,1.4140000343322754 C1.4140000343322754,1.4140000343322754 9.89900016784668,-9.89900016784668 9.89900016784668,-9.89900016784668z"/></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(144,164,174)" fill-opacity="1" d=" M-14,0 C-14,0 0,2 0,2 C0,2 14,0 14,0 C14,0 0.0010000000474974513,-2 0.0010000000474974513,-2 C0.0010000000474974513,-2 -14,0 -14,0z"/></g></g><g opacity="1" style="display: block;" class="navigation-rotate" transform="matrix(-0.15221001207828522,-0.9883481860160828,0.9883481860160828,-0.15221001207828522,24,24)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(63,81,181)" fill-opacity="1" d=" M-9.89900016784668,9.89900016784668 C-9.89900016784668,9.89900016784668 2.121000051498413,2.121000051498413 2.121000051498413,2.121000051498413 C2.121000051498413,2.121000051498413 -2.121000051498413,-2.121000051498413 -2.121000051498413,-2.121000051498413 C-2.121000051498413,-2.121000051498413 -9.89900016784668,9.89900016784668 -9.89900016784668,9.89900016784668z"/></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,61,0)" fill-opacity="1" d=" M-2.121000051498413,-2.121000051498413 C-2.121000051498413,-2.121000051498413 2.121000051498413,2.121000051498413 2.121000051498413,2.121000051498413 C2.121000051498413,2.121000051498413 9.89900016784668,-9.89900016784668 9.89900016784668,-9.89900016784668 C9.89900016784668,-9.89900016784668 -2.121000051498413,-2.121000051498413 -2.121000051498413,-2.121000051498413z"/></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M1.5,0 C1.5,0.8289999961853027 0.8289999961853027,1.5 0,1.5 C-0.8289999961853027,1.5 -1.5,0.8289999961853027 -1.5,0 C-1.5,-0.8289999961853027 -0.828000009059906,-1.5 0,-1.5 C0.8289999961853027,-1.5 1.5,-0.8289999961853027 1.5,0"/></g></g></g></svg>',
            'pages' => '<style xmlns="http://www.w3.org/2000/svg">li:hover .block1,svg:hover .block1{animation: block 2s infinite;}li:hover .block2,svg:hover .block2{animation: block 2s infinite;animation-delay: 0.10s;}li:hover .block3,svg:hover .block3{animation: block 2s infinite;animation-delay: 0.20s;}@keyframes block{0%{width:18;}30%{width:0;}40%{width:18;}100%{width:18;}}</style><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style="width:inherit;height:inherit;"><rect width="29" height="37" x="11" y="7" fill="#6c19ff"/><polygon fill="#3dd9eb" points="37,41 8,41 8,4 37,4 37,12"/><polygon fill="#00b3d7" points="11,41 37,41 37,12 37,7 11,7" style="&#10;    /* fill: transparent; */&#10;"/><rect width="18" height="4" x="15" y="14" fill="#3dd9eb" class="block1"/><rect width="18" height="4" x="15" y="22" fill="#3dd9eb" class="block2"/><rect width="18" height="4" x="15" y="30" fill="#3dd9eb" class="block3"/></svg>',
            'slider' => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style="width:inherit; height:inherit;"><path fill="#50e6ff" d="M40,6H8C6.895,6,6,6.895,6,8v30c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"/><linearGradient id="k7ujsySgGxE7kXpQVtTw5a" x1="18" x2="42" y1="32.093" y2="32.093" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3ccbf4"/><stop offset="1" stop-color="#1fa0e5"/></linearGradient><path fill="url(#k7ujsySgGxE7kXpQVtTw5a)" d="M32.065,23.065c-1.149-1.149-3.005-1.174-4.185-0.057L18,32.368V42h22c1.105,0,2-0.895,2-2 v-7L32.065,23.065z"/><circle cx="30.5" cy="14.5" r="3.5" fill="#fff8de"/><linearGradient id="k7ujsySgGxE7kXpQVtTw5b" x1="23.91" x2="23.91" y1="18.186" y2="42" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#28afea"/><stop offset="1" stop-color="#0b88da"/></linearGradient><path fill="url(#k7ujsySgGxE7kXpQVtTw5b)" d="M8,42h32c0.811,0,1.507-0.485,1.82-1.18L20.065,19.065c-1.149-1.149-3.005-1.174-4.185-0.057 L6,28.368V40C6,41.105,6.895,42,8,42z"/><polygon points="42,29.6 42,38.4 38.4,42 29.6,42" opacity=".05"/><polygon points="42,30.31 42,37.69 37.69,42 30.31,42" opacity=".07"/><path fill="#c94f60" d="M47.781,30.141l-1.922-1.921c-0.292-0.293-0.768-0.293-1.061,0l-0.904,0.905l2.981,2.981 l0.905-0.904C48.073,30.908,48.073,30.434,47.781,30.141"/><path fill="#f0f0f0" d="M29.003,44.016L28,48l3.985-1.003l0.418-3.456L29.003,44.016z"/><path fill="#edbe00" d="M44.333,34.648L31.985,46.996l-2.981-2.981l12.348-12.348L44.333,34.648z"/><linearGradient id="k7ujsySgGxE7kXpQVtTw5c" x1="44.112" x2="44.112" y1="360.688" y2="355.199" gradientTransform="matrix(1 0 0 -1 0 390)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#dedede"/><stop offset="1" stop-color="#d6d6d6"/></linearGradient><path fill="url(#k7ujsySgGxE7kXpQVtTw5c)" d="M41.349,31.667l2.543-2.544l2.983,2.981l-2.543,2.544L41.349,31.667z"/><path fill="#787878" d="M28.508,45.985L28,48l2.014-0.508L28.508,45.985z"/></svg>',
            'fileManager' => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style="width:inherit; height:inherit;"><path fill="#1e88e5" d="M7,20h34v-9c0-2.209-1.791-4-4-4h-5.172c-0.53,0-1.039,0.211-1.414,0.586l-0.121,0.121C30.105,7.895,29.851,8,29.586,8H10.79C8.697,8,7,9.697,7,11.79v0.002V20z"/><path fill="#e0e0e0" d="M10 10H37V23.5H10z"/><path fill="#f5f5f5" d="M9 12H38V27H9z"/><path fill="#fff" d="M11 14H39V29H11z"/><path fill="#42a5f5" d="M42,35V21c0-3.314-2.686-5-6-5H22.414c-0.265,0-0.52-0.105-0.707-0.293l-2.121-2.121C19.211,13.211,18.702,13,18.172,13H12c-3.314,0-6,1.686-6,5v16c0,3.314,2.686,6,6,6h7L42,35z"/><path fill="#f5f5f5" d="M36.655,26.008C35.674,23.113,32.615,21,28.988,21c-3.341,0-6.201,1.793-7.398,4.339C21.099,25.123,20.559,25,19.988,25c-2.031,0-3.691,1.519-3.948,3.481c-2.376,0.967-4.052,3.296-4.052,6.019c0,3.59,2.91,6.5,6.5,6.5s14.369,0,18,0c4.142,0,7.5-3.358,7.5-7.5C43.988,29.414,40.719,26.098,36.655,26.008z"/><path fill="#039be5" d="M25.045 28.001L23.351 30.751 29.579 30.751 31.091 28.001zM34.626 28.001c-3.913 0-3.94 4.583-3.94 4.583l-.135 1.862c-.405 3.696-2.915 3.638-2.915 3.638h-.864L26.313 39h3.671c0 0 3.077 0 3.455-3.666 0 0 .216-2.664.243-2.75s.054-2.75 2.591-2.75c0 0 .834.013 1.245.186L38 29.376C36.138 27.915 34.626 28.001 34.626 28.001zM22.221 32.584l-3.102 5.038C18.783 38.233 19.198 39 19.865 39h5.18l1.009-1.833H23.06l1.122-1.833h2.878l1.511-2.75H22.221z"/></svg>'

        ];

        $clientNavigation = [];
        $adminNavigation = [
            [
                "title" => "Dashboard",
                "slug" => "/dashboard",
                'icon' => $icons['dashboard'],
                "child" => []
            ],
            [
                "title" => "Navigation",
                "slug" => "/dashboard/navigation",
                'icon' => $icons['navigation'],
                "child" => []
            ],
            [
                "title" => "Pages",
                "slug" => "/dashboard/pages",
                'icon' => $icons['pages'],
                "child" => []
            ],
            [
                "title" => "Slider",
                "slug" => "/dashboard/slider",
                'icon' => $icons['slider'],
                "child" => []
            ],
            [
                "title" => "File Manager",
                "slug" => "/dashboard/file-manager",
                'icon' => $icons['fileManager'],
                "child" => []
            ],
        ];


        return array_merge(parent::share($request), [
            'flash' => [
                'error' => fn () => $request->session()->get('error'),
                'success' => fn () => $request->session()->get('success')
            ],
            'navigation' => $request->is('dashboard*') ?  $adminNavigation : $clientNavigation,
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
