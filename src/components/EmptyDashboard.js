import React from "react";

export default function EmptyDashboard({ title }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2 className="ibox-content sortable-list connectList agile-list ui-sortable minhigh p-3 font-body" style={{ background: "#fafafb" }}>
        <strong>{title}</strong>
      </h2>
    </div>
  );
}
