import {
    setTitleFilter,
    resetTitle,
    setShowFavorites,
} from "../../redux/books/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaDeleteLeft } from "react-icons/fa6";

function Filter() {
    const dispatch = useDispatch();
    const title = useSelector((state) => state.filter.title);
    // const isShowOnlyFavourites = useSelector(
    //     (state) => state.filter.isShowOnlyFavourites
    // );

    return (
        <div className="bg-[#f2f2f2] shadow-[0_2px_4px_rgba(0,0,0,0.1)] m-5 p-5 rounded-[5px]">
            <div className="flex items-center gap-3 w-full ju">
                <input
                    type="text"
                    placeholder="найти книгу"
                    value={title}
                    onChange={(e) => dispatch(setTitleFilter(e.target.value))}
                    className="w-1/2 border p-2 rounded-[3px] border-solid border-[#ccc]"
                />
                <button onClick={() => dispatch(resetTitle())}>
                    <FaDeleteLeft className="w-10 h-10 cursor-pointer  hover:text-orange-400" />
                </button>
                <button
                    onClick={() => dispatch(setShowFavorites())}
                    className="ml-auto border border-stone-300 p-3 rounded-md  hover:bg-orange-400"
                >
                    Показать только избранные
                </button>
            </div>
        </div>
    );
}

export default Filter;
