//under review
import React from "react";
import Empty from "./Empty";
import TenancyDocsItem from "./TenancyDocsItem"
 
const TenancyDocsList = ({title}) => {
  var passphoto = [
    {
      id: 0,
      images: "/imgs/p-1.jpg"
    },
    {
      id: 1,
      images: "/imgs/p-2.jpg"
    },
    {
      id: 2,
      images: "/imgs/p-3.jpg"
    },
  ];
  var passcopy = [
    {
      id: 0,
      images: "/imgs/pass-1.jpg"
    },
    {
      id: 1,
      images: "/imgs/pass-2.jpg"
    },
    {
      id: 2,
      images: "/imgs/pass-3.jpg"
    },
  ];
  var visa = [
    {
      id: 0,
      images: "/imgs/v-11.jpg"
    },
    {
      id: 1,
      images: "/imgs/v-2.jpg"
    },
    {
      id: 2,
      images: "/imgs/v-3.jpg"
    },
  ];
  var identity = [
    {
      id: 0,
      images: "/imgs/s-1.jpg"
    },
    {
      id: 1,
      images: "/imgs/s-2.jpg"
    },
    {
      id: 2,
      images: "/imgs/s-3.jpg"
    },
  ];
  return (
      <div> 
        <div class="container container-xs">

    <div class="ibox">
        <div class="ibox-title">
            
            <div class="media-body">
                <h4 class="text-doorcase3">Passport Size Photo</h4>
        
            </div>
            <hr />

        </div>
        <div class="ibox-content minhigh">
            <div class="row">
                <div class="col-md-12">
                    <div class="demo-gallery">
                        <ul id="lightgallery2" class="list-unstyled row">
                        {passphoto.length > 0 ? (
                            passphoto.map((item) => {
                                return <TenancyDocsItem key={item.id} {...item} color="red" />;
                            })
                            ) : (
                            <Empty />
                        )}
                        </ul>
                    </div>
                    
                </div>
            </div>
        
        </div>

    </div>
    </div>


    <div class="container container-xs">

    <div class="ibox">
        <div class="ibox-title">
            
            <div class="media-body">
                <h4 class="text-doorcase3">IC/ Passport Copy</h4>
            </div>
            <hr />
        </div>
        <div class="ibox-content minhigh">
            <div class="row">
                <div class="col-md-12">
                    <div class="demo-gallery">
                        <ul id="lightgallery2" class="list-unstyled row">
                        {passcopy.length > 0 ? (
                            passcopy.map((item) => {
                                return <TenancyDocsItem key={item.id} {...item} color="red" />;
                            })
                            ) : (
                            <Empty />
                        )}
                        </ul>
                    </div>
                    
                </div>
            </div>
        
        </div>

    </div>
    </div>

    <div class="container container-xs">

    <div class="ibox">
        <div class="ibox-title">
            
            <div class="media-body">
                <h4 class="text-doorcase3">Visa Page</h4>
        
            </div>
            <hr />

        </div>
        <div class="ibox-content minhigh">
            <div class="row">
                <div class="col-md-12">
                    <div class="demo-gallery">
                        <ul id="lightgallery2" class="list-unstyled row">
                        {visa.length > 0 ? (
                            visa.map((item) => {
                                return <TenancyDocsItem key={item.id} {...item} color="red" />;
                            })
                            ) : (
                            <Empty />
                        )}
                        </ul>
                    </div>
                    
                </div>
            </div>
        
        </div>

    </div>
    </div>

    <div class="container container-xs">

    <div class="ibox">
        <div class="ibox-title">
            
            <div class="media-body">
                <h4 class="text-doorcase3">Student ID/ Employee ID/ Buisness Card/ Company Registration Letter</h4>
            
            </div>
            <hr />

        </div>
        <div class="ibox-content minhigh">
            <div class="row">
                <div class="col-md-12">
                    <div class="demo-gallery">
                        <ul id="lightgallery2" class="list-unstyled row">
                        {identity.length > 0 ? (
                            identity.map((item) => {
                                return <TenancyDocsItem key={item.id} {...item} color="red" />;
                            })
                            ) : (
                            <Empty />
                        )}
                        </ul>
                    </div>
                    
                </div>
            </div>
        
        </div>

    </div>
    </div>
    </div>
  );
};

export default TenancyDocsList;
