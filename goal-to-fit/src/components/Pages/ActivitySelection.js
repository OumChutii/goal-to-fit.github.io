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
    const [searchTerm, setSearchTerm] = useState("");
    const [isIndoor, setIsIndoor] = useState(false);
    const [resultIcon, setResultIcon] = useState([]);
    const [actSelect, setActSelect] = useState("");
    const [isShowFrom, setisShowFrom] = useState(false);
    const [disabledCf, setDisabledCf] = useState(true);


    function addResul(result) {
        setIsIndoor(result)
    }

    useEffect(() => {

        const iconIndoor = dataIconAct.filter((icon) => icon.type === "indoor")
        const iconOutdoor = dataIconAct.filter((icon) => icon.type === "outdoor")

        setResultIcon(isIndoor ? iconIndoor : iconOutdoor)


    }, [isIndoor])

    function handleSearch(event) {
        setSearchTerm(event.target.value)
        event.preventDefault();
    }

    function addSelect(event) {
        const value = event.target.name
        
        setDisabledCf(false)
        setActSelect(resultIcon.filter((act) => act.name === value))
        event.preventDefault();
    }

    function removeSelect(event) {
        setActSelect("")
        setisShowFrom(false)
        setDisabledCf(true)
        event.preventDefault();
    }

    function handleCfClick(event) {
        setisShowFrom(true)
        setDisabledCf(true)
        event.preventDefault();
    }

    return (
        <>
            <div className="wrapper">
                <NavBar pageTitle="ActivitySelection" />


                <section className="container container-activity-selection ">
                    <div className="container-css-50">
                        <Input className="add-input" type="text" id="Search"
                            placeholder="Search.."
                            title="Selection Activity"
                            onChange={handleSearch}
                        />

                        <div className="activity-select ">
                            <div className="activity-select-icon">
                                {actSelect === "" ? null : Array.isArray(actSelect) && actSelect.map((icon) => {
                                    return <IconAct key={icon.id} src={icon.src} alt={icon.image} actType={icon.type}
                                        iconName={icon.name} setSelect={removeSelect}
                                    />
                                })
                                }
                            </div>

                            <Button className="button-cf" type="button" onClick={handleCfClick} disabled={disabledCf}
                            >
                                Confirm
                            </Button>
                        </div>
                        <SwitchButton classLabel="display-none" textLeft="Indoor" textRight="Outdoor" textOnSwitch="indoor-outdoor"
                            inputName="toggle-1" addResul={addResul}
                        />
                        <div className="container-list ">
                            <div className="activity-list">
                                {resultIcon.filter((value) => {
                                    if (searchTerm == "") {
                                        return value
                                    } else if (value.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        return value
                                    }
                                }).map((icon) => {

                                    return <IconAct key={icon.id} src={icon.src} alt={icon.name} name={icon.name}
                                        iconName={icon.name} setSelect={addSelect}
                                    />

                                })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="container-css-50 border-red" hidden={!isShowFrom}>

                    </div>
                </section>

                <div className="push"></div>
            </div>
            <Footer />
        </>
    );

}
export default ActivitySelection;