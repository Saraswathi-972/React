import { useRouteError } from "react-router"

const Error=()=>{
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>OOPS!!</h1>
            <h1>Something Went Wrong!</h1>
        </div>
    )
}

export default Error;