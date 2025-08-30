import React from 'react'

function EventHandling() {

    function handleClick(){
        alert("I am clicked");
    }

function handleMouse(){
    alert("Mouse In the para")
}
function handleInputChange(e){
    alert('Change the value in the input')
    console.log("Value till now:", e.target.value);
}
function handleSubmit(e){
    e.preventDefault();
    //i am writing my custom behaviour down
    alert("Should I submit the Form")
}

  return (
    <div>
        {/* //for immediate invokation
        <button onClick={alert("Button clicked")}>Click me</button>
         */}
         <form  onSubmit={handleSubmit}>
            <input type="text" onChange={handleInputChange}/>
            <button type='submit'>Submit</button>
        </form>

        <p onMouseOver={handleMouse} style={{border:"1px solid black"}}>
            I am a para
        </p>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default EventHandling