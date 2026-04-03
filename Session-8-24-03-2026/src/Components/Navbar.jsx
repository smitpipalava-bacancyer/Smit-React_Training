import { useContext, useEffect, useState } from "react"
import "./Navbar.css"
import { useDebounced } from "../CustomHooks/useDebounced";
import { useNavbar } from "../CustomHooks/useNavbar";
import { useFetch } from "../CustomHooks/useFetch";

export function Navbar() {
    const { setData } = useNavbar();

    const [inputValue, setInputValue] = useState("");
    const finalValue = useDebounced(inputValue, 500);

    useEffect(() => {
        setData((prev) => ({
            ...prev,
            searchInput: finalValue
        }))
    }, [finalValue]);

    const handleSortChange = (e) => {
        if(!e.target.value) return;
        setData((prev) => ({
            ...prev,
            sortBy: e.target.value
        }))
    }

    const handleOrderChange = (e) => {
        if(!e.target.value) return;
        setData((prev) => ({
            ...prev,
            order: e.target.value
        }))
    }
    
    const handleCategoryChange = (e) => {
        setData((prev) => ({
            ...prev,
            category: e.target.value
        }))
    }


    const categoriesData = useFetch(`https://dummyjson.com/products/category-list`);
    return (
        <>
            <nav >
                <div>
                    <label htmlFor="SearchInput">Search Item : </label>
                    <input type="text" id="SearchInput" onChange={(e) => setInputValue(e.target.value)} placeholder="Search..." />
                </div>

                <div className="SortingDiv">
                    <label htmlFor="SortBy">Choose Sorting Method:</label>
                    <select name="SortBy" id="SortBy" onChange={handleSortChange}>
                        <option value="">Select</option>
                        <option value="price">Sort By Price</option>
                        <option value="rating">Sort By Ratings</option>
                    </select>
                </div>

                <div className="SortingDiv">
                    <label htmlFor="Order">Choose Order Method:</label>
                    <select name="Order" id="Order" onChange={handleOrderChange}>
                        <option value="">Select</option>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>

                <div className="SortingDiv">
                    <label htmlFor="Category">Category Wise Filter:</label>
                    <select name="Category" id="Category" onChange={handleCategoryChange}>
                        <option value="">Select</option>
                        {!categoriesData[0] ?
                            <option>Loading ...</option>
                            : categoriesData[0].length === 0 ?
                                <option> No categories Found!! ...</option>
                                :
                                categoriesData[0].map((element,index) => {
                                    return <option key={index} value={element}>{element}</option>
                                })
                        }
                    </select>

                </div>
            </nav>
        </>
    )
}