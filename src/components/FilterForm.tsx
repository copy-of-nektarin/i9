import { useState } from "react"
import { FilterProp, FilterPropCondition, filterWith } from "../utils/filter-trash"
import { ProductsList } from "../shared"
import { useProductStore } from "../productStore"

interface FilterFormProps {
    setFilteredList: (productsList: ProductsList) => void
}

export default function FilterForm({ setFilteredList }: FilterFormProps) {
    const { productsList } = useProductStore()
    
    const [countFilter, setCountFilter] = useState<FilterProp<number>>({condition: FilterPropCondition.MORE} as FilterProp<number>)
    const [priceFilter, setPriceFilter] = useState<FilterProp<number>>({condition: FilterPropCondition.MORE} as FilterProp<number>)

    function filter(): void {
        let filteredProductsList: ProductsList = filterWith<number>(productsList, "count", countFilter)
        filteredProductsList = filterWith<number>(filteredProductsList, "price", priceFilter)
        filteredProductsList.sort()

        setFilteredList([...filteredProductsList])
    }

    return (
        <div className="filter-form">
            <div className="">
                <input 
                    name="filter-count-value"
                    type="number"
                    placeholder="Кол-во"
                    value={ countFilter.value }
                    onChange={ (event) => setCountFilter({...countFilter, value: Number(event.target.value) ?? 0}) } 
                />
                <select 
                    name="filter-count"
                    value={ countFilter.condition }
                    onChange={ (event) => setCountFilter({...countFilter, condition: event.target.value as FilterPropCondition}) }
                >
                    <option value={ FilterPropCondition.MORE }>Больше</option>
                    <option value={ FilterPropCondition.EQUAL }>Равно</option>
                    <option value={ FilterPropCondition.LESS }>Меньше</option>
                </select>
            </div>
            <div className="">
                <input 
                    name="filter-price-value"
                    type="number"
                    placeholder="Цена"
                    value={ priceFilter.value }
                    onChange={ (event) => setPriceFilter({...priceFilter, value: Number(event.target.value) ?? 0}) }
                />
                <select 
                    name="filter-count"
                    value={ priceFilter.condition }
                    onChange={ (event) => setPriceFilter({...priceFilter, condition: event.target.value as FilterPropCondition}) }
                >
                    <option value={ FilterPropCondition.MORE }>Больше</option>
                    <option value={ FilterPropCondition.EQUAL }>Равно</option>
                    <option value={ FilterPropCondition.LESS }>Меньше</option>
                </select>
            </div>
            <button onClick={ filter }>Применить фильтр</button>
        </div>
    )
}