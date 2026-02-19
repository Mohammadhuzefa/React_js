import { Link } from "react-router-dom"

function Contect(){
    return(
        <>
        <Link to="/">Home</Link><br />
        <Link to="/about">about</Link><br />
        <Link to="/service">service</Link><br />
        <Link to="/contect">contect</Link><br />
        <Link to="/contect2">contect2</Link><br />
        <h1>Contect</h1>
        <button onClick={()=>{alert("hello")}}>click</button>
        </>
    )
}export default Contect