import { Link, Outlet } from "react-router-dom"

function Layout(){
    return(
        <>
        <nav>
            <h1>Logo</h1>
            <ul>
                {/* <li Link to="/">Home</li>  */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contect">Contact</Link></li>
                <li><Link to="/service">Services</Link></li>
                
                <li >Services</li>
            </ul>
        </nav>
        <main>
            <Outlet/>
        </main>

        <footer>
            <h1>This is Footer</h1>
        </footer>
        </>
    )
}export default Layout