import React from 'react';
import { ChartDonut, ChartLabel } from '@patternfly/react-charts';
// TASK ayham: color of the chart should be like this paid: #329f9d due: #c2c8c5 overdue: #cc2a49
//Task ayham: I cant figure out how to put "/" between 9 and 12 it should be 9/12

const RentalDonut = () => {

  return (
    <div style={{ height: 'auto', width: '210px', margin: '0 auto' }}>
      <ChartDonut
        allowTooltip={false}
        constrainToVisibleArea={true}
        data={[{ x: 'Month 1', y: 8.33, paid: "#329f9d" }, { x: 'Month 2', y: 8.33, paid: "#329f9d" }, { x: 'Month 3', y: 8.33, paid: "#329f9d" }, { x: 'Month 4', y: 8.33, paid: "#329f9d" }, { x: 'Month 5', y: 8.33, paid: "#329f9d" }, { x: 'Month 6', y: 8.33, paid: "#329f9d" }, { x: 'Month 7', y: 8.33, paid: "#329f9d" }, { x: 'Month 8', y: 8.33, paid: "#329f9d" }, { x: 'Month 9', y: 8.33, paid: "#329f9d" }, { x: 'Month 10', y: 8.33, overdue: "#329f9d" }, { x: 'Month 11', y: 8.33, due: "#329f9d" }, { x: 'Month 12', y: 8.33, due: "#329f9d" }]}
        donutOrientation="top"
        labels={() => null}
        padding={{
          bottom: 0,
          left: 0,
          right: 0,
          top: 0
        }}
        title="9"
        titleComponent={<ChartLabel y={115} x={100} style={[{ fontWeight: '600', fontSize: 40 }]} />}
        subTitle="12"
        subTitleComponent={<ChartLabel y={130} x={130} style={[{ fontWeight: '400', fontSize: 30 }]} />}
        innerRadius="80"
        style={{
          data: {
            fill: (d) => d.slice.data.paid,
          },
        }}
      />

    </div>
  )
}

export default RentalDonut
