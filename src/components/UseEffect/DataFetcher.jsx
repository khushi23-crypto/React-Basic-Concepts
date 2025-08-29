import React, { useState,useEffect } from 'react'

function DataFetcher() {
  const[load , setLoad]=useState(true);
  const[data, setData]=useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(data=>{
      setData(data);
      setLoad(false);
    });
  }, []);
  //it will render only on 1st render
  
  return (
    <div>
       {load ?(
       <h1>Loading....</h1>
       ):(
        <ul style={{ marginTop: '50px', fontSize: '1.5rem',textAlign:'center' }}>
          {data.map(post=>(
<li key={post.id}>{post.title}</li>
          ))}
        
       </ul>
  )}
    </div>
  )
}

export default DataFetcher