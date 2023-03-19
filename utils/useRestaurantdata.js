import {useState, useEffect} from "react";
import { HOME_URL } from "../constant";
const useRestaurantdata = () => {
    const [allRestaurant, setallRestaurant] = useState([])
    const [filteredRestaurant, setfilteredRestaurant] = useState([])

    useEffect(() => {
        fetch(HOME_URL).then((response) => response.json()).then((data) => {
            console.log(data)
            setfilteredRestaurant([...data?.data?.cards[2]?.data?.data?.cards])
            setallRestaurant([...data?.data?.cards[2]?.data?.data?.cards])
        })
    }, [])

    return {allRestaurant,filteredRestaurant, setfilteredRestaurant}

}

export default useRestaurantdata;