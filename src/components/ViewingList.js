import React from "react";
import Empty from "./Empty";
import ViewingItem from "./ViewingItem";

export default function ViewingList  ({ title,data }) {
  return (
    <div class="ibox">
      <div class="ibox-content paddingtop minhigh">
        <div class="viewing-timeline">
          <h5 class="text-completedtask text-center">{title}</h5>
          {data.length > 0 ? (
            data.map((item) => {
              return <ViewingItem key={item.id} {...item} />;
            })
          ) : (
            <Empty />
          )}
        </div>
      </div>
    </div>
  );
};
