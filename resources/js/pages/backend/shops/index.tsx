import { Link, router } from '@inertiajs/react';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import type { ShopData, ShopOwner } from './shop-form';

interface Shop extends ShopData {
    created_at: string;
    owner: ShopOwner;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface ShopPagination {
    data: Shop[];
    links: PaginationLink[];
    total: number;
}

interface Props {
    shops: ShopPagination;
    filters: { search: string };
}

export default function ShopsIndex({ shops, filters }: Props) {
    const [search, setSearch] = useState(filters.search);

    useEffect(() => setSearch(filters.search), [filters.search]);

    useEffect(() => {
        const timeout = window.setTimeout(() => {
            if (search !== filters.search) {
                router.get(
                    '/admin/shops',
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

    const confirmDelete = async (shop: Shop) => {
        const result = await Swal.fire({
            title: 'Delete shop?',
            text: `This will permanently delete ${shop.name}.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#d33',
            reverseButtons: true,
        });

        if (result.isConfirmed) {
            router.delete(`/admin/shops/${shop.id}`, {
                preserveScroll: true,
            });
        }
    };

    return (
        <section className="w-full rounded-2xl bg-white">
            <div className="flex flex-col justify-between gap-4 p-4 sm:flex-row sm:items-center sm:p-6">
                <div>
                    <h1 className="text-xl font-bold text-light-primary-text">
                        Shops
                    </h1>
                    <p className="mt-1 text-sm text-light-secondary-text">
                        {shops.total} shops
                    </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                        type="search"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Search shops..."
                        aria-label="Search shops"
                        className="h-10 rounded-full border border-gray-300 px-4 text-sm sm:w-64"
                    />
                    <Link
                        href="/admin/shops/create"
                        className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-bold text-white hover:bg-primary-dark"
                    >
                        Create Shop
                    </Link>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[46rem] text-left text-sm">
                    <thead className="bg-gray-100 text-light-primary-text">
                        <tr>
                            <th className="px-5 py-3 font-semibold">ID</th>
                            <th className="px-5 py-3 font-semibold">Shop</th>
                            <th className="px-5 py-3 font-semibold">Owner</th>
                            <th className="px-5 py-3 font-semibold">Status</th>
                            <th className="px-5 py-3 font-semibold">Created</th>
                            <th className="px-5 py-3 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shops.data.map((shop) => (
                            <tr
                                key={shop.id}
                                className="border-b border-gray-200 last:border-0"
                            >
                                <td className="px-5 py-4">#{shop.id}</td>
                                <td className="px-5 py-4">
                                    <Link
                                        href={`/admin/shops/${shop.id}`}
                                        className="font-semibold text-light-primary-text hover:text-primary"
                                    >
                                        {shop.name}
                                    </Link>
                                    <p className="text-xs text-light-secondary-text">
                                        {shop.slug}
                                    </p>
                                </td>
                                <td className="px-5 py-4">
                                    <p>{shop.owner.name}</p>
                                    <p className="text-xs text-light-secondary-text">
                                        {shop.owner.email}
                                    </p>
                                </td>
                                <td className="px-5 py-4 capitalize">
                                    {shop.status}
                                </td>
                                <td className="px-5 py-4">
                                    {new Date(
                                        shop.created_at,
                                    ).toLocaleDateString()}
                                </td>
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-3">
                                        <Link
                                            href={`/admin/shops/${shop.id}/edit`}
                                            className="font-medium text-primary hover:underline"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                void confirmDelete(shop)
                                            }
                                            className="font-medium text-red-600 hover:underline"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {shops.data.length === 0 && (
                            <tr>
                                <td
                                    colSpan={6}
                                    className="px-5 py-10 text-center text-light-secondary-text"
                                >
                                    No shops found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <nav
                aria-label="Shop pagination"
                className="flex flex-wrap justify-end gap-2 border-t border-gray-200 p-4 sm:p-6"
            >
                {shops.links.map((link, index) =>
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
