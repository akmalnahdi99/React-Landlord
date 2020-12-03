import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

class LeftMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addClass: false };
  }
  toggle() {
    this.setState({ addClass: !this.state.addClass });
  }
  render() {
    let boxClass = ["navbar-default navbar-static-side"];
    if (this.state.addClass) {
      boxClass.push("width300");
    }
    let idClass = ["gray-bg"];
    if (this.state.addClass) {
      idClass.push("ml300");
    }

    return (
      <>
        <div>
          <nav className={boxClass.join("  ")}>
            <div className="sidebar-collapse">
              <ul className="nav metismenu" id="side-menu">
                <li className="nav-header">
                  <div className="profile-element">
                    <Link className="navbar-minimalize float-right" onClick={this.toggle.bind(this)}>
                      <FaIcons.FaBars />
                    </Link>
                  </div>
                  <div className="logo-element">
                    <Link className="navbar-minimalize menuburger2" id="show" onClick={this.toggle.bind(this)}>
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
          </nav>
        </div>
      </>
    );
  }
}
export default LeftMenu;
