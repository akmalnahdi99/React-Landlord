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

import LeftMenu from "./components/navigation/LeftMenu";
import { AppProvider } from "./context/settings";
//pages
import Activity from "./pages/Landlord/Activity.js";
import Notifications from "./pages/Landlord/Notifications.js";
import Profile from "./pages/Landlord/Profile";
import Payables from "./pages/Landlord/Payables";
import Bills from "./pages/Landlord/Bills";
import PropertyInfo from "./pages/Landlord/PropertyInfo";
import Dashboard from "./pages/Landlord/Dashboard";
import UnitViewings from "./pages/Landlord/UnitViewings";

import ViewingDetails from "./pages/Landlord/ViewingDetails";
import Offers from "./pages/Landlord/Offers";
import OfferDetails from "./pages/Landlord/OfferDetails";
import Maintenance from "./pages/Landlord/Maintenance";

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
          <Route path="/landlord/bills">
            <LeftMenu />
            <Bills />
          </Route>
          <Route path="/landlord/UnitInfo">
            <LeftMenu />
            <PropertyInfo />
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
          <Route path="/landlord/offerdetails">
            <LeftMenu />
            <OfferDetails />
          </Route>
          <Route path="/landlord/maintenance">
            <LeftMenu />
            <Maintenance />
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
