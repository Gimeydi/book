import BookList from "./components/BookList/BookList";
import BookForm from "./components/BookForm/BookForm";
import Filter from "./components/Filter/Filter";

function App() {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <header className="bg-[#0a1a2d] text-white w-full mb-5 h-20 flex items-center justify-center">
                <h1 className="font-bold text-4xl">Book Library App</h1>
            </header>

            <main className="flex justify-between w-4/5 mx-auto my-0">
                <div className="flex-1 basis-[35%] flex items-center self-start">
                    <BookForm />
                </div>

                <div className="flex-1 basis-[65%] flex flex-col">
                    <Filter />
                    <BookList />
                </div>
            </main>
        </div>
    );
}

export default App;
