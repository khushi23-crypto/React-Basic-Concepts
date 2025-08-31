import React, { useRef, useState } from 'react'

function UseRef() {
    const[time,setTime]=useState(0);
    let timeRef=useRef(null);

    function startTimer(){
      timeRef.current=  setInterval(() => {
            setTime(time=>time+1)
        }, 1000);
    }
    function stopTimer(){
        clearInterval(timeRef.current)
        timeRef.current=0;
    }
    function resetTimer(){
        setTime(0);
    }


  return (
    <>
    <div>
        <h1>StopWatch : {time} seconds</h1>
    </div>
    <div>
        <button onClick={startTimer}>Start</button>
    </div>
    <div>
        <button onClick={stopTimer}>Stop</button>
    </div>
    <div>
        <button onClick={resetTimer}>Reset</button>
    </div>
    </>
  )
}

export default UseRef