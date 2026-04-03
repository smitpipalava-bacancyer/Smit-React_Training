import { useDispatch, useSelector } from "react-redux"
import "../CSS/Card.css"
import { addToCart } from "../redux/actions";

export function Card({props , id}){
    const cart = useSelector(state => state.cartData);


    const dispatch = useDispatch();

    return (
        <>
            <div className="Card">
                <img src={props.thumbnail} alt="Product_Image" height={"100px"}/>
                <p>Title : {props.title}</p>
                <br />
                <p>category :{props.category}</p>
                <p>Price :${props.price}</p>
                <p>Rating : {props.rating}</p>
                {/* <button onClick={()=>dispatch({
                    type : "addToCartFunction",
                    payload: props    
                })}>Add to Cart</button> */}
                <button onClick={()=> dispatch(addToCart(props))}>Add to Cart</button>
            </div>
        </>
    )
}