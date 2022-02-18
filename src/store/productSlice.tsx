import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product, ProductReducerState } from 'types';

const initialState: ProductReducerState = {
    products: [],
    filteredProdList: [],
    sortedByPrice: false,
    sortedByRating: false,
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
        },
        filterByCategory(state: ProductReducerState, action: PayloadAction<string>): void {
            if(action.payload === "all") {
                state.filteredProdList = state.products;
            } else {
                state.filteredProdList = state.products.filter((product) => {
                    return (
                        product.category === action.payload
                    )
                })
            }
        },
        sortByPrice(state: ProductReducerState): void {
            if(!state.sortedByPrice) {
                state.products.sort((a,b) => a.price - b.price);
                state.filteredProdList.sort((a,b) => a.price - b.price);
            } else {
                state.products.sort((a,b) => b.price - a.price);
                state.filteredProdList.sort((a,b) => b.price - a.price);
            }

            state.sortedByPrice = !state.sortedByPrice;
        },
        sortByRating(state: ProductReducerState): void {
            if(!state.sortedByRating) {
                state.products.sort((a,b) => a.rating.rate - b.rating.rate);
                state.filteredProdList.sort((a,b) => a.rating.rate - b.rating.rate);
            } else {
                state.products.sort((a,b) => b.rating.rate - a.rating.rate);
                state.filteredProdList.sort((a,b) => b.rating.rate - a.rating.rate);
            }

            state.sortedByRating = !state.sortedByRating;
        },
    },
});

export const productActions = productSlice.actions;
