import React from "react";
import { NavLink } from "react-router-dom";
import './NoAccount.css'

const NoAccount = ( { tagtitle, textA1, textA2, href1 = '#', href2 = '#'  } ) => {
    return (
          <>
            <p className="secondary-text-color" >
                {tagtitle} 
            </p>
            <div className="social-profiles">
                <div>
                <NavLink to={href1}  className="primary-text-color">{textA1}</NavLink>
                </div>
                <div>
                    <NavLink to={href2}  className="primary-text-color">{textA2}</NavLink>
                 {/* <a className="primary-text-color" href={href2}>{textA2}</a> */}
                </div>
            </div>
  
          </>  
    );
}

export default NoAccount;