import React from "react";
import styles from './style.module.css';
import {getClasses} from './getClasses'

const Button = ({variant, text, img})=>{
    const ButtonTypes = {
        top_left: "top_left",
        top_right: "top_right",
        bottom_left : "bottom_left",
        bottom_right : "bottom_right"
    }
    return(
        
        <button 
        className = {getClasses(
           [styles.button, styles[`button-${ButtonTypes[variant]}`]]
        )}>
           <img src={img} alt='/' className={variant === 'top_right' ? styles.img : styles.hide}/> {text}
        </button>
    );
};
export default Button;