import { createContext } from "react"
import Child1 from "./Child1"

// let dataobject = createContext()
// let name = "react js..."
// let person ={
//   name:"huzefa",
//   age:19,
//   city:"Bhopal"
// }


function App(){
  return(
    <>
    <h1>this is appp</h1>
    {/* <dataobject.Provider value={name}>
      <Child1/>

    </dataobject.Provider> */}

    {/* <dataobject.Provider value={person.name}>

    </dataobject.Provider> */}
      <Child1/>
    </>
  )
}
export default App
// export {dataobject}