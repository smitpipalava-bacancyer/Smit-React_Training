import { useDispatch } from "react-redux"
import { removeFromCart } from "../redux/actions";

export function Card2({props ,id}){
    const dispatch = useDispatch();

    return(
        <>
            <div className="Card">
                <img src={props.thumbnail} alt="Product_Image" height={"100px"}/>
                <p>Title : {props.title}</p>
                <br />
                <p>category :{props.category}</p>
                <p>Price :${props.price}</p>
                <p>Rating : {props.rating}</p>
                <button onClick={()=>{dispatch(removeFromCart(props.id))}}>Remove From Cart</button>
            </div>
        </>
    )
}