import { createSlice } from '@reduxjs/toolkit';

import { ThemeReducerState } from 'types';

const initialState: ThemeReducerState = {
    theme: 'color1',
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme(state: ThemeReducerState): void {
            if(state.theme === 'color1') {
                state.theme = 'color2';
            } else {
                state.theme = 'color1';
            }
        },
    },
});

export const themeActions = themeSlice.actions;