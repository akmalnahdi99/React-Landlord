import React from "react";
// import { FaWindowClose } from "react-icons/fa";


import Footer from "../../components/static/Footer";
import Payables from "../../components/PayablesList";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";

export default function LandLordPay() {
    // const { alert, hideAlert } = React.useContext(UserContext);

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
                            <SiteMap title="Payables" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-8 p-0">
                            <Payables />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}


