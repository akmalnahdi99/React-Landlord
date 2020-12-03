import React from "react";
import * as FaIcons from "react-icons/fa";
 
const InventoryItems = () => {
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
      link: "/landlord/inventorybeds/"
    },
    {
        name: "Utility",
        image: "/imgs/u1.svg",
        link: "/landlord/utilitycondition/"
    },
    {
        name: "Bath",
        image: "/imgs/bath.svg",
        link: "/landlord/inventorybath"
    },
  ];
  var miscellaneous = [
    {
      name: "Keys",
      image: "/imgs/key.svg",
      link: "/landlord/inventorykey"
    },
    {
        name: "Access Cards",
        image: "/imgs/access.svg",
        link: "/landlord/utilitycondition/"
    },
    {
        name: "Vehicle Stickers",
        image: "/imgs/car.svg",
        link: "/landlord/bathcondition/"
    },
    {
        name: "Remote Control",
        image: "/imgs/remote-control.svg",
        link: "/landlord/bathcondition/"
    },
  ];
  var meterReadings = [
    {
      name: "Electricity",
      image: "/imgs/electricity.svg",
      link: "/landlord/bedscondition/"
    },
    {
        name: "Water",
        image: "/imgs/water-drop.svg",
        link: "/landlord/utilitycondition/"
    },
    {
        name: "Gas",
        image: "/imgs/gas.svg",
        link: "/landlord/bathcondition/"
    },
  ];
  return (
<div class="container container-xs">

                    <div class="row text-center">
                       
                        <div class="col-12 p-2 pt-3">
                           <div class="ibox white-bg" onclick="location.href='vr.html';">
                            <div class="ibox-content minhigh">
                            <a href="#" class="btn-block text-truncate pt-3">
                              <img src="/imgs/immersive.svg" width="24px" />
                              <br />
                              Virtual Tour
                            </a>
                            </div>
                            </div>
                          </div>
                        
                    </div>
                        <div class="row pb-5">
                          <div class="col-lg-4 px-2">
                              <div class="ibox">
                                <div class="ibox-title">
                                  <h3>Areas</h3>
                
                                </div>
                                <div class="ibox-content minhigh350px ">
                                    <ul class="folder-list">
                                    {areas.map((item,index) => {
                                    return (
                                        <li key={index}>
                                            <a href={item.link}>
                                                <img src={item.image} class="align-self-center mr-2" width="25px" alt="..." /> &nbsp; 
                                                {item.name} &nbsp;
                                                <FaIcons.FaArrowRight className="float-right fa-xs"/>
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
                                <h3>Rooms</h3>
                              </div>
                              <div class="ibox-content minhigh350px">
                                <ul class="folder-list">
                                    {rooms.map((item,index) => {
                                    return (
                                        <li key={index}>
                                            <a href={item.link}>
                                                <img src={item.image} class="align-self-center mr-2" width="25px" alt="..." /> &nbsp; 
                                                {item.name} &nbsp;
                                                <FaIcons.FaArrowRight className="float-right fa-xs"/>
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
                                <h3>Miscellaneous</h3>
                              </div>
                              <div class="ibox-content minhigh350px">
                                <ul class="folder-list">
                                    {miscellaneous.map((item,index) => {
                                    return (
                                        <li key={index}>
                                            <a href={item.link}>
                                                <img src={item.image} class="align-self-center mr-2" width="25px" alt="..." /> &nbsp; 
                                                {item.name} &nbsp;
                                                <FaIcons.FaArrowRight className="float-right fa-xs"/>
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
                                <h3>Meter Readings</h3>
                              </div>
                              <div class="ibox-content minhigh350px">
                                <ul class="folder-list">
                                    {meterReadings.map((item,index) => {
                                    return (
                                        <li key={index}>
                                            <a href={item.link}>
                                                <img src={item.image} class="align-self-center mr-2" width="25px" alt="..." /> &nbsp; 
                                                {item.name} &nbsp;
                                                <FaIcons.FaArrowRight className="float-right fa-xs"/>
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
}

export default InventoryItems;