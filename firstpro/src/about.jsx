import './App.css'
import reactimg from './assets/react.svg'
function About(){
    return(
        <>
        <div className="container">
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam totam, saepe non ad illum sunt quas? Maiores ad saepe voluptatibus, modi accusamus facere eius illum aspernatur iure dolorem! Blanditiis, soluta?</p>
        <button>Get Started</button>
        </div>
        <div>
            <img src="vite.svg" height={"200px"} alt="" />
        </div>
        
        <div> 
            <img src={reactimg} height={"200px"} alt="" />
        </div>

        </>
    )
}

export default About