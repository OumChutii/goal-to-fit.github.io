import React from "react";
import "./NavBar.css"
import NavBarButton from "./NavBarButton/NavBarButton";
import { Link, Route, Outlet } from "react-router-dom";



function NavBar({ pageTitle = "Please Add Pagetitle" }) {

    return (
        <div className="bg-nav">
            {/* <!-- ใส่สี background nav ที่ คลาสนี้ --> */}
            <nav className="container">
                <header className="nav-header">
                    <div className="row w-100 mx-auto no-gutters">
                        <div className="col-4">
                            <a className="head-title" href="#">
                                <img className="" src="./img/gtf-logo.png" />
                                <h2>{pageTitle}</h2>
                            </a>
                        </div>
                        <div className="col-8 d-flex justify-content-end align-items-center">
                            <ul className="menu-nav">
                                <Link to="/activity-report" >
                                    <NavBarButton fontAwesome="fa-home" aHref="#" >
                                        Home
                                    </NavBarButton>
                                </Link>
                                <Link to="/profile">
                                    <NavBarButton fontAwesome="fa-user" aHref="#" >
                                        Profile
                                    </NavBarButton>
                                </Link>
                                <Link to="/login">
                                    <NavBarButton aClassName="menu-link btn-logout" fontAwesome="fa-power-off"
                                        aHref="#" >
                                        Logout
                                    </NavBarButton>
                                </Link>
                                
                            </ul>
                        </div>
                    </div>
                </header>
            </nav>
            <hr className="d-none d-md-block mt-0 mb-0" />
        </div>

    );
}


export default NavBar;