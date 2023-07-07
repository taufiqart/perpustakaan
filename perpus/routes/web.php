<?php

use App\Http\Controllers\admin\AdminDashboardController;
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
    Route::resource('/navigation', AdminNavigationController::class);
    Route::put('/navigation/{navigation:id}/order', [AdminNavigationController::class, 'updateOrder'])->name('navigation.updateOrder');
    Route::resource('/pages', AdminPagesController::class);
    Route::put('/file-manager/rename', [AssetsController::class, 'update'])->name('file.rename');
    Route::post('/file-manager', [AssetsController::class, 'store'])->name('file.store');
    Route::delete('/file-manager/delete', [AssetsController::class, 'destroy'])->name('file.delete');
    Route::get('/file-manager', [AssetsController::class, 'index'])->name('file.index');
});


require __DIR__ . '/auth.php';

Route::get('{any}', [ArticleController::class, 'index'])->where('any', '.*');
