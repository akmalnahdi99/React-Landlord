import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { slide as Menu } from 'react-burger-menu'

export default function LeftMenu() {
  return (
    <div>
    <Menu {...LeftMenu}>
      <Link className="menu-item" to="/landlord/activity">
        <FaIcons.FaUserClock />
        <span className="nav-label pl-2">Activity</span>
      </Link>

      <Link className="menu-item" to="/landlord/dashboard">
        <FaIcons.FaGripHorizontal />
        <span className="nav-label pl-2">Dashboard</span>
      </Link>

      <Link className="menu-item" to="/landlord/maintenance">
        <FaIcons.FaToolbox />
        <span className="nav-label pl-2">Maintenance</span>
      </Link>

      <Link className="menu-item" to="/landlord/financials">
        <FaIcons.FaFileInvoiceDollar />
        <span className="nav-label pl-2">Financial</span>
      </Link>

      <Link className="menu-item" to="/landlord/payables">
        <FaIcons.FaHandHoldingUsd />
        <span className="nav-label pl-2">Payables</span>
      </Link>

      <Link className="menu-item" to="/landlord/unitviewings">
        <FaIcons.FaStreetView />
        <span className="nav-label pl-2">Property Viewing</span>
      </Link>

      <Link className="menu-item" to="/landlord/offers">
        <FaIcons.FaHandsHelping />
        <span className="nav-label pl-2">Rental Offers</span>
      </Link>
              
      <Link className="menu-item" to="/landlord/propertyInfo">
        <FaIcons.FaInfoCircle />
        <span className="nav-label pl-2">Property Info</span>
      </Link>
    </Menu>
</div>
  );
}
