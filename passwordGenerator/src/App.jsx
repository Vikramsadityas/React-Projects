import React, { useCallback, useEffect, useRef, useState } from "react"
function App() {
  const[length,setLength]=useState(8)
  const[AllowCharacter,setallowCharacter]=useState(false)
  const[AllowNumbers,setallowNumber]=useState(false)
  const[password,setPassword]=useState("")
  const[copied,setcopied]=useState(false)
  const passwordRef=useRef(null)
  const generatePassword=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(AllowNumbers==true)
    {
      str+="0123456789"
    }
    if(AllowCharacter==true)
    {
      str+="!@#$%^&*()_+"
    }
    for (let i = 0; i < length; i++) {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char);
    }
    setPassword(pass)

  },[length,AllowCharacter,AllowNumbers,setPassword])
  const copyPasswordtoClipboard=useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current.setSelectionRange(0,10)
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
      generatePassword()
  },[length,AllowCharacter,AllowNumbers,generatePassword])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-center text-white">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} placeholder="password" readOnly ref={passwordRef} className="outline-none w-full py-1 px-3" />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPasswordtoClipboard}>copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={20} value={length} className="cursor-pointer" onChange={(e)=>{setLength(e.target.value)}}/>
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
                  defaultChecked={AllowNumbers}
                  id="numberinput"
                  onChange={()=>{
                        setallowNumber((prev)=>!prev);
                  }}/>
                  <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
                    defaultChecked={AllowCharacter}
                    onChange={()=>{
                      setallowCharacter((prev)=>!prev)
                    }}/>
                    <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
