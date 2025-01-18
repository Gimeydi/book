import { FaDeleteLeft } from "react-icons/fa6";

import { useDispatch, useSelector } from "react-redux";
import {
    setTitleFilter,
    setAuthorFilter,
    setOnlyFavoriteFilter,
    resetFilters,
} from "../../redux/slices/filterSlice";

// <== import subscriptions ==>
import {
    selectTitleFilter,
    selectAuthorFilter,
    selectOnlyFavoriteFilter,
} from "../../redux/slices/filterSlice";

function Filter() {
    const dispatch = useDispatch();

    // subscriptions
    const titleFilter = useSelector(selectTitleFilter);
    const authorFilter = useSelector(selectAuthorFilter);
    const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);

    // functions
    const handleTitleFilterChange = (e) => {
        dispatch(setTitleFilter(e.target.value));
    };

    const handleAuthorFilterChange = (e) => {
        dispatch(setAuthorFilter(e.target.value));
    };

    const handleOnlyFavoriteFilterChange = () => {
        dispatch(setOnlyFavoriteFilter());
    };

    const handleResetFilters = () => {
        dispatch(resetFilters());
    };

    return (
        <div className="bg-[#f2f2f2] shadow-[0_2px_4px_rgba(0,0,0,0.1)] m-5 p-5 rounded-[5px]">
            <div className="flex items-center gap-3 w-full ju">
                <input
                    type="text"
                    placeholder="Найти книгу по названию"
                    value={titleFilter}
                    onChange={handleTitleFilterChange}
                    className="w-1/2 border p-2 rounded-[3px] border-solid border-[#ccc]"
                />

                <input
                    type="text"
                    placeholder="Найти книгу по автору"
                    value={authorFilter}
                    onChange={handleAuthorFilterChange}
                    className="w-1/2 border p-2 rounded-[3px] border-solid border-[#ccc]"
                />

                <div>
                    <label className="flex cursor-pointer">
                        <input
                            type="checkbox"
                            checked={onlyFavoriteFilter}
                            onChange={handleOnlyFavoriteFilterChange}
                            className="cursor-pointer"
                        />
                        <p>Показать избранные</p>
                    </label>
                </div>

                <button
                    onClick={handleResetFilters}
                    className="ml-auto border border-stone-300 p-3 rounded-md
                    hover:bg-orange-400"
                >
                    Сбросить фильтры
                </button>
            </div>
        </div>
    );
}

export default Filter;
