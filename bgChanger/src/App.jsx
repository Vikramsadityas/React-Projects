import React, { useState } from 'react'
import "./App.css"
const App = () => {
  
  function changeColor(color)
  {
    
    document.body.style.background=color;
  }
  return (
    <div className='main'>
      <button onClick={()=>changeColor('RED')} style={{backgroundColor:"red", padding:"14px", borderRadius:"5px"}}>RED</button>
      <button onClick={()=>changeColor('GREEN')} style={{backgroundColor:"green", padding:"14px", borderRadius:"5px"}}>GREEN</button>
      <button onClick={()=>changeColor('BLUE')} style={{backgroundColor:"blue", padding:"14px", borderRadius:"5px"}}>BLUE</button>
      <button onClick={()=>changeColor('PURPLE')} style={{backgroundColor:"purple", padding:"14px", borderRadius:"5px"}}>PURPLE</button>
      <button onClick={()=>changeColor('PINK')} style={{backgroundColor:"pink", padding:"14px", borderRadius:"5px"}}>PINK</button>
    </div>
  )
}

export default App
