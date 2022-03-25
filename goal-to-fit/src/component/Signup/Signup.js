import React from "react";
import './Signup.css'

const Signup = () => {
    return (
      <div> 
          <section>
              <div className="container"> 
                  <div className="head-logo">
                      
                  </div>
                 
                  <div className="signup">
                      <h3 className="secondary-text-color">Signup</h3>
                      <label className="primary-text-color" htmlFor="Email" >Email</label>
                      <input type="email" placeholder="sophie@example.com"/>
                      <label className="primary-text-color" htmlFor="Password" >Password</label>
                      <input type="password" placeholder="***********"/>
                      <button className="button-signup" >Signup</button>
                  </div>
                  
                  <div>
                        <div className="social-profiles">
                            <div>
                                 {/* <button className="button-google"><i className="fa fa-google" aria-hidden="true"> </i>  GOOGLE</button> */}
                                 <a href="#">Forgot Password?</a>
                            </div>
                             <div>
                              {/* <button className="button-facebook"><i className="fa fa-facebook" aria-hidden="true"> </i>  FACEBOOK</button>    */}
                              <a className="primary-text-color" href="#">Login</a>
                             </div>
                        </div>
  
                  </div>
  
              </div>
          </section>
          
          <div className="push"></div>
  
          <footer>
          <div className="container font-large-subhead secondary-text-color">
              &copy; Right 2022 : Goal to fit
          </div>
          </footer>
         
      
      </div>
    );
  }
  
  export default Signup;


















