import { Link } from '@inertiajs/react';
import type {
    CatalogProductOption,
    ShopOption,
    ShopProductData,
} from './product-form';

interface Props {
    shopProduct: ShopProductData & {
        shop: ShopOption;
        catalog_product: CatalogProductOption & {
            description: string | null;
        };
        created_at: string;
        updated_at: string;
    };
}

export default function ShowShopProduct({ shopProduct }: Props) {
    const title =
        shopProduct.custom_title || shopProduct.catalog_product.name;
    const thumbnail =
        shopProduct.custom_thumbnail_url ||
        shopProduct.catalog_product.thumbnail_url;
    const description =
        shopProduct.custom_description ||
        shopProduct.catalog_product.description;

    return (
        <section className="w-full rounded-2xl bg-white p-4 sm:p-6">
            <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                    <h1 className="text-xl font-bold text-light-primary-text">
                        {title}
                    </h1>
                    <p className="mt-1 text-sm text-light-secondary-text">
                        Shop product details
                    </p>
                </div>
                <Link
                    href={`/admin/shop-products/${shopProduct.id}/edit`}
                    className="inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-bold text-white hover:bg-primary-dark"
                >
                    Edit Product
                </Link>
            </div>

            {thumbnail && (
                <img
                    src={thumbnail}
                    alt={title}
                    className="mb-6 size-40 rounded-xl border border-gray-200 object-cover"
                />
            )}

            <dl className="grid gap-5 border-t border-gray-200 pt-5 sm:grid-cols-2">
                <div>
                    <dt className="text-sm text-light-secondary-text">Shop</dt>
                    <dd className="mt-1 font-medium">{shopProduct.shop.name}</dd>
                </div>
                <div>
                    <dt className="text-sm text-light-secondary-text">
                        Catalog product
                    </dt>
                    <dd className="mt-1 font-medium">
                        {shopProduct.catalog_product.name}
                    </dd>
                    <dd className="text-sm text-light-secondary-text">
                        SKU: {shopProduct.catalog_product.sku}
                    </dd>
                </div>
                <div>
                    <dt className="text-sm text-light-secondary-text">Price</dt>
                    <dd className="mt-1 font-medium">
                        {Number(shopProduct.price).toFixed(2)}
                    </dd>
                </div>
                <div>
                    <dt className="text-sm text-light-secondary-text">
                        Stock quantity
                    </dt>
                    <dd className="mt-1 font-medium">
                        {shopProduct.stock_quantity}
                    </dd>
                </div>
                <div>
                    <dt className="text-sm text-light-secondary-text">
                        Visibility
                    </dt>
                    <dd className="mt-1 font-medium">
                        {shopProduct.is_visible ? 'Visible' : 'Hidden'}
                    </dd>
                </div>
                <div>
                    <dt className="text-sm text-light-secondary-text">
                        Created
                    </dt>
                    <dd className="mt-1 font-medium">
                        {new Date(shopProduct.created_at).toLocaleString()}
                    </dd>
                </div>
                <div className="sm:col-span-2">
                    <dt className="text-sm text-light-secondary-text">
                        Description
                    </dt>
                    <dd className="mt-1 whitespace-pre-wrap font-medium">
                        {description || '—'}
                    </dd>
                </div>
            </dl>

            <div className="mt-8 border-t border-gray-200 pt-5">
                <Link
                    href="/admin/shop-products"
                    className="text-sm font-semibold text-primary hover:underline"
                >
                    Back to shop products
                </Link>
            </div>
        </section>
    );
}
