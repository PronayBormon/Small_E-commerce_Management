import { Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export interface ShopOwner {
    id: number;
    name: string;
    email: string;
}

export interface ShopData {
    id: number;
    owner_id: number;
    name: string;
    slug: string;
    status: 'active' | 'suspended' | 'pending';
}

interface Props {
    owners: ShopOwner[];
    shop?: ShopData;
}

export default function ShopForm({ owners, shop }: Props) {
    const form = useForm({
        owner_id: shop?.owner_id.toString() ?? '',
        name: shop?.name ?? '',
        status: shop?.status ?? 'active',
    });

    const handleSubmit: FormEventHandler = (event) => {
        event.preventDefault();

        if (shop) {
            form.put(`/admin/shops/${shop.id}`, { preserveScroll: true });
        } else {
            form.post('/admin/shops', { preserveScroll: true });
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto w-full rounded-2xl bg-white p-4 sm:p-6"
        >
            <div className="mb-6">
                <h1 className="text-xl font-bold text-light-primary-text">
                    {shop ? 'Edit Shop' : 'Create Shop'}
                </h1>
                <p className="mt-1 text-sm text-light-secondary-text">
                    {shop
                        ? 'Update the shop details below.'
                        : 'Enter the details for the new shop.'}
                </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-light-primary-text">
                    Shop name
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
                    Owner
                    <select
                        value={form.data.owner_id}
                        onChange={(event) =>
                            form.setData('owner_id', event.target.value)
                        }
                        required
                        className="mt-2 h-11 w-full rounded-lg border border-gray-300 bg-white px-3 font-normal"
                    >
                        <option value="">Select an owner</option>
                        {owners.map((owner) => (
                            <option key={owner.id} value={owner.id}>
                                {owner.name} ({owner.email})
                            </option>
                        ))}
                    </select>
                    {form.errors.owner_id && (
                        <span className="mt-1 block text-xs text-red-600">
                            {form.errors.owner_id}
                        </span>
                    )}
                </label>

                <label className="block text-sm font-medium text-light-primary-text">
                    Status
                    <select
                        value={form.data.status}
                        onChange={(event) =>
                            form.setData(
                                'status',
                                event.target.value as
                                    | 'active'
                                    | 'suspended'
                                    | 'pending',
                            )
                        }
                        required
                        className="mt-2 h-11 w-full rounded-lg border border-gray-300 bg-white px-3 font-normal"
                    >
                        <option value="active">Active</option>
                        <option value="pending">Pending</option>
                        <option value="suspended">Suspended</option>
                    </select>
                    {form.errors.status && (
                        <span className="mt-1 block text-xs text-red-600">
                            {form.errors.status}
                        </span>
                    )}
                </label>
            </div>

            <div className="mt-8 flex justify-end gap-3">
                <Link
                    href="/admin/shops"
                    className="inline-flex h-10 items-center rounded-full border border-gray-300 px-5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                    Cancel
                </Link>
                <button
                    type="submit"
                    disabled={form.processing || owners.length === 0}
                    className="inline-flex h-10 items-center rounded-full bg-primary px-6 text-sm font-bold text-white hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {form.processing
                        ? 'Saving...'
                        : shop
                          ? 'Save Changes'
                          : 'Create Shop'}
                </button>
            </div>
            {owners.length === 0 && (
                <p className="mt-3 text-right text-sm text-red-600">
                    Create a user before adding a shop.
                </p>
            )}
        </form>
    );
}
