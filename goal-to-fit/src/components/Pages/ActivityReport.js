import React from 'react';
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar';
import '../ActivityReport/ActivityReport.css'
import { Link, NavLink } from 'react-router-dom';

const ActivityReport = () => {

    return (

        <body>
            {/* <!-- ใส่ background พื้นหลังทั้งหน้าจอ ที่ tag body --> */}
            <div className="wrapper">
                <NavBar pageTitle="Activity Report" />
                {/* <!-- TOP NAV END --> */}

                {/* <!-- -------------------------------------------------------------------------- -->

                        <!-- MAIN CONTENT SECTION START --> */}
                <section className="container-activity-report " >
                    <div className="container-css-60 ">
                        <div className="header-act-ls ">
                            <p className="secondary-text-color middle-font">Activity lists</p>
                            <p className="third--text-color">Today</p>
                            <p className="third--text-color">Workout days 92</p>
                        </div>
                        <div>
                            <div className="card-user-profile ">
                                <div className="create-act-button ">
                                    <NavLink to="/ativity-selection" className="d-flex justify-content-center secondary-text-color align-items-center">
                                        {/* <!-- Right Button --> */}
                                        <i className="fa fa-plus"></i>
                                        {/* <!-- Right Button --> */}
                                        <p className="weight-300 primary-text-color ml-2 my-0" htmlFor="nav-btn-plus">Create activity</p>
                                    </NavLink>
                                </div>
                                <div className="act-user-profile ">
                                    <div className="act-user-image ">
                                        <img src="./img/gtf-logo.png" alt="profile image" />
                                    </div>
                                    <div className="act-user-info">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th colspan="4" className="font-head bolder-font primary-text-color">John Doe</th>
                                                </tr>
                                                <tr className="font-detail secondary-text-color middle-font font-sm-detail text-center">
                                                    <th >&nbsp;</th>
                                                    <th>Start</th>
                                                    <th>Actual</th>
                                                    <th>Goal</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th className="font-detail secondary-text-color middle-font font-sm-detail text-left">Weigth</th>
                                                    <td className="font-detail font-sm-detail text-center">100</td>
                                                    <td className="font-detail font-sm-detail text-center">95</td>
                                                    <td className="font-detail font-sm-detail text-center">90</td>
                                                </tr>
                                                <tr>
                                                    <th className="font-detail secondary-text-color middle-font font-sm-detail text-left">BMI</th>
                                                    <td className="font-detail font-sm-detail text-center">34</td>
                                                    <td className="font-detail font-sm-detail text-center">32</td>
                                                    <td className="font-detail font-sm-detail text-center">30</td>
                                                </tr>
                                                <tr>
                                                    <th className="font-detail secondary-text-color middle-font font-sm-detail text-left">duration</th>
                                                    <td className="font-detail font-sm-detail text-center">0</td>
                                                    <td className="font-detail font-sm-detail text-center">92</td>
                                                    <td className="font-detail font-sm-detail text-center">150</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="row activity-item">
                                    <div className="col-12">
                                        <div className="row justify-content-around w-100 mx-auto">
                                            <div className="col-3 activity-icon">
                                                <img className="mx-auto" src="./img/running.png" alt="running activity" />
                                            </div>
                                            <div className="col-9 justify-content-between">
                                                <div className="row">
                                                    <div className="col-4 text-left">
                                                        <strong className="col-12 d-block p-0 text-center">Running</strong>
                                                        <small className="col-12 d-block p-0 text-center">19/02/22</small>
                                                    </div>
                                                    <div className="col-8 activity-result try">
                                                        <strong className="col-12 d-block p-0 text-center">2 / 10 km</strong>
                                                        <small className="col-12 d-block p-0 text-center">1:05:19 hrs</small>
                                                    </div>
                                                    {/* <!-- Change to modal or other way to shown up detail in future --> */}
                                                    <details className="col-12 mx-auto d-block font-detail">
                                                        <summary className="weight-300">details</summary>
                                                        <p className="ml-2">Lorem ipsum dolor sit amet.</p>
                                                    </details>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </section>
                {/* <!-- MAIN CONTENT SECTION END --> */}
                <div className="push"></div>
                <Footer />
            </div>
        </body>

    );
}

export default ActivityReport;