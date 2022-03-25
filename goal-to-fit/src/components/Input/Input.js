import React from "react";
import './Input.css'

const Input = ( { htmlFor, label, ...props }) => {
    return (
                <div>
                    <label className="primary-text-color" htmlFor={htmlFor} > {label} </label>
                    <input {...props}/>
                </div>
    );
}

export default Input;