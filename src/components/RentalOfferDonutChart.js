import React from "react";
import { ChartDonut, ChartLabel } from "@patternfly/react-charts";

export default function RentalOffersDonutChart({ offersData }) {
  var total = offersData["New"] + offersData["Negotiation"] + offersData["Rejected"];
  var newP = offersData["New"] / total;
  var negotiationP = offersData["Negotiation"] / total;
  var rejectedP = offersData["Rejected"] / total;

  return (
    <div style={{ height: "auto", width: "210px", margin: "0 auto" }}>
      <ChartDonut
        constrainToVisibleArea={true}
        data={[
          { x: "New", y: newP, fill: "#206491" },
          { x: "Negotiations", y: negotiationP, fill: "#fbb45c" },
          { x: "Rejected", y: rejectedP, fill: "#cc2a49" },
        ]}
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
        subTitle="Total"
        style={{
          data: {
            fill: (d) => d.slice.data.fill,
          },
        }}
      />
    </div>
  );
}