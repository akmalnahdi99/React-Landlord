//TASK under Review
import React from 'react'

export default function MaintenanceDetailsList() {
    const data = {
      condoName: "Pavilion Residence",
      tenantName: "Zhang Lei",
    };
    return (
                        <div class="ibox">
                                <div class="ibox-content border mb-5 paddingtop">
                                    <div class="row">
                                        <div class="col-md-12 mb-2">
                                            <div class="media">
                                                <img class="align-self-center mr-3" src="/imgs/avatar.svg" width="40px"
                                                    alt="Generic placeholder image" />
                                                    <div class="media-body align-self-center">
                                                    <h5 class="mt-0 mb-0"><strong>{data.tenantName}</strong></h5>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h4><span class="font-light font-body">Status:</span><span
                                                    class="text-completedtask ml-2 font-body">Resolved</span></h4>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <span class="font-body">Applied date</span>
                                            <p class="font-body"><strong>XX-XX-XXXX</strong></p>
                                            <hr />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="demo-gallery mb-0">
                                                <ul id="lightgallery" class="list-unstyled row">
                                                    <li class="col-xl-3 col-sm-4 col-md-2 col-lg-2 p-2"
                                                        data-responsive="https://sachinchoolur.github.io/lightgallery.js/static/img/2-1600.jpg"
                                                        data-src="https://sachinchoolur.github.io/lightgallery.js/static/img/2-1600.jpg">
                                                        <a href="">
                                                            <img class="img-responsive"
                                                                src="https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-2.jpg" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
    );
}

