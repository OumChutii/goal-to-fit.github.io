import React from "react";
import './Button.css'

const Button = ( { className="button-submit",children, ...props }) => {
    return (
            <from>
                <button className={className} {...props} > {children} </button>
            </from>
    );
}

export default Button;