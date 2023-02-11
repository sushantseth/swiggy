import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import {DETAIL_PAGE, CLOUD_IMG} from "../constant"
import { addItem } from "../utils/cartSlice";
import usePageData from "../utils/usePageData";

export default function RestaurantDetail(){

    const {id} = useParams();
    const pageData =  usePageData(id)

    const dispatch = useDispatch();


 

    return(
        <>
        <div>
            <div className="bg-gray-900 mt-6 h-60 flex">
   
            <img className="max-h-40 m-8" src={CLOUD_IMG+pageData?.cloudinaryImageId} />
            <div className="m-16">
            <h1 className="text-white text-3xl">{pageData?.name}</h1>
            <p className="text-white text-xl font-thin">Rating : {pageData?.avgRating} </p>
            <p className="text-white text-l font-thin">Delivery Time : {pageData?.sla?.slaString}</p>
            <p className="text-white text-l font-thin">Cost: {pageData?.costForTwoMsg}</p>
            </div>
         
         
            </div>
            <div className="text-center">
            <h4 className="text-3xl mb-8"> -  Menu items  - </h4>
            {pageData?.menu?.items && Object.values(pageData?.menu?.items).slice(0,10).map((item, index)=>{
                return(
                <div key = {item.id} className="flex justify-center my-7">
                <p key = {item.id}>{item.name}</p>
                <button onClick={()=> dispatch(addItem(item))} className="bg-orange-200 ml-5 w-8 h-6 rounded-full">+</button>
                </div>)
            })}
            </div>

        </div>
        </>
    )
}