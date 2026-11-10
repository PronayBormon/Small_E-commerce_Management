<?php

namespace App\Http\Controllers\Web\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\StoreShopProductRequest;
use App\Http\Requests\Backend\UpdateShopProductRequest;
use App\Models\CatalogProduct;
use App\Models\Shop;
use App\Models\ShopProduct;
use App\Services\Backend\ShopProductService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminShopProductsController extends Controller
{
    public function index(Request $request): Response
    {
        $search = trim((string) $request->query('search', ''));

        $products = ShopProduct::query()
            ->with(['shop:id,name', 'catalogProduct:id,name,sku'])
            ->when($search !== '', function ($query) use ($search) {
                $query->where(function ($query) use ($search) {
                    $query->where('custom_title', 'like', "%{$search}%")
                        ->orWhereHas('shop', fn ($shop) => $shop
                            ->where('name', 'like', "%{$search}%"))
                        ->orWhereHas('catalogProduct', fn ($catalogProduct) => $catalogProduct
                            ->where('name', 'like', "%{$search}%")
                            ->orWhere('sku', 'like', "%{$search}%"));
                });
            })
            ->orderByDesc('id')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('backend/shop-products/index', [
            'products' => $products,
            'filters' => ['search' => $search],
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('backend/shop-products/create', [
            'shops' => Shop::query()->orderBy('name')->get(['id', 'name']),
            'catalogProducts' => CatalogProduct::query()
                ->where('is_active', true)
                ->orderBy('name')
                ->get(['id', 'name', 'sku', 'base_price', 'thumbnail_url']),
        ]);
    }

    public function store(
        StoreShopProductRequest $request,
        ShopProductService $shopProductService,
    ): RedirectResponse {
        $shopProductService->create($request->validated());

        return to_route('admin.shop-products.index')
            ->with('success', 'Shop product created successfully.');
    }

    public function show(ShopProduct $shopProduct): Response
    {
        $shopProduct->load([
            'shop:id,name',
            'catalogProduct:id,name,sku,description,base_price,thumbnail_url',
        ]);

        return Inertia::render('backend/shop-products/show', [
            'shopProduct' => $shopProduct,
        ]);
    }

    public function edit(ShopProduct $shopProduct): Response
    {
        return Inertia::render('backend/shop-products/edit', [
            'shopProduct' => $shopProduct,
            'shops' => Shop::query()->orderBy('name')->get(['id', 'name']),
            'catalogProducts' => CatalogProduct::query()
                ->orderBy('name')
                ->get(['id', 'name', 'sku', 'base_price', 'thumbnail_url']),
        ]);
    }

    public function update(
        UpdateShopProductRequest $request,
        ShopProduct $shopProduct,
        ShopProductService $shopProductService,
    ): RedirectResponse {
        $shopProductService->update($shopProduct, $request->validated());

        return to_route('admin.shop-products.index')
            ->with('success', 'Shop product updated successfully.');
    }

    public function destroy(
        ShopProduct $shopProduct,
        ShopProductService $shopProductService,
    ): RedirectResponse {
        $shopProductService->delete($shopProduct);

        return to_route('admin.shop-products.index')
            ->with('success', 'Shop product deleted successfully.');
    }
}
