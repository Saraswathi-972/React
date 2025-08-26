import React from "react";
import ReactDOM from "react-dom/client";
import AppHeader from "./components/AppHeader";
import BodyComponent from "./components/BodyComponent";



const AppComponent = ()=>{
    return (
        <div> 
        <AppHeader></AppHeader>
        <BodyComponent/>
        </div>
    );
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent/>);