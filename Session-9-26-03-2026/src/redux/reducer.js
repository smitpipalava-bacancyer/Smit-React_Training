const initialState = {
    cartData : {}
}

export const cartReducer = (state = initialState , action)=>{
    switch(action.type){

        case "addToCartFunction" :{
            const product = action.payload;
            
            return {
                ...state,
                cartData : {
                    ...state.cartData,
                    [product.id] : product
                } 
            }            
        }

        case "removeFromCartFunction" : {
            const id = action.payload;
            
            const newCart = { ...state.cartData};
            delete newCart[id];
            
            return{
                ...state,
                cartData : newCart
            }
        }
        default : 
            return state;
    }
}

