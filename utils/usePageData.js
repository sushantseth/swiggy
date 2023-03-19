import { useState,useEffect } from "react";
import { DETAIL_PAGE } from "../constant";
const usePageData = (id) => {

    const [pageData, setpageData] = useState({});
    const [restHeader,setRestHeader] = useState({})

    useEffect(()=>{
        fetch(DETAIL_PAGE+id).then((response)=> response.json()).then((data)=> {
            let result;
            result =  data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
            console.log(result)
            setRestHeader(data?.data?.cards[0]?.card?.card?.info)
           if(result === undefined || result === null){
            console.log("inside und")
             result = data?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.categories[0]?.itemCards
             console.log(result)

             setRestHeader(data?.data?.cards[0]?.card?.card?.info)
           }

           return setpageData(result)
         })
    },[])
    
    return {pageData, restHeader};
}
export default usePageData;


// setpageData(data?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.categories[0]?.itemCards)