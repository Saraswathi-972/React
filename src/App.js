import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import AppHeader from "./components/AppHeader";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";

const AppComponent = ()=>{
    return (
        <div> 
        <AppHeader></AppHeader>
        <Outlet/>
        </div>
    );
};

//Lazy loading
const Grocery=lazy(()=>import("./components/Grocery"));

const appRouter = createBrowserRouter([
    {path: "/", element: <AppComponent/>,
        children:[
            {path: "/", element: <BodyComponent/>},
            {path: "/about", element: <About/>},
            {path: "/contact", element: <Contact/>},
             {path: "/grocery", element: <Suspense fallback={"Loading......"}><Grocery/></Suspense>},
            {path: "/restaurant/:id", element: <RestaurantMenu/>}
        ],
        errorElement:<Error/>}
]);
// This is the entry point of the React application
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);