// write code for Welcome component here
import React from "react";
function Welcome(props){
    return(
        <>
            <h1>{props.greeting} {props.name}</h1>
            <h2>{props.message}</h2>
        </>
    )
}
export default Welcome;
