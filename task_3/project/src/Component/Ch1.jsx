import Ch2 from "./Ch2"


function Ch1({data}){
    return(
        <>
        <h1>this is ch1 = {data.name} </h1>
        <Ch2 data= {data}/>
        </>
    )
}
export default Ch1