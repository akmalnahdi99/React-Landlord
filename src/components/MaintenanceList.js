//TASK under Review
import React from "react";
import Empty from "./Empty";
import MaintenanceListItem from "./MaintenanceListItem";


const MaintenanceList = () => {
  var data = [
    {
      id: 0,
      date: "Oct 23",
      name: "Tenant Name",
      status: "resolved",
      applydate: "XX-XX-XXXX",
      images: [
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
      ],
    },
    {
      id: 1,
      date: "Oct 23",
      name: "Tenant name",
      status: "new",
      applydate: "XX-XX-XXXX",
      images: [
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
      ],
    },
    {
      id: 2,
      date: "Oct 23",
      name: "Tenant name",
      status: "new",
      applydate: "XX-XX-XXXX",
      images: [
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
      ],
    },
    {
      id: 3,
      date: "Oct 19",
      name: "Tenant Name",
      status: "inprogress",
      applydate: "XX-XX-XXXX",
      images: [
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
      ],
    },
    {
      id: 4,
      date: "Oct 23",
      name: "Tenant Name",
      status: "in progress",
      applydate: "XX-XX-XXXX",
      images: [
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
        {
          urlThumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
          urlHref: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg",
        },
      ],
    },
  ];

  return (
    <div className="ibox">
      <div className="ibox-content paddingtop minhigh">
        <div className="viewing-timeline">
          {data.length > 0 ? (
            data.map((item, index) => {
              return <MaintenanceListItem key={index} {...item} />;
            })
          ) : (
            <Empty />
          )}
        </div>
      </div>
    </div>
  );
};

export default MaintenanceList;
