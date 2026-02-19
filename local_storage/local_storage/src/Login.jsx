import { useState } from "react"

function Login(){
    let [loginval,setLoginval]=useState({email:"",password:""})

    function logininput(e){
        let{name,value}=e.target
        setLoginval({...loginval,[name]:value})
    }

    function loginsubmit(e){
        let localdata = JSON.parse(localStorage.getItem("userdata"))
        if(loginval.email != localdata.email || loginval.password != localdata.password){
            alert("Not found....")
        }
        else{
            alert("Found....")
        }

    }
    return(
        <>
        <h1>Login</h1>
        <form action="" onSubmit={loginsubmit}>
            <label htmlFor="">Email</label>
            <input type="text" name="email" onChange={logininput}/><br /><br />

            <label htmlFor="">Password</label>
            <input type="text" name="password" onChange={logininput}/><br /><br />

            <input type="submit" />
        </form>
        </>
    )
}export default Login