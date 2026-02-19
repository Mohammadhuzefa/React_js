import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

let mainobject =createContext()
// let data = "special data from main component"
let data ={
  name:"arshan",age:"30",city:"Bhopal"
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <mainobject.Provider value={data}>

    <App />
    </mainobject.Provider>
  </StrictMode>,
)
export {mainobject}