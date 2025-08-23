import React from "react";
import ReactDOM from "react-dom/client";

const AppHeader=()=>{
    return (
        <div className="header">
    <div className="logo-container">
        <img className="logo" src="https://img.freepik.com/free-vector/food-delivery-logo-template_23-2148487396.jpg" alt="logo"></img>
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
    </div>
    );
};
const styleCard={
    backgroundColor:"#f0f0f0"
}

const resList=[
  {
  "id": "65797",
  "name": "Leon's - Burgers & Wings (Leon Grill)",
  "cloudinaryImageId": "r4ufflqojich0r29efvc",
  "locality": "Koramangala",
  "areaName": "Koramangala",
  "costForTwo": "₹300 for two",
  "cuisines": ["American", "Snacks", "Turkish"],
  "avgRating": 4.3,
  "base_price": 140,
  "final_price": 140,
  "city":"Bangalore",
  "feeDetails": {
    "restaurantId": "65797",

    "fees": [
      {
        "name": "BASE_TIME"
      },
      {
        "name": "BASE_DISTANCE",
        "fee": 3300
      },
      {
        "name": "ANCILLARY_SURGE_FEE"
      }
    ],
    "totalFee": 3300
  },
  "parentId": "371281",
  "avgRatingString": "4.3",
  "totalRatingsString": "10K+",
  "sla": {
    "deliveryTime": 19,
    "lastMileTravel": 1.3,
    "serviceability": "SERVICEABLE",
    "slaString": "19 mins",
    "lastMileTravelString": "1.3 km",
    "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
    "nextCloseTime": "2023-07-30 04:00:00",
    "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
    "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
    }
  },
  "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
  },
  "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
  },
  "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
    }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
},
{
        "id": "142670",
        "lat": "17.40659618",
        "lng": "78.46161014",
        "phone_no": "8886007865",
        "address": "6-2-971,Lakdikapool,Hyd",
        "name": "Shah Ghouse Hotel & Restaurant",
        "third_party_vendor_type": null,
        "base_price": 160,
        "final_price": 160,
        "cloudinary_image_id": "bk26jkkqpg55veii0aj9",
        "slug": "shah-ghouse-cafe-restaurant-lakdikapool-nampally",
        "city": "Hyderabad",
        "area_name": "Banjara Hills",
        "sla": {
          "slaString": "ETA 45-50 MINS"
        },
        "closing_in_ms": 0,
        "availability": null,
        "special_instructions_opted": false,
        "restaurant_special_instruction": "Restaurant usually does not take requests. Complaints may not be possible to refund."
      },
	  {
        "id": "335401",
        "lat": "17.41865074",
        "lng": "78.4449978",
        "phone_no": "9704026798",
        "address": "Plot No.98, Rd Number 7, Imam Khomeini Rd",
        "name": "Pakka local",
        "third_party_vendor_type": null,
        "base_price": 250,
        "final_price": 250,
        "cloudinary_image_id": "kcbq5wyewlprcllphipc",
        "slug": "pakka-local-banjara-hills-banjara-hills",
        "city": "Hyderabad",
        "area_name": "Banjara Hills",
        "sla": {
          "slaString": "ETA 60-65 MINS"
        },
        "closing_in_ms": 0,
        "availability": null,
        "special_instructions_opted": false,
        "restaurant_special_instruction": "Restaurant usually does not take requests. Complaints may not be possible to refund."
      }];
const RestarantsComponent=(props)=>{
   const {resData}=props;
    // const {resName, cuisine, rating, delivery} = props;
    const {name,address,base_price,city}=resData;
    return(
        <div className="restaurants" style={styleCard}>
             <img className="res-logo"alt="rest-logo" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" ></img>
           <h3>{name}</h3>
          <h4>{address}</h4>
          <h4>{base_price}</h4>
          <h4>{city}</h4>
          
        </div>
    );
}
const BodyComponent=()=>{

    return(
        <div className="body"> 
           <div className="search">Search</div>
           <div className="res-container">
            {resList.map((restaurant,index)=>{
                return <RestarantsComponent key={index} resData={restaurant}/>;
            })}
          </div>

        </div>
    );

};

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