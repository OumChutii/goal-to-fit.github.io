import React from "react";
import './NoAccount.css'

const NoAccount = ( { tagtitle, textA1, textA2, href1 = '#', href2 = '#'  } ) => {
    return (
          <>
            <p className="secondary-text-color" >
                {tagtitle} 
            </p>
            <div className="social-profiles">
                <div>
                 <a href={href1}>{textA1}</a>
                </div>
                <div>
                 <a className="primary-text-color" href={href2}>{textA2}</a>
                </div>
            </div>
  
          </>  
    );
}

export default NoAccount;