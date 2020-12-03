import React from "react";
import Footer from "../components/static/Footer";
import FinancialChart from "../../components/FinancialChart";

const Financials = () => {
  return (
    <div class="wrapper wrapper-content animated fadeInRight">
      <div class="container container-xs">
        <div class="ibox ">
          <FinancialChart title="Financials" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Financials;
