import React from "react";
import styles from './style.module.css';
import {getClasses} from './getClasses'

const Button = ({variant, text})=>{
    const ButtonTypes = {
        left: "left",
        middle : "middle",
        right : "right"
    }
    return(
        
        <button 
        className = {getClasses(
           [styles.button, styles[`button-${ButtonTypes[variant]}`]]
        )}>
         {text}
        </button>
    );
};
export default Button;