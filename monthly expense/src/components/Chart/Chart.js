import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {
  const arrayMaximumValue = props.dataPoints.map(dataPoint => dataPoint.value);
  const maxValue = Math.max(...arrayMaximumValue);
  return (
    <div className="chart">
      {props.dataPoints.map(dataPoints => {
        return (
          <ChartBar
            key={dataPoints.label}
            value={dataPoints.value}
            label={dataPoints.label}
            maxValue={maxValue}
          />
        );
      })}
    </div>
  );
};

export default Chart;
