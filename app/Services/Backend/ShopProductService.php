<?php

namespace App\Services\Backend;

use App\Models\ShopProduct;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use RuntimeException;
use Throwable;

class ShopProductService
{
    /**
     * @param  array{shop_id: int|string, catalog_product_id: int|string, custom_title?: string|null, custom_description?: string|null, price: int|float|string, custom_thumbnail?: UploadedFile|null, stock_quantity: int|string, is_visible: bool|int|string}  $data
     */
    public function create(array $data): ShopProduct
    {
        $thumbnail = $data['custom_thumbnail'] ?? null;
        unset($data['custom_thumbnail']);

        $thumbnailPath = null;

        try {
            return DB::transaction(function () use ($data, $thumbnail, &$thumbnailPath): ShopProduct {
                if ($thumbnail instanceof UploadedFile) {
                    $storedPath = Storage::disk('public')->putFile('shop-products', $thumbnail);

                    if ($storedPath === false) {
                        throw new RuntimeException('Unable to store the shop product thumbnail.');
                    }

                    $thumbnailPath = "/storage/{$storedPath}";
                    $data['custom_thumbnail_url'] = $thumbnailPath;
                }

                return ShopProduct::create($data);
            });
        } catch (Throwable $exception) {
            if ($thumbnailPath !== null) {
                Storage::disk('public')->delete(substr($thumbnailPath, strlen('/storage/')));
            }

            throw $exception;
        }
    }

    /**
     * @param  array{shop_id: int|string, catalog_product_id: int|string, custom_title?: string|null, custom_description?: string|null, price: int|float|string, custom_thumbnail?: UploadedFile|null, remove_custom_thumbnail: bool, stock_quantity: int|string, is_visible: bool|int|string}  $data
     */
    public function update(ShopProduct $shopProduct, array $data): ShopProduct
    {
        $thumbnail = $data['custom_thumbnail'] ?? null;
        $removeThumbnail = $data['remove_custom_thumbnail'];
        unset($data['custom_thumbnail'], $data['remove_custom_thumbnail']);

        $oldThumbnail = $shopProduct->custom_thumbnail_url;
        $newThumbnail = null;

        try {
            $updatedShopProduct = DB::transaction(function () use (
                $shopProduct,
                $data,
                $thumbnail,
                $removeThumbnail,
                &$newThumbnail,
            ): ShopProduct {
                if ($thumbnail instanceof UploadedFile) {
                    $storedPath = Storage::disk('public')->putFile('shop-products', $thumbnail);

                    if ($storedPath === false) {
                        throw new RuntimeException('Unable to store the shop product thumbnail.');
                    }

                    $newThumbnail = "/storage/{$storedPath}";
                    $data['custom_thumbnail_url'] = $newThumbnail;
                } elseif ($removeThumbnail) {
                    $data['custom_thumbnail_url'] = null;
                }

                $shopProduct->update($data);

                return $shopProduct->refresh();
            });
        } catch (Throwable $exception) {
            if ($newThumbnail !== null) {
                Storage::disk('public')->delete(substr($newThumbnail, strlen('/storage/')));
            }

            throw $exception;
        }

        if ($oldThumbnail !== null && ($newThumbnail !== null || $removeThumbnail)) {
            $this->deleteStoredThumbnail($oldThumbnail);
        }

        return $updatedShopProduct;
    }

    public function delete(ShopProduct $shopProduct): void
    {
        $thumbnail = $shopProduct->custom_thumbnail_url;
        $shopProduct->delete();

        if ($thumbnail !== null) {
            $this->deleteStoredThumbnail($thumbnail);
        }
    }

    private function deleteStoredThumbnail(string $thumbnail): void
    {
        if (! str_starts_with($thumbnail, '/storage/')) {
            return;
        }

        if (! Storage::disk('public')->delete(substr($thumbnail, strlen('/storage/')))) {
            throw new RuntimeException('Unable to delete the shop product thumbnail.');
        }
    }
}
