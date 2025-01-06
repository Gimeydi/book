import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    isShowOnlyFavourites: false,
};

const filterSlice = createSlice({
    name: "filter",
    initialState: initialState,
    reducers: {
        setTitleFilter: (state, action) => {
            return { ...state, title: action.payload };
        },

        resetTitle: (state) => {
            return { ...state, title: "" };
        },

        setShowFavorites: (state) => {
            return {
                ...state,
                isShowOnlyFavourites: !state.isShowOnlyFavourites,
            };
        },
    },
});

export const { setTitleFilter, resetTitle, setShowFavorites } =
    filterSlice.actions;

export default filterSlice.reducer;
