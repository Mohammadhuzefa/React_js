import Ch1 from "./Component/Ch1"

function App(){
  let h1={
    name:"huzefa",
    cls:"bca",
    sub:"Fsd"
  }
  return(
    <>
    <h1>this is App page</h1>
    <Ch1 data={h1} />
    </>
  )
}
export default App