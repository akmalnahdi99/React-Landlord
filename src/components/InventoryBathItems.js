import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const InventoryBath = () => {
  var master = [
    {
      name: "Master Bathroom",
      image: "/imgs/b1.svg",
      link: "/landlord/InventoryMBath"
    },
  ];
  var common = [
    {
      name: "Common Bathroom 1",
      image: "/imgs/cb.svg",
      link: "/landlord/InventoryCBath1/"
    },
    {
      name: "Common Bathroom 2",
      image: "/imgs/cb.svg",
        link: "/landlord/InventoryCBath2/"
    },
    {
      name: "Common Bathroom 3",
      image: "/imgs/cb.svg",
      link: "/landlord/InventoryCBath3/"
    },
  ];
  return (
    <div class="container container-xs">
      <div class="row pb-5 pt-5">
        <div class="col-lg-4 px-2">
          <div class="ibox">
            <div class="ibox-title">
              <h3>Master Bathroom</h3>
            </div>
            <div class="ibox-content minhigh350px ">
              <ul class="folder-list">
              {master.map((item,index) => {
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
            <h3>Common Bathrooms</h3>
            </div>
            <div class="ibox-content minhigh350px">
              <ul class="folder-list">
                {common.map((item,index) => {
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

export default InventoryBath;
