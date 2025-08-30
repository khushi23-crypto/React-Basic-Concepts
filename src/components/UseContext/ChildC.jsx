import React, { useContext } from 'react'
import { ThemeContext } from '../../App'
import { UserContext } from '../../App'


const ChildC = () => {

  const { theme, setTheme } = useContext(ThemeContext);
  const user = useContext(UserContext)
  function handleChange() {
    if (theme === 'light')
      setTheme('dark')
    else
      setTheme('light')
  }

  return (
    <div>
      <button onClick={handleChange}>Change Theme</button>
      data: {user.name}
    </div>
  )
}

export default ChildC