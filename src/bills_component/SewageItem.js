//under review
import React from "react";

export default function GasItem({ name, ref_no, acc_no, contact_no, bank_name }) {
  return (
    <div class="wrapper wrapper-content animated fadeInRight  ">
      <div class="container container-xs">
        <div className="ibox">
          <div className="ibox-title">
            <h3>Sewage</h3>
          </div>
          <div className="ibox-content minhigh pt-2">
            <div className="row ">
              <div className="col-sm-6 ">
                <h4 className="text-doorcase3">Name payable</h4>
                <p className="m-0">{name}</p>
                <hr />
              </div>
              <div className="col-sm-6">
                <h4 className="text-doorcase3">Contact number</h4>
                <p className="m-0">{contact_no}</p>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <h4 className="text-doorcase3">Reference number</h4>
                <p className="m-0">{ref_no}</p>
                <hr />
              </div>
              <div className="col-sm-6">
                <h4 className="text-doorcase3">Bank name</h4>
                <p className="m-0">{bank_name}</p>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <h4 className="text-doorcase3">Account number</h4>
                <p className="m-0">{acc_no}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
