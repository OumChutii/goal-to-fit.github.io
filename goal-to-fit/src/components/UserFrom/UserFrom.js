import React, { useState } from "react";
import ImageTitle from "../ImageTitle/ImageTitle";
import Input from "../Input/Input";
import SwitchButton from "../SwitchButton/SwitchButton";
import './UserFrom.css'


const UserFrom = ({ }) => {
   
    return (
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
                    <label htmlFor="yearBirth">year of birth</label>
                    <input type="date" />
                </div>
                <div>
                    <label htmlFor="height">Height</label>
                    <input type="number" placeholder="(kg)" />
                </div>
                <div>
                    <label htmlFor="weight">Weight</label>
                    <input type="number" placeholder="(cm)" />
                </div>
            </div>
            <div className="profile-goal">
                <label htmlFor="goal">Goal</label>
                <textarea id="goal" name="goal" rows="5" cols="100%" />
            </div>
            <div className="goal-date-time">
                <div className="exercise-day">
                    <label>Exercise day</label>
                    <div className="data-goal">
                        <label htmlFor="mon">
                            <input type="checkbox" name="mon" value="monday" />
                            <p>MON</p>
                        </label>
                        <label htmlFor="tue">
                            <input type="checkbox" name="tue" value="tuesday" />
                            <p>TUE</p>
                        </label>
                        <label htmlFor="wed">
                            <input type="checkbox" name="wed" value="wednesday" />
                            <p>WED</p>
                        </label>
                        <label htmlFor="thu">
                            <input type="checkbox" name="thu" value="thursday" />
                            <p>THU</p>
                        </label>
                        <label htmlFor="fri">
                            <input type="checkbox" name="fri" value="friday" />
                            <p>FRI</p>
                        </label>
                        <label htmlFor="sat">
                            <input type="checkbox" name="sat" value="saturday" />
                            <p>SAT</p>
                        </label>
                        <label htmlFor="sun">
                            <input type="checkbox" name="sun" value="sunday" />
                            <p>SUN</p>
                        </label>
                    </div>
                    {/* <input type="checkbox" name="tu" />
                    <label htmlFor="tu">TU</label>
                    <input type="checkbox" name="w" />
                    <label htmlFor="w">W</label>
                    <input type="checkbox" name="th" />
                    <label htmlFor="th">TH</label>
                    <input type="checkbox" name="f" />
                    <label htmlFor="f">SA</label>
                    <input type="checkbox" name="su" />
                    <label htmlFor="su">SU</label> */}
                </div>
                <div className="start-time">
                    <label>start time</label>
                    <label>*It takes about 30 minutes or more.</label>
                    <div className="set-time">
                        <input type="number" name="hour" id="" min="0" max="24" />
                        <p>:</p>
                        <input type="number" name="minit" id="" min="0" max="60" />
                    </div>
                </div>
            </div>

            <button>SAVE</button>
        </section>

    );
}

export default UserFrom;