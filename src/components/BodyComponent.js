import RestaurantsComponent from "./RestaurantsComponent";
import {resList} from "../../utils/mockData";
import { useState } from "react";

const BodyComponent=()=>{
    const [listOfRestaurants,setListOfRestaurants]=useState(resList);
    // let listRestaurants=resList;
    return(
        <div className="body"> 
           <div className="filter">
            <button name="filetr-btn" onClick={()=>{let filteredList=listOfRestaurants.filter((restaurant)=>restaurant.avgRating>4)
                console.log(filteredList)
                setListOfRestaurants(filteredList)
            }}>Top Rated Restaurants</button>
           </div>
           <div className="res-container">
            {listOfRestaurants.map((restaurant,index)=>{
                return <RestaurantsComponent key={index} resData={restaurant}/>;
            })}
          </div>

        </div>
    );

};

export default BodyComponent;