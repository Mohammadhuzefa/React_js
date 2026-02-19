import { useState } from "react"
import { Link } from "react-router-dom"



function Home(){
    let[val,setVal]=useState(true)
    return(
        <>
        
        <Link to="/">Home</Link><br />
        <Link to="/about">about</Link><br />
        <Link to="/service">service</Link><br />
        <Link to="/contect">contect</Link><br />
        <Link to="/contect2">contect2</Link><br />
        
        <h1>Home</h1>
        {val ? <h1>Get ready</h1> : <h1>not ready</h1>}
        <button onClick={()=>{setVal(!val)}}>change</button>
       
        </>
    )
}export default Home