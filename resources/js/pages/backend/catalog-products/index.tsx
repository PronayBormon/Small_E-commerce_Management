import { Link, router } from '@inertiajs/react';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import type { CatalogProduct } from './product-form';

interface Product extends CatalogProduct {
    created_at: string;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface ProductPagination {
    data: Product[];
    links: PaginationLink[];
    total: number;
    from: number | null;
    to: number | null;
}

interface Props {
    products: ProductPagination;
    filters: { search: string };
}

export default function CatalogProductsIndex({ products, filters }: Props) {
    const [search, setSearch] = useState(filters.search);

    useEffect(() => setSearch(filters.search), [filters.search]);

    useEffect(() => {
        const timeout = window.setTimeout(() => {
            if (search !== filters.search) {
                router.get(
                    '/admin/catalog-products',
                    { search: search || undefined },
                    {
                        preserveState: true,
                        preserveScroll: true,
                        replace: true,
                    },
                );
            }
        }, 300);

        return () => window.clearTimeout(timeout);
    }, [search, filters.search]);

    const confirmDelete = async (product: Product) => {
        const result = await Swal.fire({
            title: 'Delete product?',
            text: `This will permanently delete ${product.name}.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#d33',
            reverseButtons: true,
        });

        if (result.isConfirmed) {
            router.delete(`/admin/catalog-products/${product.id}`, {
                preserveScroll: true,
            });
        }
    };

    return (
        <section className="w-full rounded-2xl bg-white">
            <div className="flex flex-col justify-between gap-4 p-4 sm:flex-row sm:items-center sm:p-6">
                <div>
                    <h1 className="text-xl font-bold text-light-primary-text">
                        Catalog Products
                    </h1>
                    <p className="mt-1 text-sm text-light-secondary-text">
                        {products.total === 0
                            ? 'No products'
                            : `Showing ${products.from}–${products.to} of ${products.total} products`}
                    </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                        type="search"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Search products..."
                        aria-label="Search catalog products"
                        className="h-10 rounded-full border border-gray-300 px-4 text-sm sm:w-64"
                    />
                    <Link
                        href="/admin/catalog-products/create"
                        className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-bold text-white hover:bg-primary-dark"
                    >
                        Create Product
                    </Link>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[52rem] text-left text-sm">
                    <thead className="bg-gray-100 text-light-primary-text">
                        <tr>
                            <th className="px-5 py-3 font-semibold">Product</th>
                            <th className="px-5 py-3 font-semibold">SKU</th>
                            <th className="px-5 py-3 font-semibold">Price</th>
                            <th className="px-5 py-3 font-semibold">Status</th>
                            <th className="px-5 py-3 font-semibold">Created</th>
                            <th className="px-5 py-3 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.data.map((product) => (
                            <tr
                                key={product.id}
                                className="border-b border-gray-200 last:border-0"
                            >
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-3">
                                        {product.thumbnail_url ? (
                                            <img
                                                src={product.thumbnail_url}
                                                alt=""
                                                className="size-10 rounded-lg object-cover"
                                            />
                                        ) : (
                                            <div className="size-10 rounded-lg bg-gray-100" />
                                        )}
                                        <Link
                                            href={`/admin/catalog-products/${product.id}`}
                                            className="font-semibold text-light-primary-text hover:text-primary"
                                        >
                                            {product.name}
                                        </Link>
                                    </div>
                                </td>
                                <td className="px-5 py-4">{product.sku}</td>
                                <td className="px-5 py-4">
                                    {Number(product.base_price).toFixed(2)}
                                </td>
                                <td className="px-5 py-4">
                                    {product.is_active ? 'Active' : 'Inactive'}
                                </td>
                                <td className="px-5 py-4">
                                    {new Date(
                                        product.created_at,
                                    ).toLocaleDateString()}
                                </td>
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-3">
                                        <Link
                                            href={`/admin/catalog-products/${product.id}/edit`}
                                            className="font-medium text-primary hover:underline"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                void confirmDelete(product)
                                            }
                                            className="font-medium text-red-600 hover:underline"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {products.data.length === 0 && (
                            <tr>
                                <td
                                    colSpan={6}
                                    className="px-5 py-10 text-center text-light-secondary-text"
                                >
                                    No catalog products found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <nav
                aria-label="Catalog product pagination"
                className="flex flex-wrap justify-end gap-2 border-t border-gray-200 p-4 sm:p-6"
            >
                {products.links.map((link, index) =>
                    link.url ? (
                        <Link
                            key={`${link.label}-${index}`}
                            href={link.url}
                            preserveScroll
                            className={`rounded-full px-3 py-2 text-sm ${
                                link.active
                                    ? 'bg-primary-lighter font-semibold text-primary-dark'
                                    : 'text-light-primary-text hover:bg-gray-100'
                            }`}
                        >
                            <span
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        </Link>
                    ) : (
                        <span
                            key={`${link.label}-${index}`}
                            className="cursor-not-allowed rounded-full px-3 py-2 text-sm text-gray-400"
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ),
                )}
            </nav>
        </section>
    );
}
