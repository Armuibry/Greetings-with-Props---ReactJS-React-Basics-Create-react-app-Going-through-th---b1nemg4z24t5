// write code for Welcome component here
function Welcome(greeting, message){
    return(
        <>
            <h1>{greeting} {props.name}</h1>
            <h2>{message}</h2>
        </>
    )
}
export default Welcome;
