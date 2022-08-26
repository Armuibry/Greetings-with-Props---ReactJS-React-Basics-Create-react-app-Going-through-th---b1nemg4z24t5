// write code for Welcome component here
import React from "react";
function Welcome(props){
    let sayHi = `Hey !${props.name}`;
    let wel = "Welcome to Newton School"
    return(  
            <>
            <h1>{sayHi}</h1>
            <h2>{wel}</h2>
            </>
            

            
    )
}
export default Welcome;
