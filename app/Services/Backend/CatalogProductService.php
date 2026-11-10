<?php

namespace App\Services\Backend;

use App\Models\CatalogProduct;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use RuntimeException;
use Throwable;

class CatalogProductService
{
    /**
     * @param  array{name: string, sku: string, description?: string|null, base_price: int|float|string, thumbnail?: UploadedFile|null, is_active: bool|int|string}  $data
     */
    public function create(array $data): CatalogProduct
    {
        $thumbnail = $data['thumbnail'] ?? null;
        unset($data['thumbnail']);

        $thumbnailPath = null;

        try {
            return DB::transaction(function () use ($data, $thumbnail, &$thumbnailPath): CatalogProduct {
                if ($thumbnail instanceof UploadedFile) {
                    $storedPath = Storage::disk('public')->putFile('catalog-products', $thumbnail);

                    if ($storedPath === false) {
                        throw new RuntimeException('Unable to store the catalog product thumbnail.');
                    }

                    $thumbnailPath = "/storage/{$storedPath}";
                }

                return CatalogProduct::create([
                    ...$data,
                    'created_by_id' => auth()->id(),
                    'thumbnail_url' => $thumbnailPath,
                ]);
            });
        } catch (Throwable $exception) {
            if ($thumbnailPath !== null) {
                Storage::disk('public')->delete(substr($thumbnailPath, strlen('/storage/')));
            }

            throw $exception;
        }
    }

    /**
     * @param  array{name: string, sku: string, description?: string|null, base_price: int|float|string, thumbnail?: UploadedFile|null, remove_thumbnail: bool, is_active: bool|int|string}  $data
     */
    public function update(CatalogProduct $catalogProduct, array $data): CatalogProduct
    {
        $thumbnail = $data['thumbnail'] ?? null;
        $removeThumbnail = $data['remove_thumbnail'];
        unset($data['thumbnail'], $data['remove_thumbnail']);

        $oldThumbnail = $catalogProduct->thumbnail_url;
        $newThumbnail = null;

        try {
            $updatedProduct = DB::transaction(function () use (
                $catalogProduct,
                $data,
                $thumbnail,
                $removeThumbnail,
                &$newThumbnail,
            ): CatalogProduct {
                if ($thumbnail instanceof UploadedFile) {
                    $storedPath = Storage::disk('public')->putFile('catalog-products', $thumbnail);

                    if ($storedPath === false) {
                        throw new RuntimeException('Unable to store the catalog product thumbnail.');
                    }

                    $newThumbnail = "/storage/{$storedPath}";
                    $data['thumbnail_url'] = $newThumbnail;
                } elseif ($removeThumbnail) {
                    $data['thumbnail_url'] = null;
                }

                $catalogProduct->update($data);

                return $catalogProduct->refresh();
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

        return $updatedProduct;
    }

    public function delete(CatalogProduct $catalogProduct): void
    {
        $thumbnail = $catalogProduct->thumbnail_url;
        $catalogProduct->delete();

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
            throw new RuntimeException('Unable to delete the catalog product thumbnail.');
        }
    }
}
