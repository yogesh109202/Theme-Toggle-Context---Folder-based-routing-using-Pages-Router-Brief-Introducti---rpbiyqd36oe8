'use client'
import React from 'react';
// import { useState } from 'react';
import { useThemeContext } from './ThemeProvider';
const ThemeToggleButton = () =>{
    let context=useThemeContext();
    let {global, setGlobal, setLocal}=context;
    return (
       <>
        <button id='global-theme-toggler' onClick={()=>{
            setGlobal(!global);
            setLocal(!global);
            
            }}
            className={global?"btn btn-light txt-light":"btn btn-dark txt-dark"}

            >{global ?"Switch to dark theme" :'Switch to light theme'} </button>
        </>
    )

}
export {ThemeToggleButton};
