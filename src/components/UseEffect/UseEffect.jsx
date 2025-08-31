import React, { useEffect, useRef, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0);
    const [counter, setCounter] = useState(0);
    const [counting, setCounting] = useState(0);
    const [counts, setCounts] = useState(0);
    //first -> side-effect fuction
    //second -> clea n-up function
    //third -> comma seperated dependencies isme jaise array ke andr count likhenge to count jb bhi update hoga ye effect fun chlega 
let val=useRef(0);
    //variation :1
    //runs on every render 
    useEffect(() => {
        console.log("I will run on each render")
    })


    //variation :2
    //runs on only first render
    /*useEffect(() => {
        alert("I will run on each render")
    },[])*/


    //variation: 3
    //runs on only when something value is updated
    /*useEffect(() => {
        alert('I will run every time when count is updated')
    }, [counting])*/

    //variation: 4
    //multiple dependencies 
    /*useEffect(() => {
     alert("I will run every time when count/counts is updated")
    }, [count,counts,counting])
    */

    //variation : 5
    //iss baar let's add a clean up function
    /* useEffect(() => {
        alert("Count is updated")

        return () => {
            alert("Count is unmounted from UI")
        }
    }, [count]) */





    function handleCounter() {
        setCounter(counter + 1)
    }

    function handleClick() {
       
        setCount(count + 1);
    }

    function handleCounting() {
        val.current=val.current+1;
        console.log("Value of val:", val.current);
        setCounting(counting + 1)
    }

    function handleCounts() {
        setCounts(counts + 1)
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