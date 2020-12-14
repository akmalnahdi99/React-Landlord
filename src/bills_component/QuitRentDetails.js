import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import * as FaIcons from "react-icons/fa";

const QuitRentDetails = ({ title }) => {
  var details = {
    service_cherge: "RM 0.00",
    name: "Suez Domain Sdn Bhd",
    bank: "CIMB",
    account: "8009656480",
    contact: "+603 123 456",
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="ibox">
      <div className="ibox-title">
        <h3>{title}</h3>
        <div class="ibox-tools">
                                <p onClick={toggle}>
                                    <FaIcons.FaInfoCircle className="fa-2x " />
                                </p>
                            </div>
      </div>
      <div className="ibox-content minhigh pt-0">
      <Collapse isOpen={isOpen} className="ibox-content minhigh pt-0">
        <div className="row pt-2">
          <div className="col-sm-12">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Service charge per month</h4>
                <p className="m-0">{details.service_cherge}</p>
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
                <h4 className="text-doorcase3">Company Name</h4>
                <p className="m-0">{details.name}</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Contact number</h4>
                <p className="m-0">{details.contact}</p>
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
                <p className="m-0">{details.bank}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Bank account number</h4>
                <p className="m-0">{details.account}</p>
              </div>
            </div>
          </div>
        </div>
        </Collapse>
      </div>
    </div>
  );
};

export default QuitRentDetails;
