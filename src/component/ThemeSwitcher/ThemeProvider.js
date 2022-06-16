import React from "react"
import ThemeConsumer from "./ThemeConsumer"
import { ThemeContext,colorPalette } from "./ThemeContext";
import '../../css/ThemeSelector.css';

const ThemeProvider = () => {
    return(
        <>
            <ThemeContext.Provider value = {colorPalette}>
                <ThemeConsumer />
            </ThemeContext.Provider>
        </>
    )
}


export default ThemeProvider;