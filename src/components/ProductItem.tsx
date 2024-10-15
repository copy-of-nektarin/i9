import { Product } from "../shared"

interface ProductItemProps {
    product: Product
}

export default function ProductItem({ product }: ProductItemProps) {
    return (
        <div className="product-item">
            <div className="product-item__name">{ product.name }</div>
            <div className="product-item__count">{ product.count }</div>
            <div className="product-item__price">{ product.price }</div>
        </div>
    )
}