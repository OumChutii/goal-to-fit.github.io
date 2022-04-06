import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Signup/Signup.css'
// import ImageTitle from "../ImageTitle/ImageTitle";
import Title from "../Title/Title";
import Input from "../Input/Input";
import Button from "../Button/Button";
import NoAccount from "../NoAccount/NoAccount";
import Footer from "../Footer/Footer";
import AgreeMent from "../AgreeMent/AgreeMent";

const Signup = () => {
    const [value, setValue] = useState(false);

    let checkboxValue = '';
    const handleValue = (e) => {
        checkboxValue = e.target.value;
        // elemValue ตรงนี้ คือไปรับค่า value attribute จาก input checkbox ในทีนี้คือ value={value || false} ตรงนี้ต้องสังเกตุ
        // ถึงจะ เป็น boolean false แต่ ค่าที่ e.target.attribute ด้านบนรับมา จะถูกแปลงค่าเป็น string

        // ดังนั้นตอนที่จะ setValue เลยต้องเปรียบเทียบค่า เป็น string 'false'
        setValue(checkboxValue === 'false' ? true : false);
        // การทำงาน คือ พอคลิ๊ก checkbox callback function handleValue ทำงาน รับค่า value ของ input มา value={value || false}
        // ค่าแรกสุดได้ค่าจาก initial state จะได้ false || false จะได้ว่า eleValue = false (เอาตัวหลัง เพราะเป็น or)
        // ถูกแปลงเป็น string elemValue = 'false' เปรียบเทียบแล้ว ได้ค่า true เลย setValue เลยเท่ากับ true
    }

    return (
        <div>
            <section className="signup-section">
                <div className="containe-signup">
                    <div className="head-signup"></div>
                    <div className="login">
                        <Title>Sign Up</Title>
                        <Input className="add-input" htmlFor="Email" label='Email'
                            id="email" type="email" name="email"
                            placeholder="Enter your email"
                        //  value={email} 
                        //  isInvalid={isInvalid}
                        //  onChange={e => setEmail(e.target.value)}
                        />
                        <Input className="add-input" htmlFor="Password" label='Password'
                            id='Password' type="password" placeholder="***********"
                        />
                        <AgreeMent id="terms" type="checkbox" name="terms" 
                        value={value || false} onClick={handleValue} />
                        
                        <Link to="/activity-report">
                            <Button type="submit" value="submit">Continue</Button>
                        </Link>


                    </div>
                    <NoAccount textA1='Forgot Password?'
                        textA2='Sign In'

                    />
                </div>
            </section>

            <Footer>&copy; Right 2022 : Goal to fit</Footer>


        </div>
    );
}

export default Signup;


















