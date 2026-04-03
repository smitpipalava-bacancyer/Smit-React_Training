import { useState } from "react";

export function useValidate(initialValues, fields) {
    const [errors, setErrors] = useState(initialValues);

    const handleValidation = (e) => {

        const { name, value } = e.target;
        let error = "";

        const field = fields.find(field => field.name === name);

        if (!field) return;

        for (let rule of field.validations) {

            if (rule.type === "required" && !value) {
                error = rule.message;
                break;
            }

            if (rule.type === "minLength" && value.length < rule.value) {
                error = rule.message;
                break;
            }

            if (rule.type === "maxLength" && value.length > rule.value) {
                error = rule.message;
                break;
            }
            
            if (rule.type === "min" && value < rule.value) {
                error = rule.message;
                break;
            }
            
            if (rule.type === "max" && value > rule.value) {
                error = rule.message;
                break;
            }

            if (rule.type === "includes" && !value.includes(rule.value)) {
                error = rule.message;
                break;
            }
        }

        setErrors(prev => ({
            ...prev,
            [name]: error
        }));
    };

    const handleSubmit = (values) => {
        let newErrors = {};

        fields.forEach((field) => {
            const value = values[field.name];
            let error = "";

            for (let rule of field.validations) {
                if (rule.type === "required" && !value) {
                    error = rule.message;
                    break;
                }
                if (rule.type === "minLength" && value.length < rule.value) {
                    error = rule.message;
                    break;
                }
                if(rule.type === "maxLength" && value.length > rule.value){
                    error = rule.message;
                    break;
                }
            }

            if (error) {
                newErrors[field.name] = error;
            }
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form Submitted", values);
        }
    };

    return { errors, handleValidation , handleSubmit };
}