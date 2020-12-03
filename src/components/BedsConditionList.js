import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
 
const BedsConditionList = () => {
  var master = [
    {
      name: "Master Bedroom",
      image: "/imgs/mbed.svg",
      link: "/landlord/mbedcondition"
    },
  ];
  var common = [
    {
      name: "Common Bedroom 1",
      image: "/imgs/cb1.svg",
      link: "/landlord/commonbed1condition/"
    },
    {
        name: "Common Bedroom 2",
        image: "/imgs/cb1.svg",
        link: "/landlord/commonbed2condition/"
    },
    {
        name: "Common Bedroom 3",
        image: "/imgs/cb1.svg",
        link: "/landlord/commonbed3condition/"
    },
  ];
  return (
<div class="container container-xs">

                        <div class="row pb-5 pt-5">
                          <div class="col-lg-4 px-2">
                              <div class="ibox">
                                <div class="ibox-title">
                                  <h3>Master Bedroom</h3>
                                </div>
                                <div class="ibox-content minhigh350px ">
                                    <ul class="folder-list">
                                    {master.map((item,index) => {
                                    return (
                                        <li key={index}>
                                            <Link to={item.link}>
                                                <img src={item.image} class="align-self-center mr-2" width="25px" alt="..." /> &nbsp; 
                                                {item.name} &nbsp;
                                                <FaIcons.FaArrowRight className="float-right fa-xs"/>
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
                                <h3>Common Bedrooms</h3>
                              </div>
                              <div class="ibox-content minhigh350px">
                                <ul class="folder-list">
                                    {common.map((item,index) => {
                                    return (
                                        <li key={index}>
                                            <Link to={item.link}>
                                                <img src={item.image} class="align-self-center mr-2" width="25px" alt="..." /> &nbsp; 
                                                {item.name} &nbsp;
                                                <FaIcons.FaArrowRight className="float-right fa-xs"/>
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
}

export default BedsConditionList;