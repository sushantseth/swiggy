import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../utils/cartSlice';

const CartList = ({item}) => {

    const dispatch = useDispatch();
    const {itemObj} = useSelector(store => store.cart)

  return (
   <>
    <div key = {item.id} className="flex">
        <h1 className="w-44 my-3 text-sm">{item?.name}</h1>
        <div className="border h-8 mt-1 flex px-4 items-center">
        <button className="text-gray-400" onClick={()=> {
            dispatch(removeItem(item))}}> - </button>
        <p className="mx-3">{itemObj[item.id]}</p>
        <button className="text-green-500" onClick={()=> {
            dispatch(addItem(item))
        }}> + </button>
        </div>
        <h1 className="ml-16 text-sm mt-2">₹ {(item?.price)/100}</h1> 
        </div> 
   </>
  )
}

export default CartList