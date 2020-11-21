import React from "react";
// import { FaWindowClose } from "react-icons/fa";

import UserPosts from "../../components/UserPosts";
import UserPostsFilter from "../../components/navigation/userPostsFilter";
import UnitInfoCard from "../../components/unitCart";
import { Link, useHistory } from "react-router-dom";

export default function DashBoard() {
  // const { alert, hideAlert } = React.useContext(UserContext);
  const history = useHistory(); // react History Object


  return (
    <div id="page-wrapper" className="bg-white" style={{ border: "1px solid red" }}>
      <div className="border-bottom white-bg">
        <div className="container-fluid">
          <nav className="navbar navbar-static-top" role="navigation" style={{ marginbottom: 0 }}>
            <div className="navbar-header">
              <Link className="navbar-minimalize minimalize-styl-2 hideburger" id="hide" to="a1">
                <i className="fa fa-bars"></i>{" "}
              </Link>
              <div className="navbar-brand float-left ml-3 mt-2">
                <Link to="a1">
                  <img alt="light logo" src="img/doorcase-lightlogo.png" className="bigscreen" width="150px" />
                </Link>
                <Link to="a1">
                  <img alt="logo" src="img/doorcase-logo.png" className="smallscreen" width="43.5px" />
                </Link>
              </div>
            </div>
            <ul className="nav navbar-top-links navbar-right">
              <li className="dropdown">
                <Link className="count-info" to="a1">
                  <i className="fa fa-bell"></i>
                  <span className="label label-primary">8</span>
                </Link>
              </li>
              <li>
                <Link className="count-info" to="a1">
                  <img alt="small " className="rounded-circle" src="img/profile_small.jpg" width="30px" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="wrapper border-bottom page-heading bg-white">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <ol className="breadcrumb bg-transparent mt-3">
                <li className="mr-3">
                  <Link onClick={history.back} className="">
                    <i className="fas fa-chevron-left"></i>
                  </Link>
                </li>
                <li className="breadcrumb-item active">Activities News Feed</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper wrapper-content py-4 animated fadeInRight">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="row justify-content-center">
                <div className="col-10 px-2">
                  <UnitInfoCard />
                </div>
                <div className="col-2 px-2">
                  <Link to="a1" className="btn btn-primary btn-circle mt-3 float-right" data-toggle="modal" data-target="#additionalinfo">
                    <i className="fas fa-exchange-alt"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper wrapper-content animated fadeInRight py-3 mb-0 gray-bg" style={{ borderBottom: "1px solid #fff" }}>
        <div className="row p-0 justify-content-center">
          <div className="col-lg-8 px-2">
            <UserPostsFilter />
          </div>
        </div>
      </div>

      <div className="wrapper wrapper-content animated pt-0 fadeInRight gray-bg">
        <div className="container-fluid">
          <div className="row mt-1 justify-content-center">
            <div className="col-lg-8"></div>
            <UserPosts />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="text-center">
          &copy;
          <script>document.write(new Date().getFullYear())</script>
          Copyright by Jann Properties
        </div>
      </div>
    </div>
  );
}
