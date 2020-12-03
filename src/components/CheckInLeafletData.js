import React from "react";

function CheckInLeafletData() {
  return (
    <div class="row justify-content-center">
      <div class="col-md-8 p-0">
        <div class="ibox">
          <div class="ibox-title mt-3">
            <h3>Information Leaflet</h3>
            <hr />
          </div>
          <div class="ibox-content forum-container">
            <h4>Dear Tenant</h4>
            <br />

            <p style={{ "line-height": "1.8" }}>
              
              Doorcares would like to welcome you into our new home. You are required to scan the QR code provided by the agent to acknowledge that you have checked in and have received the check in
              Kit containing the following:
            </p>
            <p>Items</p>
            <div class="forum-item">
              <div class="forum-sub-title">
                <p class="text-newtask ml-2">1. Information Leaflet</p>
                <p class="text-newtask ml-2">2. Keys</p>
                <p class="text-newtask ml-2">3. Access Cards</p>
                <p class="text-newtask ml-2">4. Remote Controls</p>
                <p class="text-newtask ml-2">5. Car Sticker</p>
              </div>
              <br />

              <p style={{ "line-height": "1.8" }}>
               
                After you check in we request you to self check the following item. If you find anything missing from the list then you are required to inform us within days 2 after check in.
              </p>

              <br />
              <div class="forum-sub-title">
                <p class="text-newtask ml-2">1. Inventory List</p>
                <p class="text-newtask ml-2">2. Property Condition</p>
              </div>

              <br />
              <p style={{ "line-height": "1.8" }}>
                
                You can find the above memtioned items in the Doorcares tenant platform under <strong>Property Info Tenancy.</strong> We wish you a plesant stay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckInLeafletData;
