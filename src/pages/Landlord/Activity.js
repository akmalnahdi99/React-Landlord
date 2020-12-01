import React from "react";
import PostsList from "../../components/PostsList";
import PostsListFilter from "../../components/PostsListFilter";
import UnitInfoCard from "../../components/unitCart";
import { Link } from "react-router-dom";
import Footer from "../../components/static/Footer";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";

class Activity extends React.Component {
    constructor(props) {
      super(props);
      this.state = {addClass: false}
    }
    toggle() {
      this.setState({addClass: !this.state.addClass});
    }
    render() {
      let idClass = ["gray-bg"];
      if(this.state.addClass) {
        idClass.push('ml300');
      }
      
      return(
          <>
          <div id="page-wrapper" className={idClass.join('  ')} style={{ border: "0px solid red" }}>
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
                      <UnitInfoCard />
                    </div>
                    <div className="col-2 px-2">
                      <Link to="a1" className="btn btn-primary btn-circle mt-3 float-right" data-toggle="modal" data-target="#additionalinfo">
                        <i className="fas fa-exchange-alt"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper wrapper-content animated fadeInRight py-3 mb-0 gray-bg" style={{ borderBottom: "1px solid #fff" }}>
            <div className="row p-0 justify-content-center">
              <div className="col-lg-8 px-2">
                <PostsListFilter />
              </div>
            </div>
          </div>

          <div className="wrapper wrapper-content animated pt-0 fadeInRight ">
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
          </>
      );
    }
  }
  export default Activity



