import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import createBookWithID from "../../utils/createBookWithID";
import { setError } from "./errorSlice";

const initialState = {
    books: [],
    isLoadingViaAPI: false,
};

export const fetchBook = createAsyncThunk(
    "books/fetchBook",
    async (url, thunkAPI) => {
        try {
            const res = await axios.get(url);
            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.message));
            // return thunkAPI.rejectWithValue(error)
            throw error;
        }
    }
);

const bookFormSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setAddBook: (state, action) => {
            state.books.push(action.payload);
        },

        setDeleteBook: (state, action) => {
            return {
                ...state,
                books: state.books.filter(
                    (book) => book.id !== action.payload.id
                ),
            };
        },

        setToogleFaVorite: (state, action) => {
            state.books.forEach((book) => {
                if (book.id === action.payload.id) {
                    book.isFavorite = !book.isFavorite;
                }
            });
        },
    },

    //Option 1

    extraReducers: {
        [fetchBook.pending]: (state) => {
            state.isLoadingViaAPI = true;
        },
        [fetchBook.fulfilled]: (state, action) => {
            state.isLoadingViaAPI = false;

            if (action.payload.title && action.payload.author) {
                state.books.push(createBookWithID(action.payload, "API"));
            }
        },
        [fetchBook.rejected]: (state) => {
            state.isLoadingViaAPI = false;
        },
    },

    //Option 2

    extraReducers: (builder) => {
        builder.addCase(fetchBook.pending, (state) => {
            state.isLoadingViaAPI = true;
        });

        builder.addCase(fetchBook.fulfilled, (state, action) => {
            state.isLoadingViaAPI = false;
            if (action.payload.title && action.payload.author) {
                state.books.push(createBookWithID(action.payload, "API"));
            }
        });

        builder.addCase(fetchBook.rejected, (state) => {
            state.isLoadingViaAPI = false;
        });
    },
});

// <= Export subscriptions =>
export const selectBooks = (state) => state.books.books;
export const selectIsloadingViaAPI = (state) => state.books.isLoadingViaAPI;

// <= Export setFunction =>
export const { setAddBook, setDeleteBook, setToogleFaVorite } =
    bookFormSlice.actions;

// <= Other function

// export const thunkFunction = async (dispatch, getState) => {
//     try {
//         const res = await axios.get("http://localhost:4000/random-book");
//         if (res?.data?.title && res?.data?.author) {
//             dispatch(setAddBook(createBookWithID(res.data, "API")));
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };

export default bookFormSlice.reducer;
