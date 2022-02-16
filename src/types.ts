import { store } from "store";

//custom types
export type Product = {
    category: string
    description: string
    id: number
    image: string
    price: number
    rating: {rate: number, count: number}
    title: string
}


//State and RootState
export type ProductReducerState = {
    products: Product[]
    filteredProdList: Product[]
}

export type RootState = ReturnType<typeof store.getState>;
