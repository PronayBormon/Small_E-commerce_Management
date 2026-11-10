import { Link, useForm } from '@inertiajs/react';
import { ChangeEvent, FormEventHandler, useEffect, useState } from 'react';

export interface ShopOption {
    id: number;
    name: string;
}

export interface CatalogProductOption {
    id: number;
    name: string;
    sku: string;
    base_price: string | number;
    thumbnail_url: string | null;
}

export interface ShopProductData {
    id: number;
    shop_id: number;
    catalog_product_id: number;
    custom_title: string | null;
    custom_description: string | null;
    price: string | number;
    custom_thumbnail_url: string | null;
    stock_quantity: number;
    is_visible: boolean;
}

interface Props {
    shops: ShopOption[];
    catalogProducts: CatalogProductOption[];
    shopProduct?: ShopProductData;
}

export default function ShopProductForm({
    shops,
    catalogProducts,
    shopProduct,
}: Props) {
    const form = useForm({
        shop_id: shopProduct?.shop_id.toString() ?? '',
        catalog_product_id: shopProduct?.catalog_product_id.toString() ?? '',
        custom_title: shopProduct?.custom_title ?? '',
        custom_description: shopProduct?.custom_description ?? '',
        price: shopProduct?.price.toString() ?? '',
        custom_thumbnail: null as File | null,
        remove_custom_thumbnail: false,
        stock_quantity: shopProduct?.stock_quantity.toString() ?? '0',
        is_visible: shopProduct?.is_visible ?? true,
    });
    const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(
        null,
    );

    useEffect(() => {
        return () => {
            if (thumbnailPreview) {
                URL.revokeObjectURL(thumbnailPreview);
            }
        };
    }, [thumbnailPreview]);

    const handleThumbnailChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] ?? null;

        if (thumbnailPreview) {
            URL.revokeObjectURL(thumbnailPreview);
        }

        setThumbnailPreview(file ? URL.createObjectURL(file) : null);
        form.setData('custom_thumbnail', file);
        form.setData('remove_custom_thumbnail', false);
    };

    const handleThumbnailRemove = () => {
        if (thumbnailPreview) {
            URL.revokeObjectURL(thumbnailPreview);
        }

        setThumbnailPreview(null);
        form.setData('custom_thumbnail', null);
        form.setData('remove_custom_thumbnail', true);
    };

    const handleSubmit: FormEventHandler = (event) => {
        event.preventDefault();

        if (shopProduct) {
            form.transform((data) => ({ ...data, _method: 'put' }));
            form.post(`/admin/shop-products/${shopProduct.id}`, {
                forceFormData: true,
                preserveScroll: true,
            });
        } else {
            form.post('/admin/shop-products', {
                forceFormData: true,
                preserveScroll: true,
            });
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto w-full rounded-2xl bg-white p-4 sm:p-6"
        >
            <div className="mb-6">
                <h1 className="text-xl font-bold text-light-primary-text">
                    {shopProduct ? 'Edit Shop Product' : 'Add Product to Shop'}
                </h1>
                <p className="mt-1 text-sm text-light-secondary-text">
                    Set the catalog product, shop-specific price, stock, and
                    visibility.
                </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-light-primary-text">
                    Shop
                    <select
                        value={form.data.shop_id}
                        onChange={(event) =>
                            form.setData('shop_id', event.target.value)
                        }
                        required
                        className="mt-2 h-11 w-full rounded-lg border border-gray-300 bg-white px-3 font-normal"
                    >
                        <option value="">Select a shop</option>
                        {shops.map((shop) => (
                            <option key={shop.id} value={shop.id}>
                                {shop.name}
                            </option>
                        ))}
                    </select>
                    {form.errors.shop_id && (
                        <span className="mt-1 block text-xs text-red-600">
                            {form.errors.shop_id}
                        </span>
                    )}
                </label>

                <label className="block text-sm font-medium text-light-primary-text">
                    Catalog product
                    <select
                        value={form.data.catalog_product_id}
                        onChange={(event) => {
                            const id = event.target.value;
                            form.setData('catalog_product_id', id);

                            const selected = catalogProducts.find(
                                (product) => product.id.toString() === id,
                            );

                            if (selected && !shopProduct) {
                                form.setData('price', selected.base_price.toString());
                            }
                        }}
                        required
                        className="mt-2 h-11 w-full rounded-lg border border-gray-300 bg-white px-3 font-normal"
                    >
                        <option value="">Select a catalog product</option>
                        {catalogProducts.map((product) => (
                            <option key={product.id} value={product.id}>
                                {product.name} ({product.sku})
                            </option>
                        ))}
                    </select>
                    {form.errors.catalog_product_id && (
                        <span className="mt-1 block text-xs text-red-600">
                            {form.errors.catalog_product_id}
                        </span>
                    )}
                </label>

                <label className="block text-sm font-medium text-light-primary-text">
                    Custom title (optional)
                    <input
                        value={form.data.custom_title}
                        onChange={(event) =>
                            form.setData('custom_title', event.target.value)
                        }
                        maxLength={255}
                        className="mt-2 h-11 w-full rounded-lg border border-gray-300 px-3 font-normal"
                    />
                    {form.errors.custom_title && (
                        <span className="mt-1 block text-xs text-red-600">
                            {form.errors.custom_title}
                        </span>
                    )}
                </label>

                <label className="block text-sm font-medium text-light-primary-text">
                    Price
                    <input
                        type="number"
                        value={form.data.price}
                        onChange={(event) =>
                            form.setData('price', event.target.value)
                        }
                        required
                        min="0"
                        step="0.01"
                        className="mt-2 h-11 w-full rounded-lg border border-gray-300 px-3 font-normal"
                    />
                    {form.errors.price && (
                        <span className="mt-1 block text-xs text-red-600">
                            {form.errors.price}
                        </span>
                    )}
                </label>

                <label className="block text-sm font-medium text-light-primary-text">
                    Stock quantity
                    <input
                        type="number"
                        value={form.data.stock_quantity}
                        onChange={(event) =>
                            form.setData('stock_quantity', event.target.value)
                        }
                        required
                        min="0"
                        step="1"
                        className="mt-2 h-11 w-full rounded-lg border border-gray-300 px-3 font-normal"
                    />
                    {form.errors.stock_quantity && (
                        <span className="mt-1 block text-xs text-red-600">
                            {form.errors.stock_quantity}
                        </span>
                    )}
                </label>

                <div className="block text-sm font-medium text-light-primary-text">
                    <label htmlFor="custom_thumbnail">
                        Custom thumbnail (optional)
                    </label>
                    <input
                        id="custom_thumbnail"
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/gif"
                        onChange={handleThumbnailChange}
                        className="mt-2 block w-full rounded-lg border border-gray-300 p-2 text-sm font-normal"
                    />
                    <p className="mt-1 text-xs font-normal text-light-secondary-text">
                        JPEG, PNG, WebP, or GIF; maximum 5 MB.
                    </p>
                    {form.errors.custom_thumbnail && (
                        <span className="mt-1 block text-xs text-red-600">
                            {form.errors.custom_thumbnail}
                        </span>
                    )}
                    {(thumbnailPreview ||
                        (shopProduct?.custom_thumbnail_url &&
                            !form.data.remove_custom_thumbnail)) && (
                        <div className="mt-3 flex items-center gap-3">
                            <img
                                src={
                                    thumbnailPreview ??
                                    shopProduct?.custom_thumbnail_url ??
                                    ''
                                }
                                alt="Custom thumbnail preview"
                                className="size-20 rounded-lg border border-gray-200 object-cover"
                            />
                            <button
                                type="button"
                                onClick={handleThumbnailRemove}
                                className="text-sm font-medium text-red-600 hover:underline"
                            >
                                Remove thumbnail
                            </button>
                        </div>
                    )}
                </div>

                <label className="flex items-center gap-3 text-sm font-medium text-light-primary-text">
                    <input
                        type="checkbox"
                        checked={form.data.is_visible}
                        onChange={(event) =>
                            form.setData('is_visible', event.target.checked)
                        }
                        className="size-4 rounded border-gray-300 text-primary"
                    />
                    Visible in shop
                </label>

                <label className="block text-sm font-medium text-light-primary-text sm:col-span-2">
                    Custom description (optional)
                    <textarea
                        value={form.data.custom_description}
                        onChange={(event) =>
                            form.setData(
                                'custom_description',
                                event.target.value,
                            )
                        }
                        rows={5}
                        className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 font-normal"
                    />
                    {form.errors.custom_description && (
                        <span className="mt-1 block text-xs text-red-600">
                            {form.errors.custom_description}
                        </span>
                    )}
                </label>
            </div>

            <div className="mt-8 flex justify-end gap-3">
                <Link
                    href="/admin/shop-products"
                    className="inline-flex h-10 items-center rounded-full border border-gray-300 px-5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                    Cancel
                </Link>
                <button
                    type="submit"
                    disabled={
                        form.processing ||
                        shops.length === 0 ||
                        catalogProducts.length === 0
                    }
                    className="inline-flex h-10 items-center rounded-full bg-primary px-6 text-sm font-bold text-white hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {form.processing
                        ? 'Saving...'
                        : shopProduct
                          ? 'Save Changes'
                          : 'Add to Shop'}
                </button>
            </div>
            {shops.length === 0 && (
                <p className="mt-3 text-right text-sm text-red-600">
                    Create a shop before adding products.
                </p>
            )}
            {catalogProducts.length === 0 && (
                <p className="mt-3 text-right text-sm text-red-600">
                    Create an active catalog product before adding it to a shop.
                </p>
            )}
        </form>
    );
}
