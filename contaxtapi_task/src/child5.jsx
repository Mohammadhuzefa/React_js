import { useContext } from "react"
import { mainobject } from "./main"

function Child5(){
  let {name}=useContext(mainobject)
  return(
    <>
    <h1>This Child5 page {name}</h1>
    </>
  )
}
export default Child5