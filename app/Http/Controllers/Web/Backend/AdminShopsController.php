<?php

namespace App\Http\Controllers\Web\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\StoreShopRequest;
use App\Http\Requests\Backend\UpdateShopRequest;
use App\Models\Shop;
use App\Models\User;
use App\Services\Backend\ShopService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminShopsController extends Controller
{
    public function index(Request $request): Response
    {
        $search = trim((string) $request->query('search', ''));

        $shops = Shop::query()
            ->with('owner:id,name,email')
            ->when($search !== '', function ($query) use ($search) {
                $query->where(function ($query) use ($search) {
                    $query->where('name', 'like', "%{$search}%")
                        ->orWhere('slug', 'like', "%{$search}%")
                        ->orWhereHas('owner', fn ($owner) => $owner
                            ->where('name', 'like', "%{$search}%")
                            ->orWhere('email', 'like', "%{$search}%"));
                });
            })
            ->orderByDesc('id')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('backend/shops/index', [
            'shops' => $shops,
            'filters' => ['search' => $search],
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('backend/shops/create', [
            'owners' => User::query()->orderBy('name')->get(['id', 'name', 'email']),
        ]);
    }

    public function store(StoreShopRequest $request, ShopService $shopService): RedirectResponse
    {
        $shopService->create($request->validated());

        return to_route('admin.shops.index')->with('success', 'Shop created successfully.');
    }

    public function show(Shop $shop): Response
    {
        $shop->load('owner:id,name,email');

        return Inertia::render('backend/shops/show', [
            'shop' => $shop,
        ]);
    }

    public function edit(Shop $shop): Response
    {
        return Inertia::render('backend/shops/edit', [
            'shop' => $shop,
            'owners' => User::query()->orderBy('name')->get(['id', 'name', 'email']),
        ]);
    }

    public function update(
        UpdateShopRequest $request,
        Shop $shop,
        ShopService $shopService,
    ): RedirectResponse {
        $shopService->update($shop, $request->validated());

        return to_route('admin.shops.index')->with('success', 'Shop updated successfully.');
    }

    public function destroy(Shop $shop, ShopService $shopService): RedirectResponse
    {
        $shopService->delete($shop);

        return to_route('admin.shops.index')->with('success', 'Shop deleted successfully.');
    }
}
