import axios from "axios"
import { useEffect, useState } from "react"

function Fetch() {
    let [apidata,setapidata] = useState([])
    let [show,setShow]=useState(false)
    let [editdata,setEditdata]=useState()



    function mydelete(id){
        axios.delete(`http://localhost:3000/userdata/${id}`)
        .then((e)=>alert("DATA DELETED!!!!!"))

    }

    function editinput(e){
        const{name,value}= e.target
        setEditdata({...editdata,[name]:value})
    }
    function finalsubmit(e){
        e.preventDefault()
        axios.put(`http://localhost:3000/userdata/${editdata.id}`,editdata)
        .then((e)=>alert("Updated"))
    }

    
    useEffect(()=>{
        axios.get('http://localhost:3000/userdata')
        .then((r)=>setapidata(r.data))
    },[mydelete])


             


    return(


        <>

        <h1> This is fetch page </h1>

        <table border="">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Contact</th>
                <th>City</th>
                <th>delete</th>
                <th>Edit</th>
            </tr>


        {
            apidata.map((e)=>(

                <tr> 
                    <td> {e.id} </td>
                    <td> {e.name} </td>
                    <td> {e.age} </td>
                    <td> {e.contact} </td>
                    <td> {e.city} </td>
                    <td> <button onClick={()=>mydelete(e.id)} > Delete </button> </td>
                    <td><button onClick={()=>(setShow(true),setEditdata(e))}>Edit</button></td>

                 </tr>


            ))
        }


        </table>
        {
            show && <form onSubmit={finalsubmit}>
                <label htmlFor="">ID</label>
                <input type="text" value={editdata.id} name='id' onChange={editinput}/><br /><br />

                <label htmlFor="">Name</label>
                <input type="text" value={editdata.name} name='name' onChange={editinput}/><br /><br />

                <label htmlFor="">Age</label>
                <input type="text" value={editdata.age} name='age' onChange={editinput}/><br /><br />
                
                <label htmlFor="">Contact</label>
                <input type="text" value={editdata.contact} name='contact' onChange={editinput}/><br /><br />

                <label htmlFor="">City</label>
                <input type="text" value={editdata.city} name='city' onChange={editinput}/><br /><br />

                <input type="submit" />
            </form>
        }
        
        
        </>
    )
}

export default Fetch