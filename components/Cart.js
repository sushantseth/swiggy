import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { EMPTY_CART_IMG } from "../constant";
import { addItem, removeItem } from "../utils/cartSlice";
import store from "../utils/store"
import CartList from "./CartList";

export default function Cart(){

    const {items, itemObj} = useSelector(store => store.cart)
    let distitems = [...new Set(items)]
    console.log(distitems)
   let itemTotal = distitems?.map((item)=>{
     return (item?.price)/100 * itemObj[item?.id]
   }).reduce((item, total)=> item + total, 0)

   console.log(itemTotal)
   itemTotal = (Math.round(itemTotal * 100) / 100)
    
    return (
        <>
       {distitems.length > 0 ?
        <div className="w-fit  flex-col items-center h-auto px-4 py-9 shadow-2xl m-7">
        { distitems.length > 0 &&
        distitems?.map((item)=>{
       return   <CartList item = {item} key = {item.id}/>
       
       })
}
<div>
<h1 className="mt-10 font-bold">Bill Details</h1>
<div className="flex mt-5">
<h1 className="text-sm font-normal">Item Total</h1>
<h1 className="text-sm ml-64 font-normal">₹ {itemTotal}</h1>
</div>
<div className="flex mt-3">
<h1 className="text-sm font-normal">Delivery Fee</h1>
<h1 className="text-sm ml-60 font-normal">₹ 50</h1>
</div>
<hr className="mt-5"></hr>
<div className="flex mt-7">
    <h1 className="text-lg font-bold">TO PAY</h1>
    <h1 className="text-lg ml-60 font-bold">₹ {50 + Number(itemTotal)}</h1>
</div>
</div> 

</div> : <img className="w-auto ml-72 h-auto" src={EMPTY_CART_IMG}/> }
        </>
    )
}