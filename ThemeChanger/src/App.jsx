import React, { useState,useEffect } from "react";
import { ThemeProvider } from "./context/Theme";
import ThemeBtn from "./components/ThemeButton";
import Card from "./components/Card";

function App() {
  const [Thememode,setThememode]=useState("light")
  const lightTheme=()=>{
    setThememode("light")
  }
  const darkTheme=()=>{
    setThememode("dark")
  }
  useEffect(() => {
    document.querySelector("html").classList.remove("light","dark")
    document.querySelector("html").classList.add(Thememode)
  }, [Thememode])
  
  return (
    <ThemeProvider value={{Thememode , lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
