import axios from "axios"
import { useEffect, useState } from "react"

function App(){
  let [apidata,setApidata] = useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then((res)=>setApidata(res.data))
  },[])
  return(
    <>
    <table border="">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Body</th>
      </tr>
      {
        apidata.map((e)=>(
          <tr>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>{e.body}</td>
          </tr>
        ))
      }
    </table>

    </>
  )
}
export default App