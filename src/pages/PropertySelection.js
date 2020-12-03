import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, Media } from 'reactstrap';
import * as FaIcons from "react-icons/fa";

export default function Login(props) {
    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    var data = [
        {
            id: 0,
            Unitname: "B-10-2",
            BuildingName: "Widuri Impian Condo",
            image: "/imgs/a5.jpg",
            altname: "Wic",
        },
        {
            id: 1,
            Unitname: "B-3A-03A",
            BuildingName: "Puteri Palma",
            image: "/imgs/a4.jpg",
            altname: "P.P"
        },
        {
            id: 2,
            Unitname: "No.63",
            BuildingName: "Port Dickson",
            image: "/imgs/a8.jpg",
            altname: "PD",
        },
        {
            id: 3,
            Unitname: "No.63",
            BuildingName: "Port Dickson",
            image: "/imgs/a8.jpg",
            altname: "PD",
        },
        {
            id: 4,
            Unitname: "No.63",
            BuildingName: "Port Dickson",
            image: "/imgs/a8.jpg",
            altname: "PD",
        },
        {
            id: 5,
            Unitname: "No.63",
            BuildingName: "Port Dickson",
            image: "/imgs/a8.jpg",
            altname: "PD",
        },
    ];
    return (
        <div className="loginbg doorcasedark-bg">
            <div class="tenantdiv">
                <div className="tenantlogo">
                    <img alt="dr-logo" src="/imgs/doorcase-logo.png" class="img-fluid" width="70px" />
                </div>

                <div class="container">
                    <div class="text-center animated fadeInDown centeredbox">
                        <div class="row">
                            {data.map((item, index) => {
                                return (
                                    <div class="col-md-4 col-sm-4 col-6 p-0 align-self-center mt-5">
                                        <Link to="/landlord/activity">
                                            <img alt="wic" src={item.image} class="img-fluid rounded-border" width="80%" />
                                            <br /><br />
                                            <span class="text-white font-light ">
                                                {item.Unitname}
                                            </span>
                                            <br />
                                            <span class="text-white font-light font-small">
                                                {item.BuildingName}
                                            </span>
                                        </Link>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </div>

                <Modal isOpen={modal} toggle={toggle} className={className} centered={true}>
                    <ModalHeader toggle={toggle} close={closeBtn} className="text-completedtask text-left font-title ml-3">Select Property</ModalHeader>
                    {data.map((item, index) => {
                        return (
                            <ModalBody className="pt-0">
                                <Media className="mt-1" href="/landlord/activity" >
                                    <Media left middle>
                                        <Media className="img-fluid rounded-border align-self-center mr-3" object src={item.image} alt={item.altname} width="50px" />
                                    </Media>
                                    <Media body className="align-self-center">
                                        <Media heading className="m-0 text-completedtask">
                                            {item.UnitName}
                                            <span>
                                                <i class="fas fa-arrow-right fa-xs float-right"></i>
                                            </span>
                                        </Media>
                                        <p className="m-0 font-body text-completedtask">{item.BuildingName}</p>
                                    </Media>
                                </Media>
                            </ModalBody>
                        );
                    })}
                </Modal>

                <div class="tenantall text-center">
                    <Button color="link" className="mt-3" onClick={toggle}>
                        See all tenant list &nbsp; <FaIcons.FaUserCog />
                    </Button>
                </div>
                <div class="copyright-footer">
                    <p class="m-t text-center text-white">
                        <small>
                            &copy; <span className="ml-1">{getCurrentYear()} </span>
                            <span className="ml-1">Copyright by Jann Properties</span>
                        </small>
                    </p>
                </div>
            </div>
        </div>
    );
}
