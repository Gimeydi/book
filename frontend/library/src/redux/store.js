import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import bookFormSlice from "./slices/bookFormSlice";

const store = configureStore({
    reducer: {
        filter: filterSlice,
        books: bookFormSlice,
    },
});

export default store;
