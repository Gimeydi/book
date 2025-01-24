import { useState } from "react";
import uniqid from "uniqid";
import { FaSpinner } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

import booksData from "../../data/books.json";
import createBookWithID from "../../utils/createBookWithID";

import { setAddBook, fetchBook } from "../../redux/slices/bookFormSlice";
import { selectIsloadingViaAPI } from "../../redux/slices/bookFormSlice";

import { setError } from "../../redux/slices/errorSlice";

function BookForm() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const isLoadingViaAPI = useSelector(selectIsloadingViaAPI);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        // const newBook = {
        //     title: title,
        //     author: author,
        // };

        if (title && author) {
            dispatch(setAddBook(createBookWithID({ title, author }, "manual")));

            setTitle("");
            setAuthor("");
        } else {
            dispatch(setError("Вы не добавили название книги и автора книги"));
        }
    };

    const handleAddRandomBook = () => {
        const randomIndex = Math.floor(Math.random() * booksData.length);
        const randomBook = booksData[randomIndex];

        dispatch(setAddBook(createBookWithID(randomBook, "random")));
    };

    const handleAddRandomBookViaAPI = () => {
        dispatch(fetchBook("http://localhost:4000/random-book-delayed"));
        // try {
        //     setIsLoading(true);
        //     await dispatch(
        //         fetchBook("http://localhost:4000/random-book-delayed")
        //     );
        // } finally {
        //     setIsLoading(false);
        // }
    };

    return (
        <div className="bg-[#f2f2f2] shadow-[0_2px_4px_rgba(0,0,0,0.1)] m-5 p-5 rounded-[5px] w-full">
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label
                        htmlFor="title"
                        className="block w-full text-center mb-2.5"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-4/5 border mb-2.5 p-2 rounded-[3px] border-solid border-[#ccc]"
                    />
                </div>
                <div>
                    <label
                        htmlFor="author"
                        className="block w-full text-center mb-2.5"
                    >
                        Author
                    </label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className=" w-4/5 border mb-2.5 p-2 rounded-[3px] border-solid border-[#ccc]"
                    />
                    <button
                        type="submit"
                        className=" bg-[#007bff] text-white cursor-pointer transition-[background-color] duration-[0.3s] ease-[ease] m-2.5 px-3 py-2 rounded-[3px] border-[none]"
                    >
                        Добавить книгу
                    </button>
                    <button
                        type="button"
                        onClick={handleAddRandomBook}
                        className="bg-[#007bff] text-white cursor-pointer transition-[background-color] duration-[0.3s] ease-[ease] m-2.5 px-3 py-2 rounded-[3px] border-[none]"
                    >
                        Добавить случайную книгу
                    </button>

                    <button
                        type="button"
                        onClick={handleAddRandomBookViaAPI}
                        className="bg-[#007bff] text-white cursor-pointer transition-[background-color] duration-[0.3s] ease-[ease] m-2.5 px-3 py-2 rounded-[3px] border-[none]"
                        disabled={isLoadingViaAPI}
                    >
                        {isLoadingViaAPI ? (
                            <div className="flex items-center">
                                <span>Книга загружается...</span>
                                <FaSpinner className="animate-spin ml-2" />
                            </div>
                        ) : (
                            "Получить книгк с API"
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default BookForm;
