import { Route, Router, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contect from "./Contact"
import Contect2 from "./Contect2"
import Service from "./Service"
import Layout from "./Layout"




function App(){
  return(
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contect" element={<Contect/>}/>
        <Route path="/contect2" element={<Contect2/>}/>
        <Route path="/service" element={<Service/>}/>
      </Route>
      
    </Routes>

    </>
  )
}export default App