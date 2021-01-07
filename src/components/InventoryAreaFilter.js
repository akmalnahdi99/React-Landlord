//under review
import React from "react";
import { AppContext } from "../context/settings";
import "slick-carousel/slick/slick.css"; 
 


export default function InventoryFilter() {
  const appContext =   React.useContext(AppContext);
  const selectedFilter = appContext.settings.postsFilter;
  

  const Filters = [
    {
      id: "Check In",
      name: "Check In",
    },
    {
      id: "Addition",
      name: "Addition",
    },
    {
      id: "Omission",
      name: "Omission",
    },
    {
      id: "Check Out",
      name: "Check Out",
    },
  ];
   
 React.useEffect(() => {
    console.log("call useEffect");
  }, []);

   const filterSelection = (filter) => {
     console.log("set :" , filter);
     appContext.setPostsFilter(filter);
  };

  

  return (
    <div id="FilterContainer" className="mb-2 mt-2 multiple-items sorterslide" style={{ display: "flex" }}>
      {Filters.map((filter) => {
        return (
          <div key={filter.id} className="widthfitcontent">
            <div to="" className={selectedFilter === filter.name ? "btnfiltermain btnfilter m-1 current" : "btnfiltermain btnfilter m-1"} value="rental" onClick={() => filterSelection(filter.name)}>
              <i className={filter.iconClass}></i> {filter.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}