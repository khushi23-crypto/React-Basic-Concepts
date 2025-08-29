import React, { useContext } from 'react'
import { ThemeContext } from '../../App'

const ChildC=()=> {

    const {theme,setTheme}=useContext(ThemeContext);

    function handleChange(){
        if(theme==='light')
            setTheme('dark')
        else
            setTheme('light')
    }

  return (
    <div>
       <button onClick={handleChange}>Change Theme</button>
    </div>
  )
}

export default ChildC