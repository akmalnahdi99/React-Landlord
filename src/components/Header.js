import React from "react";
import { Link } from "react-router-dom";
//Images 
import logo from "../assets/imgs/doorcase-logo.png";
import logolight from "../assets/imgs/doorcase-lightlogo.png";
import profileSmall from "../assets/imgs/profile_small.jpg";
//import { AppContext } from "../context/settings";


export default function Header() {
  //const  appContext  = React.useContext(AppContext); // for reading login status

  return (
    <header className="header ">
      <nav className="navbar navbar-static-top" role="navigation" style={{ marginbottom: 0 }}>
        <div className="navbar-header">
          <Link className="navbar-minimalize minimalize-styl-2 hideburger" id="hide" to="a1">
            <i className="fa fa-bars"></i>
          </Link>
          <div className="navbar-brand float-left ml-3 mt-2">
            <Link to="a1">
              <img alt="light logo" src={logolight} className="bigscreen" width="150px" />
            </Link>
            <Link to="a1">
              <img alt="logo" src={logo} className="smallscreen" width="43.5px" />
            </Link>
          </div>
        </div>

        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown">
            <Link className="count-info" to="/landlord/notifications">
              <i className="fa fa-bell"></i>
              <span className="label label-primary">8</span>
            </Link>
          </li>
          <li>
            <Link className="count-info" to="/landlord/profile">
              <img alt="small " className="rounded-circle" src={profileSmall} width="30px" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
