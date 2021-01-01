import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { AppContext } from "../../context/settings";

export default function LeftMenu() {
  const menuExpandedClass = "menu-expanded";
  const menuCollapsedClass = "menu-collapsed";
  const [leftMenuClass, set_leftMenuClass] = React.useState(["navbar-default navbar-static-side"]);
  const [expanded, set_expanded] = React.useState(false);
  const appContext = React.useContext(AppContext);

  function toggle() {
    var n = !expanded;
    set_expanded(n);
    updateMenuClass(n);
    appContext.updateAppContext({ leftMenuExpanded: n });
  }

  function updateMenuClass(menuExpanded) {
   var index=-1;
    if (menuExpanded === true) {
        index = leftMenuClass.indexOf(menuCollapsedClass);
      if (index !== -1) {
        leftMenuClass.splice(index, 1);
      }
      leftMenuClass.push(menuExpandedClass);
    } else {
        index = leftMenuClass.indexOf(menuExpandedClass);
      if (index !== -1) {
        leftMenuClass.splice(index, 1);
      }
      leftMenuClass.push(menuCollapsedClass);
    }
    set_leftMenuClass(leftMenuClass);
  }

  React.useEffect(() => {
    updateMenuClass(expanded);
    // eslint-disable-next-line
  }, [expanded]);

  console.log("lmc1:", leftMenuClass);
  return (
    <React.Fragment>
      <div>
        <nav className={leftMenuClass.join("  ")}>
          <div className="sidebar-collapse">
            <ul className="nav metismenu" id="side-menu">
              <li className="nav-header">
                <div className="profile-element">
                  <div className="navbar-minimalize float-right" onClick={() => toggle()} style={{ cursor: "pointer" }}>
                    <FaIcons.FaBars />
                  </div>
                </div>
                <div className="logo-element">
                  <div className="navbar-minimalize menuburger2" id="show" onClick={() => toggle()} style={{ cursor: "pointer" }}>
                    <FaIcons.FaBars />
                  </div>
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
                <Link to="/landlord/financials">
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
                <Link to="/landlord/propertyInfo">
                  <FaIcons.FaInfoCircle />
                  <span className="nav-label">Property Info</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}
