import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{id:"heading"},"Namaste React!");

const jsxHeading = <h1 id="heading">JSX Heading!</h1>
//React Functional component
const Title=()=>{
    return <h1>Namaste Dev React</h1>
};
const h1=<h1>Hello World!</h1>
const HeadingComponent=()=>(
    <div>
    <Title/>
    {h1}
    {Title()}
    {25/5}
     <h1>React functional component</h1>
     </div>

);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);