import CurvedLoop from './CurvedLoop';

function App(){
  return(
    <>


{/* <CurvedLoop marqueeText="Welcome to Huzefa Bits ✦" /> */}


{/* // With custom props */}
<CurvedLoop 
  marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦ Huzefa"
  speed={4}
  curveAmount={400}
  direction="top"
  interactive
  className="custom-text-style"
/>

{/* // Non-interactive with slower speed */}
{/* <CurvedLoop 
  marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"
  speed={2}
  curveAmount={400}
  interactive
/>  */}

    </>
  )
}
export default App