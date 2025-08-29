import React, { useState,useEffect } from 'react'

function TimeComponent() {
    const[seconds,setSeconds]=useState(0);


    useEffect(() => {
      const interValid=setInterval(()=>{
        console.log("setInterval executed");
        setSeconds(prev=>prev+1);
      },1000);
    
      return () => {
        console.log("Time to stop");
        clearInterval(interValid);
      };
    }, []);
    //it will run only on first render

  return (
    <div>
{/*         <h1 style={{ marginTop: '300px', fontSize: '1.5rem',textAlign:'center' }}>Seconds : {seconds}</h1>
 */}        <h1 style={{textAlign:'center', paddingTop:'200px',marginTop:'200px'}}>In This component, second increase continuously so comment out the second part if you want to see go to check the code ....</h1>
    </div>
  )
}

export default TimeComponent