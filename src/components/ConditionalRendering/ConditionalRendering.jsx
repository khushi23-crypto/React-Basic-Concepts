import React, { useState } from 'react'
import LogOut from './LogOut'
import Login from './Login'
function ConditionalRendering() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

if(!isLoggedIn){
  return (
    <div>
    <h1>
        HELLO Everyone Please Login!
      </h1>
    <Login/>
    </div>
  )
}

  return(
    <div>
      <h1>
        HELLO Everyone! If you want to LogOut 
      </h1>
      <div>
        {isLoggedIn&&<LogOut/>}
      </div>
      </div>
  )
  /* return(
    <div>
      {isLoggedIn?<LogOut/>:<Login/>}
    </div>
  ) */

 /*  if (isLoggedIn) {
    return (
      <LogOut />
    )
  }
  else {
    return (
      <Login />
    )
  } */
}

export default ConditionalRendering
