import React from "react";
// import { FaWindowClose } from "react-icons/fa";
// import iconBars from "../../assets/Icons/i1.svg";
// import useEffect from 'react';
import { AppContext } from "../../context/settings";

// import { UserContext } from "../context/user";

export default function UserPostsFilter() {
  // const { alert, hideAlert } = React.useContext(UserContext);
  const appContext =   React.useContext(AppContext);
  const selectedFilter = appContext.settings.postsFilter;
  

  const Filters = [
    {
      id: 0,
      name: "Payment",
      iconClass: "fas fa-hand-holding-usd",
    },
    {
      id: 1,
      name: "Maintenance",
      iconClass: "fas fa-wrench",
    },
    {
      id: 2,
      name: "Offers",
      iconClass: "fas fa-hands-helping",
    },
    {
      id: 3,
      name: "Viewing",
      iconClass: "fas fa-eye",
    },

    {
      id: 4,
      name: "Overdue",
      iconClass: "fas fa-exclamation-triangle",
    },
    {
      id: 5,
      name: "all",
      iconClass: "fas fa-bars",
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
    <div id="FilterContainer" className="mb-2 mt-2 multiple-items" style={{ display: "flex" }}>
      {Filters.map((filter) => {
        return (
          <div key={filter.id} className="widthfitcontent">
            <p to="" className={selectedFilter === filter.name ? "btnfiltermain btnfilter m-1 current" : "btnfiltermain btnfilter m-1"} value="rental" onClick={() => filterSelection(filter.name)}>
              <i className={filter.iconClass}></i> {filter.name}
            </p>
          </div>
        );
      })}
    </div>
  );
}
