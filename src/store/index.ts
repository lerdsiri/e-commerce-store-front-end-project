import { configureStore } from '@reduxjs/toolkit';

import { productSlice } from 'store/productSlice';
import { cartSlice } from 'store/cartSlice';
import { themeSlice } from './themeSlice';
import { RootState } from 'types';

const key = "redux"

function saveToLocalStorage(state: RootState) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(key, serializedState);
    } catch(e) {
        console.log('Error saving to local storage', e);
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem(key);
        if(!serializedState) return undefined;
        return JSON.parse(serializedState);
    } catch(e) {
        console.log('Error loading from local storage', e);
    }
}

export const store = configureStore({
    devTools: true,
    reducer: {
        products: productSlice.reducer,
        cart: cartSlice.reducer,
        theme: themeSlice.reducer,
    },
    preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => saveToLocalStorage(store.getState()));
