import { useEffect, useState } from "react"
import { useFetch } from "../CustomHooks/useFetch";
import { RenderData } from "./RenderData";

import "./Home.css"
import { Navbar } from "./Navbar";
import { useNavbar } from "../CustomHooks/useNavbar";
import { useCartList } from "../CustomHooks/useCartList";
import { RenderCartData } from "./RenderCartData";

export function Home() {
    // all state variable
    const [currentPage, setCurrentPage] = useState(1);
    const [url, setUrl] = useState("https://dummyjson.com/products?limit=10&skip=0");
    const { data } = useNavbar();

    // URL Modification
    useEffect(() => {
        let newUrl = "";
        const skipValue = (currentPage - 1) * 10;

        if (data.searchInput) {
            newUrl = `https://dummyjson.com/products/search?q=${data.searchInput}&limit=10&skip=${skipValue}`;
            
            if (data.sortBy && data.order) {
                newUrl += `&sortBy=${data.sortBy}&order=${data.order}`;
            }
        }
        else {
            newUrl = `https://dummyjson.com/products?limit=10&skip=${skipValue}`;
            
            if (data.sortBy && data.order) {
                newUrl += `&sortBy=${data.sortBy}&order=${data.order}`;
            }
        }
        
        if(data.category){
            newUrl = `https://dummyjson.com/products/category/${data.category}`;
        }

        setUrl(newUrl);
    }, [currentPage, data]);


    // Actual data fetching 
    const [fetchedData, error] = useFetch(url);

    // Cart Data Fetching
    const { cartListArray , setCartListArray } = useCartList();






    // pagination logic
    let TotalPage = Math.ceil(fetchedData.total / 10);

    const nextPage = () => {
        setCurrentPage(prev => Math.min(TotalPage, prev + 1));
    }

    const prevPage = () => {
        setCurrentPage(prev => Math.max(1, prev - 1));
    }

    const calculatePrice = ()=>{
        return (Object.values(cartListArray).reduce((acc,curr)=>{
            return acc += curr.price;
        },0)).toFixed(2);
    }

    return (
        <>
            {/* navbar which includes the search , sorting Functionality */}
            <Navbar />

            <br /><br />

            {/* data showing section */}
            <h1>Products </h1>
            <div className="Container">
                <div className="RenderActualData">
                    <RenderData data={fetchedData.products} />
                </div>
                <div className="CartData">
                    <h1>CartItem</h1>
                    <p>CartPrice : {calculatePrice()}</p>
                    <RenderCartData data={cartListArray} />
                </div>
            </div>


            <br />



            {/* Pagination Button Section */}
            <div className="PaginationDiv">
                <button onClick={prevPage} disabled = {currentPage == 1}>Prev</button>
                <p>Page : {currentPage} / {TotalPage}</p>
                <button onClick={nextPage} disabled = {currentPage == TotalPage}>Next</button>
            </div>
        </>
    )
}