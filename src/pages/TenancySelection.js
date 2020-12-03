import React from "react";
import * as RiIcons from "react-icons/ri";

function TenancySelection() {
    
    const getCurrentYear = () => {
        return new Date().getFullYear();
      };

    return (
        <div className="loginbg doorcasedark-bg">
            <div class="tenantdiv">
                <div className="tenantlogo">
                    <img alt="dr-logo" src="/imgs/doorcase-logo.png" class="img-fluid" width="70px" />
                </div>

                <div class="container">
                    <div class="text-center animated fadeInDown centeredbox">
                        <div class="row">
                            <div class="col-6 p-0 align-self-center mt-4">
                                <a href="property-selection.html" class="btn text-white">
                                    <RiIcons.RiHomeSmileFill className="icon-8x" />
                                    <br /><br />
                                    <span class="text-white mt-5 font-light">
                                        Landlord
                            </span>
                                </a>
                            </div>
                            <div class="col-6 p-0 align-self-center mt-4">
                                <a href="property-selection.html" class="btn text-white">
                                    <RiIcons.RiShieldUserFill className="icon-8x" />
                                    <br /><br />
                                    <span class="text-white mt-5 font-light">
                                        Tenant
                            </span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="copyright-footer">
                    <p class="m-t text-center text-white">
                      <small>
                            &copy; <span className="ml-2">{getCurrentYear()} </span> 
                     <span className="ml-2">Copyright by Jann Properties</span>
                     </small>
                    </p>
                </div>
            </div>
        </div>
    
    )
}

export default TenancySelection

