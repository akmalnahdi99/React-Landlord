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
import UnitInventories from "./pages/Landlord/UnitInventories";
import InventoryKey from "./pages/Landlord/InventoryKey";
import InventoryGas from "./pages/Landlord/InventoryGas";
import InventoryYard from "./pages/Landlord/InventoryYard";
import InventoryBalcony from "./pages/Landlord/InventoryBalcony";
import InventoryKitchen from "./pages/Landlord/InventoryKitchen";
import InventoryEntrance from "./pages/Landlord/InventoryEntrance";
import InventoryLiving from "./pages/Landlord/InventoryLiving";
import InventoryDining from "./pages/Landlord/InventoryDining";
import InventoryUtility from "./pages/Landlord/InventoryUtility";
import InventoryElectricity from "./pages/Landlord/InventoryElectricity";
import InventoryBeds from "./pages/Landlord/InventoryBeds";
import InventoryBath from "./pages/Landlord/InventoryBath";
import InventoryMBath from "./pages/Landlord/InventoryMBath";
import InventoryCBath1 from "./pages/Landlord/InventoryCBath1";
import InventoryCBath2 from "./pages/Landlord/InventoryCBath2";
import InventoryCBath3 from "./pages/Landlord/InventoryCBath3";
import InventoryMBed from "./pages/Landlord/InventoryMBed";
import InventoryCBed1 from "./pages/Landlord/InventoryCBed1";
import InventoryCBed2 from "./pages/Landlord/InventoryCBed2";
import InventoryCBed3 from "./pages/Landlord/InventoryCBed3";
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
import Logout from "./pages/Landlord/Logout";
import { AppProvider } from "./context/settings";
import { ProtectedRoute } from "./components/ProtectedComponent";
import StandardPage from "./pages/StandardPage";
import NotFoundPage from "./pages/NotFoundPage";
import InventoryOfArea from "./pages/InventoryOfArea";
import UnitMeters from "./pages/Landlord/UnitMeters";

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
                <TenancySelect siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/pages/propertyselection">
              <StandardPage>
                <PropertySelect siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/notifications">
              <StandardPage>
                <Notifications siteMap={"Notifications"} />
              </StandardPage>
            </Route>
            <Route path="/landlord/profile">
              <StandardPage>
                <Profile siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/payables">
              <StandardPage>
                <Payables siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/financials">
              <StandardPage>
                <Financials siteMap={""} />
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

            <Route path="/landlord/inventoryaccesscard">
              <StandardPage>
                <InventoryAccessCard siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/inventoryentrance">
              <StandardPage>
                <InventoryEntrance siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/inventorywater">
              <StandardPage>
                <InventoryWater siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/inventoryutility">
              <StandardPage>
                <InventoryUtility siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/inventorykitchen">
              <StandardPage>
                <InventoryKitchen siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/inventorydining">
              <StandardPage>
                <InventoryDining siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/inventoryyard">
              <StandardPage>
                <InventoryYard siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/inventorybalcony">
              <StandardPage>
                <InventoryBalcony siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/inventoryliving">
              <StandardPage>
                <InventoryLiving siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/inventorygas">
              <StandardPage>
                <InventoryGas siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/inventoryelectricity">
              <StandardPage>
                <InventoryElectricity siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/inventoryremotecontrol">
              <StandardPage>
                <InventoryRemoteControl siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/inventoryvehicle">
              <StandardPage>
                <InventoryVehicle siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/inventorybeds">
              <StandardPage>
                <InventoryBeds siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/inventorybath">
              <StandardPage>
                <InventoryBath siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/InventoryMBath">
              <StandardPage>
                <InventoryMBath siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/InventoryCBath1">
              <StandardPage>
                <InventoryCBath1 siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/InventoryCBath2">
              <StandardPage>
                <InventoryCBath2 siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/InventoryCBath3">
              <StandardPage>
                <InventoryCBath3 siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/InventoryMBed">
              <StandardPage>
                <InventoryMBed siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/InventoryCBed1">
              <StandardPage>
                <InventoryCBed1 siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/InventoryCBed2">
              <StandardPage>
                <InventoryCBed2 siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/InventoryCBed3">
              <StandardPage>
                <InventoryCBed3 siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/inventorykey">
              <StandardPage>
                <InventoryKey siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/quicklinks/:cellId">
              <StandardPage>
                <QuickLinks siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/calendars">
              <StandardPage>
                <Calendars siteMap={""} />
              </StandardPage>
            </Route>
            <Route exact path="/landlord/bills">
              <StandardPage>
                <Bills siteMap={""} />
              </StandardPage>
            </Route>
            <Route exact path="/landlord/utilities">
              <StandardPage>
                <Utilities siteMap={"123"} />
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
                <PropertyInfo siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/UnitViewings">
              <StandardPage>
                <UnitViewings siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/viewingdetails/:appointmentId">
              <StandardPage>
                <ViewingDetails siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/offers">
              <StandardPage>
                <Offers siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/maintenance">
              <StandardPage>
                <Maintenance siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/offers">
              <StandardPage>
                <Offers siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/offerdetails/:offerId">
              <StandardPage>
                <OfferDetails siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/maintenancedetails/:mindex">
              <StandardPage>
                <MaintenanceDetails siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/maintenancechatpayment">
              <StandardPage>
                <MaintenanceChatPayment siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/MaintenanceChatRequest">
              <StandardPage>
                <MaintenanceChatRequest siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/maintenancechatinteraction">
              <StandardPage>
                <MaintenanceChatInteraction siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/tenanttenancy">
              <StandardPage>
                <TenantTenancy siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/tenancydocs">
              <StandardPage>
                <TenancyDocs siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/todolist">
              <StandardPage>
                <TodoList siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/tenantpayables">
              <StandardPage>
                <TenantPayables siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/PropertyCondition">
              <StandardPage>
                <PropertyCondition siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/EntranceCondition">
              <StandardPage>
                <EntranceCondition siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/KitchenCondition">
              <StandardPage>
                <KitchenCondition siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/LivingCondition">
              <StandardPage>
                <LivingCondition siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/DiningCondition">
              <StandardPage>
                <DiningCondition siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/YardCondition">
              <StandardPage>
                <YardCondition siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/BalconyCondition">
              <StandardPage>
                <BalconyCondition siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/UtilityCondition">
              <StandardPage>
                <UtilityCondition siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/BedsCondition">
              <StandardPage>
                <BedsCondition siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/MBedCondition">
              <StandardPage>
                <MBedCondition siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/CommonBed1Condition">
              <StandardPage>
                <CommonBed1Condition siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/CommonBed2Condition">
              <StandardPage>
                <CommonBed2Condition siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/CommonBed3Condition">
              <StandardPage>
                <CommonBed3Condition siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/BathsCondition">
              <StandardPage>
                <BathsCondition siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/MBathCondition">
              <StandardPage>
                <MBathCondition siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/CommonBath1Condition">
              <StandardPage>
                <CommonBath1Condition siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/CommonBath2Condition">
              <StandardPage>
                <CommonBath2Condition siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/CommonBath3Condition">
              <StandardPage>
                <CommonBath3Condition siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/checkincheckout">
              <StandardPage>
                <CheckInCheckOut siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/checkinkit">
              <StandardPage>
                <CheckInKit siteMap={""} />
              </StandardPage>
            </Route>
            <Route path="/landlord/checkinleaflet">
              <StandardPage>
                <CheckInLeaflet siteMap={""} />
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
