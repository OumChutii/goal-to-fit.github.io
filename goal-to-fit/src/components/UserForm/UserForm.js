import React, { useState } from "react";
import ImageTitle from "../ImageTitle/ImageTitle";
import Input from "../Input/Input";
import SwitchButton from "../SwitchButton/SwitchButton";
import CheckDateBox from "../CheckDateBox/CheckDateBox";
import Button from "../Button/Button"
import Footer from "../Footer/Footer";
import './UserForm.css'


const UserForm = ({ }) => {

    return (
        <>

            <section className="container-userfrom ">
                <div className="profile-name  secondary-text-color ">
                    <ImageTitle imgSrc={'./img/gtf-logo.png'} classDiv={"profile-name"}
                        classImg={"icon-logo"}>
                        Goal to fit
                    </ImageTitle>
                </div>
                <div className="profile-infomation">
                    <div >
                        <SwitchButton textLeft="MELE" textRight="FEMELE" textSwitch="gender">gender</SwitchButton>
                    </div>
                    <div className="profile-year-of-birth">
                        <Input htmlFor="yearBirth" label="year of birth"
                            type="date" name="yearBirth"
                        />
                    </div>
                    <div>
                        <Input htmlFor="height" label="Height"
                            type="number" placeholder="(cm)" name="height"
                        />
                    </div>
                    <div>
                        <Input htmlFor="weight" label="Weight"
                            type="number" placeholder="(kg)" name="weight"
                        />
                    </div>
                </div>
                <div >
                    <Input className="profile-goal" htmlFor="goal" label="Goal"
                        type="number" placeholder="(kg)" name="weight"
                    />

                    {/* <textarea id="goal" name="goal" rows="5" cols="100%" /> */}
                </div>
                <div className="goal-date-time">
                    <div className="exercise-day">
                        <label>Exercise day</label>
                        <div className="data-goal">
                            <CheckDateBox name="mon" value="monday"    >MON</CheckDateBox>
                            <CheckDateBox name="tue" value="tuesday"   >TUE</CheckDateBox>
                            <CheckDateBox name="wed" value="wednesday" >WED</CheckDateBox>
                            <CheckDateBox name="thu" value="thursday"  >THU</CheckDateBox>
                            <CheckDateBox name="fri" value="friday"    >FRI</CheckDateBox>
                            <CheckDateBox name="sat" value="saturday"  >SAT</CheckDateBox>
                            <CheckDateBox name="sun" value="sunday"    >SUN</CheckDateBox>
                        </div>

                    </div>

                    <Input className="start-time" htmlFor="set-time" label="Start time"
                        type="time" id="set-time" name="set-time"
                    >
                        *It takes about 30 minutes or more.
                    </Input>


                </div>
                <div className="active-form">
                    <div>
                        <Button type="submit" value="submit">Save</Button>
                    </div>
                    <div>
                        <Button className="button-reset" type="reset" value="Reset">Reset</Button>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    );
}

export default UserForm;