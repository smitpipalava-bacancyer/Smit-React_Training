import { useReducer } from "react";

const initialState = {
    name : "",
    email : ""
}

function reducer(state , action){
    return{
        ...state,
        [action.field] : action.value
    }
}

export default function Task6_1() {
    const [state , dispatch] = useReducer(reducer , initialState);

    return (
        <>
            <input type="text" placeholder="Enter name" value={state.name} onChange={(e)=>dispatch({ field : "name" , value : e.target.value})}/>
            <input type="email" placeholder="Enter Email" value={state.email} onChange={(e)=>dispatch({ field : "email" , value : e.target.value})}/>

            <br />
            <br />
            <h3>Name : {state.name}</h3>
            <h3>Email : {state.email}</h3>
        </>
    )
}