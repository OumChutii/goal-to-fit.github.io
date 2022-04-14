import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer"
import Input from "../Input/Input";
import Button from "../Button/Button";
import SwitchButton from "../SwitchButton/SwitchButton";
import 'font-awesome/css/font-awesome.min.css';
import "../ActivitySelection/ActivitySelection.css"
import IconAct from "../IconAct/IconAct";
import dataIconAct from "./DataToTast/dateActIcon.json";



function ActivitySelection() {
    const [searchTerm, setSearchTerm] = useState("")
    const [isIndoor, setIsIndoor] = useState(false)
    const [resultIcon, setResultIcon] = useState([])


    function addResul(result) {
        setIsIndoor(result)
    }

    useEffect(() => {

        const iconIndoor = dataIconAct.filter((icon) => icon.type === "indoor")
        const iconOutdoor = dataIconAct.filter((icon) => icon.type === "outdoor")

        setResultIcon(isIndoor ? iconIndoor : iconOutdoor)


    }, [isIndoor])


    return (
        <>
            <div className="wrapper">
                <NavBar pageTitle="ActivitySelection" />
                {/*  */}

                <section className="container container-activity-selection ">
                    <div className="container-css-50">
                        <Input className="add-input" type="text" id="Search"
                            placeholder="Search.."
                            title="Selection Activity"

                        />
                        <div className="activity-select ">

                            <Button className="button-cf" type="submit" >Confirm</Button>
                        </div>
                        <SwitchButton classLabel="display-none" textLeft="Indoor" textRight="Outdoor" textOnSwitch="indoor-outdoor"
                            inputName="toggle-1" addResul={addResul}
                        />
                        <div className="container-list ">
                            <div className="activity-list">
                                {
                                    Array.isArray(resultIcon) && resultIcon.map((icon) => {
                                        return <IconAct key={icon.id} src={icon.src} alt={icon.image}
                                            iconName={icon.name}
                                        />

                                    })}

                            </div>

                        </div>
                    </div>
                </section>

                <div className="push"></div>
            </div>
            <Footer />
        </>
    );

}
export default ActivitySelection; 