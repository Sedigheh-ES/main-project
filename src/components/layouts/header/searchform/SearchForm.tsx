
import { getAllProductsApiCall } from "@/api/Product";
import { IconBox } from "@/components/common";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";
import useDebounce from "@/hooks/use-debounce";




interface Props{
    inputClassName?:string
}

interface FormInput{
    search_text:string
}
interface FiltersData{
    title: {
        $containsi:string
    }
}
export function SearchForm({ inputClassName = '' }: Props) {
    
    const [resultData, setResultData] = useState<Array<EntityType<ProductType>>>([]);
    const { register, handleSubmit,watch } = useForm<FormInput>();

    const mutation = useMutation({ mutationFn: (data:FiltersData) => getAllProductsApiCall({ filters: data }) });

 const search_text = watch("search_text");
    useEffect(() => {    
        if (search_text && search_text.length > 1) {
            delay();
        } else {
            setResultData([]);
        }
    }, [search_text]);

  
    
    const onSubmit = (data: FormInput) => {   
        mutation.mutate({
            title: {
                '$containsi': data.search_text
            }
        }, {
            onSuccess: (response) => {
                console.log(response);
                setResultData(response.data)
            }
        }
            
        )
    }

 const delay = useDebounce(handleSubmit(onSubmit), 1000);

  
    return (
        <div className="relative border-2 border-[#3BB77E] rounded-lg max-w-[700px] w-full mx-[15px] px-[15px] hidden lg:inline-block">
            <form name="search-form" onSubmit={handleSubmit(onSubmit)} action="#" className="flex items-center">
                <input type="text" {...register('search_text')} name="search_text" placeholder="search for items"
                    className="text-sm text-gray-400 w-full py-[15px] focus:outline-none"
                />
                <button type="submit"><IconBox icon={'icon-search'} /></button>
            </form>
            {
                resultData && 
                <div className={"absolute bg-white w-full left-0 right-0 top-15"}>
                        <ul>
                        {
                            resultData.map((item: EntityType<ProductType>, index) => {
                                return <li className={"p-4 hover:bg-green-200 hover:text-white cursor-pointer"}>{item.attributes.title }</li>
                            })
                            }
                            </ul>
                </div>
            }
        </div>
    );
}
