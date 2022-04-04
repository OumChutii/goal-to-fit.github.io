import React, {useEffect, useState} from "react";
import './Login.css'
import ImageTitle from "../ImageTitle/ImageTitle";
import Title from "../Title/Title"
import Input from "../Input/Input";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import NoAccount from "../NoAccount/NoAccount";

const Login = () => {
  
    return (
      <div> 
          <section>
                <div className="container"> 
                    <ImageTitle imgSrc={'./img/gtf-logo.png'} classDiv={"head-logo"}
                    classImg={"icon-logo"}>
                        Goal to fit
                    </ImageTitle>                 
                    <div className="login">
                        <Title>Login</Title>
                        <Input  className="add-input" htmlFor="Email" label='Email'
                                id='email' type='text' name='email' 
                                placeholder='Enter your email' 
                                //  value={email} 
                                //  isInvalid={isInvalid}
                                //  onChange={e => setEmail(e.target.value)}
                        /> 
                        <Input className="add-input" htmlFor="Password" label='Password' 
                                id='Password'  type="password" placeholder="***********"                      
                        />
                        <Button  type="submit" value="submit">Login</Button>                      
                    </div>
                    <NoAccount tagtitle='Don’t have an account?'
                               textA1='Forgot Password?'
                               textA2='Sign Up'
                               
                    />                
                </div>
          </section>
          
          <Footer>©Copy Right 2022 : Goal to fit</Footer>
         
      
      </div>
    );
  }
  
  export default Login;


















