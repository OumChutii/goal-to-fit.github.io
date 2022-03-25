import React from "react";
import './Button.css'

const Button = ( { children }) => {
    return (
             <button className="button-login" > {children} </button>
    );
}

export default Button;