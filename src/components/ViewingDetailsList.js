import React from "react";
import Empty from "./Empty";

function ViewingDetailsList() {
    //TASK use object for data
    return (
        <div class="wrapper wrapper-content animated fadeInRight">
                <div class="container container-xs">
                    
                    <div class="ibox white-bg">
                        <div class="ibox-title">
                            <h3>Viewing Details</h3>
                            <div class="media pt-2">
                            <img class="align-self-center mr-3" src="/imgs/avatar.svg" width="100px" alt="Generic placeholder image" />
                                <div class="media-body align-self-center">
                                  <h2 class="mt-0">Zhang Lei</h2>
                                </div>
                            </div>
                            

                        </div>
                        <div class="ibox-content">
                            <div class="row">
                                <div class="col-sm-6 ">
                                    <div class="media">
                                        <div class="media-body">
                                            <h4 class="text-doorcase3">Nationality</h4>
                                            <p class="m-0">Nationality</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div class="col-sm-6">
                                    <div class="media">
                                        <div class="media-body">
                                            <h4 class="text-doorcase3">Total occupants</h4>
                                            <p class="m-0">XXX</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="media">
                                        <div class="media-body">
                                            <h4 class="text-doorcase3">Gender</h4>
                                            <p class="m-0">Gender</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div class="col-sm-6">
                                    <div class="media">
                                        <div class="media-body">
                                            <h4 class="text-doorcase3">Move in date</h4>
                                            <p class="m-0">Move in date</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="media">
                                        <div class="media-body">
                                            <h4 class="text-doorcase3">Age</h4>
                                            <p class="m-0">Age</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div class="col-sm-6">
                                    <div class="media">
                                        <div class="media-body">
                                            <h4 class="text-doorcase3">Duration of tenancy</h4>
                                            <p class="m-0">Duration of tenancy</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                                
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="media">
                                        <div class="media-body">
                                            <h4 class="text-doorcase3">Occupation</h4>
                                            <p class="m-0">XXX</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ibox-content-viewing border-top">
                            <div class="row">
                                <div class="col-sm-3 ">
                                    <div class="media">
                                        <div class="media-body">
                                            <h4 class="text-doorcase3">Date of viewing</h4>
                                            <p class="m-0">Date of viewing</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="media">
                                        <div class="media-body">
                                            <h4 class="text-doorcase3">Time of viewing</h4>
                                            <p class="m-0">Time of viewing</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="media">
                                        <div class="media-body">
                                            <h4 class="text-doorcase3">Location</h4>
                                            <p class="m-0">Location</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div class="ibox-content-viewing border-top">
                            <div class="row">
                                <div class="col-sm-3 ">
                                    <div class="media">
                                        <div class="media-body">
                                            <h4 class="text-doorcase3">Attending agent name</h4>
                                            <p class="m-0">Attending agent name</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>


                </div>
            </div>
    )
}

export default ViewingDetailsList
