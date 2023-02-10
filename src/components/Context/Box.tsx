import React, { useContext } from 'react';
import { themeContext } from './ThemeContext';

const Box = () => {
    const Theme=useContext(themeContext)
    return (
        <div style={{backgroundColor:Theme.primary.main, color:Theme.secondary.text, margin:Theme.primary.margin}}>
            Theme context api
        </div>
    );
};

export default Box;