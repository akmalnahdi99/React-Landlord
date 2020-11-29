// //under review
// import React from "react";
// import Empty from "./Empty";
// import GasItem from "./GasItem";

// export default function GasItemList({t}) {
//   var Info = [
//     {
//       id: 0,
//       name: "Petroliam Nasional Berhad (PETRONAS)",
//       ref_no: "N/A",
//       acc_no: "N/A",
//       contact_no: "+60123423884",
//       bank_name: "N/A"
//     },
//   ];

//   return (
//     <div className="ibox">
//       <div className="ibox-title">
//         <h3>Gas</h3>
//       </div>
//       <div className="ibox-content forum-container">
//         {Info.length > 0 ? (
//           Info.map((item) => {
//             return <GasItem key={item.id} {...item} />;
//           })
//         ) : (
//           <Empty />
//         )}
//       </div>
      
//     </div>
//   );
// }
