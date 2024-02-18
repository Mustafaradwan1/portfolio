'use client'
import React, { useEffect, useState } from 'react'
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
type ThemeData =  "light" | "dark"
const ThemeColor = () => {
    const [theme,settheme] = useState("light")
    const handleTheme= ()=>{
        if(theme === 'light'){
            settheme('dark')
            window.localStorage.setItem('theme','dark')
            document.documentElement.classList.add('dark')
        }else{
            settheme('light')
            window.localStorage.setItem('theme','light')
            document.documentElement.classList.remove('dark')
        }
    }
    useEffect(()=>{
        const theTheme = window.localStorage.getItem('theme') as ThemeData | null;
        if(theTheme){
            settheme(theTheme)
            document.documentElement.classList.add(theTheme)
        }else if(window.matchMedia("(prefers-color-scheme: dark)").matches){
            settheme("dark")
        }
    },[])
  return <>
  <div className={`${theme === 'light' ? 'bg-gray-950 text-gray-100' : 'bg-gray-200 text-gray-950'} fixed bottom-5 right-3 w-10 h-10 rounded-full bg-gray-100
  flex justify-center items-center text-xl cursor-pointer dark`} onClick={handleTheme}>
    {theme === 'light' ? <CiLight/> : <CiDark/>}
  </div>
  </>
}

export default ThemeColor