import { Card2 } from "./Card2";

export function RenderCartData({ cartData }) {
    const cartItems = Object.values(cartData);
    return (
        <>
            {!cartItems ?   
                <h2>Loading ...</h2>
                : cartItems.length === 0 ?
                    <h2> Cart Empty!! ...</h2>
                    :
                    cartItems.map((element) => {
                        return <Card2 key={element.id} props={element} id={element.id} />
                    })
            }
        </>
    )
}