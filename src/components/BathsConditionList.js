import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
 
const BedsConditionList = () => {
  var master = [
    {
      name: "Master Bathroom",
      image: "/imgs/b1.svg",
      link: "/landlord/mbathcondition"
    },
  ];
  var common = [
    {
      name: "Common Bathroom 1",
      image: "/imgs/cb.svg",
      link: "/landlord/commonbath1condition/"
    },
    {
        name: "Common Bathroom 2",
        image: "/imgs/cb.svg",
        link: "/landlord/commonbath2condition/"
    },
    {
        name: "Common Bathroom 3",
        image: "/imgs/cb.svg",
        link: "/landlord/commonbath3condition/"
    },
  ];
  return (
<div className="container container-xs">

                        <div className="row pb-5 pt-5">
                          <div className="col-lg-4 px-2">
                              <div className="ibox">
                                <div className="ibox-title">
                                  <h3>Master Bathroom</h3>
                                </div>
                                <div className="ibox-content minhigh350px ">
                                    <ul className="folder-list">
                                    {master.map((item,index) => {
                                    return (
                                        <li key={index}>
                                            <Link to={item.link}>
                                                <img src={item.image} className="align-self-center mr-2" width="25px" alt="..." /> &nbsp; 
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
                          <div className="col-lg-4 px-2">
                            <div className="ibox">
                              <div className="ibox-title">
                                <h3>Common Bathrooms</h3>
                              </div>
                              <div className="ibox-content minhigh350px">
                                <ul className="folder-list">
                                    {common.map((item,index) => {
                                    return (
                                        <li key={index}>
                                            <Link to={item.link}>
                                                <img src={item.image} className="align-self-center mr-2" width="25px" alt="..." /> &nbsp; 
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