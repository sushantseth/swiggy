import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { EMPTY_CART_IMG } from "../constant";
import { addItem } from "../utils/cartSlice";
import store from "../utils/store"

export default function Cart(){

    const [count, setCount] = useState(1)
    const dispatch = useDispatch();
    const cartitem = useSelector(store => store.cart.items)
    console.log(cartitem)

   const itemTotal = cartitem.map((item)=>{
     return (item?.price)/100
   }).reduce((item, total)=> item + total, 0)

   console.log(itemTotal)
    
    return (
        <>
       {cartitem.length > 0 ?
        <div className="w-fit  flex-col items-center h-auto px-4 py-9 shadow-2xl m-7">
        { cartitem.length > 0 &&
        cartitem?.map((item)=>{
       return( <div key = {item.id} className="flex">
        <h1 className="w-44 my-3 text-sm">{item?.name}</h1>
        <div className="border h-8 mt-1 flex px-4 items-center">
        <button className="text-gray-400"> - </button>
        <p className="mx-3">{count}</p>
        <button className="text-green-500" onClick={()=> {
            setCount(count + 1)
            dispatch(addItem(item))
        }}> + </button>
        </div>
        <h1 className="ml-16 text-sm mt-2">₹ {(item?.price)/100}</h1> 
        </div> 
         ) })
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
    <h1 className="text-lg ml-60 font-bold">₹ {50+itemTotal}</h1>
</div>
</div> 

</div> : <img className="w-auto ml-72 h-auto" src={EMPTY_CART_IMG}/> }
        </>
    )
}