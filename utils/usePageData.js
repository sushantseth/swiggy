import { useState,useEffect } from "react";
import { DETAIL_PAGE } from "../constant";
const usePageData = (id) => {

    const [pageData, setpageData] = useState({});

    useEffect(()=>{
        fetch(DETAIL_PAGE+id).then((response)=> response.json()).then((data)=> setpageData({...data?.data}) )
    },[])

    return pageData;
}
export default usePageData;