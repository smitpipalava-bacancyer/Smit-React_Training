import { useState } from "react";

export function useForm(initialValues){
    const [values , setValues] = useState(initialValues);
    
    const handleChange = (e)=>{
        const tagName = e.target.name;

        setValues(prev => ({
            ...prev , 
            [tagName] : e.target.value
        }))

    }


    return {values , handleChange};
}