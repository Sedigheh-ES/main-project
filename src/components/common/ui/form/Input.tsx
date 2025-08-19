import { useId } from "react";
import {  UseFormRegisterReturn,FieldErrors } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

interface Props extends React.HtmlHTMLAttributes<HTMLInputElement>
{ 
    type?: "text" | "password" | "email" | "tel" | "number";
    label?: string;
    placeholder?: string;
    register: UseFormRegisterReturn<any>;
     errors:FieldErrors<any>
    
}

export default function Input({ type = "text", label, placeholder = '', register , errors, ...rest}: Props) {
    const id = useId();
    const name = register.name;
    let hasEerror = false;
    if (errors && errors[name]) {
        hasEerror = false;
    }
    return (
        <div className="flex flex-col gap-1 mt-6 items-center">
             <div className="flex flex-row justify-center items-center gap-1 ">
            {label && <label htmlFor={id} className="text-2xl capitalize text-gray-800 w-[120px] text-right">{label}:</label>}
                <input id={id} type={type} {...register}  {...rest}
                    className="border-2 border-gray-300 px-3 py-2 bg-white rounded-xl" />
            </div> 
            <div className="text-red-500 font-medium text-xs capitalize ">
                <ErrorMessage name={name} errors={errors} />
            </div>

       </div>
    )
};