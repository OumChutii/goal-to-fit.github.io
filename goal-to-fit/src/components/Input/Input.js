import React, { useState } from "react";
import './Input.css'

const Input = ({ children = "", htmlFor = "", label = "", className = "display-block",  ...props }) => {



    return (
        <span className={className}>
            <label hidden={label === "" ? true : false} className= "primary-text-color"
                htmlFor={htmlFor}
            >
                {label}
            </label>
            <input {...props} required />
            <p className={`${children === "" ? "display-none" : "display-block"}  primary-text-color p-input`}
               
            >{children}</p>
        </span>
    );
}

export default Input;