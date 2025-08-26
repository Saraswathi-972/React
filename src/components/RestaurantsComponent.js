const styleCard={
    backgroundColor:"#f0f0f0"
}


const RestaurantsComponent=(props)=>{
   const {resData}=props;
    // const {resName, cuisine, rating, delivery} = props;
    const {name,address,base_price,city,image,avgRating}=resData;
    return(
        <div className="restaurants" style={styleCard}>
             <img className="res-logo"alt="rest-logo" src={image} ></img>
           <h3>{name}</h3>
           <h4>{avgRating} Star</h4>
          <h4>{address}</h4>
          <h4>{base_price}</h4>
          <h4>{city}</h4>
          
        </div>
    );
}

export default RestaurantsComponent;