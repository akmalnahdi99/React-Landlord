import React from "react";
// import { AppContext } from "../context/settings";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

export default function PostsListFilter({ updateFilter, selectedFilter }) {
  // const appContext = React.useContext(AppContext);
  
  const Filters = [
    {
      id: "CheckIn",
      name: "Check In",
    },
    {
      id: "Omissions",
      name: "Omission",
    },
    {
      id: "Additions",
      name: "Additions",
    },
    {
      id: "CheckOut",
      name: "Check Out",
    },
  ];

  React.useEffect(() => {
    console.log("call useEffect");
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    accessibility: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
          dots: false,
          infinite: false,
          arrows: false,
          accessibility: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          dots: false,
          infinite: false,
          arrows: false,
          accessibility: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} id="FilterContainer" className="mb-2 mt-2 multiple-items" style={{ display: "flex" }}>
      {Filters.map((filter, index) => {
        return (
          <div key={filter} className="widthfitcontent" onClick={() => updateFilter(filter.id)}>
            <div className={selectedFilter === filter.id ? "btnfiltermain btnfilter m-1 current" : "btnfiltermain btnfilter m-1"} value="rental">
              <i className={filter.iconClass}></i> {filter.name}
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
