import React, { useState,useEffect } from 'react'

function MultiEffectComponent() {
    const[count,setCount]=useState(0);
    const[seconds,setSeconds]=useState(0);

    useEffect(() => {
      console.log("Count changed", count);
    }, [count])
    
useEffect(() => {
  const invalidInter=setInterval(()=>{
    setSeconds(prevSeconds=>prevSeconds+1);
  },1000)

  return () => clearInterval(invalidInter);
}, [])


  return (
    <div style={{ textAlign: 'center', marginTop: '200px', paddingTop: '200px' }}>
  <h1>Count: {count}</h1>
  <button
    onClick={() => setCount(count + 1)}
    style={{
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer'
    }}
  >
    Increment Count
  </button>
  {/* <h2>Seconds: {seconds}</h2> */}
   <h1 style={{textAlign:'center'}}>In This component, second increase continuously so comment out the second part if you want to see go to check the code ....</h1>
</div>
  )
}

export default MultiEffectComponent