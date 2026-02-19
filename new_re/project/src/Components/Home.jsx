import myimage from '../assets/react.svg'
function Home(){
    return(
        <>
        <h1>this is home class</h1>
        
        {/* from public folder */}
        <img src="vite.svg" alt="" />
        
        {/* from src folder */}
        <img src={myimage} alt="" />
        </>
    )
}
export default Home