import React from "react";
import SubscriptionFeeDetails from "./SubscriptionFeeDetails";
import InvoiceCard from "./Invoice";
import { apiCall, apiLoadData } from "utils/landlordHelper";
import { config } from "./../constants";
import { AppContext } from "context/settings";
import Empty from "components/Empty";
import Loading from "components/static/Loading";

export default function BillsSubscriptionFee({ utilityDetails, payments }) {
  var appContext = React.useContext(AppContext);
  var financials = appContext.settings.unitFinancials;
  var activeUnitId = appContext.settings.activeUnitId;
  const [isLoading, setIsLoading] = React.useState(true);

  var Invoices = [];
 
  if (financials && financials["landlord"] && financials["landlord"]["Subscription"]) {
    var Subscriptions = financials["landlord"]["Subscription"];
    Invoices = Subscriptions.map((invoice, index) => {
      return <InvoiceCard key={index} title="Invoice" paymentFor="Subscription" payOnline={payOnline} {...invoice} />;
    });
  }

  React.useEffect(() => {
    async function updateFinancials() {
      setIsLoading(true);
      var financials = await apiLoadData("loadFinancials", { activeUnitId });
      appContext.updateAppContext({ unitFinancials: financials });
      setIsLoading(false);
    }
    updateFinancials();
    // eslint-disable-next-line
  }, [activeUnitId]);

  async function payOnline(paymentFor, payableId) {
    var response = await apiCall(`/units/landlordGetPaymentRecord?unitId=${activeUnitId}&paymentFor=${paymentFor}&payableId=${payableId}`);
    if (response.status) {
      if (response.data && response.data.paymentUrl && response.data.paymentUrl.startsWith(config.paymentUrl)) {
        window.location.href = response.data.paymentUrl;
      }
    }
  }

  return (
    <div className="wrapper wrapper-content animated fadeInRight">
      <div className="ibox ">
        <SubscriptionFeeDetails title="Subscription Fee" details={utilityDetails} />
      </div>
      {isLoading === true ? <Loading /> : Invoices.length > 0 ?  Invoices  : <Empty title="No Invoices" />}
    </div>
  );
}
