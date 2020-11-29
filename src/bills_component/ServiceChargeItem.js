//under review
import React from "react";
import { Link } from "react-router-dom";

export default function ServiceChargeItem({ servicecharge, namepayable, bankname, sinkingfund, contact, bankaccount, date, title, status }) {
  return (
    <div class="wrapper wrapper-content animated fadeInRight  ">
      <div class="container container-xs">
        <div className="ibox">
          <div className="ibox-title">
            <h3>Service Charge &amp; Sinking Fund</h3>
          </div>
          <div className="ibox-content minhigh pt-2">
            <div className="row ">
              <div className="col-sm-6 ">
                <h4 className="text-doorcase3">Service Charge per month</h4>
                <p className="m-0">{servicecharge}</p>
                <hr />
                <h3 className="text-doorcase3">Payable To</h3>
                <br />
              </div>
              <div className="col-sm-6">
                <h4 className="text-doorcase3">Sinking Fund per month</h4>
                <p className="m-0">{sinkingfund}</p>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <h4 className="text-doorcase3">Name Payable</h4>
                <p className="m-0">{namepayable}</p>
                <hr />
              </div>
              <div className="col-sm-6">
                <h4 className="text-doorcase3">Contact Number</h4>
                <p className="m-0">{contact}</p>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <h4 className="text-doorcase3">Bank Name</h4>
                <p className="m-0">{bankname}</p>
                <hr />
              </div>
              <div className="col-sm-6">
                <h4 className="text-doorcase3">Bank Account Number</h4>
                <p className="m-0">{bankaccount}</p>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div class="ibox">
          <div class="ibox-title">
            <h3> Invoice</h3>
          </div>
          <div class="ibox-content minhigh pt-0">
            <div class="row">
              <div class="col-sm-7 mb-3">
                <small>Due On 10/28/2020</small>
                <p class="m-0">Service Charge</p>
                <p class="m-0">
                  Status: <span class="text-danger">Overdue</span>
                </p>
              </div>
              <div class="col-12 md-5">
                <div class="btn-res">
                  <Link class="btn btn-primary width140 mr-2 mb-2">View Bill</Link>
                  <Link class="btn btn-success width140 mb-2">Upload Receipt</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="ibox">
          <div class="ibox-title">
            <span className="ml-2 text-doorcase3">{title}</span>
            <h3> Invoice</h3>
          </div>
          <div class="ibox-content minhigh pt-0">
            <div class="row">
              <div class="col-sm-7 mb-3">
                <small>Due On 10/28/2020</small>
                <p class="m-0">Service Charge</p>
                <p class="m-0">
                  Status: <span class="text-completedtask">Paid</span>
                </p>
              </div>
              <div class="col-12 md-5">
                <div class="btn-res">
                  <Link class="btn btn-primary width140 mr-2 mb-2">View Bill</Link>
                  <Link class="btn btn-success width140 mb-2">Upload Receipt</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
