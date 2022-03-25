import React, {useEffect, useState} from "react";
import './Login.css'
import ImageTitle from "../ImageTitle/ImageTitle";
import Title from "../Title/Title"
import Input from "../Input/Input";
import Button from "../Button/Button";

const Login = () => {
  
    return (
      <div> 
          <section>
              <div className="container"> 
                  <ImageTitle imgSrc={'./img/gtf-logo.png'}>Goal to fit</ImageTitle>                 
                  <div className="login">
                      <Title>Login</Title>
                      <Input htmlFor="Email" label='Email'
                             id='email' type='text' name='email' 
                             placeholder='Enter your email' 
                            //  value={email} 
                            //  isInvalid={isInvalid}
                            //  onChange={e => setEmail(e.target.value)}
                      /> 
                      <Input htmlFor="Password" label='Password' 
                             id='Password'  type="password" placeholder="***********"                      
                      />
                     <Button>Login</Button>                      
                  </div>
                  
                  <div>
                      <p className="secondary-text-color by-3">
                             Don’t have an account?
                      </p>
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
  
  export default Login;


















