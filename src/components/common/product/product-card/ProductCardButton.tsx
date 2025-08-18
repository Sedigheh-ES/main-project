import { BasketContext } from '@/store/BasketContext'
import { EntityType } from '@/types'
import { ProductType } from '@/types/api/Product'
import React, { useContext } from 'react'
import { IconBox } from '../../ui'
import useBasket from '@/hooks/use-basket'

interface Props {
    productData: EntityType<ProductType>
}
export default function ProductCardButton({ productData }: Props) {
    const { addItem, updateItem, getItem } = useBasket();
    const basketItem = getItem(productData.id);

    // const basket = useContext(BasketContext);
    // const currentProductBasket = basket.getItem(productData.id);


    return (
        <div className="flex justify-center items-center">
            {
                basketItem ?
                    <div className="input-product__container border-[1px] w-[80px] flex justify-between  items-center pt-2 rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px]">
                        <div className="flex flex-col justify-between">
                            <div className='cursor-pointer' onClick={() => { updateItem(productData.id,'increase') }}>
                                <IconBox icon={'up icon-angle-small-up'} size={10} />
                            </div>

                            <div className='cursor-pointer' onClick={() => updateItem(productData.id,'decrease')}>
                                <IconBox icon={'down icon-angle-small-down'} size={10} />
                            </div>
                        </div>
                        {basketItem.quantity}
                    </div>
                    :
                    <button
                        onClick={() => addItem(productData.id)}
                        className="bg-[#DEF9EC] text-[#3BB77E] text-sm flex items-center justify-center px-3 py-2 gap-0.5 cursor-pointer">
                        Add  <IconBox icon={"icon-add text-[12px]"} size={16} />
                    </button>
            }
        </div>
    )
}
