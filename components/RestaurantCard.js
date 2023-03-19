import {Link} from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';

export default function RestaurantCard({data}){

const cloudinaryImageId = data?.cloudinaryImageId;
const name = data?.name?.substring(0,33);
const cuisines = data?.cuisines?.join(", ");
const costForTwoString = data?.costForTwoString;
const deliveryTime = data?.deliveryTime;
const avgRating = data?.avgRating;
const id = data?.id;
    return(
        <>
        <Link to = {"restaurantDetail/"+id} >
        <div className="m-7 w-64 h-72 shadow-lg hover:scale-110 ease-in-out duration-500 rounded-lg">
            <img className="max-h-40 w-auto" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}/>
            <h4 className=" mt-3 font-normal">{name}</h4>
            <p className="font-thin text-xs">{cuisines}</p>
            <div className="flex mt-8 content-between">
          {avgRating && parseInt(avgRating) >= 4 ? <span className="ml-1 text-xs pr-1 bg-green-500 text-white"> <StarIcon fontSize="small"/>{avgRating}</span> : <span className="ml-1 text-xs pr-1 bg-yellow-600 text-white"> <StarIcon fontSize="small"/>{avgRating}</span>}
            <p className="ml-6 text-xs font-light"> {deliveryTime} MINS</p>
            <p className="ml-10 text-xs font-light">{costForTwoString}</p>
            </div>
        </div>
        </Link>
        </>
    )
}