import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import createBookWithID from "../../utils/createBookWithID";

const initialState = [];

const bookFormSlice = createSlice({
    name: "books",
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

// <= Other function

export const thunkFunction = async (dispatch, getState) => {
    console.log(getState());
    try {
        const res = await axios.get("http://localhost:4000/random-book");
        if (res?.data?.title && res?.data?.author) {
            dispatch(setAddBook(createBookWithID(res.data, "API")));
        }
    } catch (error) {
        console.log(error);
    }

    console.log(getState());
};

export default bookFormSlice.reducer;
