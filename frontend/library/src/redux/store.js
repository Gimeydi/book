import { configureStore } from "@reduxjs/toolkit";
import bookReduser from "./books/reducer";
import filterSlice from "../redux/books/slices/filterSlice.js";

const store = configureStore({
    reducer: {
        books: bookReduser,
        filter: filterSlice,
    },
});

export default store;
