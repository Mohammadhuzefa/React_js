import Child from "./assets/components/child"
import Child1 from "./assets/components/child1"
import Child3 from "./assets/components/child3"


function App (){
  return(
    <>
    <h1>App file</h1>
     <Child name="john" />
     <Child1 course="fsd" duration  />
     <Child3 Country = {"india"} />
    </>
  )
}
export default App