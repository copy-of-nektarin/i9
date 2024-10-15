import { useState } from "react"
import { Product } from "../shared"
import { useProductStore } from "../productStore"
import random from "../utils/math"

export default function AddProductForm() {
    const { addNewProduct } = useProductStore()

    const [newProduct, setNewProduct] = useState<Product>({} as Product)

    function addHandle(): void {
        addNewProduct(newProduct)
    }

    function generateNewProduct(): void {
        addNewProduct({
            name: "Сгенерированный товар",
            count: random(0, 500),
            price: random(0, 50_000)
        } as Product)
    }

    return (
        <div className="add-product-form">
            <input 
                name="product-name"
                type="text"
                placeholder="Имя товара"
                value={ newProduct.name } 
                onChange={ (event) => setNewProduct({...newProduct, name: event.target.value}) }
            />
            <input 
                name="product-count"
                type="number"
                placeholder="Кол-во товара"
                value={ newProduct.count }
                onChange={ (event) => setNewProduct({...newProduct, count: Number(event.target.value) ?? 0}) }
            />
            <input
                name="product-price"
                type="number" 
                placeholder="Цена за товар" 
                value={ newProduct.price }
                onChange={ (event) => setNewProduct({...newProduct, price: Number(event.target.value) ?? 0}) }
            />
            <button onClick={ addHandle }>Добавить</button>
            <button onClick={ generateNewProduct }>Сгенерировать</button>
        </div>
    )
}