import ShopProductForm, {
    type CatalogProductOption,
    type ShopOption,
} from './product-form';

interface Props {
    shops: ShopOption[];
    catalogProducts: CatalogProductOption[];
}

export default function CreateShopProduct({
    shops,
    catalogProducts,
}: Props) {
    return (
        <ShopProductForm shops={shops} catalogProducts={catalogProducts} />
    );
}
