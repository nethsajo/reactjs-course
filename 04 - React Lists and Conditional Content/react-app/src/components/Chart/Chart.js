import React from 'react';
import ChartBar from './ChartBar';

import './Chart.css';

const Chart = function (props) {
  const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);

  const maxValue = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
