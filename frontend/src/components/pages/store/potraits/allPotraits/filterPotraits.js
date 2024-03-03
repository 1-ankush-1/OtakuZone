import { useLocation, useNavigate } from "react-router-dom";
import ArrowIcon from "../../../../Icons/Arrow";
import SearchIcon from "../../../../Icons/search";
import { useState } from "react";

const FilterProduct = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [showSortOptions, setShowSortOptions] = useState(false);

    // Read query params
    const queryParams = new URLSearchParams(location.search);
    const sortField = queryParams.get("sortBy");
    const order = sortField;

    const navigateBack = () => {
        navigate(-1);
    };

    const handleSortList = (e) => {
        const sortOrder = e.target.name;
        let sortName = "new";
        switch (sortOrder) {
            case "asc":
                sortName = "asc";
                break;
            case "desc":
                sortName = "desc";
                break;
            default:
                break;
        }

        navigate(`/potraits?sortBy=${sortName}`);

        //sort
        if (sortName === "asc") {
            props.onChangeProducts((prev) => {
                return [...prev.sort((a, b) => a.price - b.price)];
            })
        } else if (sortName === "desc") {
            props.onChangeProducts((prev) => {
                return [...prev.sort((a, b) => b.price - a.price)];
            })
        } else {
            //update by date
            props.onChangeProducts((prev) => {
                return [...prev.sort((a, b) => a.createdAt - b.createdAt)];
            })
        }
        handleShowSortOptions();
    };

    const handleShowSortOptions = () => {
        setShowSortOptions((prev) => !prev);
    }

    return (
        <div className="container px-4 md:px-6 py-4">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="grid gap-1">
                    <div className="flex items-center gap-2 text-sm font-medium underline cursor-pointer" onClick={navigateBack}>
                        <ArrowIcon className="w-4 h-4 mr-1.5" />
                        Back
                    </div>
                </div>
                <div className="ml-auto flex gap-4 md:gap-8 shrink-0 text-center">
                    <div className="flex items-center gap-2 border-gray-200 border rounded-sm bg-black">
                        <label className="sr-only" htmlFor="search">
                            Search
                        </label>
                        <input type="text" className="max-w-[300px] w-full h-full focus:outline-none" id="search" placeholder="Search" />
                        <button className="text-white pr-2" variant="outline">
                            <SearchIcon className="w-4 h-" />
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                    <div className="relative">
                        <button type="button" className="inline-flex justify-center items-center gap-1 text-sm font-medium underline cursor-pointer focus:outline-none" id="sort-menu" aria-expanded="false" aria-haspopup="true" onClick={handleShowSortOptions}>
                            Sort by
                            {order === "asc" && <ArrowIcon className="w-4 h-4 mr-1.5 rotate-90" />}
                            {order === "desc" && <ArrowIcon className="w-4 h-4 mr-1.5 -rotate-90" />}
                        </button>
                        {showSortOptions && <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="sort-menu">
                            <div className="py-1" role="none">
                                <button className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" name="new" onClick={handleSortList}>Newest</button>
                                <button className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" name="asc" onClick={handleSortList}>Price: Low to High</button>
                                <button className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" name="desc" onClick={handleSortList}>Price: High to Low</button>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterProduct;