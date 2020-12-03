import React from "react";
import * as FaIcons from "react-icons/fa";

const InventoryBath = () => {
  var masterbed = [
    {
      name: "Master Bathroom",
      image: "/imgs/mbed.svg",
      link: "/landlord/entrancecondition",
    },
  ];
  var commonbed = [
    {
      name: "Common Bathroom 1",
      image: "/imgs/cb1.svg",
      link: "/landlord/bedscondition/",
    },
    {
      name: "Common Bathroom 2",
      image: "/imgs/cb1.svg",
      link: "/landlord/utilitycondition/",
    },
    {
      name: "Common Bathroom 3",
      image: "/imgs/cb1.svg",
      link: "/landlord/bathcondition/",
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
              <h3>Master Bath</h3>
            </div>
            <div class="ibox-content minhigh350px ">
              <ul class="folder-list">
                {masterbed.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item.link}>
                        <img src={item.image} class="align-self-center mr-2" width="25px" alt="..." /> &nbsp;
                        {item.name} &nbsp;
                        <FaIcons.FaArrowRight className="float-right fa-xs" />
                      </a>
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
              <h3>Common Bath</h3>
            </div>
            <div class="ibox-content minhigh350px">
              <ul class="folder-list">
                {commonbed.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item.link}>
                        <img src={item.image} class="align-self-center mr-2" width="25px" alt="..." /> &nbsp;
                        {item.name} &nbsp;
                        <FaIcons.FaArrowRight className="float-right fa-xs" />
                      </a>
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
