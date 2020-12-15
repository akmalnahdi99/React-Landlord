import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
 
const PropertyConditionList = () => {
  var areas = [
    {
      name: "Entrance",
      image: "/imgs/en1.svg",
      link: "/landlord/entrancecondition"
    },
    {
        name: "Kitchen",
        image: "/imgs/k2.svg",
        link: "/landlord/kitchencondition/"
    },
    {
        name: "Living",
        image: "/imgs/l1.svg",
        link: "/landlord/livingcondition/"
      },
      {
        name: "Dining",
        image: "/imgs/dining.svg",
        link: "/landlord/diningcondition/"
      },
      {
        name: "Yard",
        image: "/imgs/yard.svg",
        link: "/landlord/yardcondition/"
      },
      {
        name: "Balcony",
        image: "/imgs/balcony.svg",
        link: "/landlord/balconycondition/"
      },
  ];
  var rooms = [
    {
      name: "Beds",
      image: "/imgs/bed1.svg",
      link: "/landlord/bedscondition/"
    },
    {
        name: "Utility",
        image: "/imgs/u1.svg",
        link: "/landlord/utilitycondition/"
    },
    {
        name: "Bath",
        image: "/imgs/bath.svg",
        link: "/landlord/bathscondition/"
    },
  ];
  return (
<div className="container container-xs">

                    <div className="row text-center">
                       
                        <div className="col-12 p-2 pt-3">
                           <div className="ibox white-bg" onclick="location.href='vr.html';">
                            <div className="ibox-content minhigh">
                            <Link to="#" className="btn-block text-truncate pt-3">
                              <img src="/imgs/immersive.svg" width="24px" alt=""/>
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
                                    {areas.map((item,index) => {
                                    return (
                                        <li key={index}>
                                            <Link to={item.link}>
                                                <img src={item.image} className="align-self-center mr-2" width="25px" alt="" /> &nbsp; 
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
                                <h3>Rooms</h3>
                              </div>
                              <div className="ibox-content minhigh350px">
                                <ul className="folder-list">
                                    {rooms.map((item,index) => {
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

export default PropertyConditionList;