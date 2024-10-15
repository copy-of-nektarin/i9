import { create } from "zustand"
import { Product, ProductsList } from "./shared"

interface ProductStoreState {
    productsList: ProductsList,
    addNewProduct: (product: Product) => void
}

export const useProductStore = create<ProductStoreState>((set) => ({
    productsList: new Array<Product>(),
    addNewProduct: (product: Product) => set((state: ProductStoreState) => ({
        ...state,
        productsList: [...state.productsList, product] as ProductsList
    }))
}))