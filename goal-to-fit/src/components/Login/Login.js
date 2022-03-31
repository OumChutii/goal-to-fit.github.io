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


















