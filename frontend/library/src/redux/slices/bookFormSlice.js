import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const bookFormSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        setAddBook: (state, action) => {
            state.push(action.payload);
        },

        setDeleteBook: (state, action) => {
            return state.filter((book) => book.id !== action.payload.id);
        },

        setToogleFaVorite: (state, action) => {
            return state.map((book) =>
                book.id === action.payload.id
                    ? { ...book, isFavorite: !book.isFavorite }
                    : book
            );
        },
    },
});

// <= Export subscriptions =>
export const selectBooks = (state) => state.books;

// <= Export setFunction =>
export const { setAddBook, setDeleteBook, setToogleFaVorite } =
    bookFormSlice.actions;

export default bookFormSlice.reducer;
