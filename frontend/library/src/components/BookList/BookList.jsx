import React from "react";
import { useSelector, useDispatch } from "react-redux";
import uniqid from "uniqid";
import { deleteBook } from "../../redux/books/actionCreators";
import { toggleFavorite } from "../../redux/books/actionCreators";
import { BsBookmarkHeart } from "react-icons/bs";
import { BsBookmarkHeartFill } from "react-icons/bs";

function BookList() {
    const books = useSelector((state) => state.books);
    const dispatch = useDispatch();

    return (
        <div className="bg-[#f2f2f2] shadow-[0_2px_4px_rgba(0,0,0,0.1)] m-5 p-5 rounded-[5px]">
            <h2 className="font-bold">Список книг</h2>
            {books.length === 0 ? (
                <p>В списке нет книг:</p>
            ) : (
                <ul className="-mx-5 my-5 p-0 list-style: none">
                    {books.map((book, i) => (
                        <li
                            key={book.id}
                            className="w-auto bg-white list-none px-5 py-2.5 border-b-[#ccc] border-b border-solid even:bg-slate-100 hover:bg-slate-200"
                        >
                            <div className="flex justify-between items-center">
                                <div>
                                    {++i}. Название книги:{" "}
                                    <strong>{book.title}</strong> | Автор книги:{" "}
                                    <strong>{book.author}</strong>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div>
                                        {book.isFavorite ? (
                                            <BsBookmarkHeartFill
                                                onClick={() =>
                                                    dispatch(
                                                        toggleFavorite(book.id)
                                                    )
                                                }
                                                className="w-10 h-10 cursor-pointer text-orange-400"
                                            />
                                        ) : (
                                            <BsBookmarkHeart
                                                onClick={() =>
                                                    dispatch(
                                                        toggleFavorite(book.id)
                                                    )
                                                }
                                                className="w-10 h-10 cursor-pointer text-sky-500"
                                            />
                                        )}
                                    </div>
                                    <button
                                        className="border border-stone-300 p-3 rounded-md  hover:bg-orange-400"
                                        onClick={() =>
                                            dispatch(deleteBook(book.id))
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
