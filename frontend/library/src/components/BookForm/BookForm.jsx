import { useState } from "react";

function BookForm() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && author) {
            setTitle("");
            setAuthor("");
        }
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
                        className=" w-4/5 border mb-2.5 p-2 rounded-[3px] border-solid border-[#ccc]"
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
                        Add Book
                    </button>
                </div>
            </form>
        </div>
    );
}

export default BookForm;
