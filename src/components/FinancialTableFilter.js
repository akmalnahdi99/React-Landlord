import React from "react";
import { AppContext } from "../context/settings";
import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";


export default function PostsListFilter() {
  const appContext =  React.useContext(AppContext);
  const selectedFilter = appContext.settings.postsFilter;

  const Filters = [
    {
      id: 13,
      name: "All",
    },
    {
      id: 1,
      name: "Jan",
    },
    {
      id: 2,
      name: "Feb",
    },
    {
      id: 3,
      name: "Mar",
    },

    {
      id: 4,
      name: "Apr",
    },
    {
      id: 5,
      name: "May",
    },
    {
      id: 6,
      name: "Jun",
    },
    {
      id: 7,
      name: "Jul",
    },
    {
      id: 8,
      name: "Aug",
    },
    {
      id: 9,
      name: "Sep",
    },
    {
      id: 10,
      name: "Oct",
    },
    {
      id: 11,
      name: "Nov",
    },
    {
      id: 12,
      name: "Dec",
    },
  ];
   
 React.useEffect(() => {
    console.log("call useEffect");
  }, []);

   const filterSelection = (filter) => {
     console.log("set :" , filter);
     appContext.setPostsFilter(filter);
  };

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 13,
    slidesToScroll: 13,
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
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 2 ,
              slidesToScroll: 1,
              centerMode: false,
              dots: false,
              infinite: false,
              arrows: false,
              accessibility: false,
          }
      }
  ]
  };

  return (
    <Slider {...settings} id="FilterContainer" className="mb-2 mt-2 multiple-items" 
    style={{ display: "flex" }}>
      {Filters.map((filter) => {
        return (
          <div key={filter.id}>
            <div to="" className={selectedFilter === filter.name ?
               "btnfiltermain btnfilter m-1 current" : "btnfiltermain btnfilter m-1"} 
               value="rental" onClick={() => filterSelection(filter.name)}>{filter.name}
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
