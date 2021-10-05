import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from 'react-redux';

import { timeArray } from '../auxiliary/timeArrayForGraphChart'


export default function Graph() {
  const { weather } = useSelector(state => ({
    weather: state.weather.data
  }));

  const data = canvas => {
    let tempArray = [];
    for (let i = 0; i < 8; i++) {
      tempArray.push(weather.list[i].main.temp);
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
