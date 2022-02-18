import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product, CartReducerState } from 'types';

const initialState: CartReducerState = {
    cart: [],
    numOfItems: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state: CartReducerState, action: PayloadAction<{product: Product}>): void {
            const addedProduct = JSON.parse(JSON.stringify(action.payload.product));
            
            if(state.cart.some((cartedProduct) => cartedProduct.title === addedProduct.title)) {
                state.cart.forEach((cartedProduct) => {
                    if(cartedProduct.title === addedProduct.title) {
                        cartedProduct.purchasedQuant += 1;
                    }
                })
            } else {
                addedProduct.purchasedQuant = 1;
                state.cart.push(addedProduct);
            }

            state.numOfItems +=1;
        },
        remove(state: CartReducerState, action: PayloadAction<{product: Product}>): void {
            const removedProduct = action.payload.product;

            state.cart.forEach((cartedProduct) => {
                if(cartedProduct.title === removedProduct.title) {
                    state.numOfItems -= cartedProduct.purchasedQuant;

                    const index = state.cart.findIndex((cartedProduct) => cartedProduct.title === removedProduct.title)
                    state.cart.splice(index, 1);
                }
            })
        },
        removeAll(state: CartReducerState): void {
            state.cart = [];
            state.numOfItems = 0;
        },
        addQuantity(state: CartReducerState, action: PayloadAction<{product: Product}>): void {
            state.cart.forEach((cartedProduct) => {
                if(cartedProduct.title === action.payload.product.title) {
                    cartedProduct.purchasedQuant += 1;
                }
            })
            state.numOfItems += 1;
        },
        reduceQuantity(state: CartReducerState, action: PayloadAction<{product: Product}>): void {
            state.cart.forEach((cartedProduct) => {
                if(cartedProduct.title === action.payload.product.title) {
                    if(cartedProduct.purchasedQuant > 1) {
                        cartedProduct.purchasedQuant -= 1;
                    } else {
                        const index = state.cart.findIndex((cartedProduct) => cartedProduct.title === action.payload.product.title);
                        state.cart.splice(index, 1);
                    }
                    
                }
            })
            state.numOfItems -= 1;
        },

    },
});

export const cartActions = cartSlice.actions;
