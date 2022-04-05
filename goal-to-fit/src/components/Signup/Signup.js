import React from "react";
import './Signup.css'
// import ImageTitle from "../ImageTitle/ImageTitle";
import Title from "../Title/Title";
import Input from "../Input/Input";
import Button from "../Button/Button";
import NoAccount from "../NoAccount/NoAccount";
import Footer from "../Footer/Footer";
import AgreeMent from "../AgreeMent/AgreeMent";

const Signup = () => {
    return (
        <div>
            <section>
                <div className="containe-signup">
                    <div className="head-signup"></div>
                    <div className="login">
                        <Title>Sign Up</Title>
                        <Input className="add-input"  htmlFor="Email" label='Email'
                            id="email" type="email" name="email"
                            placeholder="Enter your email"
                        //  value={email} 
                        //  isInvalid={isInvalid}
                        //  onChange={e => setEmail(e.target.value)}
                        />
                        <Input className="add-input"  htmlFor="Password" label='Password'
                            id='Password' type="password" placeholder="***********"
                        />
                        <AgreeMent id="terms" type="checkbox" name="terms" value="on" />

                        <Button type="submit" value="submit">Continue</Button>
                    </div>
                    <NoAccount  textA1='Forgot Password?'
                        textA2='Sign In'

                    />
                </div>
            </section>

            <Footer>&copy; Right 2022 : Goal to fit</Footer>


        </div>
    );
}

export default Signup;


















