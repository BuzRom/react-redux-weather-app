import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from 'react-redux';

import { timeArray } from '../auxiliary/timeArrayForGraphChart'


export default function Graph() {
  const { weather } = useSelector(state => ({
    weather: state.weather.data
  }));
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let tempArray = [];
    for (let i = 0; i < 8; i++) {
      tempArray.push(weather.list[i].main.temp);
    }

    setChartData({
      labels: timeArray,
      datasets: [{
        data: tempArray,
        label: 'text',
        fill: true,
        backgroundColor: 'rgba(91,140,255,0.3)',
        tension: .5,
        pointStyle: 'line',
        borderWidth: 0.1,
      }],
    })
  };

  React.useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <Line
        data={chartData}
        width={100}
        height={35}
      />
    </div>
  );
};
