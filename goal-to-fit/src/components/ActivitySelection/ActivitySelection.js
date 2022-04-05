import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer"
import Input from "../Input/Input";
import Button from "../Button/Button";
import SwitchButton from "../SwitchButton/SwitchButton";
import 'font-awesome/css/font-awesome.min.css';

import "./ActivitySelection.css"

const imageLogo = <img src="./img/gtf-logo.png" className="icon " />

function ActivitySelection() {
    return (
        <>
            <div className="wrapper">
                <NavBar pageTitle="ActivitySelection" />
                {/*  */}

                <section className="container container-activity-selection ">
                    <div className="container-css-50">
                        <Input className="add-input" type="text" id="Search" placeholder="Search.." title="Selection Activity"

                        />
                        <div className="activity-select ">
                            {imageLogo}
                            {imageLogo}
                            {imageLogo}
                            <Button className="button-cf" type="submit" >Confirm</Button>
                        </div>
                        <SwitchButton classLabel="display-none" textLeft="Indoor" textRight="Outdoor" textOnSwitch="indoor-outdoor"
                            inputName="toggle-1"
                        />
                        <div className="container-list">
                            {/* <a href="#" >
                                <i className="fas fa-chevron-left fa-5x" aria-hidden="true"></i>
                            </a> */}
                            <div className="activity-list">
                                {imageLogo}
                                {imageLogo}
                                {imageLogo}
                                {imageLogo}
                                {imageLogo}
                                {imageLogo}
                                {imageLogo}
                                {imageLogo}
                                {imageLogo}
                                {imageLogo}
                                {imageLogo}
                                {imageLogo}
                                {imageLogo}
                                {imageLogo}
                                {imageLogo}
                            </div>

                            {/* <a href="#" >
                                <i className="fas fa-chevron-right fa-5x" aria-hidden="true"></i>
                            </a> */}
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