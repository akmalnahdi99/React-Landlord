// need maintainance
import React from "react";
import ChartistGraph from "react-chartist";
//TASK This file need to be written the hooks way
class LineChart extends React.Component {
  render() {
    var data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      series: [
        [4000, 8000, 10000, 12000, 14000, 18000],
        [3300, 5680, 6950, 7230, 8565, 9835],
        [700, 2320, 3050, 4770, 5435, 8165],
      ],
    };

    var options = {
      fullWidth: true,
      height: "220px",
      chartPadding: {
        right: 30,
        left: 10,
        top: 20,
      },
    };

    var type = "Line";

    return (
      <div>
        <ChartistGraph data={data} options={options} type={type} />
      </div>
    );
  }
}

export default LineChart;
