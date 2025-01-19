import React from "react";
import uniqid from "uniqid";

import { BsBookmarkHeart } from "react-icons/bs";
import { BsBookmarkHeartFill } from "react-icons/bs";

import { useSelector, useDispatch } from "react-redux";

import {
    selectAuthorFilter,
    selectTitleFilter,
    selectOnlyFavoriteFilter,
} from "../../redux/slices/filterSlice";

import { selectBooks } from "../../redux/slices/bookFormSlice";

import {
    setDeleteBook,
    setToogleFaVorite,
} from "../../redux/slices/bookFormSlice";

function BookList() {
    const books = useSelector(selectBooks);

    // subscriptions
    const titleFilter = useSelector(selectTitleFilter);
    const authorFilter = useSelector(selectAuthorFilter);
    const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);

    // functions
    const handleDeleteBook = (id) => {
        dispatch(setDeleteBook({ id }));
    };

    const handleToggleFavorite = (id) => {
        dispatch(setToogleFaVorite({ id }));
    };

    const filteredBooks = books.filter((book) => {
        const matchesTitle = book.title
            .toLowerCase()
            .includes(titleFilter.toLowerCase());

        const matchesAuthor = book.author
            .toLowerCase()
            .includes(authorFilter.toLowerCase());

        const matchesFavorit = onlyFavoriteFilter ? book.isFavorite : true;

        return matchesTitle && matchesAuthor && matchesFavorit;
    });

    const highlightMatch = (text, filter) => {
        if (!filter) return text;

        const regex = new RegExp(`(${filter})`, "gi");
        return text.split(regex).map((substring) => {
            if (substring.toLowerCase() === filter.toLowerCase()) {
                return (
                    <span key={uniqid()} className="bg-yellow-400">
                        {substring}
                    </span>
                );
            }
            return substring;
        });
    };

    // <== Functions ==>

    const dispatch = useDispatch();

    return (
        <div className="bg-[#f2f2f2] shadow-[0_2px_4px_rgba(0,0,0,0.1)] m-5 p-5 rounded-[5px]">
            <h2 className="font-bold">Список книг</h2>
            {books.length === 0 ? (
                <p>В списке нет книг:</p>
            ) : (
                <ul className="-mx-5 my-5 p-0 list-style: none">
                    {filteredBooks.map((book, i) => (
                        <li
                            key={book.id}
                            className="w-auto bg-white list-none px-5 py-2.5 border-b-[#ccc] border-b border-solid even:bg-slate-100 hover:bg-slate-200"
                        >
                            <div className="flex justify-between items-center">
                                <div>
                                    {++i}. Название книги:{" "}
                                    <strong>
                                        {highlightMatch(
                                            book.title,
                                            titleFilter
                                        )}
                                    </strong>{" "}
                                    | Автор книги:{" "}
                                    <strong>
                                        {highlightMatch(
                                            book.author,
                                            authorFilter
                                        )}
                                    </strong>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div>
                                        {book.isFavorite ? (
                                            <BsBookmarkHeartFill
                                                onClick={(id) =>
                                                    handleToggleFavorite(
                                                        book.id
                                                    )
                                                }
                                                className="w-10 h-10 cursor-pointer text-orange-400"
                                            />
                                        ) : (
                                            <BsBookmarkHeart
                                                onClick={(id) =>
                                                    handleToggleFavorite(
                                                        book.id
                                                    )
                                                }
                                                className="w-10 h-10 cursor-pointer text-sky-500"
                                            />
                                        )}
                                    </div>
                                    <button
                                        className="border border-stone-300 p-3 rounded-md  hover:bg-orange-400"
                                        onClick={(id) =>
                                            handleDeleteBook(book.id)
                                        }
                                    >
                                        Удалить книгу
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default BookList;
