import React from 'react';
import { useState,useContext } from 'react';
import { ThemeContext } from './ThemeContext';
const ThemeConsumer = (props) => {
const colordata = useContext(ThemeContext);
   
    const [effectiveColor,setEffectiveColor] = useState('');

    return(
        <div style={{'background' : effectiveColor}} className="theme-panel">
            <h1>Theme Selector</h1>
            <div className="theme-palette">
            {colordata && colordata.map((temp,index) => {
                 return( <span key={temp.colorname + index} className={`Palette-${temp.colorname}`} onClick = {()=> setEffectiveColor(temp.color)} style={{'background' : temp.color}}>{temp.colorlabel}</span>)
            }
            )}
            </div>
        </div>
        
    )
}

export default ThemeConsumer;
