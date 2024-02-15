<?php

use App\Http\Controllers\admin\AdminDashboardController;
use App\Http\Controllers\admin\AdminSliderController;
use App\Http\Controllers\admin\AdminNavigationController;
use App\Http\Controllers\admin\AdminPagesController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\AssetsController;
use Illuminate\Support\Facades\Route;

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

Route::middleware(['auth'])->prefix('dashboard')->group(function () {

    Route::get('/', [AdminDashboardController::class, 'index']);

    Route::middleware(["roles:admin"])->group(function () {

        Route::resource('/navigation', AdminNavigationController::class);
        Route::put('/navigation/{navigation:id}/order', [AdminNavigationController::class, 'updateOrder'])->name('navigation.updateOrder');
        Route::resource('/pages', AdminPagesController::class);

        Route::get('/slider', [AdminSliderController::class, 'index'])->name('slider.index');
        Route::post('/slider', [AdminSliderController::class, 'store'])->name('slider.store');
        Route::delete('/slider/{slider:id}/delete', [AdminSliderController::class, 'destroy'])->name('slider.delete');

        Route::put('/file-manager/rename', [AssetsController::class, 'update'])->name('file.rename');
        Route::post('/file-manager', [AssetsController::class, 'store'])->name('file.store');
        Route::delete('/file-manager/delete', [AssetsController::class, 'destroy'])->name('file.delete');
        Route::get('/file-manager', [AssetsController::class, 'index'])->name('file.index');

    });

    Route::middleware(["roles:user"])->group(function () {

        Route::get('/papers', [\App\Http\Controllers\Post\PaperController::class, 'index'])->name('paper.index');
        Route::get('/papers/create', [\App\Http\Controllers\Post\PaperController::class, 'create'])->name('paper.create');
        Route::post('/papers/create', [\App\Http\Controllers\Post\PaperController::class, 'store'])->name('paper.store');
        Route::get('/papers/edit/{paper:slug}', [\App\Http\Controllers\Post\PaperController::class, 'index'])->name('paper.update');
        Route::get('/bookmarks', [AssetsController::class, 'index'])->name('file.index');

    });

});


require __DIR__ . '/auth.php';

Route::prefix('situsiba')->group(function(){
    Route::get('/', [\App\Http\Controllers\Situsiba\Situsiba::class, 'index'])->name('situsiba.index');
    Route::get('papers/{paper:slug}', [\App\Http\Controllers\Situsiba\Situsiba::class, 'show'])->name('paper.show');
});
Route::get('{any}', [ArticleController::class, 'index'])->where('any', '.*');
