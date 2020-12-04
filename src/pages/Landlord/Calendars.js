import React from 'react'
import Footer from "../../components/static/Footer";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";
import CalendarPage from '../../components/CalendarPage.js';


export default function Calendars() {
    return (
        <div id="page-wrapper" className="gray-bg" style={{ border: "0px solid red" }}>
            <div className="border-bottom white-bg">
                <div className="container-fluid">
                    <Header />
                </div>
            </div>

            <div className="wrapper border-bottom page-heading bg-white">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <SiteMap title="Check In &amp; Check Out" />
                        </div>
                    </div>
                </div>
            </div>
            <div>

                <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5 gray-bg">
                    <div className="container pb-5">
                        <div className="row justify-content-center">
                            <div className="col-md-9">
                                <CalendarPage />
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}
