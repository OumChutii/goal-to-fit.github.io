import React from "react";
import './AgreeMent.css'

const AgreeMent = ({ ...props }) => {
    return (
        <div className="AgreeMent">
            <input {...props} />
            <label for="checkbox"> I agree to the<a href='#'> Terms of Services</a>and <a href='#'> Privacy Policy</a>.
            </label>
        </div>
    );
}

export default AgreeMent;