import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    author: "",
    onlyFavorite: false,
};

const filterSlice = createSlice({
    name: "filter",
    initialState: initialState,
    reducers: {
        setTitleFilter: (state, action) => {
            state.title = action.payload;
            // используется библиотека immer
        },

        setAuthorFilter: (state, action) => {
            state.author = action.payload;
        },

        setOnlyFavoriteFilter: (state) => {
            state.onlyFavorite = !state.onlyFavorite;
        },

        resetFilters: () => {
            return initialState;
        },
    },
});

// <= Export subscriptions =>
export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;
export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite;

// <= Export functions =>
export const {
    setTitleFilter,
    resetFilters,
    setAuthorFilter,
    setOnlyFavoriteFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
