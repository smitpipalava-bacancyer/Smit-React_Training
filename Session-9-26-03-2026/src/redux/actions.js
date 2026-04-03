export const addToCart = (product)=>{
    return {
        type : "addToCartFunction",
        payload : product
    }
}

export const removeFromCart = (productId)=>{
    return {
        type : "removeFromCartFunction",
        payload : productId
    }
}