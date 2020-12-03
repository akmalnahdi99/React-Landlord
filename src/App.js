//TASK under Review
import React from "react";
// react router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// pages
import Login2 from "./pages/Login";
import TenancySelect from "./pages/TenancySelection";
import PropertySelect from "./pages/PropertySelection";
import { NavLink } from "react-router-dom";

//Styles
import "./assets/css/style.css";
import "./assets/css/chartist.css";
import "lightgallery.js/dist/css/lightgallery.css"; //DISCUSS what this for

import LeftMenu from "./components/navigation/LeftMenu";
import { AppProvider } from "./context/settings";
//pages
import YardCondition from "./pages/Landlord/YardCondition";
import ViewingDetails from "./pages/Landlord/ViewingDetails";
import UtilityCondition from "./pages/Landlord/UtilityCondition";
import UtilitiesOf from "./pages/Landlord/UtilitiesOf";
import Utilities from "./pages/Landlord/Utilities";
import UnitViewings from "./pages/Landlord/UnitViewings";
import TodoList from "./pages/Landlord/TodoList";
import TenantTenancy from "./pages/Landlord/TenantTenancy";
import TenantPayables from "./pages/Landlord/TenantPayables";
import TenancyDocs from "./pages/Landlord/TenancyDocs";
import QuickLinks from "./pages/Landlord/QuickLinks";
import PropertyViewing from "./pages/Landlord/PropertyViewing";
import PropertyInfoOf from "./pages/Landlord/PropertyInfoOf";
import PropertyInfo from "./pages/Landlord/PropertyInfo";
import PropertyCondition from "./pages/Landlord/PropertyCondition";
import Profile from "./pages/Landlord/Profile";
import Payables from "./pages/Landlord/Payables";
import Offers from "./pages/Landlord/Offers";
import OfferDetails from "./pages/Landlord/OfferDetails";
import Notifications from "./pages/Landlord/Notifications.js";
import MBedCondition from "./pages/Landlord/MBedCondition";
import MBathCondition from "./pages/Landlord/MBathCondition";
import MaintenanceDetails from "./pages/Landlord/MaintenanceDetails";
import MaintenanceChatRequest from "./pages/Landlord/MaintenanceChatRequest";
import MaintenanceChatPayment from "./pages/Landlord/MaintenanceChatPayment";
import MaintenanceChatInteraction from "./pages/Landlord/MaintenanceChatInteraction";
import Maintenance from "./pages/Landlord/Maintenance";
 
