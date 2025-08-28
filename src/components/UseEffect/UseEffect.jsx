import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0);

    //first -> side-effect fuction
    //second -> clea n-up function
    //third -> comma seperated dependencies isme jaise array ke andr count likhenge to count jb bhi update hoga ye effect fun chlega 

    //variation :1
    //runs on every render 
    //variation :2
    //runs on only first render
    //variation: 3
    //runs on limited time


    useEffect(() => {
        alert("I will run on each render")
    })
    

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div className="cards-wrapper">
            <div className="card-container">
                <div className="card-body">
                    <button type='button' className='btn' onClick={handleClick}>Click me</button>
                    <h1 className='head'>Count : {count}</h1>
                    <p>Runs on every render</p>
                </div>
            </div>
        </div>
    )
}

export default UseEffect