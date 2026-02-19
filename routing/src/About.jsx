import { Link } from "react-router-dom"

function About(){
    return(
        <>
        <Link to="/">Home</Link><br />
        <Link to="/about">about</Link><br />
        <Link to="/service">service</Link><br />
        <Link to="/contect">contect</Link><br />
        <Link to="/contect2">contect2</Link><br />
        
        <h1>About</h1>
        </>
    )
}export default About