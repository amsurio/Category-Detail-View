<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\AdminController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\ProductsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Public routes Categories
Route::get('/categories', [CategoriesController::class, 'index']);

// Public routes Products all
Route::get('/products', [ProductsController::class, 'index']);

// Public routes Login Register Users
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);

// Public routes Login Register Admin
Route::post('/admin/register', [AdminController::class, 'register']);
Route::post('/admin/login', [AdminController::class, 'login']);

// Protected routes
Route::group(['middleware' => 'auth:sanctum'], function(){

    // Create Order
    Route::post('/order', [OrdersController::class, 'create']);

    // All Order
    Route::get('/order', [OrdersController::class, 'index']);

    // Logout admin user
    Route::post('/logout', [AuthController::class, 'logout']);
});