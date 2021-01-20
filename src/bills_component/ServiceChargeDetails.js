//PHONE OR COST
import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import * as FaIcons from "react-icons/fa";

export default function BillsDetails({ title, details }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  //   var details = {
  //     service_cherge: "RM 0.00",
  //     name: "Raine, Horne & Zaki Property Management Sdn Bhd",
  //     bank: "Maybank",
  //     sinking_fund: "RM 0.00",
  //     account: "123456789012",
  //     contact: "+603 123 456",
  //   };

  return (
    <div className="ibox">
      <div className="ibox-title">
        <div>
        <h3><img src="/imgs/money-bag.svg" alt="..." className="utilityIconTitle"></img>{title}</h3>
        </div>
        <div className="ibox-tools">
          <p onClick={toggle}>
            <FaIcons.FaInfoCircle className="fa-2x " />
          </p>
        </div>
      </div>
        <Collapse isOpen={isOpen} className="ibox-content minhigh pt-0">
          <div className="row pt-2">
            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Service charge per month</h4>
                  <p className="m-0">{details.serviceCharge || "N/A"}</p>{/* TODO task to ayham add .00 at the end of the amount*/}
                </div>
              </div>
              <hr />
            </div>
            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Sinking fund per month</h4>
                  <p className="m-0">{details.sinkingFunds || "N/A"}</p>
                </div>
              </div>
              <hr />
            </div>
          </div>
          <div className="row pt-2">
            <div className="col-sm-12">
              <h3>Payable To</h3>
            </div>
            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Name payable</h4>
                  <p className="m-0">{details.companyName || "N/A"}</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Contact number</h4>
                  <p className="m-0">{details.contactNumber || "N/A"}</p>{/* TODO task to ayham add +60 */}
                </div>
              </div>
              <hr />
            </div>
          </div>

          <div className="row mb-4 justify-content-center">
            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Bank name</h4>
                  <p className="m-0">{details.bankName || "N/A"}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="media">
                <div className="media-body">
                  <h4 className="text-doorcase3">Bank account number</h4>
                  <p className="m-0">{details.bankAccountNumber || "N/A"}</p>
                </div>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
  );
}
 