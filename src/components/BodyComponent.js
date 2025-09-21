import RestaurantsComponent from "./RestaurantsComponent";
import {resList} from "../../utils/mockData";
import { useEffect, useState } from "react";
import Shimmmer from "./Shimmer";
import {Link} from "react-router-dom";

const BodyComponent=()=>{
    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [searchText,setSearchText]=useState("");
    const[filteredList,setFilteredList]=useState([]);
    // let listRestaurants=resList;
    useEffect(()=>{fetchData()},[]);
    const fetchData = async () => {
        const response = await fetch("http://localhost:8080/api/restaurants");
        const json = await response.json(); // parse JSON body
        console.log(json.data);   
        //optional chainings 
        //Whenever a state change happens react will re render the component(triggeres reconciliation cycle)
        setListOfRestaurants(json?.data);  
        setFilteredList(json?.data);      // now you can access restaurants
    };
    
    //conditional rendering
    return listOfRestaurants.length===0?(
        <Shimmmer/>
    ):
    (
        <div className="body"> 
           <div className="filter">
            <div className="filter-rest">
                <input type="text" className="search-input" value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
                <button name="search-btn" onClick={()=>{
                    const fileterdRes=listOfRestaurants.filter((res)=>res.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredList(fileterdRes);
                    }}>Search</button>
            </div>
            
            <button name="filetr-btn" onClick={()=>{let filteredList=listOfRestaurants.filter((restaurant)=>restaurant.avgRating>4)
                console.log(filteredList)
                setFilteredList(filteredList)
            }}>Top Rated Restaurants</button>
           </div>
           <div className="res-container">
            {filteredList.map((restaurant,index)=>{
                return <Link key={restaurant.id} to={"/restaurant/"+index}><RestaurantsComponent key={index} resData={restaurant}/></Link>;
            })}
          </div>

        </div>
    );

};

export default BodyComponent;