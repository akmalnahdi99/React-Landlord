import React from "react";
import { ChartDonut, ChartLabel } from "@patternfly/react-charts";

export default function UnitViewingChartDonut({ viewingStats }) {
  var total = viewingStats["past30day"] + viewingStats["today"] + viewingStats["future"] || 0;
  // Handle zero count case
  var dataList = [
    { x: "New", y: viewingStats["future"], fill: "#206491" },
    { x: "In Progress", y: viewingStats["today"], fill: "#fbb45c" },
    { x: "Resolved", y: viewingStats["past30day"], fill: "#329f9d" },
  ];

  // grey color for total=0, and fake circle
  if (total === 0) {
    dataList = [
      { x: "New", y: 1, fill: "#777777" },
      { x: "In Progress", y: 0, fill: "#fbb45c" },
      { x: "Resolved", y: 0, fill: "#329f9d" },
    ];
  }

  return (
    <div style={{ height: "auto", width: "210px", margin: "0 auto" }}>
      <ChartDonut
        constrainToVisibleArea={true}
        data={dataList}
        donutOrientation="top"
        allowTooltip={false}
        labels={() => null}
        padding={{
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
        }}
        title={total.toString()}
        titleComponent={<ChartLabel y={110} style={[{ fontWeight: "600", fontSize: 36 }]} />}
        subTitleComponent={<ChartLabel y={140} style={[{ fontSize: "15px", fontWeight: "400", fill: "#666" }]} />}
        innerRadius={"80"}
        subTitle="total"
        style={{
          data: {
            fill: (d) => d.slice.data.fill,
          },
        }}
      />
    </div>
  );
}
