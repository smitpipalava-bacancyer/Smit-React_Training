import { useCartList } from "../CustomHooks/useCartList";

export function Card2({props ,id}){
    const { cartListArray , setCartListArray } = useCartList();
    
    console.log(Object.values(cartListArray));

    const RemoveFromCart = ()=>{
        setCartListArray({...Object.values(cartListArray).filter((element)=> element.id != id)})
    }

    return(
        <>
            <div className="Card">
                <img src={props.thumbnail} alt="Product_Image" height={"100px"}/>
                <p>Title : {props.title}</p>
                <br />
                <p>category :{props.category}</p>
                <p>Price :${props.price}</p>
                <p>Rating : {props.rating}</p>
                <button onClick={RemoveFromCart}>Remove From Cart</button>
            </div>
        </>
    )
}