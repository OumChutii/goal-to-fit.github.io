import React from "react";
import './Footer.css'

const Footer = ( { children }) => {
    return (
          <>
            <div className="push"></div>
            <footer>
                <div className="container font-large-subhead secondary-text-color">
                    {children}
                </div>
            </footer>
          </>  
    );
}

export default Footer;