import { useEffect, useState } from "react";
import {useNavbar} from "../CustomHooks/useNavbar";
import { useFetch } from "../CustomHooks/useFetch";
import { RenderData } from "./RenderData";
import { RenderCartData } from "./RenderCartData";
import "../CSS/Home.css";
import { Navbar } from "./Navbar";
import { useSelector } from "react-redux";

export function Home(){
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

    // pagination logic
    let TotalPage = Math.ceil(fetchedData.total / 10);

    const nextPage = () => {
        setCurrentPage(prev => Math.min(TotalPage, prev + 1));
    }

    const prevPage = () => {
        setCurrentPage(prev => Math.max(1, prev - 1));
    }

    const cart = useSelector(state => state.cartData);

    return (
        <>
            <h1>E-Commerce With Redux</h1>

            {/* navbar component */}
            <Navbar />

            <br /><br />

            <h2> Products </h2>
            
            {/* data showing section */}
            <div className="container">
                <div className="mainItems">
                    <RenderData data={fetchedData.products} />
                </div>
                <div className="cartItems">
                    <h2>Cart-items</h2>
                    {cart === "undefined" || null ? "CART IS EMPTY!!" : <RenderCartData cartData = {cart}/>}
                </div>

            </div>

            {/* Pagination Button Section */}
            <div className="PaginationDiv">
                <button onClick={prevPage} disabled = {currentPage == 1}>Prev</button>
                <p>Page : {currentPage} / {TotalPage}</p>
                <button onClick={nextPage} disabled = {currentPage == TotalPage}>Next</button>
            </div>
        </>
    )
}