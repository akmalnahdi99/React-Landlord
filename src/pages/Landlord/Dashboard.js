import React from "react";
// import { FaWindowClose } from "react-icons/fa";

// import PostsList from "../../components/PostsList";
// import PostsListFilter from "../../components/PostsListFilter";
 
import Footer from "../../components/static/Footer";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";
import Quicklinks from "../../components/DashQuicklinks";
import Rental from "../../components/DashRentalGraph";
import TodoList from "../../components/DashTodoList.js";
import Maintenance from "../../components/DashMaintenance";
import TenantPayables from "../../components/DashTenantPayables";
import Calendar from "../../components/DashCalendar";
import Financials from "../../components/DashFinancials";
import Bills from "../../components/DashBills";
import PropertyInfo from "../../components/DashPropertyInfo.js";
import RentalLeads from "../../components/DashRentalLeads";
import PropertyViewing from "../../components/DashPropertyViewing";
import RentalOffers from "../../components/DashRentalOffers";

export default function Dashboard() {
  // const { alert, hideAlert } = React.useContext(UserContext);

  return (
    <div id="page-wrapper" className="gray-bg" style={{ border: "0px solid red" }}>
      <div className="border-bottom white-bg">
        <div className="container-fluid">
          <Header />
        </div>
      </div>

      <div className="wrapper border-bottom page-heading">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <SiteMap title="Dashboard" />
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper wrapper-content py-4 animated fadeInRight">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 px-2">
              <Quicklinks title="Quick Links" />
            </div>
            <div className="col-lg-4 px-2">
              <Rental title="Rental" />
            </div>
            <div className="col-lg-4 px-2">
              <TodoList title="To-Do List" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 px-2">
              <Maintenance title="Maintenance" />
            </div>
            <div className="col-lg-4 px-2">
              <TenantPayables title="Tenant Payables" />
            </div>
            <div className="col-lg-4 px-2">
              <Calendar title="Calendar" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 px-2">
              <Financials title="Financials" />
            </div>
            <div className="col-lg-4 px-2">
              <Bills title="Bills" />
            </div>
            <div className="col-lg-4 px-2">
              <PropertyInfo title="Property Info" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 px-2">
              <RentalLeads />
            </div>
            <div className="col-lg-4 px-2">
              <PropertyViewing title="Property Viewing" />
            </div>
            <div className="col-lg-4 px-2">
              <RentalOffers title="Rental Offers" />
            </div>
          </div>
        </div>
        <br />
      </div>

      <Footer />
    </div>
  );
}
