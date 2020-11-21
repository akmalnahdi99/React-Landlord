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
    <div id="page-wrapper" class="bg-white" style={{ border: "1px solid red" }}>
      <div class="border-bottom white-bg">
        <div class="container-fluid">
          <nav class="navbar navbar-static-top" role="navigation" style={{ marginbottom: 0 }}>
            <div class="navbar-header">
              <Link class="navbar-minimalize minimalize-styl-2 hideburger" id="hide" href="#">
                <i class="fa fa-bars"></i>{" "}
              </Link>
              <div class="navbar-brand float-left ml-3 mt-2">
                <Link href="index.html">
                  <img alt="light logo" src="img/doorcase-lightlogo.png" class="bigscreen" width="150px" />
                </Link>
                <Link href="index.html">
                  <img alt="logo" src="img/doorcase-logo.png" class="smallscreen" width="43.5px" />
                </Link>
              </div>
            </div>
            <ul class="nav navbar-top-links navbar-right">
              <li class="dropdown">
                <Link class="count-info" href="notification.html">
                  <i class="fa fa-bell"></i>
                  <span class="label label-primary">8</span>
                </Link>
              </li>
              <li>
                <Link class="count-info" href="profile.html">
                  <img alt="small " class="rounded-circle" src="img/profile_small.jpg" width="30px" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="wrapper border-bottom page-heading bg-white">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <ol class="breadcrumb bg-transparent mt-3">
                <li class="mr-3">
                  <Link onClick={history.back} class="">
                    <i class="fas fa-chevron-left"></i>
                  </Link>
                </li>
                <li class="breadcrumb-item active">Activities News Feed</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div class="wrapper wrapper-content py-4 animated fadeInRight">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="row justify-content-center">
                <div class="col-10 px-2">
                  <UnitInfoCard />
                </div>
                <div class="col-2 px-2">
                  <Link href="#" class="btn btn-primary btn-circle mt-3 float-right" data-toggle="modal" data-target="#additionalinfo">
                    <i class="fas fa-exchange-alt"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper wrapper-content animated fadeInRight py-3 mb-0 gray-bg" style={{ borderBottom: "1px solid #fff" }}>
        <div class="row p-0 justify-content-center">
          <div class="col-lg-8 px-2">
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
      <div class="footer">
        <div class="text-center">
          &copy;
          <script>document.write(new Date().getFullYear())</script>
          Copyright by Jann Properties
        </div>
      </div>
    </div>
  );
}
