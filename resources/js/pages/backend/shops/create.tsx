import ShopForm, { type ShopOwner } from './shop-form';

interface Props {
    owners: ShopOwner[];
}

export default function CreateShop({ owners }: Props) {
    return <ShopForm owners={owners} />;
}
