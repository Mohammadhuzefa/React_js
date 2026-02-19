import { useContext } from "react"
import { mainobject } from "./main"

// import { dataobject } from "./App"



function Child2(){
    // let store = useContext(mainobject)
    let{name,age,city}=useContext(mainobject)
    return(
        <>
        <h1>this is Child1 {name} {age} {city}</h1>
{/*         
           <mainobject.Consumer>{
                (store)=>{
                    return <h1>{store}</h1>
                }
                }
            </mainobject.Consumer> */}
        </>
    )
}export default Child2