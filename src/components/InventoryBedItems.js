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
    <div class="container container-xs">
      <div class="row text-center">
        <div class="col-12 p-2 pt-3"></div>
      </div>
      <div class="row pb-5">
        <div class="col-lg-4 px-2">
          <div class="ibox">
            <div class="ibox-title">
              <h3>Master Bed</h3>
            </div>
            <div class="ibox-content minhigh350px ">
              <ul class="folder-list">
                {masterbed.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.link}>
                        <img src={item.image} class="align-self-center mr-2" width="25px" alt="..." /> &nbsp;
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
        <div class="col-lg-4 px-2">
          <div class="ibox">
            <div class="ibox-title">
              <h3>Common Bed</h3>
            </div>
            <div class="ibox-content minhigh350px">
              <ul class="folder-list">
                {commonbed.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.link}>
                        <img src={item.image} class="align-self-center mr-2" width="25px" alt="..." /> &nbsp;
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
