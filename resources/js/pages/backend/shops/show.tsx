import { Link } from '@inertiajs/react';
import type { ShopData, ShopOwner } from './shop-form';

interface Props {
    shop: ShopData & {
        owner: ShopOwner;
        created_at: string;
        updated_at: string;
    };
}

export default function ShowShop({ shop }: Props) {
    return (
        <section className="w-full rounded-2xl bg-white p-4 sm:p-6">
            <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                    <h1 className="text-xl font-bold text-light-primary-text">
                        {shop.name}
                    </h1>
                    <p className="mt-1 text-sm text-light-secondary-text">
                        Shop details
                    </p>
                </div>
                <Link
                    href={`/admin/shops/${shop.id}/edit`}
                    className="inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-bold text-white hover:bg-primary-dark"
                >
                    Edit Shop
                </Link>
            </div>

            <dl className="grid gap-5 border-t border-gray-200 pt-5 sm:grid-cols-2">
                <div>
                    <dt className="text-sm text-light-secondary-text">ID</dt>
                    <dd className="mt-1 font-medium">#{shop.id}</dd>
                </div>
                <div>
                    <dt className="text-sm text-light-secondary-text">Slug</dt>
                    <dd className="mt-1 font-medium">{shop.slug}</dd>
                </div>
                <div>
                    <dt className="text-sm text-light-secondary-text">Owner</dt>
                    <dd className="mt-1 font-medium">{shop.owner.name}</dd>
                    <dd className="text-sm text-light-secondary-text">
                        {shop.owner.email}
                    </dd>
                </div>
                <div>
                    <dt className="text-sm text-light-secondary-text">Status</dt>
                    <dd className="mt-1 font-medium capitalize">
                        {shop.status}
                    </dd>
                </div>
                <div>
                    <dt className="text-sm text-light-secondary-text">
                        Created
                    </dt>
                    <dd className="mt-1 font-medium">
                        {new Date(shop.created_at).toLocaleString()}
                    </dd>
                </div>
                <div>
                    <dt className="text-sm text-light-secondary-text">
                        Updated
                    </dt>
                    <dd className="mt-1 font-medium">
                        {new Date(shop.updated_at).toLocaleString()}
                    </dd>
                </div>
            </dl>

            <div className="mt-8 border-t border-gray-200 pt-5">
                <Link
                    href="/admin/shops"
                    className="text-sm font-semibold text-primary hover:underline"
                >
                    Back to shops
                </Link>
            </div>
        </section>
    );
}
