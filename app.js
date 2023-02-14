import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import Footer from "./components/footer";
import Header from "./components/Header";
import Home from "./components/home";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux"; 
import store from "./utils/store";
import userContext from "./utils/userContext";


export default function App(){

    const [user, setUser] = useState({
        username:"",
        password:"",
        loggedIn:false
    })
    

    return(
        <Provider store = {store}>
        <userContext.Provider value = {{ user, setUser}}>
        <Header />
        <Outlet />
        <Footer />
        </userContext.Provider>
        </Provider>
    )
}

