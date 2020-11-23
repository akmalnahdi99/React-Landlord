import React from "react";
// import Empty from "./Empty";
// import NotificationItem from "./NotificationItem";

const LandLordPhotoCard = () => {
  var User = {
    id: 0,
    urlThumb: "/imgs/drsharon.jpg",
    verifiedStatus: "verified",
    name: "new Happy Landlord ", //TASK please don't put any real data here source code can be leaked and and cause problems
  };

  return (
    <div class="ibox">
      <div class="ibox-content minhigh450px">
        <div class="profile-sidebar paddingontop">
          <div class="profile-userpic text-center">
            <img src={User.urlThumb} class="rounded-circle boxshadow align-self-center " alt="profile" />
          </div>
          <div class="profile-usertitle mb-5">
            <div class="profile-usertitle-name">{User.name}</div>
            <div class="badge badge-primary">{User.verifiedStatus}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandLordPhotoCard;
