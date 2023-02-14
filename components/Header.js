import React,{useState, useContext} from "react";
import ReactDOM from "react-dom/client"
import { Link } from "react-router-dom";
import {LOGO} from "../constant"
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import SupportIcon from '@mui/icons-material/Support';
import { useSelector } from "react-redux";
import store from "../utils/store";
import userContext from "../utils/userContext";

export default function Header() {


    const {itemObj} = useSelector(store => store.cart)
    const {user} = useContext(userContext)
    const itemObjValueArray = Object.values(itemObj)
    const cartSize = itemObjValueArray.reduce((acc,item)=>{
        return acc+item
    },0)

    
    return (
        <>
            <div className="flex shadow-lg h-24">
           <Link to = "/"> <img className="w-10 h-14 mt-5 ml-20 hover:scale-110 ease-in-out duration-300" src={LOGO} /></Link>
                <ul className="flex ml-auto mt-12">
                   {user.username != "" && <h4 className="text-orange-400">Welcome {user.username} !</h4> }
                    <li className="mx-12 hover:text-orange-500"><button onClick={()=> setSearchInput(true) }>< SearchIcon/>Search</button></li>
                    <li className="mx-12 hover:text-orange-500"><Link to="/contact"><SupportIcon className="mr-2 mb-1" fontSize="small"/>About</Link></li>
                   {user?.loggedIn ? <li className="mx-12 hover:text-orange-500"><button><PersonIcon  className="mr-2 mb-1" fontSize="medium"/>Log Out</button></li>
                   : <li className="mx-12 hover:text-orange-500"><Link  to="/login"><PersonIcon  className="mr-2 mb-1" fontSize="medium"/>Sign In</Link></li> }
                    <li className="mx-12 hover:text-orange-500"><Link to="/cart">{cartSize}<ShoppingCartIcon  className="mr-2 mb-1" fontSize="small"/>Cart</Link></li>
                </ul>
            </div>
        </>
    )
}