import img1 from './assets/laptop.jpg'
import img2 from './assets/ipad.jpg'
import img3 from './assets/mobile.jpg'
function App(){
  let name="shakti"

  let person={
    name:'paras',
    city:'bpl',
    contact:126546
  }

  let emp =
  [{
    name:'huzefa',
    city:'Bhopal',
    contact:895623
  },
  {
    name:'arshan',
    city:'bpl',
    contact:458712
  }

]
  let product =[
    {
      pname:'Laptop',
      pprice:'45000' ,
      pbrand:'Dell',
      pimg:img1    
    },
    {
      pname:'Ipade',
      pprice:'65000' ,
      pbrand:'Apple',
      pimg:img2    
    },
    {
      pname:'Mobile',
      pprice:'129000' ,
      pbrand:'Samsung',
      pimg:img3    
    }
  ]
  return(
    <>
    <h1>This is app page</h1>
    <h1>{name}</h1>
    <h2>{person.name}</h2>
    <hr />
    <ul>
      {
        emp.map((e)=>(
          <li>{e.name}</li>
        ))
      }
    </ul>
    <table border="">
      <tr>
        <th>Name</th>
        <th>City</th>
        <th>Contact</th>
      </tr>
      {
        emp.map((e)=>(
          <tr>
            <td>{e.name}</td>
            <td>{e.city}</td>
            <td>{e.contact}</td>
          </tr>
        ))
      }
    </table>

    <section style={{display:"flex",justifyContent:"space-around",gap:"15px",}}>
      {
        product.map((e)=>(
           <div style={{border:"2px solid black"}}>
        <img src= {e.pimg} alt="" height={"200px"} />
        <h1>Name : {e.pname}</h1>
        <h2>Brand: {e.pbrand}</h2>
        <h3>Price : {e.pprice}</h3>
        <button style={{border:"2px solid black",}}> add to cart</button>

      </div>
        ))
      }
    
    </section>
    </>
  )
}
export default App