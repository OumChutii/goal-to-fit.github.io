import React from "react";
import './Input.css'

const Input = ( {children="", htmlFor, label,className ="display-block" , ...props }) => {
    return (
                <div className={className}>
                    <label className="primary-text-color" htmlFor={htmlFor} > {label} </label>
                    <input {...props}/>
                    <p className="primary-text-color">{children}</p>
                </div>
    );
}

export default Input;