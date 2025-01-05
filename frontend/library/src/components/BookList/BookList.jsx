import React from "react";
import { useSelector } from "react-redux";
import uniqid from "uniqid";

function BookList() {
    const books = useSelector((state) => state.books);
    return (
        <div className="bg-[#f2f2f2] shadow-[0_2px_4px_rgba(0,0,0,0.1)] m-5 p-5 rounded-[5px]">
            <h2 className="font-bold">Список книг</h2>
            {books.length === 0 ? (
                <p>В списке нет книг:</p>
            ) : (
                <ul className="-mx-5 my-5 p-0 list-style: none;">
                    {books.map((book, i) => (
                        <li
                            key={uniqid()}
                            className="flex justify-between items-center w-auto bg-white list-none px-5 py-2.5 border-b-[#ccc] border-b border-solid even:bg-slate-300 hover:bg-slate-500"
                        >
                            <div>
                                {++i}. Название книги:
                                <strong>{book.title}</strong> Автор книги:&nbsp;
                                <strong>{book.author}</strong>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default BookList;
