import Color from "./Color"
import Home from "./Home"
import Image from "./Image"



function App(){

  function demo(a){
    alert("Working...."+a)
  }
  
  

  return(
    <>
    <h1>Lorem ipsum dolor sit amet.</h1>
    <button onClick={demo}>Click</button> <hr />
    <button onDoubleClick={demo}>Click</button><hr />
    <button onMouseEnter={demo}>Click</button><hr />
    <button onMouseLeave={demo}>Click</button><hr />
    <button onMouseDown={demo}>Click</button><hr />
    <button onMouseDown={()=>demo("Cybrom")}>Click</button><hr />

    <Home/>
    <Color/>
    <Image/>

    </>
  )
}
export default App