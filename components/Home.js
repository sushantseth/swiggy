import { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import restaurantSearch from "../utils/restaurantSearch";
import useRestaurantdata from "../utils/useRestaurantdata";
import userContext from "../utils/userContext";



export default function Home() {

    const [searchText, setsearchText] = useState("")
    const [button, setButton] = useState(false)

    const {allRestaurant,filteredRestaurant, setfilteredRestaurant} = useRestaurantdata()

    const user = useContext(userContext)
        console.log(user)

    return (
        <>
    
            <div className="m-5">
                <input data-testid = "input" className="p-4 border mr-3 ml-[450] mt-10 outline-orange-500 w-96 shadow-lg" onChange={(e) => {
                    setButton(false)
                    setsearchText(e.target.value)

                }} placeholder="Try pizza.." value={searchText} />
                <button data-testid = "search-btn" className= "bg-orange-500 text-white p-4 rounded-lg" onClick={() => {
                    let data = restaurantSearch(searchText, allRestaurant)
                    setfilteredRestaurant([...data])
                    setButton(true)
                }}> Search </button>
                <div  className="flex flex-wrap justify-between m-16" data-testid = "restList">
                    {button ? filteredRestaurant?.length > 0 ? filteredRestaurant.map((item) => {
                        return <RestaurantCard data={item?.data} key={item?.data?.id}><Link to= {"/"+item?.data?.id} ></Link></RestaurantCard>
                    }) : <p className="text-xl font-normal">No Restaurant found.. try searching with a different name</p> : allRestaurant?.length > 0 ? allRestaurant.map((item) => {
                        return <RestaurantCard data={item?.data} key={item?.data?.id}><Link to= {"/"+item?.data?.id} ></Link></RestaurantCard>
                    }) : <Shimmer />}
                </div>
            </div>
        </>
    )
}