import Login from "./pages/Landlord/Login";
import LivingCondition from "./pages/Landlord/LivingCondition";
import KitchenCondition from "./pages/Landlord/KitchenCondition";
import InventoryWater from "./pages/Landlord/InventoryWater";
import InventoryVehicle from "./pages/Landlord/InventoryVehicle";
import InventoryRemoteControl from "./pages/Landlord/InventoryRemoteControl";
import InventoryList from "./pages/Landlord/InventoryList";
import InventoryKey from "./pages/Landlord/InventoryKey";
import InventoryGas from "./pages/Landlord/InventoryGas";
import InventoryEntrance from "./pages/Landlord/InventoryEntrance";
import InventoryElectricity from "./pages/Landlord/InventoryElectricity";
import InventoryBeds from "./pages/Landlord/InventoryBeds";
import InventoryBath from "./pages/Landlord/InventoryBath";
import InventoryAccessCard from "./pages/Landlord/InventoryAccessCard";
import Financials from "./pages/Landlord/Financials";
import EntranceCondition from "./pages/Landlord/EntranceCondition";
import DiningCondition from "./pages/Landlord/DiningCondition";
import Dashboard from "./pages/Landlord/Dashboard";
import CommonBed3Condition from "./pages/Landlord/CommonBed3Condition";
import CommonBed2Condition from "./pages/Landlord/CommonBed2Condition";
import CommonBed1Condition from "./pages/Landlord/CommonBed1Condition";
import CommonBath3Condition from "./pages/Landlord/CommonBath3Condition";
import CommonBath2Condition from "./pages/Landlord/CommonBath2Condition";
import CommonBath1Condition from "./pages/Landlord/CommonBath1Condition";
import CheckInLeaflet from "./pages/Landlord/CheckInLeaflet";
import CheckInKit from "./pages/Landlord/CheckInKit";
import CheckInCheckOut from "./pages/Landlord/CheckInCheckOut";
import Calendars from "./pages/Landlord/Calendars";
import Bills from "./pages/Landlord/Bills";
import BillOf from "./pages/Landlord/BillsOf";
import BedsCondition from "./pages/Landlord/BedsCondition";
import BathsCondition from "./pages/Landlord/BathsCondition";
import BalconyCondition from "./pages/Landlord/BalconyCondition";
import Activity from "./pages/Landlord/Activity.js";

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <ul>
              <li>
                <NavLink to="/pages/login">Login</NavLink>
              </li><li>
                <NavLink to="/landlord/login">Login</NavLink>
              </li>
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
          <Route path="/pages/login">
            <Login2 />
          </Route>
          <Route path="/pages/tenancyselection">
            <TenancySelect />
          </Route>
          <Route path="/pages/propertyselection">
            <PropertySelect />
          </Route>
          <Route path="/landlord/login">
            <Login />
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
          <Route path="/landlord/inventoryaccesscard">
            <LeftMenu />
            <InventoryAccessCard />
          </Route>
          <Route path="/landlord/inventoryentrance">
            <LeftMenu />
            <InventoryEntrance />
          </Route>
          <Route path="/landlord/inventorywater">
            <LeftMenu />
            <InventoryWater />
          </Route>
          <Route path="/landlord/inventorygas">
            <LeftMenu />
            <InventoryGas />
          </Route>
          <Route path="/landlord/inventoryelectricity">
            <LeftMenu />
            <InventoryElectricity />
          </Route>
          <Route path="/landlord/inventoryremotecontrol">
            <LeftMenu />
            <InventoryRemoteControl />
          </Route>
          <Route path="/landlord/inventoryvehicle">
            <LeftMenu />
            <InventoryVehicle />
          </Route>
          <Route path="/landlord/inventorybeds">
            <LeftMenu />
            <InventoryBeds />
          </Route>
          <Route path="/landlord/inventorybath">
            <LeftMenu />
            <InventoryBath />
          </Route>
          <Route path="/landlord/inventorykey">
            <LeftMenu />
            <InventoryKey />
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
          <Route path="/landlord/PropertyCondition">
            <LeftMenu />
            <PropertyCondition />
          </Route>
          <Route path="/landlord/EntranceCondition">
            <LeftMenu />
            <EntranceCondition />
          </Route>
          <Route path="/landlord/KitchenCondition">
            <LeftMenu />
            <KitchenCondition />
          </Route>
          <Route path="/landlord/LivingCondition">
            <LeftMenu />
            <LivingCondition />
          </Route>
          <Route path="/landlord/DiningCondition">
            <LeftMenu />
            <DiningCondition />
          </Route>
          <Route path="/landlord/YardCondition">
            <LeftMenu />
            <YardCondition />
          </Route>
          <Route path="/landlord/BalconyCondition">
            <LeftMenu />
            <BalconyCondition />
          </Route>
          <Route path="/landlord/UtilityCondition">
            <LeftMenu />
            <UtilityCondition />
          </Route>
          <Route path="/landlord/BedsCondition">
            <LeftMenu />
            <BedsCondition />
          </Route>
          <Route path="/landlord/MBedCondition">
            <LeftMenu />
            <MBedCondition />
          </Route>
          <Route path="/landlord/CommonBed1Condition">
            <LeftMenu />
            <CommonBed1Condition />
          </Route>
          <Route path="/landlord/CommonBed2Condition">
            <LeftMenu />
            <CommonBed2Condition />
          </Route>
          <Route path="/landlord/CommonBed3Condition">
            <LeftMenu />
            <CommonBed3Condition />
          </Route>
          <Route path="/landlord/BathsCondition">
            <LeftMenu />
            <BathsCondition />
          </Route>
          <Route path="/landlord/MBathCondition">
            <LeftMenu />
            <MBathCondition />
          </Route>
          <Route path="/landlord/CommonBath1Condition">
            <LeftMenu />
            <CommonBath1Condition />
          </Route>
          <Route path="/landlord/CommonBath2Condition">
            <LeftMenu />
            <CommonBath2Condition />
          </Route>
          <Route path="/landlord/CommonBath3Condition">
            <LeftMenu />
            <CommonBath3Condition />
          </Route>  
          <Route path="/landlord/checkincheckout">
            <CheckInCheckOut />
          </Route>
          <Route path="/landlord/checkinkit">
            <CheckInKit />
          </Route>
          <Route path="/landlord/checkinleaflet">
            <CheckInLeaflet />
          </Route>
        </Switch>
      </Router>
    </AppProvider>
  );
}
