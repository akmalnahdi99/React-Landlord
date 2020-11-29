//under review
import React from 'react';
import { ChartDonut, ChartLabel } from '@patternfly/react-charts';

const RentalDonut = () => {
  //TASK pls put colors in variables here example : var red = #329f9d
  return (
    <div style={{ height: "auto", width: "210px", margin: "0 auto" }}>
      <ChartDonut
        allowTooltip={false}
        constrainToVisibleArea={true}
        data={[
          { x: "Month 1", y: 8.33, status: "paid" },
          { x: "Month 2", y: 8.33, status: "paid" },
          { x: "Month 3", y: 8.33, status: "paid" },
          { x: "Month 4", y: 8.33, status: "paid" },
          { x: "Month 5", y: 8.33, status: "paid" },
          { x: "Month 6", y: 8.33, status: "paid" },
          { x: "Month 7", y: 8.33, status: "paid" },
          { x: "Month 8", y: 8.33, status: "paid" },
          { x: "Month 9", y: 8.33, status: "paid" },
          { x: "Month 10", y: 8.33, status: "od" },
          { x: "Month 11", y: 8.33, status: "due" },
          { x: "Month 12", y: 8.33, status: "due" },
        ]}
        donutOrientation="top"
        labels={() => null}
        padding={{
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
        }}
        title="9/"
        titleComponent={<ChartLabel y={115} x={100} style={[{ fontWeight: "600", fontSize: 40 }]} />}
        subTitle="12"
        subTitleComponent={<ChartLabel y={130} x={130} style={[{ fontWeight: "400", fontSize: 30 }]} />}
        innerRadius="80"
        style={{
          data: {
            fill: (d) => {
              if (d.slice.data.status === "paid") return "#329f9d";
              if (d.slice.data.status === "due") return "#c2c8c5";
              if (d.slice.data.status === "od") return "#cc2a49";
            },
          },
        }}
      />
    </div>
  );
}

export default RentalDonut
