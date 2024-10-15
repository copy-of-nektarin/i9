import { Product, ProductsList } from "../shared"

export enum FilterPropCondition {
    MORE = "MORE",
    LESS = "LESS",
    EQUAL = "EQUAL"
}

export interface FilterProp<T> {
    value: T
    condition: FilterPropCondition
}

export function filterWith<T>(productsList: ProductsList, key: string, filterProp: FilterProp<T>) {
    return productsList.filter((product: Product) => {
        // @ts-ignore
        const value = product[key]
        if (value != undefined) {
            switch (filterProp.condition) {
                case FilterPropCondition.MORE: return value > filterProp.value
                case FilterPropCondition.LESS: return value < filterProp.value
                case FilterPropCondition.EQUAL: return value == filterProp.value
                default: return value
            }
        }
    })
}