<?php

namespace App\Http\Controllers\Web\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\StoreCatalogProductRequest;
use App\Http\Requests\Backend\UpdateCatalogProductRequest;
use App\Models\CatalogProduct;
use App\Services\Backend\CatalogProductService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminCatalogProductsController extends Controller
{
    public function index(Request $request): Response
    {
        $search = trim((string) $request->query('search', ''));

        $products = CatalogProduct::query()
            ->when($search !== '', function ($query) use ($search) {
                $query->where(function ($query) use ($search) {
                    $query->where('name', 'like', "%{$search}%")
                        ->orWhere('sku', 'like', "%{$search}%");
                });
            })
            ->orderByDesc('id')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('backend/catalog-products/index', [
            'products' => $products,
            'filters' => ['search' => $search],
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('backend/catalog-products/create');
    }

    public function store(
        StoreCatalogProductRequest $request,
        CatalogProductService $catalogProductService,
    ): RedirectResponse {
        $catalogProductService->create($request->validated());

        return to_route('admin.catalog-products.index')
            ->with('success', 'Catalog product created successfully.');
    }

    public function show(CatalogProduct $catalogProduct): Response
    {
        $catalogProduct->load('createdBy:id,name,email');

        return Inertia::render('backend/catalog-products/show', [
            'product' => $catalogProduct,
        ]);
    }

    public function edit(CatalogProduct $catalogProduct): Response
    {
        return Inertia::render('backend/catalog-products/edit', [
            'product' => $catalogProduct,
        ]);
    }

    public function update(
        UpdateCatalogProductRequest $request,
        CatalogProduct $catalogProduct,
        CatalogProductService $catalogProductService,
    ): RedirectResponse {
        $catalogProductService->update($catalogProduct, $request->validated());

        return to_route('admin.catalog-products.index')
            ->with('success', 'Catalog product updated successfully.');
    }

    public function destroy(
        CatalogProduct $catalogProduct,
        CatalogProductService $catalogProductService,
    ): RedirectResponse {
        $catalogProductService->delete($catalogProduct);

        return to_route('admin.catalog-products.index')
            ->with('success', 'Catalog product deleted successfully.');
    }
}
