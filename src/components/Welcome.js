// write code for Welcome component here
import React from "react";
function Welcome(props){
    return(
        <>
            Hey !
            <h1>{props.name}</h1>
            <h2>Welcome to Newton School</h2>
        </>
    )
}
export default Welcome;
