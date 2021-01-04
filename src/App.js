//TASK under Review
import React from "react";
// react router dom
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// pages

import TenancySelect from "./pages/TenancySelection";
import PropertySelect from "./pages/PropertySelection";

//Styles
import "./assets/css/style.css";
import "./assets/css/chartist.css";
import "lightgallery.js/dist/css/lightgallery.css"; //DISCUSS what this for

//pages

import ViewingDetails from "./pages/Landlord/ViewingDetails";
import UtilitiesOf from "./pages/Landlord/UtilitiesOf";
import Utilities from "./pages/Landlord/Utilities";
import UnitViewings from "./pages/Landlord/UnitViewings";
import TodoList from "./pages/Landlord/TodoList";
import TenantTenancy from "./pages/Landlord/TenantTenancy";
import TenantPayables from "./pages/Landlord/TenantPayables";
import TenancyDocs from "./pages/Landlord/TenancyDocs";
import QuickLinks from "./pages/Landlord/QuickLinks";

import PropertyInfoOf from "./pages/Landlord/PropertyInfoOf";
import PropertyInfo from "./pages/Landlord/PropertyInfo";
import PropertyCondition from "./pages/Landlord/PropertyCondition";
import Profile from "./pages/Landlord/Profile";
import Payables from "./pages/Landlord/Payables";
import Offers from "./pages/Landlord/Offers";
import OfferDetails from "./pages/Landlord/OfferDetails";
import Notifications from "./pages/Landlord/Notifications.js";

import MaintenanceDetails from "./pages/Landlord/MaintenanceDetails";
import MaintenanceChatRequest from "./pages/Landlord/MaintenanceChatRequest";
import MaintenanceChatPayment from "./pages/Landlord/MaintenanceChatPayment";
import MaintenanceChatInteraction from "./pages/Landlord/MaintenanceChatInteraction";
import Maintenance from "./pages/Landlord/Maintenance";

import Login from "./pages/Landlord/Login";
import Financials from "./pages/Landlord/Financials";
import Dashboard from "./pages/Landlord/Dashboard";
import ConditionDetails from "./pages/Landlord/ConditionDetails";
import UnitInventories from "./pages/Landlord/UnitInventories";
 

import CheckInLeaflet from "./pages/Landlord/CheckInLeaflet";
import UnitKitsCats from "./pages/Landlord/UnitKitsCats";
import UnitCheckInOut from "./pages/Landlord/UnitCheckInOut";
import Calendars from "./pages/Landlord/Calendars";
import Bills from "./pages/Landlord/Bills";
import BillOf from "./pages/Landlord/BillsOf";

