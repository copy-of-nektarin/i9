import { Product, ProductsList } from "../shared"
import ProductItem from "./ProductItem"

interface ProductsViewerProps {
    productsList: ProductsList
    emptyMessage: string
}

export default function ProductsViewer({ productsList, emptyMessage }: ProductsViewerProps) {
    return (
        <div className="products-viewer">
            { productsList.length > 0 ? 
                productsList.map((product: Product) => <ProductItem product={ product } />) 
            : 
                <div className="products-viewer__empty-title">{ emptyMessage }</div> 
            }
        </div>
    )
}