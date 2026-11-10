<?php

use App\Http\Controllers\Web\Backend\AdminDashboardController;
use App\Http\Controllers\Web\Backend\AdminUsersController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->group(function () {
    Route::prefix('dashboard')->controller(AdminDashboardController::class)->group(function () {
        Route::get('/', 'dashboard')->name('admin.dashboard.index');
    });
    Route::prefix('users')->controller(AdminUsersController::class)->group(function () {
        Route::get('/', 'index')->name('admin.users.index');
        Route::get('/admin-users', 'index')->name('admin.users.admin');
        Route::get('/create', 'create')->name('admin.users.create');
        Route::post('/store', 'store')->name('admin.users.store');
        Route::get('/edit/{user}', 'edit')->name('admin.users.edit');
        Route::put('/update/{user}', 'update')->name('admin.users.update');
        Route::get('/delete/{id}', 'delete')->name('admin.users.delete');
    });
});
