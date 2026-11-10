<?php

use App\Http\Controllers\Web\Backend\AdminDashboardController;
use App\Http\Controllers\Web\Backend\AdminCatalogProductsController;
use App\Http\Controllers\Web\Backend\AdminShopsController;
use App\Http\Controllers\Web\Backend\AdminShopProductsController;
use App\Http\Controllers\Web\Backend\AdminUsersController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->group(function () {
    Route::prefix('dashboard')->controller(AdminDashboardController::class)->group(function () {
        Route::get('/', 'dashboard')->name('admin.dashboard.index');
    });
    Route::prefix('shops')->controller(AdminShopsController::class)->group(function () {
        Route::get('/', 'index')->name('admin.shops.index');
        Route::get('/create', 'create')->name('admin.shops.create');
        Route::post('/', 'store')->name('admin.shops.store');
        Route::get('/{shop}/edit', 'edit')->name('admin.shops.edit');
        Route::get('/{shop}', 'show')->name('admin.shops.show');
        Route::put('/{shop}', 'update')->name('admin.shops.update');
        Route::delete('/{shop}', 'destroy')->name('admin.shops.destroy');
    });
    Route::prefix('catalog-products')->controller(AdminCatalogProductsController::class)->group(function () {
        Route::get('/', 'index')->name('admin.catalog-products.index');
        Route::get('/create', 'create')->name('admin.catalog-products.create');
        Route::post('/', 'store')->name('admin.catalog-products.store');
        Route::get('/{catalogProduct}/edit', 'edit')->name('admin.catalog-products.edit');
        Route::get('/{catalogProduct}', 'show')->name('admin.catalog-products.show');
        Route::put('/{catalogProduct}', 'update')->name('admin.catalog-products.update');
        Route::delete('/{catalogProduct}', 'destroy')->name('admin.catalog-products.destroy');
    });
    Route::prefix('shop-products')->controller(AdminShopProductsController::class)->group(function () {
        Route::get('/', 'index')->name('admin.shop-products.index');
        Route::get('/create', 'create')->name('admin.shop-products.create');
        Route::post('/', 'store')->name('admin.shop-products.store');
        Route::get('/{shopProduct}/edit', 'edit')->name('admin.shop-products.edit');
        Route::get('/{shopProduct}', 'show')->name('admin.shop-products.show');
        Route::put('/{shopProduct}', 'update')->name('admin.shop-products.update');
        Route::delete('/{shopProduct}', 'destroy')->name('admin.shop-products.destroy');
    });
    Route::prefix('users')->controller(AdminUsersController::class)->group(function () {
        Route::get('/', 'index')->name('admin.users.index');
        Route::get('/admin-users', 'index')->name('admin.users.admin');
        Route::get('/create', 'create')->name('admin.users.create');
        Route::post('/store', 'store')->name('admin.users.store');
        Route::get('/edit/{user}', 'edit')->name('admin.users.edit');
        Route::put('/update/{user}', 'update')->name('admin.users.update');
        Route::delete('/{user}', 'destroy')->name('admin.users.destroy');
    });
});
