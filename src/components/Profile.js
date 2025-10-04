import {useState} from "react";
import {useEffect} from "react";
const Profile =(props)=>{
    const [count]=useState(0);
    const [count2]=useState(0);
    useEffect(()=>{
         console.log("UseEffect");
        return ()=>{console.log("UseEffect Return")}; //this function is called during componentWillUnmount
    },[]);
    console.log("Render");
    return <div className="user-card">
        <h2>Count:{count}</h2>
        <h2>Count2:{count2}</h2>
        <h2>Name:{props.name}</h2>
        <h3>Location:India</h3>
        <h4>Contact:1234567890</h4>
    </div>
}

export default Profile;