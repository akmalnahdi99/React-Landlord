//TASK under Review
import React from "react";
// react router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// pages
// import About from "./pages/About";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import Error from "./pages/Error";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Products from "./pages/Products";
// import ProductDetails from "./pages/ProductDetails";
import { NavLink } from "react-router-dom";
// components
// import Header from "./components/Header";
// import Alert from "./components/Alert";
// import PrivateRoute from "./components/PrivateRoute";
// import ScrollButton from "./components/ScrollButton";

//Styles
import "./assets/css/style.css";
import "./assets/css/chartist.css";
import "lightgallery.js/dist/css/lightgallery.css"; //DISCUSS what this for

import LeftMenu from "./components/navigation/LeftMenu";
import { AppProvider } from "./context/settings";
//pages
import Activity from "./pages/Landlord/Activity.js";
import Notifications from "./pages/Landlord/Notifications.js";
import Profile from "./pages/Landlord/Profile";
import Payables from "./pages/Landlord/Payables";
import Bills from "./pages/Landlord/Bills";
import PropertyInfo from "./pages/Landlord/PropertyInfo";
import PropertyInfoOf from "./pages/Landlord/PropertyInfoOf";
import Dashboard from "./pages/Landlord/Dashboard";
import UnitViewings from "./pages/Landlord/UnitViewings";
import TenantTenancy from "./pages/Landlord/TenantTenancy";
import ViewingDetails from "./pages/Landlord/ViewingDetails";
import Offers from "./pages/Landlord/Offers";
import OfferDetails from "./pages/Landlord/OfferDetails";
import Maintenance from "./pages/Landlord/Maintenance";
import BillOf from "./pages/Landlord/BillsOf";
import MaintenanceDetails from "./pages/Landlord/MaintenanceDetails";
import MaintenanceChatPayment from "./pages/Landlord/MaintenanceChatPayment";
import MaintenanceChatRequest from "./pages/Landlord/MaintenanceChatRequest";
import MaintenanceChatInteraction from "./pages/Landlord/MaintenanceChatInteraction";

