import ProductForm, { type CatalogProduct } from './product-form';

interface Props {
    product: CatalogProduct;
}

export default function EditCatalogProduct({ product }: Props) {
    return <ProductForm product={product} />;
}
