'use client'
import React, { useState } from 'react';
import { createContext, useContext } from 'react';
const ThemeContext = createContext();

export function useThemeContext(){

    return useContext(ThemeContext);
}

const ThemeProvider = (props) =>{
    let [global, setGlobal]=useState(true);
    let [local, setLocal]=useState(true);
    return (
        <ThemeContext.Provider value={{global, setGlobal, local, setLocal}}>
        {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider,ThemeContext}
