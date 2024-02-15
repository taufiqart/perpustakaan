<?php
namespace App\Helpers;

class Navigation
{
    protected array $icons;
    protected array $navigations;
    public function __construct()
    {
        $this->icons = [
            'dashboard' => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style="height:inherit;width:inherit;"><linearGradient id="Y7aOsaOFAG_8728tH5LZCa" x1="8.364" x2="38.396" y1="518.692" y2="493.353" gradientTransform="matrix(1 0 0 -1 0 526)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#a1aab3"/><stop offset="1" stop-color="#8f979e"/></linearGradient><path fill="url(#Y7aOsaOFAG_8728tH5LZCa)" d="M42,34H6c-1.105,0-2-0.895-2-2V9c0-1.105,0.895-2,2-2h36c1.105,0,2,0.895,2,2v23 C44,33.105,43.105,34,42,34z"/><radialGradient id="Y7aOsaOFAG_8728tH5LZCb" cx="65.965" cy="517.317" r="83.03" gradientTransform="matrix(.8095 0 0 -.7188 -4.957 428.702)" gradientUnits="userSpaceOnUse"><stop offset=".323" stop-color="#23d9d6"/><stop offset=".427" stop-color="#23d4d7"/><stop offset=".542" stop-color="#21c7dc"/><stop offset=".664" stop-color="#1fb0e2"/><stop offset=".789" stop-color="#1c91ec"/><stop offset=".917" stop-color="#1969f8"/><stop offset=".944" stop-color="#1860fb"/></radialGradient><rect width="36" height="23" x="6" y="9" fill="url(#Y7aOsaOFAG_8728tH5LZCb)"/><linearGradient id="Y7aOsaOFAG_8728tH5LZCc" x1="-314" x2="-314" y1="491.013" y2="484.988" gradientTransform="rotate(180 -145 263)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#a1aab3"/><stop offset="1" stop-color="#8f979e"/></linearGradient><path fill="url(#Y7aOsaOFAG_8728tH5LZCc)" d="M14,38v-3h20v3l13,0.335V40c0,0.552-0.448,1-1,1H2c-0.552,0-1-0.448-1-1v-1.419L14,38z"/><linearGradient id="Y7aOsaOFAG_8728tH5LZCd" x1="24" x2="24" y1="492.011" y2="486.99" gradientTransform="matrix(1 0 0 -1 0 526)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#484b4f"/><stop offset=".028" stop-color="#565b61"/><stop offset=".066" stop-color="#626a72"/><stop offset=".114" stop-color="#6b757d"/><stop offset=".181" stop-color="#717b84"/><stop offset=".367" stop-color="#727d86"/></linearGradient><path fill="url(#Y7aOsaOFAG_8728tH5LZCd)" d="M46.909,38.335l-2.867-3.584C43.663,34.276,43.088,34,42.481,34H5.519 c-0.608,0-1.182,0.276-1.562,0.751L1.09,38.335C0.876,38.603,1.067,39,1.41,39h14.966c0.382,0,0.73-0.217,0.898-0.56l0.431-0.88 c0.168-0.343,0.516-0.56,0.898-0.56h10.793c0.382,0,0.73,0.217,0.898,0.56l0.431,0.88c0.168,0.343,0.516,0.56,0.898,0.56H46.59 C46.933,39,47.124,38.603,46.909,38.335z"/><path fill="#ccdcff" d="M22,13h4c0.552,0,1,0.448,1,1v15h-6V14C21,13.448,21.448,13,22,13z"/><path fill="#e6eeff" d="M16,22h4c0.552,0,1,0.448,1,1v6h-6v-6C15,22.448,15.448,22,16,22z"/><path fill="#e6eeff" d="M28,17h4c0.552,0,1,0.448,1,1v11h-6V18C27,17.448,27.448,17,28,17z" style="&#10;    height: 100000px;&#10;"/></svg>',
            'navigation' => '<style>li:hover .navigation-rotate,svg:hover .navigation-rotate {animation: navigation_rotate 1s infinite;}@keyframes navigation_rotate {0% {transform: matrix(1, 0, 0, 1, 24, 24)}50% {transform: matrix(-0.7118211984634399, 0.7023607492446899, -0.7023607492446899, -0.7118211984634399, 24, 24)}100% {transform: matrix(1, 0, 0, 1, 24, 24)}}</style><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" preserveAspectRatio="xMidYMid meet" style="width: inherit; height: inherit; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_11"><rect width="48" height="48" x="0" y="0"/></clipPath></defs><g clip-path="url(#__lottie_element_11)"><g transform="matrix(1,0,0,1,24,24)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(33,150,243)" fill-opacity="1" d=" M20,0 C20,11.045999526977539 11.045999526977539,20 0,20 C-11.045999526977539,20 -20,11.045999526977539 -20,0 C-20,-11.045999526977539 -11.045999526977539,-20 0,-20 C11.045999526977539,-20 20,-11.045999526977539 20,0"/></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(238,238,238)" fill-opacity="1" d=" M16,0 C16,8.836999893188477 8.836999893188477,16 0,16 C-8.836999893188477,16 -16,8.836999893188477 -16,0 C-16,-8.836999893188477 -8.836999893188477,-16 0,-16 C8.836999893188477,-16 16,-8.836999893188477 16,0"/></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(144,164,174)" fill-opacity="1" d=" M0,-14 C0,-14 -2,0 -2,0 C-2,0 0,14 0,14 C0,14 2,0 2,0 C2,0 0,-14 0,-14z"/></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(144,164,174)" fill-opacity="1" d=" M-9.89900016784668,-9.89900016784668 C-9.89900016784668,-9.89900016784668 -1.4140000343322754,1.4140000343322754 -1.4140000343322754,1.4140000343322754 C-1.4140000343322754,1.4140000343322754 9.89900016784668,9.89900016784668 9.89900016784668,9.89900016784668 C9.89900016784668,9.89900016784668 1.4140000343322754,-1.4140000343322754 1.4140000343322754,-1.4140000343322754 C1.4140000343322754,-1.4140000343322754 -9.89900016784668,-9.89900016784668 -9.89900016784668,-9.89900016784668z"/></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(144,164,174)" fill-opacity="1" d=" M9.89900016784668,-9.89900016784668 C9.89900016784668,-9.89900016784668 -1.4140000343322754,-1.4140000343322754 -1.4140000343322754,-1.4140000343322754 C-1.4140000343322754,-1.4140000343322754 -9.89900016784668,9.89900016784668 -9.89900016784668,9.89900016784668 C-9.89900016784668,9.89900016784668 1.4140000343322754,1.4140000343322754 1.4140000343322754,1.4140000343322754 C1.4140000343322754,1.4140000343322754 9.89900016784668,-9.89900016784668 9.89900016784668,-9.89900016784668z"/></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(144,164,174)" fill-opacity="1" d=" M-14,0 C-14,0 0,2 0,2 C0,2 14,0 14,0 C14,0 0.0010000000474974513,-2 0.0010000000474974513,-2 C0.0010000000474974513,-2 -14,0 -14,0z"/></g></g><g opacity="1" style="display: block;" class="navigation-rotate" transform="matrix(-0.15221001207828522,-0.9883481860160828,0.9883481860160828,-0.15221001207828522,24,24)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(63,81,181)" fill-opacity="1" d=" M-9.89900016784668,9.89900016784668 C-9.89900016784668,9.89900016784668 2.121000051498413,2.121000051498413 2.121000051498413,2.121000051498413 C2.121000051498413,2.121000051498413 -2.121000051498413,-2.121000051498413 -2.121000051498413,-2.121000051498413 C-2.121000051498413,-2.121000051498413 -9.89900016784668,9.89900016784668 -9.89900016784668,9.89900016784668z"/></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,61,0)" fill-opacity="1" d=" M-2.121000051498413,-2.121000051498413 C-2.121000051498413,-2.121000051498413 2.121000051498413,2.121000051498413 2.121000051498413,2.121000051498413 C2.121000051498413,2.121000051498413 9.89900016784668,-9.89900016784668 9.89900016784668,-9.89900016784668 C9.89900016784668,-9.89900016784668 -2.121000051498413,-2.121000051498413 -2.121000051498413,-2.121000051498413z"/></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M1.5,0 C1.5,0.8289999961853027 0.8289999961853027,1.5 0,1.5 C-0.8289999961853027,1.5 -1.5,0.8289999961853027 -1.5,0 C-1.5,-0.8289999961853027 -0.828000009059906,-1.5 0,-1.5 C0.8289999961853027,-1.5 1.5,-0.8289999961853027 1.5,0"/></g></g></g></svg>',
            'pages' => '<style xmlns="http://www.w3.org/2000/svg">li:hover .block1,svg:hover .block1{animation: block 2s infinite;}li:hover .block2,svg:hover .block2{animation: block 2s infinite;animation-delay: 0.10s;}li:hover .block3,svg:hover .block3{animation: block 2s infinite;animation-delay: 0.20s;}@keyframes block{0%{width:18;}30%{width:0;}40%{width:18;}100%{width:18;}}</style><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style="width:inherit;height:inherit;"><rect width="29" height="37" x="11" y="7" fill="#6c19ff"/><polygon fill="#3dd9eb" points="37,41 8,41 8,4 37,4 37,12"/><polygon fill="#00b3d7" points="11,41 37,41 37,12 37,7 11,7" style="&#10;    /* fill: transparent; */&#10;"/><rect width="18" height="4" x="15" y="14" fill="#3dd9eb" class="block1"/><rect width="18" height="4" x="15" y="22" fill="#3dd9eb" class="block2"/><rect width="18" height="4" x="15" y="30" fill="#3dd9eb" class="block3"/></svg>',
            'slider' => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style="width:inherit; height:inherit;"><path fill="#50e6ff" d="M40,6H8C6.895,6,6,6.895,6,8v30c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"/><linearGradient id="k7ujsySgGxE7kXpQVtTw5a" x1="18" x2="42" y1="32.093" y2="32.093" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3ccbf4"/><stop offset="1" stop-color="#1fa0e5"/></linearGradient><path fill="url(#k7ujsySgGxE7kXpQVtTw5a)" d="M32.065,23.065c-1.149-1.149-3.005-1.174-4.185-0.057L18,32.368V42h22c1.105,0,2-0.895,2-2 v-7L32.065,23.065z"/><circle cx="30.5" cy="14.5" r="3.5" fill="#fff8de"/><linearGradient id="k7ujsySgGxE7kXpQVtTw5b" x1="23.91" x2="23.91" y1="18.186" y2="42" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#28afea"/><stop offset="1" stop-color="#0b88da"/></linearGradient><path fill="url(#k7ujsySgGxE7kXpQVtTw5b)" d="M8,42h32c0.811,0,1.507-0.485,1.82-1.18L20.065,19.065c-1.149-1.149-3.005-1.174-4.185-0.057 L6,28.368V40C6,41.105,6.895,42,8,42z"/><polygon points="42,29.6 42,38.4 38.4,42 29.6,42" opacity=".05"/><polygon points="42,30.31 42,37.69 37.69,42 30.31,42" opacity=".07"/><path fill="#c94f60" d="M47.781,30.141l-1.922-1.921c-0.292-0.293-0.768-0.293-1.061,0l-0.904,0.905l2.981,2.981 l0.905-0.904C48.073,30.908,48.073,30.434,47.781,30.141"/><path fill="#f0f0f0" d="M29.003,44.016L28,48l3.985-1.003l0.418-3.456L29.003,44.016z"/><path fill="#edbe00" d="M44.333,34.648L31.985,46.996l-2.981-2.981l12.348-12.348L44.333,34.648z"/><linearGradient id="k7ujsySgGxE7kXpQVtTw5c" x1="44.112" x2="44.112" y1="360.688" y2="355.199" gradientTransform="matrix(1 0 0 -1 0 390)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#dedede"/><stop offset="1" stop-color="#d6d6d6"/></linearGradient><path fill="url(#k7ujsySgGxE7kXpQVtTw5c)" d="M41.349,31.667l2.543-2.544l2.983,2.981l-2.543,2.544L41.349,31.667z"/><path fill="#787878" d="M28.508,45.985L28,48l2.014-0.508L28.508,45.985z"/></svg>',
            'fileManager' => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style="width:inherit; height:inherit;"><path fill="#1e88e5" d="M7,20h34v-9c0-2.209-1.791-4-4-4h-5.172c-0.53,0-1.039,0.211-1.414,0.586l-0.121,0.121C30.105,7.895,29.851,8,29.586,8H10.79C8.697,8,7,9.697,7,11.79v0.002V20z"/><path fill="#e0e0e0" d="M10 10H37V23.5H10z"/><path fill="#f5f5f5" d="M9 12H38V27H9z"/><path fill="#fff" d="M11 14H39V29H11z"/><path fill="#42a5f5" d="M42,35V21c0-3.314-2.686-5-6-5H22.414c-0.265,0-0.52-0.105-0.707-0.293l-2.121-2.121C19.211,13.211,18.702,13,18.172,13H12c-3.314,0-6,1.686-6,5v16c0,3.314,2.686,6,6,6h7L42,35z"/><path fill="#f5f5f5" d="M36.655,26.008C35.674,23.113,32.615,21,28.988,21c-3.341,0-6.201,1.793-7.398,4.339C21.099,25.123,20.559,25,19.988,25c-2.031,0-3.691,1.519-3.948,3.481c-2.376,0.967-4.052,3.296-4.052,6.019c0,3.59,2.91,6.5,6.5,6.5s14.369,0,18,0c4.142,0,7.5-3.358,7.5-7.5C43.988,29.414,40.719,26.098,36.655,26.008z"/><path fill="#039be5" d="M25.045 28.001L23.351 30.751 29.579 30.751 31.091 28.001zM34.626 28.001c-3.913 0-3.94 4.583-3.94 4.583l-.135 1.862c-.405 3.696-2.915 3.638-2.915 3.638h-.864L26.313 39h3.671c0 0 3.077 0 3.455-3.666 0 0 .216-2.664.243-2.75s.054-2.75 2.591-2.75c0 0 .834.013 1.245.186L38 29.376C36.138 27.915 34.626 28.001 34.626 28.001zM22.221 32.584l-3.102 5.038C18.783 38.233 19.198 39 19.865 39h5.18l1.009-1.833H23.06l1.122-1.833h2.878l1.511-2.75H22.221z"/></svg>',
            'bookmark' => '<svg viewBox="0 0 48 48" style="width:inherit; height:inherit;" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="2.784"></g><g id="SVGRepo_iconCarrier"><title>70 Basic icons by Xicons.co</title><path d="M36.8,47.6L24,38,11.2,47.6A2,2,0,0,1,8,46V3a2,2,0,0,1,2-2H38a2,2,0,0,1,2,2V46A2,2,0,0,1,36.8,47.6Z" fill="#93d8b6"></path><path d="M29.05,22H18.95a2,2,0,0,1,0-4H29.05A2,2,0,0,1,29.05,22Z" fill="#4dbe86"></path><path d="M26,14.95V25.05a2,2,0,0,1-4,0V14.95A2,2,0,0,1,26,14.95Z" fill="#4dbe86"></path></g></svg>',
            'document' => '<svg viewBox="0 0 511.999 511.999" style="width:inherit; height:inherit;" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <g> <polygon style="fill:#E6E6E6;" points="302.852,42.327 0,42.327 131.675,469.672 434.527,469.672 "/> <polygon style="fill:#E6E6E6;" points="244.63,161.707 148.879,161.707 143.349,143.752 244.63,143.752 "/> <polygon style="fill:#E6E6E6;" points="156.336,185.911 258.995,185.911 258.995,203.867 161.867,203.867 "/> <polygon style="fill:#E6E6E6;" points="284.492,101.58 284.492,119.535 135.879,119.535 130.349,101.58 "/> </g> <path style="fill:#DD852C;" d="M427.185,221.884c-36.043,36.043-74.121,62.665-105.388,75.749l-23.486-23.486l-34.906-34.906 c13.084-31.267,39.706-69.345,75.749-105.388c53.771-53.759,112.091-86.594,145.513-84.727c8.128,0.443,14.795,2.945,19.548,7.697 C528.514,81.135,494.029,155.041,427.185,221.884z"/> <path style="fill:#BF6D22;" d="M484.667,49.126c0,0-176.373,115.682-186.356,225.02l-34.906-34.906 c13.084-31.267,39.706-69.345,75.749-105.388C392.925,80.094,451.245,47.259,484.667,49.126z"/> <g> <path style="fill:#808080;" d="M275.572,161.852c-2.571,0-4.848-1.848-5.302-4.469c-0.509-2.932,1.457-5.719,4.388-6.227 c27.12-4.696,51.219-22.419,64.466-47.408l8.365-15.783c11.642-21.965,36.754-34.268,59.71-29.255 c21.081,4.605,40.088,14.901,54.962,29.776l37.171,37.169c2.104,2.103,2.104,5.515,0,7.618c-2.102,2.103-5.515,2.103-7.617,0 l-37.171-37.169C441.13,82.692,423.963,73.4,404.9,69.237c-18.326-4.003-38.469,5.995-47.894,23.775l-8.365,15.783 c-14.793,27.911-41.765,47.715-72.146,52.978C276.186,161.826,275.877,161.851,275.572,161.852z"/> <path style="fill:#808080;" d="M263.405,239.241l-9.278,24.016c-4.658,12.057-13.596,21.974-25.106,27.858l-20.217,10.333 l-4.232,46.554l18.624-18.625c-2.31-5.634-1.185-12.357,3.384-16.926c2.939-2.939,6.846-4.558,11.003-4.558 s8.064,1.618,11.003,4.558c6.068,6.068,6.068,15.94,0,22.008l0,0c-3.033,3.033-7.018,4.55-11.003,4.55 c-2.016,0-4.029-0.391-5.922-1.167l-18.624,18.625l46.554-4.233l10.333-20.217c5.882-11.51,15.8-20.448,27.858-25.106l24.016-9.278 L263.405,239.241z"/> </g> <g> <polygon style="fill:#247396;" points="275.167,119.535 70.472,119.535 64.942,101.58 269.637,101.58 "/> <polygon style="fill:#247396;" points="235.497,161.707 83.472,161.707 77.942,143.752 229.967,143.752 "/> <polygon style="fill:#247396;" points="248.484,203.867 96.459,203.867 90.93,185.911 242.955,185.911 "/> <polygon style="fill:#247396;" points="174.865,246.039 109.46,246.039 103.917,228.083 169.324,228.083 "/> <path style="fill:#247396;" d="M189.514,360.891c-2.617,1.247-5.074,2.659-7.442,4.163c-2.371,1.501-4.6,3.151-6.769,4.862 c-0.455,0.359-0.887,0.743-1.332,1.112c-0.461-0.351-0.909-0.718-1.378-1.059c-2.235-1.632-4.539-3.184-6.966-4.6 c-2.43-1.411-4.944-2.729-7.607-3.876c-2.681-1.129-5.441-2.17-8.554-2.813c1.003,3.018,2.361,5.636,3.796,8.165 c1.452,2.511,3.055,4.853,4.743,7.101c1.69,2.243,3.503,4.35,5.384,6.378c1.878,2.033,3.862,3.947,5.916,5.781l5.042,4.503 l4.892-4.697c1.984-1.903,3.887-3.892,5.685-5.99c1.794-2.101,3.53-4.263,5.123-6.574c1.596-2.307,3.103-4.707,4.451-7.273 c1.33-2.584,2.58-5.253,3.455-8.309C194.863,358.521,192.147,359.663,189.514,360.891z"/> </g> </g></svg>'
        ];

        $this->navigations = [
            [
                "title" => "Dashboard",
                "slug" => "/dashboard",
                "icon" => $this->icons['dashboard'],
                "roles" => ["admin", "user"],
                "child" => []
            ],
            [
                "title" => "Posts",
                "slug" => "/dashboard/papers",
                "icon" => $this->icons['document'],
                "roles" => ["user"],
                "child" => [
                    [
                        "title" => "Papers",
                        "slug" => "/dashboard/papers",
                        "roles" => ["admin", "user"],
                    ],
                    [
                        "title" => "Video",
                        "slug" => "/dashboard/video",
                        "roles" => ["user"],
                    ],
                ]
            ],
            [
                "title" => "Bookmarks",
                "slug" => "/dashboard/bookmarks",
                "icon" => $this->icons['bookmark'],
                "roles" => ["user"],
                "child" => []
            ],
            [
                "title" => "Navigation",
                "slug" => "/dashboard/navigation",
                "icon" => $this->icons['navigation'],
                "roles" => ["admin"],
                "child" => []
            ],
            [
                "title" => "Pages",
                "slug" => "/dashboard/pages",
                "icon" => $this->icons['pages'],
                "roles" => ["admin"],
                "child" => []
            ],
            [
                "title" => "Slider",
                "slug" => "/dashboard/slider",
                "icon" => $this->icons['slider'],
                "roles" => ["admin"],
                "child" => []
            ],
            [
                "title" => "File Manager",
                "slug" => "/dashboard/file-manager",
                "icon" => $this->icons['fileManager'],
                "roles" => ["admin"],
                "child" => []
            ],
        ];
    }

    /**
     * @return array 
     */
    function get_navigations($role)
    {
        $_navigations = array();
        foreach ($this->navigations as $navigation) {
            if (in_array($role, $navigation["roles"])) {
                array_push($_navigations, $navigation);
            }
        }
        return $_navigations;
    }
}

