'use client'
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './ThemeProvider';


const LocalThemedBox = () => {
    const { theme } = useContext(ThemeContext)
    const [localTheme, setLocalTheme] = useState(theme)
    const toggleLocalTheme = () => {
        setLocalTheme((theme) => {
            return theme === 'light' ? 'dark' : 'light'
        })
    }

    useEffect(() => {
        setLocalTheme(theme)
    }, [theme])
    return (
        <div style={{ width: '200px', height: '200px', border: '2px solid green' }} id="local-themed-box" className={`bg-${localTheme}`}>
            {/* Write code below this line */}
            <p id={`local-themed-text-container`} className={`txt-${localTheme}`}>
                lorem ipsum dolor iterit n stuff
            </p>
            <button onClick={toggleLocalTheme} id={"local-theme-toggler"} className={`btn btn-${localTheme}`}>Toggle local theme to {localTheme === 'light' ? 'dark' : 'light'}</button>
        </div>
    )
}

export { LocalThemedBox }
