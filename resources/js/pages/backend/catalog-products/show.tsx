import { Link } from '@inertiajs/react';
import type { CatalogProduct } from './product-form';

interface Props {
    product: CatalogProduct & {
        created_at: string;
        updated_at: string;
        created_by: { id: number; name: string; email: string } | null;
    };
}

export default function ShowCatalogProduct({ product }: Props) {
    return (
        <section className="w-full rounded-2xl bg-white p-4 sm:p-6">
            <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                    <h1 className="text-xl font-bold text-light-primary-text">
                        {product.name}
                    </h1>
                    <p className="mt-1 text-sm text-light-secondary-text">
                        Catalog product details
                    </p>
                </div>
                <Link
                    href={`/admin/catalog-products/${product.id}/edit`}
                    className="inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-bold text-white hover:bg-primary-dark"
                >
                    Edit Product
                </Link>
            </div>

            {product.thumbnail_url && (
                <img
                    src={product.thumbnail_url}
                    alt={product.name}
                    className="mb-6 size-40 rounded-xl border border-gray-200 object-cover"
                />
            )}

            <dl className="grid gap-5 border-t border-gray-200 pt-5 sm:grid-cols-2">
                <div>
                    <dt className="text-sm text-light-secondary-text">ID</dt>
                    <dd className="mt-1 font-medium">#{product.id}</dd>
                </div>
                <div>
                    <dt className="text-sm text-light-secondary-text">SKU</dt>
                    <dd className="mt-1 font-medium">{product.sku}</dd>
                </div>
                <div>
                    <dt className="text-sm text-light-secondary-text">Price</dt>
                    <dd className="mt-1 font-medium">
                        {Number(product.base_price).toFixed(2)}
                    </dd>
                </div>
                <div>
                    <dt className="text-sm text-light-secondary-text">Status</dt>
                    <dd className="mt-1 font-medium">
                        {product.is_active ? 'Active' : 'Inactive'}
                    </dd>
                </div>
                <div>
                    <dt className="text-sm text-light-secondary-text">
                        Created by
                    </dt>
                    <dd className="mt-1 font-medium">
                        {product.created_by?.name ?? '—'}
                    </dd>
                    {product.created_by?.email && (
                        <dd className="text-sm text-light-secondary-text">
                            {product.created_by.email}
                        </dd>
                    )}
                </div>
                <div>
                    <dt className="text-sm text-light-secondary-text">
                        Created
                    </dt>
                    <dd className="mt-1 font-medium">
                        {new Date(product.created_at).toLocaleString()}
                    </dd>
                </div>
                <div className="sm:col-span-2">
                    <dt className="text-sm text-light-secondary-text">
                        Description
                    </dt>
                    <dd className="mt-1 whitespace-pre-wrap font-medium">
                        {product.description || '—'}
                    </dd>
                </div>
            </dl>

            <div className="mt-8 border-t border-gray-200 pt-5">
                <Link
                    href="/admin/catalog-products"
                    className="text-sm font-semibold text-primary hover:underline"
                >
                    Back to catalog products
                </Link>
            </div>
        </section>
    );
}
