import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../utils/cartSlice'

const MenuItemCard = ({ item }) => {

    const dispatch = useDispatch()
    const { itemObj } = useSelector(store => store.cart)
    return (
        <>
            <div key={item?.id} className="flex my-12 justify-between mx-96">
                <div className='flex flex-col justify-start text-left w-80'>
                <p className='font-medium pb-6' key={item?.id}>{item?.name}</p>
                <p className='mb-4'>₹ {item?.price ? (item?.price)/100 : (item?.defaultPrice)/100 }</p>
                <p className='font-thin text-sm'>{item?.description}</p>
                </div>
                <div className="border h-8 mt-1 flex px-4 items-center">
                    <button className="text-gray-400" onClick={() => {
                        dispatch(removeItem(item))
                    }}> - </button>
                   {itemObj[item?.id] == undefined ?  <p className="mx-3">0</p> : <p className="mx-3">{itemObj[item?.id]}</p>} 
                    <button className="text-green-500" onClick={() => {
                        dispatch(addItem(item))
                    }}> + </button>
                </div>
            </div>
            <hr className='m-auto w-3/6'></hr>
        </>
    )
}

export default MenuItemCard