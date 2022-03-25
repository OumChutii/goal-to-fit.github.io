import React from "react";
import './NoAccount.css'

const NoAccount = ( { }) => {
    return (
          <>
            <p className="secondary-text-color" >
                 Don’t have an account?
            </p>
            <div className="social-profiles">
                <div>
                 <a href="#">Forgot Password?</a>
                </div>
                <div>
                 <a className="primary-text-color" href="#">Signup</a>
                </div>
            </div>
  
          </>  
    );
}

export default NoAccount;