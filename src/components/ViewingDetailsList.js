import React from "react";

function ViewingDetailsList() {
  const data = {
    condoName: "Pavilion Residence",
    tenantName: "Zhang Lei",
    listingid: "123edxe",
    appy: "29-09-2020",
    nationality: "Malaysian",
    occupants: "2",
    gender: "Male",
    moveInDate: "02-10-2020",
    age: "32",
    agentName: "Mike",
    duration: "5 Years",
    occupation: "Doctor",
    dateOfViewing: "12-09-2020",
    timeOfViewing: "16:42",
    location: "Bukit Bintang",
  };
  return (
    <div className="wrapper wrapper-content animated fadeInRight">
      <div className="container container-xs">
        <div className="ibox white-bg">
          <div className="ibox-title">
            <h3>Viewing Details</h3>
            <div className="media pt-2">
              <img className="align-self-center mr-3" src="/imgs/avatar.svg" width="100px" alt="Generic placeholder" />
              <div className="media-body align-self-center">
                <h2 className="mt-0">{data.tenantName}</h2>
              </div>
            </div>
          </div>
          <div className="ibox-content">
            <div className="row">
              <div className="col-sm-6 ">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Nationality</h4>
                    <p className="m-0">{data.nationality}</p>
                  </div>
                </div>
                <hr />
              </div>
              <div className="col-sm-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Total occupants</h4>
                    <p className="m-0">{data.occupants}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Gender</h4>
                    <p className="m-0">{data.gender}</p>
                  </div>
                </div>
                <hr />
              </div>
              <div className="col-sm-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Move in date</h4>
                    <p className="m-0">{data.moveInDate}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Age</h4>
                    <p className="m-0">{data.age}</p>
                  </div>
                </div>
                <hr />
              </div>
              <div className="col-sm-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Duration of tenancy</h4>
                    <p className="m-0">{data.duration}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Occupation</h4>
                    <p className="m-0">{data.occupation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ibox-content-viewing border-top">
            <div className="row">
              <div className="col-sm-3 ">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Date of viewing</h4>
                    <p className="m-0">{data.dateOfViewing}</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Time of viewing</h4>
                    <p className="m-0">{data.timeOfViewing}</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Location</h4>
                    <p className="m-0">{data.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ibox-content-viewing border-top">
            <div className="row">
              <div className="col-sm-3 ">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Attending agent name</h4>
                    <p className="m-0">{data.agentName}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewingDetailsList;
