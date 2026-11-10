import ShopProductForm, {
    type CatalogProductOption,
    type ShopOption,
    type ShopProductData,
} from './product-form';

interface Props {
    shopProduct: ShopProductData;
    shops: ShopOption[];
    catalogProducts: CatalogProductOption[];
}

export default function EditShopProduct({
    shopProduct,
    shops,
    catalogProducts,
}: Props) {
    return (
        <ShopProductForm
            shopProduct={shopProduct}
            shops={shops}
            catalogProducts={catalogProducts}
        />
    );
}
