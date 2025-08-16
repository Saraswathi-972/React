import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    {id:"parent"},[
        React.createElement(
        "div",
       {id:"child1", key:"child1"},[
        React.createElement("h1",{id:"heading",key:"c1heading1"},"Hello World from h1 tag!"),
        React.createElement("h2",{id:"heading2", key:"c1heading2"},"Hello from h2 tag")
       ]), 
       React.createElement(
       "div",
       {id:"child2",key:"child2"},[
        React.createElement( "h1", {id:"heading", key:"c2heading1"},"Hello World from h1 tag!"),
        React.createElement("h2",{id:"heading2", key:"c2heading2"},"Hello from h2 tag")
       ])
    ]);

console.log(parent); //returns object
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);