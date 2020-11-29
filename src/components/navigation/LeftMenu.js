import React, { useState } from "react";
import { Link, Redirect, Route } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { Collapse } from "reactstrap";
import { AppContext } from "../../context/settings";

export default function LeftMenu() {
  //Temporary Login for all pages that contain a leftmenu
  const appContext = React.useContext(AppContext); // for reading login status
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  console.log("in menu", appContext.settings.login);
  if (appContext.settings.login === false) {
    return (
      <Route>
        <Redirect to="/login"></Redirect>
      </Route>
    );
  }

  //All Svg Files need to be stored as files
  return (
    <>
      <nav className="navbar-default navbar-static-side">
        <div className="sidebar-collapse">
          <ul className="nav metismenu" id="side-menu">
            <li className="nav-header">
              <div className="profile-element">
                <Link className="navbar-minimalize float-right" onClick={toggle}>
                  <FaIcons.FaBars />
                </Link>
              </div>
              <div className="logo-element">
                <Link className="navbar-minimalize menuburger2" id="show" onClick={toggle}>
                  <FaIcons.FaBars />
                </Link>
              </div>
            </li>
            <li>
              <Link to="/landlord/activity">
                <FaIcons.FaUserClock />
                <span className="nav-label">Activity</span>
              </Link>
            </li>
            <li>
              <Link to="/landlord/dashboard">
                <FaIcons.FaGripHorizontal />
                <span className="nav-label">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/landlord/maintenance">
                <FaIcons.FaToolbox />
                <span className="nav-label">Maintenance</span>
              </Link>
            </li>
            <li>
              <Link to="X6">
                <FaIcons.FaFileInvoiceDollar />
                <span className="nav-label">Financial</span>
              </Link>
            </li>
            <li>
              <Link to="/landlord/payables">
                <FaIcons.FaHandHoldingUsd />
                <span className="nav-label">Payables</span>
              </Link>
            </li>
            <li>
              <Link to="/landlord/unitviewings">
                <FaIcons.FaStreetView />
                <span className="nav-label">Property Viewing</span>
              </Link>
            </li>
            <li>
              <Link to="/landlord/offers">
                <FaIcons.FaHandsHelping />
                <span className="nav-label">Rental Offers</span>
              </Link>
            </li>
            <li>
              <Link to="X11">
                <FaIcons.FaInfoCircle />
                <span className="nav-label">Property Info</span>
              </Link>
            </li>
          </ul>
        </div>

        <Collapse className="sidebar-collapse" isOpen={isOpen}>
          <ul className="nav metismenu" id="side-menu">
            <li>
              <Link to="/landlord/activity">
                <FaIcons.FaUserClock />
                <span>Activity</span>
              </Link>
            </li>
            <li>
              <Link to="/landlord/dashboard">
                <FaIcons.FaGripHorizontal />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/landlord/maintenance">
                <FaIcons.FaToolbox />
                <span>Maintenance</span>
              </Link>
            </li>
            <li>
              <Link to="X6">
                <FaIcons.FaFileInvoiceDollar />
                <span>Financial</span>
              </Link>
            </li>
            <li>
              <Link to="/landlord/payables">
                <FaIcons.FaHandHoldingUsd />
                <span>Payables</span>
              </Link>
            </li>
            <li>
              <Link to="/landlord/unitviewings">
                <FaIcons.FaStreetView />
                <span>Property Viewing</span>
              </Link>
            </li>
            <li>
              <Link to="/landlord/offers">
                <FaIcons.FaHandsHelping />
                <span>Rental Offers</span>
              </Link>
            </li>
            <li>
              <Link to="X11">
                <FaIcons.FaInfoCircle />
                <span>Property Info</span>
              </Link>
            </li>
          </ul>
        </Collapse>
      </nav>
    </>
  );
}
