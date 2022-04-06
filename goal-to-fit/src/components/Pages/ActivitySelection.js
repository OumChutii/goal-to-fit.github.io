import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer"
import Input from "../Input/Input";
import Button from "../Button/Button";
import SwitchButton from "../SwitchButton/SwitchButton";
import 'font-awesome/css/font-awesome.min.css';
import JSONDATA from "../ActivitySelection/indoor.json"
import "../ActivitySelection/ActivitySelection.css"
import IconAct from "../IconAct/IconAct";


const imageLogo = <img src="./img/gtf-logo.png" className="icon " />

function ActivitySelection() {
    const  [searchTerm , setSearchTerm] = useState("")
    
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
                            onChange={event => {
                                setSearchTerm(event.target.value)                           
                            }}
                        />
                        <div className="activity-select ">

                            <Button className="button-cf" type="submit" >Confirm</Button>
                        </div>
                        <SwitchButton classLabel="display-none" textLeft="Indoor" textRight="Outdoor" textOnSwitch="indoor-outdoor"
                            inputName="toggle-1"
                        />
                        <div className="container-list">

                            {/* <div className="activity-list">
                                {Array.isArray(JSONDATA) && JSONDATA.map((icon) => {
                                    return <IconAct iconResults={icon}
                                        key={icon.id}
                                    />
                                })
                                }
                            </div> */}


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