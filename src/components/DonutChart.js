import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';
//Task to be completed
const DonutChart = () => (
  <div style={{ height: 'auto',  width: '200px' }}>
    <ChartDonut
      ariaDesc="Average number of pets"
      ariaTitle="Donut chart example"
      constrainToVisibleArea={true}
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      donutOrientation="top"
      labels={({ datum }) => `${datum.x}: ${datum.y}%`}
      padding={{
        bottom: 0, // Adjusted to accommodate legend
        left: 20,
        right: 20,
        top: 20
      }}
      title="100"
      width={300}
    />
  </div>
)
export default DonutChart