import Financials from "./pages/Landlord/Financials";
import Calendars from "./pages/Landlord/Calendars";
import QuickLinks from "./pages/Landlord/QuickLinks";
import TodoList from "./pages/Landlord/TodoList";
import TenantPayables from "./pages/Landlord/TenantPayables";
import PropertyViewing from "./pages/Landlord/PropertyViewing";
import TenancyDocs from "./pages/Landlord/TenancyDocs";
import Login from "./pages/Login";
import CheckInCheckOut from "./pages/Landlord/CheckInCheckOut";
import Utilities from "./pages/Landlord/Utilities";
import UtilitiesOf from "./pages/Landlord/UtilitiesOf";
import CheckInKit from "./pages/Landlord/CheckInKit";
import CheckInLeaflet  from "./pages/Landlord/CheckInLeaflet";
import Login from "./pages/Landlord/Login";
import InventoryList from "./pages/Landlord/InventoryList";

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <ul>
              <li>
                <NavLink to="/landlord/activity">Activity</NavLink>
              </li>
              <li>
                <NavLink to="/landlord/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/landlord/notifications">Notifications</NavLink>
              </li>
              <li>
                <NavLink to="/landlord/profile">Profile</NavLink>
              </li>
              <li>
                <NavLink to="/landlord/payables">Payables</NavLink>
              </li>
              <li>
                <NavLink to="/landlord/bills">Bills</NavLink>
              </li>
              <li>
                <NavLink to="/landlord/propertyinfo">Property Info</NavLink>
              </li>
              <li>
                <NavLink to="/landlord/UnitInfo">Unit Info</NavLink>
              </li>
              <li>
                <NavLink to="/landlord/UnitViewings">Viewings</NavLink>
              </li>
              <li>
                <NavLink to="/landlord/viewingdetails">ViewingDetails</NavLink>
              </li>
              <li>
                <NavLink to="/landlord/offers">Offers</NavLink>
              </li>
              <li>
                <NavLink to="/landlord/offerdetails">OfferDetails</NavLink>
              </li>
              <li>
                <NavLink to="/landlord/maintenance">Maintenance</NavLink>
              </li>
              <li>
                <NavLink to="/landlord/maintenancedetails">MaintenanceDetails</NavLink>
              </li>
            </ul>
          </Route>
          <Route path="/landlord/dashboard">
            <LeftMenu />
            <Dashboard />
          </Route>
          <Route path="/landlord/activity">
            <LeftMenu />
            <Activity />
          </Route>
          <Route path="/landlord/notifications">
            <LeftMenu />
            <Notifications />
          </Route>
          <Route path="/landlord/profile">
            <LeftMenu />
            <Profile />
          </Route>
          <Route path="/landlord/payables">
            <LeftMenu />
            <Payables />
          </Route>
          <Route path="/landlord/financials">
            <LeftMenu />
            <Financials />
          </Route>
          <Route path="/landlord/inventorylist">
            <LeftMenu />
            <InventoryList />
          </Route>
          <Route path="/landlord/quicklinks">
            <LeftMenu />
            <QuickLinks />
          </Route>
          <Route path="/landlord/calendars">
            <LeftMenu />
            <Calendars />
          </Route>
          <Route exact path="/landlord/bills">
            <LeftMenu />
            <Bills />
          </Route>
          <Route exact path="/landlord/utilities">
            <LeftMenu />
            <Utilities />
          </Route>
          <Route path="/landlord/bills/:billType">
            <LeftMenu />
            <BillOf />
          </Route>
          <Route path="/landlord/utilities/:utilityType">
            <LeftMenu />
            <UtilitiesOf />
          </Route>
          <Route exact path="/landlord/propertyInfo">
            <LeftMenu />
            <PropertyInfo />
          </Route>
          <Route path="/landlord/propertyInfo/:propertyinfoType">
            <LeftMenu />
            <PropertyInfoOf />
          </Route>
          <Route path="/landlord/UnitInfo">
            <LeftMenu />
            <PropertyInfo />
          </Route>
          <Route path="/landlord/propertyviewing">
            <LeftMenu />
            <PropertyViewing />
          </Route>
          <Route path="/landlord/UnitViewings">
            <LeftMenu />
            <UnitViewings />
          </Route>
          <Route path="/landlord/viewingdetails">
            <LeftMenu />
            <ViewingDetails />
          </Route>
          <Route path="/landlord/offers">
            <LeftMenu />
            <Offers />
          </Route>
          <Route path="/landlord/maintenance">
            <LeftMenu />
            <Maintenance />
          </Route>
          <Route path="/landlord/offers">
            <LeftMenu />
            <Offers />
          </Route>
          <Route path="/landlord/offerdetails">
            <LeftMenu />
            <OfferDetails />
          </Route>
          <Route path="/landlord/maintenancedetails/:mindex">
            <LeftMenu />
            <MaintenanceDetails />
          </Route>
          <Route path="/landlord/maintenancechatpayment">
            <LeftMenu />
            <MaintenanceChatPayment />
          </Route>
          <Route path="/landlord/MaintenanceChatRequest">
            <LeftMenu />
            <MaintenanceChatRequest />
          </Route>
          <Route path="/landlord/maintenancechatinteraction">
            <LeftMenu />
            <MaintenanceChatInteraction />
          </Route>
          <Route path="/landlord/tenanttenancy">
            <LeftMenu />
            <TenantTenancy />
          </Route>
          <Route path="/landlord/tenancydocs">
            <LeftMenu />
            <TenancyDocs />
          </Route>
          <Route path="/landlord/todolist">
            <LeftMenu />
            <TodoList />
          </Route>
          <Route path="/landlord/tenantpayables">
            <LeftMenu />
            <TenantPayables />
          </Route>
          <Route path="/landlord/CheckInCheckOut">
            <LeftMenu />
            <CheckInCheckOut />
          </Route>
          <Route path="/landlord/CheckInKit">
            <LeftMenu />
            <CheckInKit />
          </Route>
          <Route path="/landlord/CheckInLeaflet">
            <LeftMenu />
            <CheckInLeaflet />
          </Route>
        </Switch>
      </Router>
    </AppProvider>
  );
}

/* <Header />
      <Alert />
      <ScrollButton />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <PrivateRoute path="/checkout" name="john" msg="hello">
          <Checkout />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route
          path="/products/:id"
          children={<ProductDetails></ProductDetails>}
        ></Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch> */
