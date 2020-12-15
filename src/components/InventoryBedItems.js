import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const InventoryBed = () => {
  var masterbed = [
    {
      name: "Master Bedroom",
      image: "/imgs/mbed.svg",
      link: "/landlord/inventorymbed",
    },
  ];
  var commonbed = [
    {
      name: "Common Bedroom 1",
      image: "/imgs/cb1.svg",
      link: "/landlord/inventorycbed1",
    },
    {
      name: "Common Bedroom 2",
      image: "/imgs/cb1.svg",
      link: "/landlord/inventorycbed2",
    },
    {
      name: "Common Bedroom 3",
      image: "/imgs/cb1.svg",
      link: "/landlord/inventorycbed3",
    },
  ];
  return (
    <div className="container container-xs">
      <div className="row text-center">
        <div className="col-12 p-2 pt-3"></div>
      </div>
      <div className="row pb-5">
        <div className="col-lg-4 px-2">
          <div className="ibox">
            <div className="ibox-title">
              <h3>Master Bed</h3>
            </div>
            <div className="ibox-content minhigh350px ">
              <ul className="folder-list">
                {masterbed.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.link}>
                        <img src={item.image} className="align-self-center mr-2" width="25px" alt="..." /> &nbsp;
                        {item.name} &nbsp;
                        <FaIcons.FaArrowRight className="float-right fa-xs" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 px-2">
          <div className="ibox">
            <div className="ibox-title">
              <h3>Common Bed</h3>
            </div>
            <div className="ibox-content minhigh350px">
              <ul className="folder-list">
                {commonbed.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.link}>
                        <img src={item.image} className="align-self-center mr-2" width="25px" alt="..." /> &nbsp;
                        {item.name} &nbsp;
                        <FaIcons.FaArrowRight className="float-right fa-xs" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryBed;
