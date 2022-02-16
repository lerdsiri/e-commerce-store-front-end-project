import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product, ProductReducerState } from 'types';

const initialState: ProductReducerState = {
    products: [],
    filteredProdList: []
};

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProducts(state: ProductReducerState, action: PayloadAction<{products: Product[]}>): void {
            state.products = action.payload.products
            state.filteredProdList = action.payload.products
        },
        filterProducts(state: ProductReducerState, action: PayloadAction<{searchTerm: string}>): void {
            state.filteredProdList = state.products.filter((product) => {
                return (
                    (product.title.toLowerCase().search(action.payload.searchTerm.toLowerCase()) !== -1) ||
                    (product.description.toLowerCase().search(action.payload.searchTerm.toLowerCase()) !== -1)
                );
            })
        }
    },
});

export const productActions = productSlice.actions;
