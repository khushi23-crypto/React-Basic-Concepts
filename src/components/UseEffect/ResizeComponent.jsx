import React,{useEffect,useState} from 'react'

function ResizeComponent() {
  const [windowWidth,setWindowWidth]=useState(window.innerWidth);

  useEffect(() => {
    const handleResize=()=>
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize',handleResize);
    
  
    return () => {
     window.removeEventListener('resize',handleResize);
    };
  }, []); //it will run only on first render
  
  return (
    <div>
      <h1 style={{textAlign:'center', marginTop:'200px',paddingTop
        :'200px'}}>Window width :{windowWidth}</h1>
    </div>
  )
}

export default ResizeComponent