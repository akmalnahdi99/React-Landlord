import React from "react";

export default function Loading () {
  return (
    <React.Fragment>
      <div style={{ display:"flex", justifyContent:"center", alignItems:"center", border: "0px solid red" }}>
        <div class="fa-3x">
          <i class="fas fa-spinner fa-spin"></i>
          {/* <i class="fas fa-circle-notch fa-spin"></i>
          <i class="fas fa-sync fa-spin"></i>
          <i class="fas fa-cog fa-spin"></i>
          <i class="fas fa-spinner fa-pulse"></i>
          <i class="fas fa-stroopwafel fa-spin"></i> */}
        </div>
      </div>
    </React.Fragment>
  );
};
