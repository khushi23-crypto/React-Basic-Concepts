import React,{useState,useEffect} from 'react'

function LoggerComponent() {
    const[count,setCount]=useState(0);


    useEffect(() => {
        console.log('Component rendered or count changed:', count)
    });
//runs on every render
    
  return (
    <div style={{ width: '300px', padding: '20px',  margin: '300px auto', border: '2px solid #ccc', borderRadius: '10px', backgroundColor: '#fff', textAlign: 'center',  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
        <h1 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>Count: {count}</h1>
        <button style={{ padding: '10px 20px', border: '2px solid #000', borderRadius: '5px', backgroundColor: 'white', cursor: 'pointer',fontSize: '1rem' }} onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default LoggerComponent