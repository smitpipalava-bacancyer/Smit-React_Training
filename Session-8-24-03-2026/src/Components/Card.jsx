import { useCartList } from "../CustomHooks/useCartList";
import "./Card.css"

export function Card({props , id}){
    const { cartListArray , setCartListArray } = useCartList();
    const AddToCart = ()=>{
        Object.keys(cartListArray).includes(String(id)) ? console.log("alreay there") : setCartListArray(prev => ({
            ...prev,
            [id]:props
        })) 
        console.log(cartListArray);
    }
    return (
        <>
            <div className="Card">
                <img src={props.thumbnail} alt="Product_Image" height={"100px"}/>
                <p>Title : {props.title}</p>
                <br />
                <p>category :{props.category}</p>
                <p>Price :${props.price}</p>
                <p>Rating : {props.rating}</p>
                <button onClick={AddToCart} disabled = {Object.keys(cartListArray).includes(String(id))}>Add to Cart</button>
            </div>
        </>
    )
}