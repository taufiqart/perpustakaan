<?php

use App\Http\Controllers\admin\AdminDashboardController;
use App\Http\Controllers\admin\AdminNavigationController;
use App\Http\Controllers\admin\AdminPagesController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\AssetController;
use App\Http\Controllers\AssetsController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function(){
//     return Inertia::render('gatau');
// });
Route::middleware(['auth'])->prefix('dashboard')->group(function () {
    Route::get('/', [AdminDashboardController::class, 'index']);
    Route::resource('/navigation', AdminNavigationController::class);
    Route::put('/navigation/{navigation:id}/order', [AdminNavigationController::class, 'updateOrder'])->name('navigation.updateOrder');
    Route::resource('/pages', AdminPagesController::class);
    Route::put('/file-manager/rename', [AssetsController::class, 'update'])->name('file.rename');
    Route::post('/file-manager', [AssetsController::class, 'store'])->name('file.store');
    Route::delete('/file-manager/delete', [AssetsController::class, 'destroy'])->name('file.delete');
    Route::get('/file-manager', [AssetsController::class, 'index'])->name('file.index');
});


// Route::get('/', [CategoryController::class, 'index']);
// Route::get('/{menu?:slug}/{submenu?:slug}', [CategoryController::class, 'index']);
// Route::get('/', function () {
//     return Inertia::render('gatau');
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';

Route::get('{any}', [ArticleController::class, 'index'])->where('any', '.*');
