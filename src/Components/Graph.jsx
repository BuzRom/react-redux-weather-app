import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from 'react-redux';

import { timeArray } from '../auxiliary/timeArrayForGraphChart';
import { getCelsius, getFahrenheit } from '../auxiliary/measurementConversion';


export default function Graph({ activeValue }) {
  const { weather } = useSelector(state => ({
    weather: state.weather.data
  }));

  const data = canvas => {
    let tempArray = [];
    for (let i = 0; i < 8; i++) {
      let celsius = getCelsius(weather.list[i].main.temp);
      let fahrenheit = getFahrenheit(weather.list[i].main.temp);
      (!activeValue) ? tempArray.push(fahrenheit) : tempArray.push(celsius);
    }

    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 180);
    gradient.addColorStop(0, 'rgba(91, 140, 255, .3)');
    gradient.addColorStop(0.5, 'rgba(255, 244, 244, .3)');

    return {
      labels: timeArray,
      datasets: [{
        backgroundColor: gradient,
        data: tempArray,
        fill: true,
        radius: 0,
        tension: .5,
        borderWidth: .1,
      }],
    };
  }

  const options = {
    plugins: {
      tooltip: {
        enabled: true,
        interaction: {
          intersect: false
        },
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += Math.round(context.parsed.y) + '°';
            }
            return label;
          }
        }
      },
      legend: {
        labels: false,
      }
    },
    layout: {
      padding: {
        top: 5,
      }
    },
    scales: {
      yAxes: {
        ticks: {
          padding: 0,
          color: '#C5C5C5',
          font: {
            size: 8,
          }
        },
        grid: {
          display: false,
          borderColor: 'transparent'
        }
      },
      xAxes: {
        ticks: {
          padding: 0,
          color: '#C5C5C5',
          font: {
            size: 8,
            color: '#C5C5C5'
          }
        },
        grid: {
          display: false,
          borderColor: 'transparent'
        }
      }
    }
  }

  return (
    <div>
      <Line
        data={data}
        options={options}
        width={100}
        height={30}
      />
    </div>
  );
};
