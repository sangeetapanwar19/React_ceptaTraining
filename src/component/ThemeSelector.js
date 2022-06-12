import React from 'react';
import '../css/ThemeSelector.css';
import { useState } from 'react';

const ThemeSelector = () => {
    const colorPalette = [
        {
            colorname: 'pink',
            colorlabel: 'Pink',
            color: '#FFC0CB'
        },
        {
            colorname: 'purple',
            colorlabel: 'purple',
            color: '#A020F0'
        },
        {
            colorname: 'green',
            colorlabel: 'green',
            color: '#00FF00'
        }
    ];

    const [effectiveColor,setEffectiveColor] = useState('');

    return(
        <div style={{'background' : effectiveColor}} className="theme-panel">
            <h1>Theme Selector</h1>
            <div class="theme-palette">
            {colorPalette && colorPalette.map((temp,index) => (
                <span key={temp.colorname + index} className={`Palette-${temp.colorname}`} onClick = {()=> setEffectiveColor(temp.color)} style={{'background' : temp.color}}>{temp.colorlabel}</span>
            ))}
            </div>
        </div>
        
    )
}

export default ThemeSelector;