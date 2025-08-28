import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0);
    const [counter, setCounter] = useState(0);
    const [counting, setCounting] = useState(0);
    const [counts, setCounts] = useState(0);
    //first -> side-effect fuction
    //second -> clea n-up function
    //third -> comma seperated dependencies isme jaise array ke andr count likhenge to count jb bhi update hoga ye effect fun chlega 

    //variation :1
    //runs on every render 
    //variation :2
    //runs on only first render
    //variation: 3
    //runs on only when something value is updated

    //variation dependencies


    /*useEffect(() => {
        alert("I will run on each render")
    })*/

    /*useEffect(() => {
        alert("I will run on each render")
    },[])*/


    /*useEffect(() => {
        alert('I will run every time when count is updated')
    }, [counting])*/

    useEffect(() => {
     alert("I will run every time when count/counts is updated")
    }, [count,counts,counting])
    
    function handleCounter() {
        setCounter(counter + 1)
    }

    function handleClick() {
        setCount(count + 1);
    }
    function handleCounting() {
        setCounting(counting + 1)
    }
    function handleCounts() {
        setCounts(counts +1)
    }

    return (
        <div className="cards-wrapper">
            <div className="card-container">
                <div className="card-body">
                    <button type='button' className='btn' onClick={handleClick}>Click me</button>
                    <h1 className='head'>Count : {count}</h1>
                    <p>Runs on every render</p>
                </div>
                <div className="card-body">
                    <button type='button' className='btn' onClick={handleCounter}>Click me</button>
                    <h1 className='head'>Counter : {counter}</h1>
                    <p>Runs on only first render</p>
                </div>
                <div className="card-body">
                    <button type='button' className='btn' onClick={handleCounting}>Click me</button>
                    <h1 className='head'>Counting : {counting}</h1>
                    <p>Runs on only when update the count render</p>
                </div>
                <div className="card-body">
                    <button type='button' className='btn' onClick={handleCounts}>Click me</button>
                    <h1 className='head'>Counts : {counts}</h1>
                    <p>Runs on only when update the count/counts/counting render</p>
                </div>
            </div>
        </div>
    )
}

export default UseEffect