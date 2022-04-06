import React, { use } from "react";
import './Input.css'

const Input = ({ children = "", htmlFor = "", label = "", className = "display-block", ...props }) => {

   

    return (
        <from className={className}>
            <label className="primary-text-color" htmlFor={htmlFor} > {label} </label>
            <input {...props} />
            <p className={`${children === "" ? "display-none" : "display-block"}  primary-text-color`}>{children}</p>
        </from>
    );
}

export default Input;