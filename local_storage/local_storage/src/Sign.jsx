import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Sign(){
    let[signfrm,setfrm ] = useState({
        name:"",age:"",email:"",password:""
    })

    let navigator = useNavigate()
    function inputdata(e){
        const{name,value} = e.target
        setfrm({...signfrm,[name]:value})
    }

    function handlesubmit(e){
        e.preventDefault()
        localStorage.setItem("userdata",JSON.stringify(signfrm))
        navigator('./login')
    }
    return(
        <>
        <h1>Sign Up</h1>
        <form action="" onSubmit={handlesubmit}>
            <label htmlFor="">Name</label>
            <input type="text" name="name" onChange={inputdata}/><br /><br />

            <label htmlFor="">Age</label>
            <input type="text" name="Age" onChange={inputdata}/><br /><br />

            <label htmlFor="">Email</label>
            <input type="text" name="email" onChange={inputdata}/><br /><br />

            <label htmlFor="">Password</label>
            <input type="text" name="password" onChange={inputdata}/><br /><br />

            <input type="submit" />
        </form>
        </>
    )
}export default Sign