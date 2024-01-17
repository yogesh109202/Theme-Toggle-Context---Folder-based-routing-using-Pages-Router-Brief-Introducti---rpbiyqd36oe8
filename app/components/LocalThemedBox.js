'use client'
import React from 'react';
import {  useThemeContext } from "./ThemeProvider"

const LocalThemedBox = () => {
let context=useThemeContext();
let { setLocal, local }=context;
return(
    <div style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box" className={(local)?"bg-light":"bg-dark"}>
        {/* Write code below this line */}
        <p id="local-themed-text-container" className={local?"txt-light":"txt-dark"}> lorem ipsum dolor iterit n stuff</p>
            
        <button id="local-theme-toggler" className={local?"btn btn-light":"btn btn-dark"}
        onClick={()=>setLocal(!local)}
        >{local?"Toggle local theme to dark":"Toggle local theme to light"}</button>
    </div>
)
}

export { LocalThemedBox }
