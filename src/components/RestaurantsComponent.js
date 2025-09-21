const styleCard={
    backgroundColor:"#f0f0f0"
}


const RestaurantsComponent=(props)=>{
   const {resData}=props;
    // const {resName, cuisine, rating, delivery} = props;
    const {id,name,deliveryTime,costForTwo,cuisines,cloudinaryImageId,avgRating}=resData;
    return(
        <div className="restaurants" style={styleCard}>
            <img className="res-logo"alt="rest-logo" src={cloudinaryImageId} ></img>
            <h3>{id}</h3>
            <h3>{name}</h3> 
            <h4>{cuisines}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} Star</h4>
            <h4>{deliveryTime} Mins</h4>
          
        </div>
    );
}

export default RestaurantsComponent;