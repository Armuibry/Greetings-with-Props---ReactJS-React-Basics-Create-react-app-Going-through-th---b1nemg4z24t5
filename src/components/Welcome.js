// write code for Welcome component here
function Welcome(props){
    return(
        <>
            <h1>{props.message} {props.name}</h1>
            <h2>{props.greeting}</h2>
        </>
    )
}
export default Welcome;
