import Ch4 from "./Ch4"


function Ch3({data}){
    return(
        <>
        <h1>this is ch3 = {data.cls}</h1>
        <Ch4 data={data}/>
        </>
    )
}
export default Ch3