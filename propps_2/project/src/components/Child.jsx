import Child2 from "./Child2"
function Child(props){
    return(
        <>
        <h1>Child file</h1>

        <Child2 name={props.city}/>
        
        </>
    )
}
export default Child 