//PHONE OR COST
import React, { useState } from "react";
import { Collapse } from "reactstrap";
import * as FaIcons from "react-icons/fa";

export default function SubscriptionFeeDetails({ title, details }) {
 
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="ibox">
      <div className="ibox-title">
        <h3>
          <img src="/imgs/settings.svg" alt="..." className="utilityIconTitle" />
          {title}
        </h3>
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
                <p className="m-0">{details.contactNumber || "N/A"}</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Reference number</h4>
                <p className="m-0">{details.referenceNumber || "N/A"}</p>
              </div>
            </div>
            <hr />
          </div>

          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Bank name</h4>
                <p className="m-0">{details.bankName || "N/A"}</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Account number</h4>
                <p className="m-0">{details.bankAccountNumber || "N/A"}</p>
              </div>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
}
