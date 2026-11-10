import ShopForm, { type ShopData, type ShopOwner } from './shop-form';

interface Props {
    shop: ShopData;
    owners: ShopOwner[];
}

export default function EditShop({ shop, owners }: Props) {
    return <ShopForm shop={shop} owners={owners} />;
}
