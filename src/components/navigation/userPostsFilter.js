import React from "react";
// import { FaWindowClose } from "react-icons/fa";
// import iconBars from "../../assets/Icons/i1.svg";
// import useEffect from 'react';
import {Link} from 'react-router-dom';

// import { UserContext } from "../context/user";

export default function UserPostsFilter() {
  // const { alert, hideAlert } = React.useContext(UserContext);
  const [selectedFilter, setSelectedFilter] = React.useState();

  const Filters = [
    {
      name: "Payment",
      iconClass: "fas fa-hand-holding-usd",
    },
    {
      name: "Maintenance",
      iconClass: "fas fa-wrench",
    },
    {
      name: "Offers",
      iconClass: "fas fa-hands-helping",
    },
    {
      name: "Viewing",
      iconClass: "fas fa-eye",
    },
  
    {
      name: "Overdue",
      iconClass: "fas fa-exclamation-triangle",
    },
    {
      name: "all",
      iconClass: "fas fa-bars",
    },
  ];
  // let css = "alert-container";
  // if (alert.show) {
  //   css += " alert-show";
  //   if (alert.type === "danger") {
  //     css += " alert-danger";
  //   }
  // }
 React.useEffect(() => {
    console.log("call useEffect");
  }, []);
  // const filterSelection = (filter) => {
  //   setSelectedFilter(filter);
  // };

  return (
    <div id="FilterContainer" class="mb-2 mt-2 multiple-items" style={{ display: "flex" }}>
      {Filters.map((filter) => {
        return (
          <div class="widthfitcontent">
            <Link class={selectedFilter === filter.name ? "btnfiltermain btnfilter m-1 current" : "btnfiltermain btnfilter m-1"} value="rental" onClick={()=>setSelectedFilter(filter.name)}>
              <i class={filter.iconClass}></i> {filter.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
