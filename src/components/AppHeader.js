import { useState, useContext } from "react";
import {LOGO_URL} from "../../utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/userContext";
import { useSelector } from "react-redux";

const AppHeader=()=>{
  const [btnName,setBtnName]=useState("Login");
  const onlineStatus=useOnlineStatus();
  const data=useContext(UserContext);


// subscribing to the store using selector
  const cartItems=useSelector((store)=>store.cart.items);
  console.log("cart items",cartItems);

    return (
        <div className="header">
    <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo"></img>
    </div>
    <div className="nav-items">
      <ul>
        <li className="OnlineStatus">OnlineStatus:{onlineStatus?"✅":"🔴"}</li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/grocery">Grocery</Link></li>
        <li className="cart">Cart ({cartItems.length} items)</li>
        <button className="login-btn" onClick={()=>btnName==="Login"?setBtnName("LogOut"):setBtnName("Login")}>{btnName}</button>
        <li>{data.loggedInUser}</li>
      </ul>
    </div>
    </div>
    );
};

export default AppHeader;