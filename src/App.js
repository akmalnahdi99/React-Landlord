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
import LeftMenu from "./components/navigation/LeftMenu";
import { AppProvider } from "./context/settings";
//pages 
import DashBoard from "./pages/Landlord/dashboard.js";


export default function App() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </Route>
          <Route path="/dashboard">
            <LeftMenu />
            <DashBoard />
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
 