import React from "react";
import "./NavBar.css"


function NaveBar({pageTitle="Please Add Pagetitle"}) {

    return (
        <div className="bg-nav">
            {/* <!-- ใส่สี background nav ที่ คลาสนี้ --> */}
            <nav className="container">
                <header className="nav-header">
                    <div className="row w-100 mx-auto no-gutters">
                        <div className="col-4">
                            <a className="head-title" href="#">
                                <img className="" src="./img/gtf-logo.png"  />
                                <h2>{pageTitle}</h2>
                            </a>
                        </div>
                        <div className="col-8 d-flex justify-content-end align-items-center">
                            <ul className="menu-nav">
                                <li className="menu-list">
                                    <a href="#" className="menu-link">
                                        <div className="menu-icon fa fa-home"></div>
                                        <p className="menu-name">Home</p>
                                    </a>
                                </li>
                                {/* <li className="menu-list">
                                    <a href="#" className="menu-link">
                                        <div className="menu-icon fa fa-cart-flatbed"></div>
                                        <p className="menu-name">Shop</p>
                                    </a>
                                </li>
                                <li className="menu-list">
                                    <a href="#" className="menu-link">
                                        <div className="menu-icon fa fa-lemon"></div>
                                        <p className="menu-name">Meal</p>
                                    </a>
                                </li> */}
                                <li className="menu-list">
                                    <a href="#" className="menu-link">
                                        <div className="menu-icon fa fa-user"></div>
                                        <p className="menu-name">Profile</p>
                                    </a>
                                </li>
                                <li className="menu-list ml-5">
                                    <a href="#" className="menu-link btn-logout">
                                        <div className="menu-icon fa fa-power-off"></div>
                                        <p className="menu-name">Logout</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
            </nav>
            <hr className="d-none d-md-block mt-0 mb-0" />
        </div>

    );
}


export default NaveBar;