import { useState } from "react"


function Home(){
    let[num,setNum] = useState(10)

    let [count,setCount] = useState(0)


    function demo(){
        setNum(20)
    }
    return(
        <>
        <h1>Home page = {num}</h1>

        {/* function  */}
        <button onClick={demo}>Chenge</button>
        
        {/* with arrow function  */}
        <button onClick={()=>setNum("Code...")}>Chenge here</button>
        <hr />

        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
        

        </>
    )
}
export default Home