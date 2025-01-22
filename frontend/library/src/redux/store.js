import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import bookFormSlice from "./slices/bookFormSlice";
import errorSlice from "./slices/errorSlice";

const store = configureStore({
    reducer: {
        filter: filterSlice,
        books: bookFormSlice,
        error: errorSlice,
    },
});

export default store;
