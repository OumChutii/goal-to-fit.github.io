import React from "react";
import './Login.css'

const Login = () => {
    return (
      <div> 
          <section>
              <div className="container"> 
                  <div className="head-logo">
                      <div className="icon-logo">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="160" height="160" viewBox="0 0 172 172"
                                style={{fill:'#d7d7d7'}}>
                                <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt"
                                  strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0"
                                  fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"
                                  style={{mixBlendMode: 'normal'}}>
                                  <path d="M0,172v-172h172v172z" fill="none">
                                  </path>
                                  <g fill="#d7d7d7">
                                    <path
                                      d="M85.986,25.08333c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333zM86.23795,55.63965c-6.44955,-0.00717 -12.96629,1.99189 -21.27604,5.99089c-1.26492,0.60558 -2.3136,1.57107 -3.03743,2.77148l-15.46012,25.76221l-16.91585,13.53548c-3.09242,2.4725 -3.58888,6.97871 -1.11279,10.07113c2.46892,3.09242 6.98229,3.59229 10.07113,1.11979l17.91667,-14.33333c0.6665,-0.53033 1.23552,-1.17964 1.67269,-1.91064l8.69938,-14.5013l1.27376,-1.72868v32.25c0,0 -14.16414,9.44628 -27.9528,18.63753c-3.44,2.29333 -4.97613,6.57346 -3.7793,10.53304c1.20042,3.95958 4.85116,6.66276 8.98633,6.66276h21.15706c-1.23267,-2.11775 -1.99463,-4.54367 -1.99463,-7.16667c0,-7.90483 6.43208,-14.33333 14.33333,-14.33333h25.08333c1.98158,0 3.58333,1.60533 3.58333,3.58333c0,1.978 -1.60175,3.58333 -3.58333,3.58333h-25.08333c-3.95242,0 -7.16667,3.21425 -7.16667,7.16667c0,3.95242 3.21425,7.16667 7.16667,7.16667h17.91667h7.16667h21.90592c4.24625,0 7.99862,-2.77764 9.23128,-6.84473c1.23267,-4.06708 -0.34753,-8.46216 -3.88428,-10.81999c-13.56292,-9.04075 -27.25293,-18.16862 -27.25293,-18.16862v-31.59212l2.6945,3.42236l7.28564,12.14274c0.54467,0.91017 1.2881,1.68691 2.1696,2.27457l21.5,14.33333c1.22192,0.817 2.6066,1.20378 3.96826,1.20378c2.31483,0 4.58672,-1.11666 5.96989,-3.19141c2.19658,-3.2895 1.30545,-7.73457 -1.98763,-9.93115l-20.15625,-13.4375l-15.29915,-25.48926c-0.69875,-1.16817 -1.72112,-2.11332 -2.93945,-2.72249c-8.03921,-4.01692 -14.42057,-6.03271 -20.87012,-6.03988z">
                                    </path>
                                  </g>
                                </g>
                          </svg>
                      </div>
                      <h1 className="secondary-text-color">Goal to fit</h1>
                  </div>
                 
                  <div className="sing-in">
                      <h3 className="secondary-text-color">Sign In</h3>
                      <label className="primary-text-color" htmlFor="Email" >Email</label>
                      <input type="email" placeholder="sophie@example.com"/>
                      <label className="primary-text-color" htmlFor="Password" >Password</label>
                      <input type="password" placeholder="***********"/>
                      <button className="button-sing-in" >Sign In</button>
                  </div>
                  
                  <div>
                      <p className="secondary-text-color by-3">
                          or use one of your social profiles
                      </p>
                      <div className="social-profiles">
                          <div>
                              <button className="button-google"><i className="fa fa-google" aria-hidden="true"> </i>  GOOGLE</button>
                              <a href="#">Forgot Password?</a>
                          </div>
                          <div>
                              <button className="button-facebook"><i className="fa fa-facebook" aria-hidden="true"> </i>  FACEBOOK</button>   
                              <a className="primary-text-color" href="#">Sign Up</a>
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
  
  export default Login;


















