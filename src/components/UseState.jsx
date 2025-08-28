import React from 'react'
import { useState } from 'react';
import './UseState.css'

function UseState() {
  const [color, setColor] = useState('Red')


  const changeColor = () => {

    setColor('Blue')
  }
  return (

    <>
      <h1 className='head'>My favourite color is {color}!</h1>
      <div className="container">
      <button type='button' className='btn' onClick={changeColor}>Blue</button>
      </div>
    </>
  )
}

export default UseState