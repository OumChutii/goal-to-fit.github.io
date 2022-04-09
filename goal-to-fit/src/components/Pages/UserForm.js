import React, { useState, useEffect } from "react";
import ImageTitle from "../ImageTitle/ImageTitle";
import Input from "../Input/Input";
import SwitchButton from "../SwitchButton/SwitchButton";
import CheckDateBox from "../CheckDateBox/CheckDateBox";
import Button from "../Button/Button"
import Footer from "../Footer/Footer";
import '../UserForm/UserForm.css'
import { Link } from "react-router-dom";
import InputSelect from "../Input/inputSelect/InputSelect";
import DATATEST from "./DataToTast/UserTest.json"

const UserForm = ({ }) => {
    const [userName, setUserName] = useState("");
    const [takenName, setTakenName] = useState(false);
    const [gender, setGender] = useState("female");
    const [userBirthDay, setUserBirthDay] = useState("")
    const [userAge, setUserAge] = useState("");
    const [userHeight, setUserHeight] = useState("")
    const [userWeight, setUserWeight] = useState("")
    const [userBMI, setUserBMI] = useState("")
    const [userGoal, setUserGoal] = useState([{}])

    // validate username
    let nameToCheck = "";
    const userNameLength = nameToCheck.length < 4

    function handleChange(event) {
        nameToCheck = event.target.value.toLocaleLowerCase()

        console.log(nameToCheck)

        if (DATATEST.find(data => data.username === nameToCheck || nameToCheck.length > 10)) {

            setTakenName(true)

            return;
        }
        setTakenName(false)
        setUserName(nameToCheck);
    }
    // add gender
    function addResul(result) {

        if (result) {
            setGender("male")
        } else {
            setGender("female")
        }

    }
    // add birth && calculate age
    function handleBirthDay(event) {

        const birthDateString = event.target.value
        setUserBirthDay(birthDateString)
        // birthday string to  birth date
        const birthDate = new Date(birthDateString)
        const toddy = new Date()

        const calculateAge = toddy.getFullYear() - birthDate.getFullYear()
        if (calculateAge <= 12) {
            setUserAge("")
            return;
        }
        setUserAge(calculateAge)

    }
    // add Height
    function addHeigh(event) {
        const heighCM = event.target.value
        setUserHeight(Number(heighCM))
    }

    // add Weight
    function addWeight(event) {
        const weightKg = event.target.value
        setUserWeight(Number(weightKg))
    }

    useEffect(() => {

        const heighM = userHeight / 100
        const calculateBMI = (userWeight / Math.pow(heighM, 2)).toFixed(1)

        setUserBMI(Number(calculateBMI))


    }, [userHeight, userWeight])

    // addgoal
    


    return (
        <>

            <section className="container-userfrom ">
                <form>
                    <div className="user-profile secondary-text-color ">
                        <ImageTitle imgSrc={'./img/gtf-logo.png'} classDiv={"profile-name-image_title"}
                            classImg={"icon-logo"}>{userName}</ImageTitle>
                        <Input placeholder="Add User Name " maxLength="10"
                            type="text" name="username" onChange={handleChange}
                            value={userName} style={userNameLength ? { borderColor: "red" } : null}
                        >
                            {takenName ? `username is already taken please Change.` : "username is length 4-10"}
                        </Input>
                    </div>
                    <div className="user-infomation">
                        <div >
                            <SwitchButton textLeft="MALE" textRight="FEMELE" textOnSwitch="gender"
                                inputName="gender" addResul={addResul} value={gender}
                            >
                                gender
                            </SwitchButton>
                        </div>
                        <div className="profile-year-of-birth">
                            <Input htmlFor="user-birthday" label="your birthday"
                                style={userBirthDay === "" || userAge === "" ? { borderColor: "red" } : null}
                                type="date" name="user-birthday" onChange={handleBirthDay} value={userBirthDay}
                            >
                                {userAge === "" ? `please insert your birthday` : `your age is  ${userAge}`}
                            </Input>
                        </div>
                        <div>
                            <Input htmlFor="height" label="Height" min="1" max="220"
                                style={userHeight === "" && userHeight < 100 ? { borderColor: "red" } : null}
                                type="number" placeholder="(cm)" name="height" onChange={addHeigh} value={userHeight}
                            >
                                {userHeight === "" && userHeight < 100 ? `please insert your heigh` : `your height is  ${userHeight}`}
                            </Input>
                        </div>
                        <div>
                            <Input htmlFor="weight" label="Weight" min="1" style={userWeight === "" ? { borderColor: "red" } : null}
                                type="number" placeholder="(kg)" name="weight" onChange={addWeight} value={userWeight}
                            >
                                {userWeight === "" ? `please insert your weight(kg)` : `your weight is  ${userWeight}`}

                            </Input>
                        </div>
                    </div>
                    <div className="user-goal" >

                        <InputSelect addUserGoal={setUserGoal} >Goal</InputSelect>


                    </div>
                    <div className="goal-date-time">
                        <div className="exercise-day">
                            <label>Exercise day</label>
                            <div className="data-goal">
                                <CheckDateBox name="mon" value="monday"    >M</CheckDateBox>
                                <CheckDateBox name="tue" value="tuesday"   >TU</CheckDateBox>
                                <CheckDateBox name="wed" value="wednesday" >W</CheckDateBox>
                                <CheckDateBox name="thu" value="thursday"  >TH</CheckDateBox>
                                <CheckDateBox name="fri" value="friday"    >F</CheckDateBox>
                                <CheckDateBox name="sat" value="saturday"  >SA</CheckDateBox>
                                <CheckDateBox name="sun" value="sunday"    >SU</CheckDateBox>
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
                            <Link to="/activity-report" >
                                <Button type="submit" value="submit">Save</Button>
                            </Link>
                        </div>
                        <div>
                            <Button className="button-reset" type="reset" value="Reset">Reset</Button>
                        </div>
                    </div>
                </form>

            </section>
            <Footer />
        </>
    );
}

export default UserForm;