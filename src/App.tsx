import { useState } from "react"
import ProductsViewer from "./components/ProductsViewer"
import { useProductStore } from "./productStore"
import { ProductsList } from "./shared"
import AddProductForm from "./components/AddProductForm"
import FilterForm from "./components/FilterForm"

export default function App() {
    const { productsList } = useProductStore()

    const [filteredProductsList, setFilteredProductsList] = useState<ProductsList>(productsList)

    return (
        <div className="wrapper">
            <div className="wrapper-block">
                <div className="title">Список товаров</div>
                <ProductsViewer productsList={ productsList } emptyMessage="Товары отсутствуют" />
            </div>            

            <div className="wrapper-block">
                <div className="title">Добавить товар</div>
                <AddProductForm />
            </div>

            <div className="wrapper-block">
                <div className="title">Фильтр</div>
                <FilterForm setFilteredList={ (newFilteredProductsList: ProductsList) => setFilteredProductsList(newFilteredProductsList)}/>
            </div>
            
            <div className="wrapper-block">
                <div className="title">Отфильтрованные товары</div>
                <ProductsViewer productsList={ filteredProductsList } emptyMessage="Товаров не найдено" />
            </div>
        </div>
    )
}