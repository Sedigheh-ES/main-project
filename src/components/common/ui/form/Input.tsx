import { useId } from "react";
import {  UseFormRegisterReturn,FieldErrors } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

interface Props
{ 
    type?: "text" | "password" | "email" | "tel" | "number";
    label?: string;
    placeholder?: string;
    register: UseFormRegisterReturn<any>;
     errors:FieldErrors<any>
    
}

export default function Input({ type = "text", label, placeholder = '', register , errors}: Props) {
    const id = useId();
    const name = register.name;
    let hasEerror = false;
    if (errors && errors[name]) {
        hasEerror = false;
    }
    return (
        <div className="flex flex-col">
             <div className="flex flex-row justify-center items-center">
            {label && <label htmlFor={id}>{label}:</label>}
            <input id={id} type={type} {...register} placeholder={placeholder} />
            </div>
            <div className="text-red-500">
                <ErrorMessage name={name} errors={errors} />
            </div>

       </div>
    )
};