function App(){
  return(
  <>
  <div className="min-h-screen flex justify-center items-center bg-gradient-to-l bg-orange-500 p-10">
  <div  className="flex justify-around gap-10"  >

        <div className="bg-white  rounded-xl w-76">
          <img className="h-44 w-full object-cover"  src="img1.jpg" alt="" />
          <div className="p-6 text-center"> 
          <h1 className="text-2xl font-semibold mb-3 mt-8">Mountains</h1>
          <p >Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit. 
           Odit <br /> praesentium vero magnam aperiam  saepe sequi?</p>
           <button className="mt-8 bg-transparent border-2 rounded-xl px-8 py-2 border-orange-400 text-orange-400  " >Read more</button>
        </div>
        </div>


         <div className="bg-white  rounded-xl w-76">
          
          <img  className="h-44 w-full object-cover"  src="img3.jpg" alt="" />
          <div className="p-6 text-center" >
          <h1 className="text-2xl font-semibold mb-3 mt-8"> City</h1>
           <p>Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit. 
           Odit <br /> praesentium vero magnam aperiam saepe sequi?</p>
           <button className="mt-8 bg-transparent border-2 rounded-xl px-8 py-2 border-orange-400 text-orange-400 ">Read more</button>
        </div>
           </div>

         <div  className="bg-white  rounded-xl w-76">
          
          <img className="h-44 w-full object-cover" src="img2.jpg" alt="" />
           <div className="p-6 text-center" >
          <h1 className="text-2xl font-semibold mb-3 mt-8">Coast</h1>
           <p>Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit. 
           Odit <br /> praesentium vero magnam aperiam  saepe sequi?</p>
           <button className="mt-8 bg-transparent border-2 rounded-xl px-8 py-2 border-orange-400 text-orange-400 ">Read more</button>
        </div>
        </div>
  </div>
  </div>
  </>
  )
}


export default App
