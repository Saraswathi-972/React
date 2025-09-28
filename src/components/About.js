import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent - About constructor");
    }

    componentDidMount(){
        console.log("Parent - About componentDidMount");
    }
    render(){
        console.log("Parent - About render");
        return(
        <div>
            <h1>This is About Us Page</h1>
            <h1>Welcome to Namaste React</h1>
            <ProfileClass />
        </div>
    );
    }
}

export default About;