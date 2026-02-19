import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



function Insert(){
    let nav = useNavigate()
    let [frmdata,setFrmdata] = useState({name:"",age:"",contact:"",city:""})

function inputdata(e){
    const {name,value}=e.target
    setFrmdata({...frmdata,[name]:value})
}
function submit(e){
    e.preventDefault()
    console.log(frmdata)
    axios.post('http://localhost:3000/userdata',frmdata)
    .then((e)=>alert("Success..."))
    nav('./fetch')
}


    
    return(
        <>
        <h1>Insert Data</h1>
        <form action="" onSubmit={submit}>
            <label htmlFor="">Name</label>
            <input type="text" name="name" onChange={inputdata} /><br /><br />

            <label htmlFor="">Age</label>
            <input type="text" name="age" onChange={inputdata} /><br /><br />

            <label htmlFor="">Contact</label>
            <input type="text" name="contact" onChange={inputdata} /><br /><br />

            <label htmlFor="">City</label>
            <input type="text" name="city" onChange={inputdata} /><br /><br />

            <input type="submit" />
        </form>
        </>
    )
}
export default Insert