import { useState } from "react"

function Color(){
    let [color,setColor] = useState()
    return(
        <>
        <div style={{backgroundColor:color}}>

        <h1> Colore Component </h1>

        <button onClick={()=>setColor('red')}>Red</button>
        <button onClick={()=>setColor('yellow')}>Yellow</button>
        <button onClick={()=>setColor('blue')}>Blue</button>
        <button onClick={()=>setColor('lightgreen')}>Lightgreen</button>

        </div>
        </>
    )
}
export default Color