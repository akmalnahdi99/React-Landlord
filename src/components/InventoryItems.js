import React from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

const InventoryItems = () => {
  var areas = [
    {
      name: "Entrance",
      image: "/imgs/en1.svg",
      link: "/landlord/inventoryentrance",
    },
    {
      name: "Kitchen",
      image: "/imgs/k2.svg",
      link: "/landlord/inventorykitchen",
    },
    {
      name: "Living",
      image: "/imgs/l1.svg",
      link: "/landlord/inventoryliving",
    },
    {
      name: "Dining",
      image: "/imgs/dining.svg",
      link: "/landlord/inventorydining",
    },
    {
      name: "Yard",
      image: "/imgs/yard.svg",
      link: "/landlord/inventoryyard",
    },
    {
      name: "Balcony",
      image: "/imgs/balcony.svg",
      link: "/landlord/inventorybalcony",
    },
  ];
  var rooms = [
    {
      name: "Beds",
      image: "/imgs/bed1.svg",
      link: "/landlord/inventorybeds",
    },
    {
      name: "Utility",
      image: "/imgs/u1.svg",
      link: "/landlord/inventoryutility",
    },
    {
      name: "Bath",
      image: "/imgs/bath.svg",
      link: "/landlord/inventorybath",
    },
  ];
  var miscellaneous = [
    {
      name: "Keys",
      image: "/imgs/key.svg",
      link: "/landlord/inventorykey",
    },
    {
      name: "Access Cards",
      image: "/imgs/access.svg",
      link: "/landlord/inventoryaccesscard",
    },
    {
      name: "Vehicle Stickers",
      image: "/imgs/car.svg",
      link: "/landlord/inventoryvehicle",
    },
    {
      name: "Remote Control",
      image: "/imgs/remote-control.svg",
      link: "/landlord/inventoryremotecontrol",
    },
  ];
  var meterReadings = [
    {
      name: "Electricity",
      image: "/imgs/electricity.svg",
      link: "/landlord/inventoryelectricity",
    },
    {
      name: "Water",
      image: "/imgs/water-drop.svg",
      link: "/landlord/inventorywater",
    },
    {
      name: "Gas",
      image: "/imgs/gas.svg",
      link: "/landlord/inventorygas",
    },
  ];
  return (
    <div className="container container-xs">
      <div className="row text-center">
        <div className="col-12 p-2 pt-3">
          <div className="ibox white-bg" onclick="location.href='vr.html';">
            <div className="ibox-content minhigh">
              <Link to="/" className="btn-block text-truncate pt-3">
                <img src="/imgs/immersive.svg" width="24px" alt="name" />
                <br />
                Virtual Tour
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row pb-5">
        <div className="col-lg-4 px-2">
          <div className="ibox">
            <div className="ibox-title">
              <h3>Areas</h3>
            </div>
            <div className="ibox-content minhigh350px ">
              <ul className="folder-list">
                {areas.map((item, index) => {
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
              <h3>Rooms</h3>
            </div>
            <div className="ibox-content minhigh350px">
              <ul className="folder-list">
                {rooms.map((item, index) => {
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
              <h3>Miscellaneous</h3>
            </div>
            <div className="ibox-content minhigh350px">
              <ul className="folder-list">
                {miscellaneous.map((item, index) => {
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
              <h3>Meter Readings</h3>
            </div>
            <div className="ibox-content minhigh350px">
              <ul className="folder-list">
                {meterReadings.map((item, index) => {
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

export default InventoryItems;
