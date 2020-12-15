import React, { useState } from "react";
import PostsList from "../../components/PostsList";
import PostsListFilter from "../../components/PostsListFilter";
import InlineUnitInfoCard from "../../components/InlineUnitInfoCard";
import * as FaIcons from "react-icons/fa";
import Footer from "../../components/static/Footer";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";
import { Button, Modal, ModalHeader, ModalBody, Media } from "reactstrap";
import { AppContext } from "../../context/settings";
 

export default function Activity(props) {
  const { updateAppContext } = React.useContext(AppContext);
   

  const { className } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  function setActiveUnit(unitId) {
    updateAppContext({ activeUnitId: unitId });
    setModal(false);
  }

  var {
    settings: {
      userInfo: { units },
    },
  } = React.useContext(AppContext);

  return (
    <div id="page-wrapper" className="gray-bg" style={{ border: "0px solid red" }}>
      {/* Task to Ayham: need to add class as well if the BAR button in leftmenu.js clicked*/}
      <div className="border-bottom white-bg">
        <div className="container-fluid">
          <Header />
        </div>
      </div>

      <div className="wrapper border-bottom page-heading bg-white">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <SiteMap title="Activities &amp; News Feed" />
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper wrapper-content py-4 animated fadeInRight bg-white">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="row justify-content-center">
                <div className="col-10 px-2">
                  <InlineUnitInfoCard />
                </div>
                <div className="col-2 px-2">
                  <Button className="btn btn-primary btn-circle mt-3 float-right btnsvg" onClick={toggle}>
                    <FaIcons.FaExchangeAlt />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={modal} toggle={toggle} className={className} centered={true}>
        <ModalHeader toggle={toggle} close={closeBtn} className="text-completedtask text-left font-title ml-3">
          Select Property
        </ModalHeader>
        {units &&
          units.map((unit, index) => {
            return (
              <ModalBody
                key={index}
                className="pt-0"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveUnit(unit.id);
                }}
              >
                <Media className="mt-1" style={{ cursor: "pointer" }}>
                  <Media left middle>
                    <Media className="img-fluid rounded-border align-self-center mr-3" style={{ width: "50px", height: "50px" }} object src={unit.urlThumb} alt={unit.name} width="50px" />
                  </Media>
                  <Media body className="align-self-center">
                    <Media heading className="m-0 text-completedtask">
                      {unit.name}
                      <span>
                        <i className="fas fa-arrow-right fa-xs float-right"></i>
                      </span>
                    </Media>
                    <p className="m-0 font-body text-completedtask">{unit.buildingName} 11</p>
                  </Media>
                </Media>
              </ModalBody>
            );
          })}
      </Modal>

      <div className="wrapper wrapper-content animated fadeInRight py-3 mb-0 gray-bg" style={{ borderBottom: "1px solid #fff" }}>
        <div className="row p-0 justify-content-center">
          <div className="col-lg-8 px-2">
            <PostsListFilter />
          </div>
        </div>
      </div>

      <div className="wrapper wrapper-content animated pt-0 fadeInRight">
        <div className="container-fluid">
          <div className="row mt-1 justify-content-center">
            <div className="col-lg-8">
              <PostsList />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