import Activity from "./pages/Landlord/Activity.js";
import Logout from "./pages/Landlord/Logout";
import { AppProvider } from "./context/settings";
import { ProtectedRoute } from "./components/ProtectedComponent";
import StandardPage from "./pages/StandardPage";
import NotFoundPage from "./pages/NotFoundPage";
import InventoryOfArea from "./pages/InventoryOfArea";
import UnitMeters from "./pages/Landlord/UnitMeters";
import KitDetailsCard from "./pages/KitDetailsCard";
 

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
        </Switch>

        <ProtectedRoute>
          <Switch>
            <Route path="/landlord/dashboard">
              <StandardPage>
                <Dashboard siteMap={"Dashboard"} />
              </StandardPage>
            </Route>
            <Route path="/landlord/activity">
              <StandardPage>
                <Activity siteMap={"Activity"} />
              </StandardPage>
            </Route>
            <Route path="/pages/tenancyselection">
              <StandardPage>
                <TenancySelect siteMap={"Tenancy Selection"} />
              </StandardPage>
            </Route>
            <Route path="/pages/propertyselection">
              <StandardPage>
                <PropertySelect siteMap={"Property Selection"} />
              </StandardPage>
            </Route>
            <Route path="/landlord/notifications">
              <StandardPage>
                <Notifications siteMap={"Notifications"} />
              </StandardPage>
            </Route>
            <Route path="/landlord/profile">
              <StandardPage>
                <Profile siteMap={"Profile"} />
              </StandardPage>
            </Route>
            <Route path="/landlord/payables">
              <StandardPage>
                <Payables siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/financials">
              <StandardPage>
                <Financials siteMap={"Financials"} />
              </StandardPage>
            </Route>

            <Route path="/landlord/unitInventory">
              <StandardPage>
                <UnitInventories siteMap={"Inventory List"} />
              </StandardPage>
            </Route>

            <Route path="/landlord/inventoryOf/:area">
              <StandardPage>
                <InventoryOfArea siteMap={"Inventory List of"} />
              </StandardPage>
            </Route>
            <Route path="/landlord/UnitMeters/:meterName">
              <StandardPage>
                <UnitMeters siteMap={"Unit meters"} />
              </StandardPage>
            </Route>
            <Route path="/quicklinks/:cellId">
              <StandardPage>
                <QuickLinks siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/calendars">
              <StandardPage>
                <Calendars siteMap={"Calendars"} />
              </StandardPage>
            </Route>
            <Route exact path="/landlord/bills">
              <StandardPage>
                <Bills siteMap={"Bills"} />
              </StandardPage>
            </Route>
            <Route exact path="/landlord/utilities">
              <StandardPage>
                <Utilities siteMap={"Utilities"} />
              </StandardPage>
            </Route>
            <Route path="/landlord/bills/:billType">
              <StandardPage>
                <BillOf siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/utilities/:utilityType">
              <StandardPage>
                <UtilitiesOf siteMap={""} />
              </StandardPage>
            </Route>
            <Route exact path="/landlord/propertyInfo">
              <StandardPage>
                <PropertyInfo siteMap={"Property Info"} />
              </StandardPage>
            </Route>
            <Route path="/landlord/propertyInfo/:propertyinfoType">
              <StandardPage>
                <PropertyInfoOf siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/UnitInfo">
              <StandardPage>
                <PropertyInfo siteMap={"Unit Info"} />
              </StandardPage>
            </Route>
            <Route path="/landlord/UnitViewings">
              <StandardPage>
                <UnitViewings siteMap={"Unit Viewings"} />
              </StandardPage>
            </Route>
            <Route path="/landlord/viewingdetails/:appointmentId">
              <StandardPage>
                <ViewingDetails siteMap={"Viewing Details"} />
              </StandardPage>
            </Route>
            <Route path="/landlord/offers">
              <StandardPage>
                <Offers siteMap={"Offers"} />
              </StandardPage>
            </Route>
            <Route path="/landlord/maintenance">
              <StandardPage>
                <Maintenance siteMap={"Maintenance"} />
              </StandardPage>
            </Route>
            <Route path="/landlord/offers">
              <StandardPage>
                <Offers siteMap={"Offers"} />
              </StandardPage>
            </Route>
            <Route path="/landlord/offerdetails/:offerId">
              <StandardPage>
                <OfferDetails siteMap={"Offer Details"} />
              </StandardPage>
            </Route>
            <Route path="/landlord/maintenancedetails/:mindex">
              <StandardPage>
                <MaintenanceDetails siteMap={"Maintenance Details"} />
              </StandardPage>
            </Route>
            <Route path="/landlord/maintenancechatpayment">
              <StandardPage>
                <MaintenanceChatPayment siteMap={"Maintenance Chat"} />
              </StandardPage>
            </Route>
            <Route path="/landlord/MaintenanceChatRequest">
              <StandardPage>
                <MaintenanceChatRequest siteMap={"Maintenance Chat"} />
              </StandardPage>
            </Route>
            <Route path="/landlord/maintenancechatinteraction">
              <StandardPage>
                <MaintenanceChatInteraction siteMap={"Maintenance Chat"} />
              </StandardPage>
            </Route>
            <Route path="/landlord/tenanttenancy">
              <StandardPage>
                <TenantTenancy siteMap={"Tenant Tenancy"} />
              </StandardPage>
            </Route>
            <Route path="/landlord/tenancydocs">
              <StandardPage>
                <TenancyDocs siteMap={"Tenancy Documents"} />
              </StandardPage>
            </Route>
            <Route path="/landlord/todolist">
              <StandardPage>
                <TodoList siteMap={"To-do List"} />
              </StandardPage>
            </Route>
            <Route path="/landlord/tenantpayables">
              <StandardPage>
                <TenantPayables siteMap={"Tenant Payables"} />
              </StandardPage>
            </Route>
            <Route path="/landlord/PropertyCondition">
              <StandardPage>
                <PropertyCondition siteMap={"Property condition"} />
              </StandardPage>
            </Route>
            <Route path="/landlord/conditionDetails/:location">
              <StandardPage>
                <ConditionDetails siteMap={"Condition Details"} />
              </StandardPage>
            </Route>
          
            <Route path="/landlord/UnitCheckInOut">
              <StandardPage>
                <UnitCheckInOut siteMap={"Check In & Check Out"} />
              </StandardPage>
            </Route>
            <Route path="/landlord/unitKitsCats/:inventoryOf">
              <StandardPage>
                <UnitKitsCats siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/unitKits/Details/:inventoryOf/:kitOf">
              <StandardPage>
                <KitDetailsCard siteMap={"Unit Kits"} />
              </StandardPage>
            </Route>

            <Route path="/landlord/checkinleaflet">
              <StandardPage>
                <CheckInLeaflet siteMap={"Check In Leaflet"} />
              </StandardPage>
            </Route>

            <Route path="/*">
              <NotFoundPage siteMap={""} />
            </Route>
          </Switch>
        </ProtectedRoute>
      </Router>
    </AppProvider>
  );
}
