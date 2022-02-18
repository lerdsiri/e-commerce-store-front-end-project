import { store } from "store";

//custom types
export type Product = {
    //properties needed for ProductTable.tsx
    category: string
    description: string
    id: number
    image: string
    price: number
    rating: {rate: number, count: number}
    title: string

    //additional properties needed for Cart.tsx
    purchasedQuant: number
}


//State and RootState
export type ProductReducerState = {
    products: Product[]
    filteredProdList: Product[]
    sortedByPrice: Boolean
    sortedByRating: Boolean
}

export type CartReducerState = {
    cart: Product[]
    numOfItems: 0
}

export type ThemeReducerState = {
    theme: 'color1' | 'color2'
}

export type RootState = ReturnType<typeof store.getState>;
