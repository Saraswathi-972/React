import React from "react";

class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        console.log("Child - UserClass constructor");
        this.state={
            count:0,
            count2:0,
            data:{
                name:"Dummy Name",
                location:"Dummy Location",
                contact:"Dummy Contact",
                avatar_url:"Dummy Image"
            }
        }
    }

    async componentDidMount(){
        //Best place to make API calls
        console.log("Child - UserClass componentDidMount");

        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
       
        this.setState({data:json});

        // this is mainly for leaning how componentWillUnmount works
         this.timer=setInterval(()=>{console.log("Namaste React")},1000); //calls for every sec

    }

    componentDidUpdate(prevProps,prevState){
        //Best place to make API calls based on conditions
        if(prevState.data.name!=this.state.data.name){
            console.log("Names are not equal")
        }
        
        console.log("Child - UserClass componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("Child - UserClass componentWillUnmount");
        clearInterval(this.timer);
    }

    render(){
        const {name,location,twitter_username,avatar_url}=this.state.data;
        console.log("Child - UserClass render");
      //  debugger;
        return <div className="user-card">
            <img src={avatar_url} alt="Avatar" ></img>
            <h2>Name:{name}</h2>
            <h3>Location: {location}</h3>
            <h3>Contact: {twitter_username}</h3>
            
        </div>
    }
}
export default ProfileClass;
