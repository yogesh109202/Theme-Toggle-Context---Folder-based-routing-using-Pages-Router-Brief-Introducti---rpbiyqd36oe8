'use client'
import React, { useState } from 'react';

const ThemeContext = React.createContext()
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme((theme) => {
            // if (theme === 'light') {
            //     return 'dark'
            // } else {
            //     return 'light'
            // }
            return theme === 'light' ? 'dark' : 'light'
        })
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext }
