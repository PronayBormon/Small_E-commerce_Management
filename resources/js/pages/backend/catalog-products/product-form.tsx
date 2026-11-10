import { Link, useForm } from '@inertiajs/react';
import { ChangeEvent, FormEventHandler, useEffect, useState } from 'react';

export interface CatalogProduct {
    id: number;
    name: string;
    sku: string;
    description: string | null;
    base_price: string | number;
    thumbnail_url: string | null;
    is_active: boolean;
}

interface Props {
    product?: CatalogProduct;
}

export default function ProductForm({ product }: Props) {
    const form = useForm({
        name: product?.name ?? '',
        sku: product?.sku ?? '',
        description: product?.description ?? '',
        base_price: product?.base_price.toString() ?? '',
        thumbnail: null as File | null,
        remove_thumbnail: false,
        is_active: product?.is_active ?? true,
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
        form.setData('thumbnail', file);
        form.setData('remove_thumbnail', false);
    };

    const handleThumbnailRemove = () => {
        if (thumbnailPreview) {
            URL.revokeObjectURL(thumbnailPreview);
        }

        setThumbnailPreview(null);
        form.setData('thumbnail', null);
        form.setData('remove_thumbnail', true);
    };

    const handleSubmit: FormEventHandler = (event) => {
        event.preventDefault();

        if (product) {
            form.transform((data) => ({ ...data, _method: 'put' }));
            form.post(`/admin/catalog-products/${product.id}`, {
                forceFormData: true,
                preserveScroll: true,
            });
        } else {
            form.post('/admin/catalog-products', {
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
                    {product ? 'Edit Catalog Product' : 'Create Catalog Product'}
                </h1>
                <p className="mt-1 text-sm text-light-secondary-text">
                    {product
                        ? 'Update the product details below.'
                        : 'Enter the details for the new catalog product.'}
                </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-light-primary-text">
                    Product name
                    <input
                        value={form.data.name}
                        onChange={(event) =>
                            form.setData('name', event.target.value)
                        }
                        required
                        maxLength={255}
                        className="mt-2 h-11 w-full rounded-lg border border-gray-300 px-3 font-normal"
                    />
                    {form.errors.name && (
                        <span className="mt-1 block text-xs text-red-600">
                            {form.errors.name}
                        </span>
                    )}
                </label>

                <label className="block text-sm font-medium text-light-primary-text">
                    SKU
                    <input
                        value={form.data.sku}
                        onChange={(event) =>
                            form.setData('sku', event.target.value)
                        }
                        required
                        maxLength={255}
                        className="mt-2 h-11 w-full rounded-lg border border-gray-300 px-3 font-normal"
                    />
                    {form.errors.sku && (
                        <span className="mt-1 block text-xs text-red-600">
                            {form.errors.sku}
                        </span>
                    )}
                </label>

                <label className="block text-sm font-medium text-light-primary-text">
                    Base price
                    <input
                        type="number"
                        value={form.data.base_price}
                        onChange={(event) =>
                            form.setData('base_price', event.target.value)
                        }
                        required
                        min="0"
                        step="0.01"
                        className="mt-2 h-11 w-full rounded-lg border border-gray-300 px-3 font-normal"
                    />
                    {form.errors.base_price && (
                        <span className="mt-1 block text-xs text-red-600">
                            {form.errors.base_price}
                        </span>
                    )}
                </label>

                <div className="block text-sm font-medium text-light-primary-text">
                    <label htmlFor="thumbnail">Thumbnail (optional)</label>
                    <input
                        id="thumbnail"
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/gif"
                        onChange={handleThumbnailChange}
                        className="mt-2 block w-full rounded-lg border border-gray-300 p-2 text-sm font-normal"
                    />
                    <p className="mt-1 text-xs font-normal text-light-secondary-text">
                        JPEG, PNG, WebP, or GIF; maximum 5 MB.
                    </p>
                    {form.errors.thumbnail && (
                        <span className="mt-1 block text-xs text-red-600">
                            {form.errors.thumbnail}
                        </span>
                    )}
                    {(thumbnailPreview ||
                        (product?.thumbnail_url &&
                            !form.data.remove_thumbnail)) && (
                        <div className="mt-3 flex items-center gap-3">
                            <img
                                src={
                                    thumbnailPreview ??
                                    product?.thumbnail_url ??
                                    ''
                                }
                                alt="Product thumbnail preview"
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

                <label className="block text-sm font-medium text-light-primary-text">
                    Status
                    <select
                        value={form.data.is_active ? '1' : '0'}
                        onChange={(event) =>
                            form.setData(
                                'is_active',
                                event.target.value === '1',
                            )
                        }
                        className="mt-2 h-11 w-full rounded-lg border border-gray-300 bg-white px-3 font-normal"
                    >
                        <option value="1">Active</option>
                        <option value="0">Inactive</option>
                    </select>
                </label>

                <label className="block text-sm font-medium text-light-primary-text sm:col-span-2">
                    Description
                    <textarea
                        value={form.data.description}
                        onChange={(event) =>
                            form.setData('description', event.target.value)
                        }
                        rows={5}
                        className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 font-normal"
                    />
                    {form.errors.description && (
                        <span className="mt-1 block text-xs text-red-600">
                            {form.errors.description}
                        </span>
                    )}
                </label>
            </div>

            <div className="mt-8 flex justify-end gap-3">
                <Link
                    href="/admin/catalog-products"
                    className="inline-flex h-10 items-center rounded-full border border-gray-300 px-5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                    Cancel
                </Link>
                <button
                    type="submit"
                    disabled={form.processing}
                    className="inline-flex h-10 items-center rounded-full bg-primary px-6 text-sm font-bold text-white hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {form.processing
                        ? 'Saving...'
                        : product
                          ? 'Save Changes'
                          : 'Create Product'}
                </button>
            </div>
        </form>
    );
}
