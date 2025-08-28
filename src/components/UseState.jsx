import React from 'react'
import { useState } from 'react';
import './UseState.css'

function UseState() {
  const[color,setColor]=useState('Red');
  const [car, setCar] = useState({
    brand:'Ferrari',
    model:'Rome',
    year:'2023',
    color:'red'
  });

  const changeColor = () => {

    setColor('Blue')
  }
  const changeBrand=()=>{
    setCar((prev)=>{
      return {...prev , color: "blue",brand: "BMW", model: "India", year: "2025" }
    })
  }
  return (
    <>
    <div className="cards-wrapper">
    <div className="card-container">
      <div className="card-body">
        <h1 className='head'>My favourite color is {color}!</h1>
        <p>This is content for the single variable.</p>
        <button type='button' className='btn' onClick={changeColor}>Blue</button>
      </div>,
      <div className="card-body">
        <h1 className='head'>My {car.brand} !</h1>
        <p>It is a {car.color} {car.model} from {car.year}</p>
        <button type='button' className='btn' onClick={changeBrand}>Blue</button>
      </div>,
      <div className="card-body">
       <h1 className='head'>My favourite color is {color}!</h1>
        <p>This is content for the first card.</p>
        <button type='button' className='btn' onClick={changeColor}>Blue</button>
      </div>
      </div>
      </div>
    </>

  )
}

export default UseState