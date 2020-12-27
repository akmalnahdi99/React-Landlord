import { config } from "./../constants";
import Cookies from "js-cookie";

export const loadNotifications = async (accessToken) => {
  var { apiUrl } = config;

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };
  var result = null;
  await fetch(apiUrl + "users/notifications", requestOptions)
    .then(async (resp) => {
      if (resp.status === 200) {
        result = await resp.json();
      } else {
        throw new Error(resp.statusText);
      }
    })
    .catch((error) => {
      console.log(error);
    })
    .finally((f) => {});

  return result;
};

export const apiCall = async (url) => {
  var jwtToken = Cookies.get("jwtToken") || null;
  var { apiUrl } = config;

  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (jwtToken) {
    headers.Authorization = `Bearer ${jwtToken}`;
  }

  const requestOptions = {
    method: "GET",
    headers: headers,
  };

  var apiResult = null;
  var result = { status: null, data: null };
  await fetch(apiUrl + url, requestOptions)
    .then(async (resp) => {
      if (resp.status === 200) {
        apiResult = await resp.json();
        result.status = true;
      } else {
        result.status = false;
        throw new Error(resp.statusText);
      }
    })
    .catch((error) => {
      console.error(`[API ERROR (${url})] ` + error);
    })
    .finally((f) => {});
  result.data = apiResult;
  return result;
};

export const role_tenant = "tenant";
export const role_landlord = "landlord";
// get financial value per month or per year
export function getFinancialValueRoot(financialData, financialMonth, userRole, paymentOf) {
  if (financialData) {
    if (financialMonth >= 1 && financialMonth <= 12) {
      if (userRole === role_landlord) return (financialData[financialMonth].landlord[paymentOf] && financialData[financialMonth].landlord[paymentOf].paidAmount) || 0;
      else if (userRole === role_tenant) return (financialData[financialMonth].tenant[paymentOf] && financialData[financialMonth].tenant[paymentOf].paidAmount) || 0;
    } else if (financialMonth === 0) {
      // get accumulative data
      var accumulatedPerMonths = 0;
      for (let month = 1; month <= 12; month++) {
        const element = financialData[month];
        if (userRole === role_tenant) {
          accumulatedPerMonths += (element.tenant[paymentOf] && element.tenant[paymentOf].paidAmount) || 0;
        } else if (userRole === role_landlord) {
          accumulatedPerMonths += (element.landlord[paymentOf] && element.landlord[paymentOf].paidAmount) || 0;
        }
      }
      return accumulatedPerMonths;
    }
  }
  return 0;
}

// calculate Total Income, Total Expenses, Profit
export function calculate_3_financials_per_month(financialData, financialMonth) {
  var totalIncome = getFinancialValueRoot(financialData, financialMonth, role_tenant, "Rental");
  var totalExpenses =
    getFinancialValueRoot(financialData, financialMonth, role_landlord, "ServiceCharges") +
    getFinancialValueRoot(financialData, financialMonth, role_landlord, "SinkingFunds") +
    getFinancialValueRoot(financialData, financialMonth, role_landlord, "AssessmentRate") +
    getFinancialValueRoot(financialData, financialMonth, role_landlord, "QuitRent") +
    getFinancialValueRoot(financialData, financialMonth, role_landlord, "Subscription") +
    getFinancialValueRoot(financialData, financialMonth, role_landlord, "Maintenance") +
    getFinancialValueRoot(financialData, financialMonth, role_landlord, "Insurance");
  var netProfit = totalIncome - totalExpenses;
  return { totalIncome, totalExpenses, netProfit };
}

export const userQuickLinks = {
  bill_AssessmentRate: { id: "bill_AssessmentRate", type: "bill", label: "Assessment Rate", img: "/imgs/assessment.svg", link: "" },
  bill_Cabletv: { id: "bill_Cabletv", type: "bill", label: "Cabletv", img: "/imgs/tv.svg", link: "" },
  bill_Electricity: { id: "bill_Electricity", type: "bill", label: "Electricity", img: "/imgs/electricity.svg", link: "" },
  bill_Gas: { id: "bill_Gas", type: "bill", label: "Gas", img: "/imgs/gas.svg", link: "" },
  bill_Insurance: { id: "bill_Insurance", type: "bill", label: "Insurance", img: "/imgs/insurance.svg", link: "" },
  bill_Internet: { id: "bill_Internet", type: "bill", label: "Internet", img: "/imgs/wifi.svg", link: "" },
  bill_Maintenance: { id: "bill_Maintenance", type: "bill", label: "Maintenance", img: "/imgs/settings.svg", link: "" },
  bill_QuitRent: { id: "bill_QuitRent", type: "bill", label: "Quit Rent", img: "/imgs/quitrent.svg", link: "" },
  bill_ServiceCharge: { id: "bill_ServiceCharge", type: "bill", label: "Service Charge", img: "/imgs/money-bag.svg", link: "" },
  bill_Sewage: { id: "bill_Sewage", type: "bill", label: "Sewage", img: "/imgs/sewage.svg", link: "" },
  bill_SubscriptionFees: { id: "bill_SubscriptionFees", type: "bill", label: "Subscription Fees", img: "/imgs/subscription.svg", link: "" },
  bill_Water: { id: "bill_Water", type: "bill", label: "Water", img: "/imgs/water-drop.svg", link: "" },

  unit_AssessmentRate: { id: "unit_AssessmentRate", type: "unit", label: "Assessment Rate", img: "/imgs/assessment.svg", link: "" },
  unit_Building: { id: "unit_Building", type: "unit", label: "Building", img: "/imgs/company.svg", link: "" },
  unit_Insurance: { id: "unit_Insurance", type: "unit", label: "Insurance", img: "/imgs/insurance.svg", link: "" },
  unit_QuitRent: { id: "unit_QuitRent", type: "unit", label: "Quit Rent", img: "/imgs/quitrent.svg", link: "" },
  unit_RateAndTaxes: { id: "unit_RateAndTaxes", type: "unit", label: "Rate & Taxes", img: "/imgs/pie-chart.svg", link: "" },
  unit_Tenancy: { id: "unit_Tenancy", type: "unit", label: "Tenancy", img: "/imgs/family.svg", link: "" },
  unit_Unit: { id: "unit_Unit", type: "unit", label: "Unit", img: "/imgs/tenant.svg", link: "" },
  unit_UserManual: { id: "unit_UserManual", type: "unit", label: "User Manual", img: "/imgs/guide.svg", link: "" },
  unit_Utilities: { id: "unit_Utilities", type: "unit", label: "Utilities", img: "/imgs/utilities.svg", link: "" },
};
