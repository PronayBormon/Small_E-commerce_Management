<?php

namespace App\Services\Backend;

use App\Models\Shop;
use Illuminate\Support\Str;

class ShopService
{
    /**
     * @param  array{owner_id: int|string, name: string, slug: string, status: string}  $data
     */
    public function create(array $data): Shop
    {
        $data['slug'] = $this->uniqueSlug($data['name']);

        return Shop::create($data);
    }

    /**
     * @param  array{owner_id: int|string, name: string, slug: string, status: string}  $data
     */
    public function update(Shop $shop, array $data): Shop
    {
        $data['slug'] = $this->uniqueSlug($data['name'], $shop);
        $shop->update($data);

        return $shop->refresh();
    }

    public function delete(Shop $shop): void
    {
        $shop->delete();
    }

    private function uniqueSlug(string $name, ?Shop $shop = null): string
    {
        $baseSlug = Str::slug($name);
        if ($baseSlug === '') {
            $baseSlug = 'shop';
        }

        $candidate = $baseSlug;
        $suffix = 2;

        while (
            Shop::query()
                ->where('slug', $candidate)
                ->when($shop, fn ($query) => $query->where('id', '!=', $shop->id))
                ->exists()
        ) {
            $candidate = "{$baseSlug}-{$suffix}";
            $suffix++;
        }

        return $candidate;
    }
}
