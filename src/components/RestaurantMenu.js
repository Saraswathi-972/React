import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const {id}=useParams();
    console.log(id);
    
    const restaurantId = Number(id) + 1;
    const [menu,setMenu]=useState({});
    useEffect(()=>{fetchMenu()},[]);

    const fetchMenu = async () => {
        const data =await fetch(`http://localhost:8080/api/restaurant/${restaurantId}`);
        const json = await data.json();
        console.log(json);
        setMenu(json);
       
    }

    
    
    return (
        <div>
            <h1>Restaurant Name:{menu.name}</h1>
            <h2>Menu</h2>
            <ul>
               <li>Burger</li>
               <li>Biryani</li>
               <li>Piza</li>
            </ul>
        </div>
    );
}

export default RestaurantMenu;