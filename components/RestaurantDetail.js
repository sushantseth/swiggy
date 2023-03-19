import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import {DETAIL_PAGE, CLOUD_IMG} from "../constant"
import { addItem } from "../utils/cartSlice";
import usePageData from "../utils/usePageData";
import MenuItemCard from "./MenuItemCard";

export default function RestaurantDetail(){

    const {id} = useParams();
    const {pageData, restHeader} =  usePageData(id)

    const dispatch = useDispatch();

    return(
        <>
        <div>
            <div className="bg-gray-900 mt-6 h-60 flex items-center">
   
            <img className="max-h-40 m-8" src={CLOUD_IMG+restHeader?.cloudinaryImageId} />
            <div className="m-16">
            <h1 className="text-white text-3xl font-light">{restHeader?.name}</h1>
            <div className="flex pt-9">
            <p className="text-white mr-5 text-sm font-thin">Rating : {restHeader?.avgRating}</p>
            <p className="px-6 text-white">|</p>
            <p className="text-white mr-5 text-sm font-thin">Delivery Time : {restHeader?.sla?.slaString}</p>
            <p className="px-6 text-white">|</p>
            <p className="text-white mr-5 text-sm font-thin">Cost: {restHeader?.costForTwoMessage}</p>
            </div>
            </div>
         
         
            </div>
            <div className="text-center" data-testid = "menucard">
            <h4 className="text-3xl my-8 font-thin"> -  Menu items  - </h4>
            {pageData.length > 0 && pageData?.map((item, index)=>{
                return(<MenuItemCard key = {item?.card?.info?.id} item = {item?.card?.info}/>)
            })}
            </div>

        </div>
        </>
    )
}