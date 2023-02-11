import ReactDOM from "react-dom/client";
import App from "./app";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact"
import ErrorComponent from "./components/ErrorComponent";
import Home from "./components/home";
// import RestaurantDetail from "./components/RestaurantDetail";
import LoginorSignup from "./components/Login";
import Profile from "./components/Profile";
import { lazy, Suspense } from "react";
import Cart from "./components/Cart";

const RestaurantDetail = lazy(()=> import("./components/RestaurantDetail"))


let appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorComponent />,
        children: [

            {
                path: "/",
                element: <Home />
            }, {
                path: "about",
                element: <About />,
                children: [
                    {
                        path: "profile",
                        element: <Profile />
                    }
                ]

            }, {
                path: "contact",
                element: <Contact />

            }, {
                path: "restaurantDetail/:id",
                element: 
                <Suspense fallback ={<h1>Loading page ....</h1>}>
                <RestaurantDetail />
                </Suspense>
            },{
                path:"/cart",
                element : <Cart />
            },
            {
                path:"/login",
                element:<LoginorSignup />
            }]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)