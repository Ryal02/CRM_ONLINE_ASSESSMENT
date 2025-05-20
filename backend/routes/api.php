<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Customer\CustomerController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;

Route::middleware([
    EnsureFrontendRequestsAreStateful::class,
    'web'
])->post('/login', [AuthController::class, 'login']);

// Route::post('/login', [AuthController::class, 'login']);
// Route::middleware(['stateful', 'auth:sanctum'])->get('/get-user-info', [UserController::class, 'user']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/get-user-info', [UserController::class, 'user']);
    Route::resource('customers', CustomerController::class);
});